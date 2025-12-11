import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Artesanía Macramé - Regalos con alma"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fdf4e5]/95 via-[#fdf4e5]/80 to-[#fdf4e5]/40 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-16 md:py-20">
        <div className="content-container">
          <div className="max-w-xl">
            {/* Badge */}
            <span className="inline-block bg-[#7f5835]/10 text-[#7f5835] text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Artesanía con alma
            </span>

            {/* Main headline - emotional */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#7f5835] leading-tight mb-4">
              Regalos que
              <span className="block font-semibold">emocionan</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#8B7355] mb-4 font-light">
              Piezas únicas de macramé hechas a mano
            </p>

            {/* Description - value proposition */}
            <p className="text-[#8B7355] text-base md:text-lg mb-8 leading-relaxed">
              Creamos detalles personalizados para tus momentos especiales:
              bodas, comuniones, bautizos, Día de la Madre...
              Cada pieza cuenta una historia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#7f5835] text-white font-medium rounded-lg hover:bg-[#8B7355] transition-colors shadow-md"
              >
                Ver Colección
              </LocalizedClientLink>

              <a
                href="https://wa.me/34658989743?text=Hola!%20Me%20gustaría%20hacer%20un%20pedido%20personalizado..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#128C7E] transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir Personalizado
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-[#E5DDD0]">
              <div className="flex items-center gap-2 text-sm text-[#8B7355]">
                <svg className="w-5 h-5 text-[#7f5835]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Hecho a mano
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8B7355]">
                <svg className="w-5 h-5 text-[#7f5835]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Personalizable
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8B7355]">
                <svg className="w-5 h-5 text-[#7f5835]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Entrega rápida
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
