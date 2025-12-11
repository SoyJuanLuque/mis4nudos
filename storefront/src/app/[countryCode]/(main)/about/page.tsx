import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Mis 4 Nudos",
  description:
    "Conoce la historia de Mis 4 Nudos. Creaciones artesanales de macramé hechas a mano con amor y dedicación en Málaga, España.",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="content-container">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#6B5344] text-center mb-4">
            Nuestra Historia
          </h1>
          <p className="text-[#8B7355] text-center text-lg max-w-2xl mx-auto">
            Creando lazos, tejiendo emociones
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="content-container py-16">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="mb-12">
            <p className="text-lg text-[#6B5344] leading-relaxed mb-6">
              <strong>Mis 4 Nudos</strong> nace del amor por la artesanía y la necesidad de crear
              con las manos para expresar belleza, conexión y sostenibilidad.
            </p>
          </div>

          {/* Cómo empezó */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Cómo empezó todo
            </h2>
            <p className="text-[#8B7355] leading-relaxed mb-4">
              Siempre fui una persona creativa y autodidacta, apasionada por las manualidades
              y el arte. El macramé llegó a mi vida como una forma de meditación activa y se
              convirtió en una vía de expresión.
            </p>
            <p className="text-[#8B7355] leading-relaxed mb-4">
              Empecé haciendo piezas para mí y para regalar, y poco a poco comenzaron a
              llegar pedidos de personas cercanas. Vi en esta actividad una oportunidad para
              transformar mi pasión en un modelo de negocio, con el que además pudiera
              aportar a un consumo más consciente y personalizado.
            </p>
          </div>

          {/* Lo que nos mueve */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-4">
              Lo que nos mueve
            </h2>
            <p className="text-[#8B7355] leading-relaxed mb-4">
              Diseño y elaboro regalos personalizados y elementos decorativos artesanales
              para eventos y fechas especiales: Día de la Madre, San Valentín, bodas,
              comuniones, baby showers...
            </p>
            <p className="text-[#8B7355] leading-relaxed">
              Utilizo técnicas de macramé combinadas con materiales reciclados —maderas
              flotantes, textiles, frascos de vidrio— para dar vida a piezas únicas que no
              solo decoran, sino que transmiten emociones y momentos.
            </p>
          </div>

          {/* Valores */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#6B5344] mb-6">
              Nuestros valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5F0E8] p-6 rounded-lg">
                <h3 className="font-semibold text-[#6B5344] mb-2">Pasión</h3>
                <p className="text-[#8B7355] text-sm">
                  Hacer de mi vocación un modo de vida y transmitirlo en cada creación.
                </p>
              </div>
              <div className="bg-[#F5F0E8] p-6 rounded-lg">
                <h3 className="font-semibold text-[#6B5344] mb-2">Artesanía</h3>
                <p className="text-[#8B7355] text-sm">
                  Trabajar con las manos, desde el corazón, respetando el proceso y el detalle.
                </p>
              </div>
              <div className="bg-[#F5F0E8] p-6 rounded-lg">
                <h3 className="font-semibold text-[#6B5344] mb-2">Emoción</h3>
                <p className="text-[#8B7355] text-sm">
                  Cada pieza cuenta una historia, celebra un vínculo, guarda un recuerdo.
                </p>
              </div>
              <div className="bg-[#F5F0E8] p-6 rounded-lg">
                <h3 className="font-semibold text-[#6B5344] mb-2">Personalización</h3>
                <p className="text-[#8B7355] text-sm">
                  Cada cliente es único, cada regalo también. Escucho, adapto y cuido cada detalle.
                </p>
              </div>
              <div className="bg-[#F5F0E8] p-6 rounded-lg md:col-span-2">
                <h3 className="font-semibold text-[#6B5344] mb-2">Sostenibilidad</h3>
                <p className="text-[#8B7355] text-sm">
                  Respeto profundo por el medio ambiente. Uso de materiales naturales y reciclados.
                </p>
              </div>
            </div>
          </div>

          {/* Propósito */}
          <div className="bg-[#6B5344] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Mi propósito</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Inspirar a las personas a regalar con alma y celebrar los momentos importantes
              de la vida con piezas hechas a mano que conectan con el corazón.
            </p>
            <p className="mt-4 opacity-80">
              Mi motivación principal es poder vivir de lo que amo hacer, contribuir con un
              producto hecho con corazón y ser parte de los momentos más especiales de las
              personas a través de mis creaciones.
            </p>
          </div>

          {/* Firma */}
          <div className="mt-12 text-center">
            <p className="text-[#8B7355] italic">
              — Lidia, creadora de Mis 4 Nudos
            </p>
            <p className="text-[#8B7355] text-sm mt-2">
              Rincón de la Victoria, Málaga
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
