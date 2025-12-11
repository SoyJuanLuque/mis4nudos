import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devoluciones y Cambios | Mis 4 Nudos",
  description:
    "Política de devoluciones y cambios de Mis 4 Nudos. Información sobre productos personalizados y garantía de satisfacción.",
}

export default function ReturnsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="content-container">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#6B5344] text-center mb-4">
            Devoluciones y Cambios
          </h1>
          <p className="text-[#8B7355] text-center text-lg max-w-2xl mx-auto">
            Tu satisfacción es nuestra prioridad
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="content-container py-16">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <section className="mb-12">
            <div className="bg-[#F5F0E8] p-6 rounded-lg">
              <p className="text-[#8B7355]">
                Al ser productos artesanales y en muchos casos personalizados, las devoluciones
                tienen algunas particularidades. Por favor, lee esta información con atención.
              </p>
            </div>
          </section>

          {/* Productos personalizados */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Productos personalizados
            </h2>
            <div className="bg-[#FEF3C7] border border-[#F59E0B] p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="text-[#92400E] font-medium mb-2">
                    Los productos hechos a medida o personalizados no admiten devolución
                  </p>
                  <p className="text-[#92400E] text-sm">
                    Están creados específicamente para ti. Por eso es importante que me cuentes
                    bien qué necesitas antes de confirmar el pedido.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Productos de catálogo */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Productos de catálogo
            </h2>
            <p className="text-[#8B7355] mb-4">
              Para productos estándar (no personalizados), tienes <strong className="text-[#6B5344]">14 días</strong> desde
              la recepción para solicitar devolución si:
            </p>
            <ul className="space-y-2 text-[#8B7355]">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#6B5344] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                El producto no corresponde con lo pedido
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#6B5344] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ha llegado dañado
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#6B5344] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No cumple tus expectativas
              </li>
            </ul>
          </section>

          {/* Cómo hacer una devolución */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-6">
              Cómo hacer una devolución
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#6B5344] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-[#6B5344] font-medium">Contacta conmigo</p>
                  <p className="text-[#8B7355] text-sm">Por email o WhatsApp</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#6B5344] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-[#6B5344] font-medium">Explícame el motivo</p>
                  <p className="text-[#8B7355] text-sm">Y envíame fotos si es necesario</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#6B5344] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-[#6B5344] font-medium">Te indicaré los pasos a seguir</p>
                  <p className="text-[#8B7355] text-sm">Cada caso es diferente</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#6B5344] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-[#6B5344] font-medium">El producto debe estar en su estado original</p>
                  <p className="text-[#8B7355] text-sm">Sin usar y con embalaje si es posible</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gastos de devolución */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Gastos de devolución
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#D1FAE5] p-4 rounded-lg">
                <p className="text-[#065F46] font-medium mb-1">Producto defectuoso o error nuestro</p>
                <p className="text-[#065F46] text-sm">Gastos de envío a cargo de Mis 4 Nudos</p>
              </div>
              <div className="bg-[#F5F0E8] p-4 rounded-lg">
                <p className="text-[#6B5344] font-medium mb-1">Otros motivos</p>
                <p className="text-[#8B7355] text-sm">Gastos de envío a cargo del cliente</p>
              </div>
            </div>
          </section>

          {/* Reembolsos */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Reembolsos
            </h2>
            <p className="text-[#8B7355]">
              Una vez recibido el producto y verificado su estado, el reembolso se realizará
              en un plazo de <strong className="text-[#6B5344]">5-10 días laborables</strong> por
              el mismo método de pago utilizado en la compra.
            </p>
          </section>

          {/* Productos dañados */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Productos dañados
            </h2>
            <div className="bg-[#F5F0E8] p-6 rounded-lg">
              <p className="text-[#8B7355] mb-4">
                Si tu pedido llega dañado, por favor:
              </p>
              <ol className="space-y-2 text-[#8B7355]">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B5344] font-medium">1.</span>
                  Haz fotos del embalaje y del producto
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B5344] font-medium">2.</span>
                  Contáctame en las primeras 24-48 horas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B5344] font-medium">3.</span>
                  Buscaremos la mejor solución (reparación, reemplazo o reembolso)
                </li>
              </ol>
            </div>
          </section>

          {/* Garantía de satisfacción */}
          <section className="mb-12">
            <div className="bg-[#6B5344] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Garantía de satisfacción</h2>
              <p className="opacity-90">
                Mi prioridad es que estés feliz con tu compra. Si algo no va bien,
                hablemos y encontraremos una solución. Cada pieza está hecha con amor
                y quiero que eso se refleje en tu experiencia.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <p className="text-[#8B7355] mb-4">¿Necesitas gestionar una devolución?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/34658989743?text=Hola!%20Necesito%20gestionar%20una%20devolución..."
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hola@mis4nudos.com?subject=Solicitud de devolución"
                className="inline-block bg-[#6B5344] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8B7355] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
