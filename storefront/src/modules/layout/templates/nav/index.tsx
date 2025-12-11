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
          {/* Hamburguesa a la izquierda - visible en todas las pantallas */}
          <div className="flex items-center gap-x-4">
            <SideMenu regions={regions} />
          </div>

          {/* Logo centrado */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <LocalizedClientLink
              href="/"
              className="hover:opacity-80 transition-opacity"
              data-testid="nav-store-link"
            >
              <Image
                src="/logo-2.png"
                alt="Mis 4 Nudos"
                width={200}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </LocalizedClientLink>
          </div>

          {/* Mi Cuenta y Carrito a la derecha */}
          <div className="flex items-center gap-x-4 sm:gap-x-6 h-full">
            <LocalizedClientLink
              className="hidden sm:block hover:text-[#8B7355] font-medium"
              href="/account"
              data-testid="nav-account-link"
            >
              Mi Cuenta
            </LocalizedClientLink>

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
          </div>
        </nav>
      </header>
      <CategoryBar categories={categories} />
    </div>
  )
}
