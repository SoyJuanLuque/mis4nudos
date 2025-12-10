import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import SortDropdown from "@modules/store/components/sort-dropdown"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  return (
    <div className="w-full" data-testid="category-container">
      {/* Header de categoria */}
      <div className="content-container py-4 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#6B5344]" data-testid="category-page-title">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-sm text-gray-500 mt-1">{category.description}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Ordenar:</span>
            <SortDropdown sortBy={sort} />
          </div>
        </div>

        {/* Subcategorias si existen */}
        {category.category_children && category.category_children.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {category.category_children.map((c) => (
              <LocalizedClientLink
                key={c.id}
                href={`/categories/${c.handle}`}
                className="px-3 py-1.5 text-sm bg-[#F5F1ED] text-[#6B5344] rounded-full hover:bg-[#6B5344] hover:text-white transition-colors"
              >
                {c.name}
              </LocalizedClientLink>
            ))}
          </div>
        )}
      </div>

      {/* Grid de productos */}
      <div className="content-container py-6">
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={category.products?.length ?? 8}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            categoryId={category.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
