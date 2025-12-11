import LocalizedClientLink from "@modules/common/components/localized-client-link"

const AboutSection = () => {
  return (
    <section className="py-16 bg-[#F5F0E8]">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-[#6B5344]/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/about-video.mp4" type="video/mp4" />
              {/* Fallback si el video no carga */}
              Tu navegador no soporta videos.
            </video>
            {/* Overlay with quote */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#6B5344]/90 to-transparent p-6">
              <p className="text-white text-lg italic">
                "Cada nudo es una caricia, cada pieza una historia"
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-[#6B5344]/10 text-[#6B5344] text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Nuestra Historia
            </span>

            <h2 className="text-3xl md:text-4xl font-light text-[#6B5344] mb-6 leading-tight">
              Artesanía que nace
              <span className="block font-semibold">del corazón</span>
            </h2>

            <div className="space-y-4 text-[#8B7355] mb-8">
              <p>
                Soy Lidia, y el macramé llegó a mi vida como una forma de meditación
                activa. Lo que empezó como una pasión personal, se convirtió en mi
                forma de conectar con personas que, como tú, buscan algo especial.
              </p>
              <p>
                Cada pieza que creo está hecha con mimo, pensando en el momento
                que va a acompañar: una boda, el nacimiento de un bebé, un regalo
                que dice "pensé en ti".
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6B5344] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-[#6B5344] font-medium">Hecho con amor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6B5344] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-[#6B5344] font-medium">100% Artesanal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6B5344] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-[#6B5344] font-medium">Sostenible</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6B5344] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="text-[#6B5344] font-medium">Personalizable</span>
              </div>
            </div>

            <LocalizedClientLink
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B5344] text-white font-medium rounded-lg hover:bg-[#8B7355] transition-colors"
            >
              Conoce mi historia completa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
