import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | Mis 4 Nudos",
  description:
    "Política de privacidad de Mis 4 Nudos. Información sobre cómo recogemos, usamos y protegemos tus datos personales.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="content-container">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#6B5344] text-center mb-4">
            Política de Privacidad
          </h1>
          <p className="text-[#8B7355] text-center text-lg max-w-2xl mx-auto">
            Tu privacidad es importante para nosotros
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="content-container py-16">
        <div className="max-w-3xl mx-auto prose prose-brown">

          <p className="text-[#8B7355] text-sm mb-8">
            Última actualización: Diciembre 2024
          </p>

          <p className="text-[#8B7355] mb-8">
            En Mis 4 Nudos, tu privacidad es importante. Esta política explica cómo
            recogemos, usamos y protegemos tus datos personales.
          </p>

          {/* Responsable */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              1. Responsable del tratamiento
            </h2>
            <div className="bg-[#F5F0E8] p-4 rounded-lg text-[#8B7355]">
              <p><strong className="text-[#6B5344]">Titular:</strong> Lidia Gómez García</p>
              <p><strong className="text-[#6B5344]">Domicilio:</strong> Rincón de la Victoria, Málaga</p>
              <p><strong className="text-[#6B5344]">Email:</strong> hola@mis4nudos.com</p>
            </div>
          </section>

          {/* Datos que recogemos */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              2. Datos que recogemos
            </h2>

            <h3 className="text-lg font-medium text-[#6B5344] mb-2">
              Cuando realizas una compra:
            </h3>
            <ul className="text-[#8B7355] mb-4 space-y-1">
              <li>• Nombre y apellidos</li>
              <li>• Dirección de envío y facturación</li>
              <li>• Email</li>
              <li>• Teléfono</li>
              <li>• Datos de pago (procesados de forma segura por nuestra pasarela de pagos)</li>
            </ul>

            <h3 className="text-lg font-medium text-[#6B5344] mb-2">
              Cuando contactas con nosotros:
            </h3>
            <ul className="text-[#8B7355] mb-4 space-y-1">
              <li>• Nombre</li>
              <li>• Email</li>
              <li>• Mensaje enviado</li>
            </ul>

            <h3 className="text-lg font-medium text-[#6B5344] mb-2">
              Navegación en la web:
            </h3>
            <ul className="text-[#8B7355] space-y-1">
              <li>• Cookies técnicas y de análisis</li>
            </ul>
          </section>

          {/* Finalidad */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p className="text-[#8B7355] mb-2">Usamos tus datos para:</p>
            <ul className="text-[#8B7355] space-y-1">
              <li>• Procesar y enviar tus pedidos</li>
              <li>• Comunicarnos contigo sobre tu pedido</li>
              <li>• Enviarte información comercial (solo si das tu consentimiento)</li>
              <li>• Mejorar nuestros servicios</li>
              <li>• Cumplir obligaciones legales</li>
            </ul>
          </section>

          {/* Base legal */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              4. Base legal
            </h2>
            <ul className="text-[#8B7355] space-y-2">
              <li><strong className="text-[#6B5344]">Ejecución de contrato:</strong> Para procesar tus compras</li>
              <li><strong className="text-[#6B5344]">Consentimiento:</strong> Para comunicaciones comerciales</li>
              <li><strong className="text-[#6B5344]">Interés legítimo:</strong> Para mejorar nuestros servicios</li>
              <li><strong className="text-[#6B5344]">Obligación legal:</strong> Para cumplir con la normativa fiscal</li>
            </ul>
          </section>

          {/* Conservación */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              5. Conservación de datos
            </h2>
            <ul className="text-[#8B7355] space-y-2">
              <li><strong className="text-[#6B5344]">Datos de compra:</strong> Durante la relación comercial y los años legalmente requeridos</li>
              <li><strong className="text-[#6B5344]">Datos de contacto:</strong> Hasta que solicites su supresión</li>
              <li><strong className="text-[#6B5344]">Cookies:</strong> Según su tipo (ver Política de Cookies)</li>
            </ul>
          </section>

          {/* Derechos */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              6. Tus derechos
            </h2>
            <p className="text-[#8B7355] mb-4">Puedes ejercer tus derechos de:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[#F5F0E8] p-3 rounded">
                <p className="text-[#6B5344] font-medium text-sm">Acceso</p>
                <p className="text-[#8B7355] text-xs">Saber qué datos tenemos sobre ti</p>
              </div>
              <div className="bg-[#F5F0E8] p-3 rounded">
                <p className="text-[#6B5344] font-medium text-sm">Rectificación</p>
                <p className="text-[#8B7355] text-xs">Corregir datos incorrectos</p>
              </div>
              <div className="bg-[#F5F0E8] p-3 rounded">
                <p className="text-[#6B5344] font-medium text-sm">Supresión</p>
                <p className="text-[#8B7355] text-xs">Eliminar tus datos</p>
              </div>
              <div className="bg-[#F5F0E8] p-3 rounded">
                <p className="text-[#6B5344] font-medium text-sm">Oposición</p>
                <p className="text-[#8B7355] text-xs">Oponerte a ciertos tratamientos</p>
              </div>
              <div className="bg-[#F5F0E8] p-3 rounded">
                <p className="text-[#6B5344] font-medium text-sm">Portabilidad</p>
                <p className="text-[#8B7355] text-xs">Recibir tus datos en formato digital</p>
              </div>
              <div className="bg-[#F5F0E8] p-3 rounded">
                <p className="text-[#6B5344] font-medium text-sm">Limitación</p>
                <p className="text-[#8B7355] text-xs">Limitar el uso de tus datos</p>
              </div>
            </div>
            <p className="text-[#8B7355] mt-4 text-sm">
              Para ejercer estos derechos, escríbenos a <a href="mailto:hola@mis4nudos.com" className="text-[#6B5344] underline">hola@mis4nudos.com</a>
            </p>
          </section>

          {/* Seguridad */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              7. Seguridad
            </h2>
            <p className="text-[#8B7355]">
              Aplicamos medidas técnicas y organizativas para proteger tus datos
              contra acceso no autorizado, pérdida o alteración.
            </p>
          </section>

          {/* Terceros */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              8. Terceros
            </h2>
            <p className="text-[#8B7355] mb-2">Solo compartimos tus datos con:</p>
            <ul className="text-[#8B7355] space-y-1">
              <li>• Empresas de transporte (para enviar tu pedido)</li>
              <li>• Pasarela de pagos (para procesar el pago de forma segura)</li>
              <li>• Servicios técnicos necesarios para el funcionamiento de la web</li>
            </ul>
          </section>

          {/* Cambios */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              9. Cambios en esta política
            </h2>
            <p className="text-[#8B7355]">
              Nos reservamos el derecho de actualizar esta política. Te notificaremos
              de cambios significativos a través de la web o por email.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-xl font-semibold text-[#6B5344] mb-4">
              10. Contacto
            </h2>
            <p className="text-[#8B7355]">
              Para cualquier consulta sobre privacidad, escríbenos a:{" "}
              <a href="mailto:hola@mis4nudos.com" className="text-[#6B5344] underline">
                hola@mis4nudos.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
