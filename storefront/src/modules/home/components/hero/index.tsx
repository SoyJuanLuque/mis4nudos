import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Artesanía Macramé"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0E8]/95 via-[#F5F0E8]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="content-container">
          <div className="max-w-xl">
            <span className="text-[#8B7355] text-sm font-medium tracking-widest uppercase mb-4 block">
              Hecho a mano con amor
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#6B5344] leading-tight mb-6">
              Arte en cada
              <span className="block font-medium">nudo</span>
            </h1>

            <p className="text-[#8B7355] text-lg mb-8 leading-relaxed">
              Creaciones únicas de macramé artesanal. Decoración personalizada
              para tu hogar y regalos especiales hechos con dedicación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#8B7355] text-white font-medium rounded-none hover:bg-[#6B5344] transition-colors"
              >
                Ver Colección
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#8B7355] text-[#8B7355] font-medium rounded-none hover:bg-[#8B7355] hover:text-white transition-colors"
              >
                Nuestra Historia
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-[#8B7355]">
          <span className="text-xs tracking-widest mb-2">DESCUBRE MÁS</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero
