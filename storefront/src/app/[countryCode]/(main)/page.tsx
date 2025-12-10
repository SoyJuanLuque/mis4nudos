import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export const metadata: Metadata = {
  title: "Mis 4 Nudos | Macrame Artesanal",
  description:
    "Creaciones artesanales de macrame hechas con amor. Decoracion para el hogar, regalos personalizados y accesorios unicos tejidos a mano en Espana.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // Obtener productos (max 10)
  const { response } = await listProducts({
    pageParam: 1,
    countryCode,
    queryParams: { limit: 10 }
  })

  const products = response.products

  return (
    <>
      <Hero />

      {/* Productos en fila horizontal con scroll */}
      <div className="py-8">
        <div className="content-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#6B5344]">
              Nuestros productos
            </h2>
            <LocalizedClientLink
              href="/store"
              className="text-sm text-[#8B7355] hover:text-[#6B5344] font-medium"
            >
              Ver todos →
            </LocalizedClientLink>
          </div>

          {/* Scroll horizontal */}
          <div className="overflow-x-auto no-scrollbar -mx-6 px-6">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {products.map((product) => (
                <div key={product.id} className="w-[280px] flex-shrink-0">
                  <ProductPreview product={product} region={region} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
