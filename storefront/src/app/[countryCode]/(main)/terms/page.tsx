import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Mis 4 Nudos",
  description:
    "Términos y condiciones de uso y compra en Mis 4 Nudos. Información legal sobre productos artesanales de macramé.",
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="content-container">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#6B5344] text-center mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-[#8B7355] text-center text-lg max-w-2xl mx-auto">
            Condiciones de uso y compra
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="content-container py-16">
        <div className="max-w-3xl mx-auto">

          <p className="text-[#8B7355] text-sm mb-8">
            Última actualización: Diciembre 2024
          </p>

          {/* 1. Información general */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              1. Información general
            </h2>
            <div className="bg-[#F5F0E8] p-4 rounded-lg text-[#8B7355]">
              <p><strong className="text-[#6B5344]">Titular:</strong> Lidia Gómez García</p>
              <p><strong className="text-[#6B5344]">Domicilio:</strong> Rincón de la Victoria, Málaga</p>
              <p><strong className="text-[#6B5344]">Email:</strong> hola@mis4nudos.com</p>
            </div>
          </section>

          {/* 2. Objeto */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              2. Objeto
            </h2>
            <p className="text-[#8B7355]">
              Estos términos regulan el uso de la web mis4nudos.com y la compra de
              productos artesanales de macramé.
            </p>
          </section>

          {/* 3. Productos */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              3. Productos
            </h2>

            <h3 className="text-lg font-medium text-[#6B5344] mb-2">
              3.1 Naturaleza artesanal
            </h3>
            <div className="bg-[#FEF3C7] border border-[#F59E0B] p-4 rounded-lg mb-4">
              <p className="text-[#92400E] text-sm">
                Todos nuestros productos son <strong>hechos a mano</strong>. Esto significa que
                pueden existir pequeñas variaciones entre piezas, lo cual forma parte de su
                encanto y autenticidad.
              </p>
            </div>

            <h3 className="text-lg font-medium text-[#6B5344] mb-2">
              3.2 Colores y materiales
            </h3>
            <p className="text-[#8B7355] mb-4">
              Los colores mostrados en las fotografías pueden variar ligeramente
              respecto al producto real debido a la configuración de pantallas.
            </p>

            <h3 className="text-lg font-medium text-[#6B5344] mb-2">
              3.3 Productos personalizados
            </h3>
            <p className="text-[#8B7355]">
              Los productos personalizados se realizan según las indicaciones del
              cliente. Es responsabilidad del cliente verificar que los datos
              proporcionados son correctos antes de confirmar el pedido.
            </p>
          </section>

          {/* 4. Proceso de compra */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              4. Proceso de compra
            </h2>
            <ol className="text-[#8B7355] space-y-2">
              <li className="flex gap-2">
                <span className="text-[#6B5344] font-medium">1.</span>
                Selecciona los productos
              </li>
              <li className="flex gap-2">
                <span className="text-[#6B5344] font-medium">2.</span>
                Añádelos al carrito
              </li>
              <li className="flex gap-2">
                <span className="text-[#6B5344] font-medium">3.</span>
                Completa tus datos de envío
              </li>
              <li className="flex gap-2">
                <span className="text-[#6B5344] font-medium">4.</span>
                Realiza el pago
              </li>
              <li className="flex gap-2">
                <span className="text-[#6B5344] font-medium">5.</span>
                Recibirás confirmación por email
              </li>
            </ol>
          </section>

          {/* 5. Precios y pagos */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              5. Precios y pagos
            </h2>
            <ul className="text-[#8B7355] space-y-1">
              <li>• Los precios incluyen IVA</li>
              <li>• Los gastos de envío se calculan según destino</li>
              <li>• El pago se procesa de forma segura</li>
            </ul>
          </section>

          {/* 6. Envíos */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              6. Envíos
            </h2>
            <p className="text-[#8B7355]">
              Consulta nuestra página de{" "}
              <LocalizedClientLink href="/shipping" className="text-[#6B5344] underline">
                Información de Envíos
              </LocalizedClientLink>{" "}
              para detalles completos sobre plazos, costes y zonas de entrega.
            </p>
          </section>

          {/* 7. Devoluciones */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              7. Devoluciones
            </h2>
            <p className="text-[#8B7355]">
              Consulta nuestra página de{" "}
              <LocalizedClientLink href="/returns" className="text-[#6B5344] underline">
                Devoluciones y Cambios
              </LocalizedClientLink>{" "}
              para conocer nuestra política de devoluciones.
            </p>
          </section>

          {/* 8. Propiedad intelectual */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              8. Propiedad intelectual
            </h2>
            <p className="text-[#8B7355] mb-4">
              Todos los contenidos de esta web (textos, imágenes, logos, diseños) son
              propiedad de Mis 4 Nudos y están protegidos por derechos de autor.
            </p>
            <p className="text-[#8B7355] mb-2">No está permitido:</p>
            <ul className="text-[#8B7355] space-y-1">
              <li>• Copiar o reproducir contenidos sin autorización</li>
              <li>• Usar imágenes de productos para fines comerciales</li>
              <li>• Utilizar la marca sin permiso</li>
            </ul>
          </section>

          {/* 9. Responsabilidad */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              9. Responsabilidad
            </h2>
            <p className="text-[#8B7355] mb-2">Mis 4 Nudos no se hace responsable de:</p>
            <ul className="text-[#8B7355] space-y-1">
              <li>• Uso indebido de los productos</li>
              <li>• Daños derivados de no seguir las instrucciones de cuidado</li>
              <li>• Retrasos de envío por causas ajenas (huelgas, condiciones climáticas, etc.)</li>
            </ul>
          </section>

          {/* 10. Legislación */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              10. Legislación aplicable
            </h2>
            <p className="text-[#8B7355]">
              Estos términos se rigen por la legislación española. Para cualquier
              controversia, las partes se someten a los juzgados de Málaga.
            </p>
          </section>

          {/* 11. Contacto */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              11. Contacto
            </h2>
            <p className="text-[#8B7355]">
              Para cualquier consulta sobre estos términos, escríbenos a:{" "}
              <a href="mailto:hola@mis4nudos.com" className="text-[#6B5344] underline">
                hola@mis4nudos.com
              </a>
            </p>
          </section>

          {/* Aceptación */}
          <div className="bg-[#F5F0E8] p-6 rounded-lg text-center">
            <p className="text-[#8B7355] text-sm">
              Al realizar una compra en mis4nudos.com, aceptas estos términos y condiciones.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
