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
      {/* Header con icono + letras del logo */}
      <header className="relative mx-auto bg-white border-b border-ui-border-base">
        <div className="content-container py-4 flex items-center justify-center">
          <LocalizedClientLink
            href="/"
            className="hover:opacity-80 transition-opacity flex items-center gap-3"
            data-testid="nav-store-link"
          >
            {/* Icono del logo */}
            <Image
              src="/Solo-Logo-Mis4nudos.png"
              alt="Mis 4 Nudos"
              width={80}
              height={80}
              className="h-16 sm:h-20 w-auto"
              priority
            />
            {/* Letras del logo */}
            <Image
              src="/logo-solo-letra.png"
              alt="Mis 4 Nudos"
              width={200}
              height={60}
              className="h-12 sm:h-16 w-auto"
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
