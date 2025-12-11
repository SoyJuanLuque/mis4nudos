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
      {/* Header solo con logo grande centrado */}
      <header className="relative mx-auto bg-white border-b border-ui-border-base">
        <div className="content-container py-6 flex items-center justify-center">
          <LocalizedClientLink
            href="/"
            className="hover:opacity-80 transition-opacity"
            data-testid="nav-store-link"
          >
            <Image
              src="/logo-2.png"
              alt="Mis 4 Nudos"
              width={320}
              height={120}
              className="h-24 sm:h-28 w-auto"
              priority
            />
          </LocalizedClientLink>
        </div>
      </header>

      {/* Barra: Hamburguesa | Categorías | Mi Cuenta + Carrito */}
      <CategoryBar categories={categories} regions={regions} />
    </div>
  )
}
