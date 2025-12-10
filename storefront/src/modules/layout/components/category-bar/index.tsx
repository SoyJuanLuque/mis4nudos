"use client"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useParams, usePathname } from "next/navigation"

type CategoryBarProps = {
  categories: HttpTypes.StoreProductCategory[]
}

const CategoryBar = ({ categories }: CategoryBarProps) => {
  const pathname = usePathname()
  const { countryCode } = useParams()

  // Filter only root categories (no parent)
  const rootCategories = categories.filter(c => !c.parent_category)

  const isActive = (handle: string) => {
    return pathname.includes(`/categories/${handle}`)
  }

  return (
    <div className="w-full bg-[#F5F1ED] border-b border-[#E5DED6]">
      <div className="content-container">
        <nav className="flex items-center justify-center gap-x-1 sm:gap-x-2 py-3 overflow-x-auto no-scrollbar">
          <LocalizedClientLink
            href="/store"
            className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
              pathname.includes('/store') && !pathname.includes('/categories')
                ? "bg-[#6B5344] text-white shadow-sm"
                : "text-[#6B5344] hover:bg-[#6B5344]/10"
            }`}
          >
            Todos
          </LocalizedClientLink>

          {rootCategories.map((category) => (
            <LocalizedClientLink
              key={category.id}
              href={`/categories/${category.handle}`}
              className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                isActive(category.handle!)
                  ? "bg-[#6B5344] text-white shadow-sm"
                  : "text-[#6B5344] hover:bg-[#6B5344]/10"
              }`}
            >
              {category.name}
            </LocalizedClientLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default CategoryBar
