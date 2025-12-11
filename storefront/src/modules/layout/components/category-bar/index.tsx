"use client"

import { Suspense } from "react"
import { HttpTypes, StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { usePathname } from "next/navigation"

type CategoryBarProps = {
  categories: HttpTypes.StoreProductCategory[]
  regions?: StoreRegion[]
}

const CategoryBar = ({ categories, regions }: CategoryBarProps) => {
  const pathname = usePathname()

  // Filter only root categories (no parent)
  const rootCategories = categories.filter(c => !c.parent_category)

  const isActive = (handle: string) => {
    return pathname.includes(`/categories/${handle}`)
  }

  return (
    <div className="w-full bg-[#7f5835]">
      <div className="content-container">
        <nav className="flex items-center justify-between py-2">
          {/* Hamburguesa a la izquierda */}
          <div className="flex items-center text-[#fdf4e5]">
            <SideMenu regions={regions || []} />
          </div>

          {/* Categorías centradas */}
          <div className="flex items-center gap-x-1 overflow-x-auto no-scrollbar">
            <LocalizedClientLink
              href="/store"
              className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                pathname.includes('/store') && !pathname.includes('/categories')
                  ? "bg-[#fdf4e5] text-[#7f5835] shadow-sm"
                  : "text-[#fdf4e5] hover:bg-[#fdf4e5]/20"
              }`}
            >
              Todos
            </LocalizedClientLink>

            {rootCategories.map((category) => (
              <LocalizedClientLink
                key={category.id}
                href={`/categories/${category.handle}`}
                className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                  isActive(category.handle!)
                    ? "bg-[#fdf4e5] text-[#7f5835] shadow-sm"
                    : "text-[#fdf4e5] hover:bg-[#fdf4e5]/20"
                }`}
              >
                {category.name}
              </LocalizedClientLink>
            ))}
          </div>

          {/* Mi Cuenta y Carrito a la derecha */}
          <div className="flex items-center gap-x-1 text-[#fdf4e5] text-sm font-medium">
            <LocalizedClientLink
              className="hidden sm:block px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 hover:bg-[#fdf4e5]/20"
              href="/account"
              data-testid="nav-account-link"
            >
              Mi Cuenta
            </LocalizedClientLink>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 hover:bg-[#fdf4e5]/20"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Carrito (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default CategoryBar
