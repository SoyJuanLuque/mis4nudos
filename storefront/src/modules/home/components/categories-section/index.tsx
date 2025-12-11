import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    name: "Hogar",
    description: "Decoración con estilo boho",
    href: "/categories/hogar",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Eventos",
    description: "Bodas, comuniones, bautizos",
    href: "/categories/eventos",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
  },
  {
    name: "Bebé",
    description: "Detalles para los más pequeños",
    href: "/categories/bebe",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Accesorios",
    description: "Llaveros, pulseras y más",
    href: "/categories/accesorios",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#7f5835] mb-4">
            Encuentra lo que buscas
          </h2>
          <p className="text-[#8B7355] text-lg max-w-2xl mx-auto">
            Explora nuestras categorías y descubre piezas únicas para cada momento
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <LocalizedClientLink
              key={category.name}
              href={category.href}
              className="group bg-[#fdf4e5] rounded-xl p-6 md:p-8 text-center hover:bg-[#7f5835] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-[#7f5835] group-hover:text-white mb-4 flex justify-center transition-colors">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#7f5835] group-hover:text-white mb-2 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-[#8B7355] group-hover:text-white/80 transition-colors">
                {category.description}
              </p>
            </LocalizedClientLink>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-2 text-[#7f5835] font-medium hover:text-[#8B7355] transition-colors"
          >
            Ver todos los productos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
