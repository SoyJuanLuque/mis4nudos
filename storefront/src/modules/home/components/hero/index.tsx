import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative h-[50vh] min-h-[400px] max-h-[500px] w-full overflow-hidden">
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

    </div>
  )
}

export default Hero
