import { CreateInventoryLevelInput, ExecArgs } from "@medusajs/framework/types";
import {
  ContainerRegistrationKeys,
  Modules,
} from "@medusajs/framework/utils";
import {
  createApiKeysWorkflow,
  createInventoryLevelsWorkflow,
  createRegionsWorkflow,
  createSalesChannelsWorkflow,
  createShippingOptionsWorkflow,
  createShippingProfilesWorkflow,
  createStockLocationsWorkflow,
  createTaxRegionsWorkflow,
  linkSalesChannelsToApiKeyWorkflow,
  linkSalesChannelsToStockLocationWorkflow,
  updateStoresStep,
  updateStoresWorkflow,
} from "@medusajs/medusa/core-flows";
import {
  createWorkflow,
  transform,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";

const updateStoreCurrencies = createWorkflow(
  "update-store-currencies-mis4nudos",
  (input: {
    supported_currencies: { currency_code: string; is_default?: boolean }[];
    store_id: string;
  }) => {
    const normalizedInput = transform({ input }, (data) => {
      return {
        selector: { id: data.input.store_id },
        update: {
          supported_currencies: data.input.supported_currencies.map(
            (currency) => {
              return {
                currency_code: currency.currency_code,
                is_default: currency.is_default ?? false,
              };
            }
          ),
        },
      };
    });

    const stores = updateStoresStep(normalizedInput);

    return new WorkflowResponse(stores);
  }
);

export default async function seedMis4Nudos({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const link = container.resolve(ContainerRegistrationKeys.LINK);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);
  const fulfillmentModuleService = container.resolve(Modules.FULFILLMENT);
  const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL);
  const storeModuleService = container.resolve(Modules.STORE);

  logger.info("🎀 Iniciando seed de Mis 4 Nudos...");

  // Solo España para empezar
  const countries = ["es"];

  logger.info("📦 Configurando tienda...");
  const [store] = await storeModuleService.listStores();

  // Actualizar nombre de la tienda
  await storeModuleService.updateStores(store.id, {
    name: "Mis 4 Nudos",
  });

  let defaultSalesChannel = await salesChannelModuleService.listSalesChannels({
    name: "Mis 4 Nudos Web",
  });

  if (!defaultSalesChannel.length) {
    const { result: salesChannelResult } = await createSalesChannelsWorkflow(
      container
    ).run({
      input: {
        salesChannelsData: [
          {
            name: "Mis 4 Nudos Web",
            description: "Canal de ventas de la web mis4nudos.com",
          },
        ],
      },
    });
    defaultSalesChannel = salesChannelResult;
  }

  // Configurar EUR como moneda principal
  await updateStoreCurrencies(container).run({
    input: {
      store_id: store.id,
      supported_currencies: [
        {
          currency_code: "eur",
          is_default: true,
        },
      ],
    },
  });

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        default_sales_channel_id: defaultSalesChannel[0].id,
      },
    },
  });

  logger.info("🌍 Configurando región España...");
  const { result: regionResult } = await createRegionsWorkflow(container).run({
    input: {
      regions: [
        {
          name: "España",
          currency_code: "eur",
          countries,
          // pp_system_default es el proveedor de pago manual que viene con Medusa
          payment_providers: ["pp_system_default"],
        },
      ],
    },
  });
  const region = regionResult[0];
  logger.info("✅ Región España creada.");

  logger.info("💰 Configurando impuestos...");
  await createTaxRegionsWorkflow(container).run({
    input: countries.map((country_code) => ({
      country_code,
      default_tax_rate: {
        rate: 21, // IVA España 21%
        name: "IVA",
        code: "iva-es",
      },
      provider_id: "tp_system",
    })),
  });
  logger.info("✅ Impuestos configurados (IVA 21%).");

  logger.info("📍 Configurando ubicación: Rincón de la Victoria, Málaga...");
  const { result: stockLocationResult } = await createStockLocationsWorkflow(
    container
  ).run({
    input: {
      locations: [
        {
          name: "Mis 4 Nudos - Rincón de la Victoria",
          address: {
            address_1: "Rincón de la Victoria",
            city: "Málaga",
            country_code: "ES",
            postal_code: "29730",
            province: "Málaga",
          },
        },
      ],
    },
  });
  const stockLocation = stockLocationResult[0];

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        default_location_id: stockLocation.id,
      },
    },
  });

  // Vincular la ubicación con el proveedor de fulfillment manual
  await link.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_provider_id: "manual_manual",
    },
  });
  logger.info("✅ Ubicación configurada.");

  logger.info("🚚 Configurando envío MRW...");
  const shippingProfiles = await fulfillmentModuleService.listShippingProfiles({
    type: "default",
  });
  let shippingProfile = shippingProfiles.length ? shippingProfiles[0] : null;

  if (!shippingProfile) {
    const { result: shippingProfileResult } =
      await createShippingProfilesWorkflow(container).run({
        input: {
          data: [
            {
              name: "Perfil de Envío Mis 4 Nudos",
              type: "default",
            },
          ],
        },
      });
    shippingProfile = shippingProfileResult[0];
  }

  // Crear zona de servicio para España
  const fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
    name: "Envíos Mis 4 Nudos - España",
    type: "shipping",
    service_zones: [
      {
        name: "España Peninsular",
        geo_zones: [
          {
            country_code: "es",
            type: "country",
          },
        ],
      },
    ],
  });

  await link.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_set_id: fulfillmentSet.id,
    },
  });

  // Crear opciones de envío MRW
  await createShippingOptionsWorkflow(container).run({
    input: [
      {
        name: "MRW Envío Estándar",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: fulfillmentSet.service_zones[0].id,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Estándar",
          description: "Entrega en 2-4 días laborables",
          code: "mrw-standard",
        },
        prices: [
          {
            currency_code: "eur",
            amount: 495, // 4.95€ en céntimos
          },
          {
            region_id: region.id,
            amount: 495,
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
      {
        name: "MRW Envío Express",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: fulfillmentSet.service_zones[0].id,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Express",
          description: "Entrega en 24-48 horas",
          code: "mrw-express",
        },
        prices: [
          {
            currency_code: "eur",
            amount: 795, // 7.95€ en céntimos
          },
          {
            region_id: region.id,
            amount: 795,
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
      {
        name: "Recogida en Taller",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: fulfillmentSet.service_zones[0].id,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Recogida",
          description: "Recoge tu pedido en Rincón de la Victoria (GRATIS)",
          code: "pickup",
        },
        prices: [
          {
            currency_code: "eur",
            amount: 0, // Gratis
          },
          {
            region_id: region.id,
            amount: 0,
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
    ],
  });
  logger.info("✅ Opciones de envío MRW configuradas.");

  // Vincular canal de ventas con ubicación
  await linkSalesChannelsToStockLocationWorkflow(container).run({
    input: {
      id: stockLocation.id,
      add: [defaultSalesChannel[0].id],
    },
  });
  logger.info("✅ Canal de ventas vinculado.");

  logger.info("🔑 Creando API Key...");
  const { result: publishableApiKeyResult } = await createApiKeysWorkflow(
    container
  ).run({
    input: {
      api_keys: [
        {
          title: "Mis 4 Nudos Webshop",
          type: "publishable",
          created_by: "",
        },
      ],
    },
  });
  const publishableApiKey = publishableApiKeyResult[0];

  await linkSalesChannelsToApiKeyWorkflow(container).run({
    input: {
      id: publishableApiKey.id,
      add: [defaultSalesChannel[0].id],
    },
  });
  logger.info("✅ API Key creada.");

  logger.info("📊 Configurando niveles de inventario...");
  const { data: inventoryItems } = await query.graph({
    entity: "inventory_item",
    fields: ["id"],
  });

  if (inventoryItems.length > 0) {
    const inventoryLevels: CreateInventoryLevelInput[] = [];
    for (const inventoryItem of inventoryItems) {
      const inventoryLevel = {
        location_id: stockLocation.id,
        stocked_quantity: 100,
        inventory_item_id: inventoryItem.id,
      };
      inventoryLevels.push(inventoryLevel);
    }

    await createInventoryLevelsWorkflow(container).run({
      input: {
        inventory_levels: inventoryLevels,
      },
    });
    logger.info("✅ Niveles de inventario configurados.");
  }

  logger.info("=".repeat(50));
  logger.info("🎉 ¡Seed de Mis 4 Nudos completado!");
  logger.info("=".repeat(50));
  logger.info("");
  logger.info("📋 Resumen de configuración:");
  logger.info(`   - Tienda: Mis 4 Nudos`);
  logger.info(`   - Región: España (EUR)`);
  logger.info(`   - IVA: 21%`);
  logger.info(`   - Ubicación: Rincón de la Victoria, Málaga`);
  logger.info(`   - Envío: MRW Estándar (4.95€), Express (7.95€), Recogida (Gratis)`);
  logger.info(`   - Pago: Manual (Efectivo/Transferencia)`);
  logger.info("");
  logger.info(`🔑 API Key Publishable: ${publishableApiKey.token}`);
  logger.info("   (Usa esta key en NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)");
  logger.info("");
}
