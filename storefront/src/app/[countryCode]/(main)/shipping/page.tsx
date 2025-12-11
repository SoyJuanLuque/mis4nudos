import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Información de Envíos | Mis 4 Nudos",
  description:
    "Información sobre envíos de productos de macramé artesanal. Enviamos a toda España con cuidado especial para que tu pieza llegue perfecta.",
}

export default function ShippingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="content-container">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#6B5344] text-center mb-4">
            Información de Envíos
          </h1>
          <p className="text-[#8B7355] text-center text-lg max-w-2xl mx-auto">
            Cada pieza viaja protegida con todo el cuidado que merece
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="content-container py-16">
        <div className="max-w-3xl mx-auto">

          {/* Envíos en España */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-6">
              Envíos en España
            </h2>
            <div className="bg-[#F5F0E8] rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#6B5344] text-white">
                    <th className="py-3 px-4 text-left">Destino</th>
                    <th className="py-3 px-4 text-left">Tiempo estimado</th>
                    <th className="py-3 px-4 text-left">Coste</th>
                  </tr>
                </thead>
                <tbody className="text-[#8B7355]">
                  <tr className="border-b border-[#E5DDD0]">
                    <td className="py-3 px-4">Málaga y alrededores</td>
                    <td className="py-3 px-4">1-2 días</td>
                    <td className="py-3 px-4">Consultar entrega en mano</td>
                  </tr>
                  <tr className="border-b border-[#E5DDD0]">
                    <td className="py-3 px-4">Península</td>
                    <td className="py-3 px-4">3-5 días laborables</td>
                    <td className="py-3 px-4">Según peso y destino</td>
                  </tr>
                  <tr className="border-b border-[#E5DDD0]">
                    <td className="py-3 px-4">Baleares</td>
                    <td className="py-3 px-4">5-7 días laborables</td>
                    <td className="py-3 px-4">Según peso y destino</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Canarias</td>
                    <td className="py-3 px-4">7-10 días laborables</td>
                    <td className="py-3 px-4">Consultar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#8B7355] text-sm mt-4 italic">
              * Los costes de envío se calculan en el proceso de compra según el peso y destino.
              Para consultas específicas, contacta con el equipo de Mis 4 Nudos.
            </p>
          </section>

          {/* Cómo enviamos */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-6">
              Cómo enviamos
            </h2>
            <p className="text-[#8B7355] mb-4">
              Todas las piezas se embalan con mucho cuidado para que lleguen perfectas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F5F0E8] p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#6B5344] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-[#6B5344] font-medium text-sm">Protección individual</p>
                <p className="text-[#8B7355] text-xs mt-1">Cada pieza envuelta con cuidado</p>
              </div>
              <div className="bg-[#F5F0E8] p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#6B5344] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-[#6B5344] font-medium text-sm">Materiales sostenibles</p>
                <p className="text-[#8B7355] text-xs mt-1">Embalaje responsable</p>
              </div>
              <div className="bg-[#F5F0E8] p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#6B5344] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-[#6B5344] font-medium text-sm">Caja resistente</p>
                <p className="text-[#8B7355] text-xs mt-1">Transporte seguro</p>
              </div>
            </div>
          </section>

          {/* Seguimiento */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Seguimiento de tu pedido
            </h2>
            <p className="text-[#8B7355]">
              Una vez enviado tu pedido, recibirás un email con el número de seguimiento
              para que puedas rastrearlo en todo momento.
            </p>
          </section>

          {/* Entrega en mano */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Entrega en mano
            </h2>
            <div className="bg-[#F5F0E8] p-6 rounded-lg">
              <p className="text-[#8B7355] mb-4">
                Si estás en <strong className="text-[#6B5344]">Málaga o alrededores</strong>,
                podemos coordinar una entrega en mano. Es una forma de ahorrarte los gastos
                de envío y conocernos personalmente.
              </p>
              <a
                href="https://wa.me/34658989743?text=Hola!%20Me%20gustaría%20coordinar%20una%20entrega%20en%20mano..."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#6B5344] font-medium hover:text-[#8B7355]"
              >
                Escríbeme por WhatsApp para acordar punto y hora
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </section>

          {/* Pedidos urgentes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Pedidos urgentes
            </h2>
            <p className="text-[#8B7355]">
              ¿Necesitas tu pedido para una fecha especial? Contáctame y haré todo lo
              posible por ayudarte. En algunos casos puedo ofrecer envío express con
              un coste adicional.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-6">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              <div className="border-b border-[#E5DDD0] pb-4">
                <h3 className="font-semibold text-[#6B5344] mb-2">
                  ¿Puedo cambiar la dirección de envío?
                </h3>
                <p className="text-[#8B7355] text-sm">
                  Sí, siempre que el pedido no haya sido enviado. Contáctame lo antes posible
                  por WhatsApp o email.
                </p>
              </div>
              <div className="border-b border-[#E5DDD0] pb-4">
                <h3 className="font-semibold text-[#6B5344] mb-2">
                  ¿Hacéis envíos internacionales?
                </h3>
                <p className="text-[#8B7355] text-sm">
                  Por el momento solo enviamos a España. Si tienes interés en envío
                  internacional, escríbeme y lo valoramos.
                </p>
              </div>
              <div className="pb-4">
                <h3 className="font-semibold text-[#6B5344] mb-2">
                  ¿Qué pasa si mi pedido llega dañado?
                </h3>
                <p className="text-[#8B7355] text-sm">
                  Aunque embalamos todo con mucho cuidado, si algo llegara dañado, contacta
                  conmigo en las primeras 24-48 horas con fotos del embalaje y producto.
                  Encontraremos la mejor solución.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 bg-[#6B5344] text-white p-6 rounded-lg text-center">
            <p className="mb-4">¿Tienes más dudas sobre el envío?</p>
            <a
              href="https://wa.me/34658989743"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-[#6B5344] px-6 py-2 rounded-lg font-medium hover:bg-[#F5F0E8] transition-colors"
            >
              Consulta con el equipo de Mis 4 Nudos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
