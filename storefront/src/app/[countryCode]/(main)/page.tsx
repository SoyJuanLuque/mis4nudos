import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import CategoriesSection from "@modules/home/components/categories-section"
import AboutSection from "@modules/home/components/about-section"
import OccasionsSection from "@modules/home/components/occasions-section"
import InstagramSection from "@modules/home/components/instagram-section"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export const metadata: Metadata = {
  title: "Mis 4 Nudos | Macramé Artesanal - Regalos con Alma",
  description:
    "Creaciones artesanales de macramé hechas a mano con amor. Regalos personalizados para bodas, comuniones, bautizos y momentos especiales. Envíos a toda España.",
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
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Products */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="content-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#6B5344] mb-2">
                Nuestras creaciones
              </h2>
              <p className="text-[#8B7355]">
                Piezas únicas hechas a mano con dedicación
              </p>
            </div>
            <LocalizedClientLink
              href="/store"
              className="hidden sm:inline-flex items-center gap-2 text-[#6B5344] font-medium hover:text-[#8B7355] transition-colors"
            >
              Ver todos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </LocalizedClientLink>
          </div>

          {/* Products Horizontal Scroll */}
          <div className="relative">
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start"
                >
                  <ProductPreview product={product} region={region} />
                </div>
              ))}
            </div>
            {/* Gradient fade en los bordes para indicar scroll */}
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#F5F0E8] to-transparent pointer-events-none" />
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden text-center mt-8">
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B5344] text-white font-medium rounded-lg hover:bg-[#8B7355] transition-colors"
            >
              Ver todos los productos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Occasions Section */}
      <OccasionsSection />

      {/* Instagram Section */}
      <InstagramSection />

      {/* Trust Section */}
      <section className="py-12 bg-[#6B5344]">
        <div className="content-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm">Hecho a mano</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+50</div>
              <div className="text-white/80 text-sm">Clientes felices</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80 text-sm">Respuesta rápida</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5★</div>
              <div className="text-white/80 text-sm">Valoración media</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="content-container text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#6B5344] mb-4">
            ¿Listo para crear algo único?
          </h2>
          <p className="text-[#8B7355] text-lg mb-8 max-w-2xl mx-auto">
            Cada pieza está hecha con amor y dedicación. Cuéntame tu idea y
            la convertimos en realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#6B5344] text-white font-medium rounded-lg hover:bg-[#8B7355] transition-colors"
            >
              Explorar colección
            </LocalizedClientLink>
            <a
              href="https://wa.me/34658989743?text=Hola!%20Me%20gustaría%20hacer%20un%20pedido%20personalizado..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#6B5344] text-[#6B5344] font-medium rounded-lg hover:bg-[#6B5344] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
