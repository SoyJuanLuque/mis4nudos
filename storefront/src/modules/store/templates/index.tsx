import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import SortProducts from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="w-full" data-testid="category-container">
      {/* Header con titulo y ordenar */}
      <div className="content-container py-4 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#6B5344]" data-testid="store-page-title">
              Todos los productos
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Descubre nuestras creaciones artesanales de macrame
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Ordenar:</span>
            <SortDropdown sortBy={sort} />
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="content-container py-6">
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

// Dropdown simple para ordenar
const SortDropdown = ({ sortBy }: { sortBy: SortOptions }) => {
  return (
    <form action="" method="GET">
      <select
        name="sortBy"
        defaultValue={sortBy}
        onChange={(e) => {
          const form = e.target.form
          if (form) form.submit()
        }}
        className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-[#6B5344] focus:outline-none focus:ring-2 focus:ring-[#6B5344]/20 cursor-pointer"
      >
        <option value="created_at">Mas recientes</option>
        <option value="price_asc">Precio: Menor a Mayor</option>
        <option value="price_desc">Precio: Mayor a Menor</option>
      </select>
    </form>
  )
}

export default StoreTemplate
