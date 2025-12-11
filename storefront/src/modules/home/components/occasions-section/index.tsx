import LocalizedClientLink from "@modules/common/components/localized-client-link"

const occasions = [
  {
    title: "Bodas",
    description: "Detalles únicos para invitados y decoración que enamora",
    emoji: "💒",
    color: "from-pink-50 to-rose-50",
    borderColor: "border-rose-200",
  },
  {
    title: "Comuniones",
    description: "Recuerdos personalizados para un día especial",
    emoji: "✨",
    color: "from-blue-50 to-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    title: "Baby Shower",
    description: "Decoración y regalos para dar la bienvenida al bebé",
    emoji: "👶",
    color: "from-yellow-50 to-amber-50",
    borderColor: "border-amber-200",
  },
  {
    title: "Día de la Madre",
    description: "Regalos con alma para la persona más especial",
    emoji: "💐",
    color: "from-purple-50 to-fuchsia-50",
    borderColor: "border-fuchsia-200",
  },
  {
    title: "San Valentín",
    description: "Detalles románticos hechos con amor",
    emoji: "❤️",
    color: "from-red-50 to-pink-50",
    borderColor: "border-pink-200",
  },
  {
    title: "Navidad",
    description: "Decoración artesanal para unas fiestas únicas",
    emoji: "🎄",
    color: "from-green-50 to-emerald-50",
    borderColor: "border-emerald-200",
  },
]

const OccasionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#7f5835]/10 text-[#7f5835] text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Para cada momento
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#7f5835] mb-4">
            ¿Qué celebras?
          </h2>
          <p className="text-[#8B7355] text-lg max-w-2xl mx-auto">
            Creamos piezas personalizadas para tus ocasiones más especiales
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {occasions.map((occasion) => (
            <div
              key={occasion.title}
              className={`bg-gradient-to-br ${occasion.color} border ${occasion.borderColor} rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group`}
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                {occasion.emoji}
              </span>
              <h3 className="text-lg font-semibold text-[#7f5835] mb-2">
                {occasion.title}
              </h3>
              <p className="text-sm text-[#8B7355]">
                {occasion.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-[#fdf4e5] rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[#7f5835] mb-3">
              ¿Tienes un evento especial?
            </h3>
            <p className="text-[#8B7355] mb-6">
              Cuéntame qué necesitas y crearemos juntos algo único para tu celebración
            </p>
            <a
              href="https://wa.me/34658989743?text=Hola!%20Tengo%20un%20evento%20especial%20y%20me%20gustaría%20hacer%20un%20pedido%20personalizado..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#128C7E] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OccasionsSection
