import { Metadata } from "next"
import { Suspense } from "react"

import Hero from "@modules/home/components/hero"
import { getRegion } from "@lib/data/regions"
import { listCategories } from "@lib/data/categories"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Mis 4 Nudos | Macrame Artesanal",
  description:
    "Creaciones artesanales de macrame hechas con amor. Decoracion para el hogar, regalos personalizados y accesorios unicos tejidos a mano en Espana.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const [region, categories] = await Promise.all([
    getRegion(countryCode),
    listCategories()
  ])

  if (!region) {
    return null
  }

  const rootCategories = categories?.filter(c => !c.parent_category) || []

  return (
    <>
      <Hero />

      {/* Categorias destacadas */}
      <div className="bg-[#F5F1ED] py-8">
        <div className="content-container">
          <h2 className="text-xl font-semibold text-[#6B5344] text-center mb-6">
            Explora nuestras categorias
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {rootCategories.map((category) => (
              <LocalizedClientLink
                key={category.id}
                href={`/categories/${category.handle}`}
                className="px-6 py-3 bg-white text-[#6B5344] rounded-full shadow-sm hover:shadow-md hover:bg-[#6B5344] hover:text-white transition-all duration-200 font-medium"
              >
                {category.name}
              </LocalizedClientLink>
            ))}
          </div>
        </div>
      </div>

      {/* Productos destacados */}
      <div className="py-10">
        <div className="content-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#6B5344]">
              Nuestros productos
            </h2>
            <LocalizedClientLink
              href="/store"
              className="text-sm text-[#8B7355] hover:text-[#6B5344] font-medium"
            >
              Ver todos →
            </LocalizedClientLink>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy="created_at"
              page={1}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </>
  )
}
