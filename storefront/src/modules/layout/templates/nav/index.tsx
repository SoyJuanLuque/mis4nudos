import { Suspense } from "react"
import Image from "next/image"

import { listRegions } from "@lib/data/regions"
import { listCategories } from "@lib/data/categories"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import CategoryBar from "@modules/layout/components/category-bar"

export default async function Nav() {
  const [regions, categories] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listCategories()
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-[#6B5344] flex items-center justify-between w-full h-full text-small-regular">
          {/* Logo a la izquierda - grande */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="hover:opacity-80 transition-opacity"
              data-testid="nav-store-link"
            >
              <Image
                src="/logo.png"
                alt="Mis 4 Nudos"
                width={180}
                height={72}
                className="h-16 w-auto"
                priority
              />
            </LocalizedClientLink>
          </div>

          {/* Menu derecha */}
          <div className="flex items-center gap-x-4 sm:gap-x-6 h-full">
            {/* Mi Cuenta - solo desktop */}
            <LocalizedClientLink
              className="hidden sm:block hover:text-[#8B7355] font-medium"
              href="/account"
              data-testid="nav-account-link"
            >
              Mi Cuenta
            </LocalizedClientLink>

            {/* Carrito */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-[#8B7355] flex gap-2 font-medium"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Carrito (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>

            {/* Hamburguesa solo mobile */}
            <div className="sm:hidden">
              <SideMenu regions={regions} />
            </div>
          </div>
        </nav>
      </header>
      <CategoryBar categories={categories} />
    </div>
  )
}
