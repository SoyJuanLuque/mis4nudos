import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-[#F5F0E8] border-t border-[#E5DDD0] w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-16">
          {/* Logo and description */}
          <div className="max-w-xs">
            <LocalizedClientLink href="/" className="inline-block mb-4">
              <Image
                src="/Mis4nudos-logo-y-letra.svg"
                alt="Mis 4 Nudos"
                width={200}
                height={80}
                className="h-20 w-auto"
              />
            </LocalizedClientLink>
            <p className="text-[#8B7355] text-sm leading-relaxed">
              Creaciones artesanales de macramé hechas con amor y dedicación.
              Cada pieza es única, tejida a mano para decorar tu hogar.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com/mis4nudos" target="_blank" rel="noreferrer"
                 className="text-[#8B7355] hover:text-[#6B5344] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://wa.me/34658989743" target="_blank" rel="noreferrer"
                 className="text-[#8B7355] hover:text-[#6B5344] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-[#6B5344] font-medium">
                  Categorías
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return
                    return (
                      <li className="text-[#8B7355] txt-small" key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-[#6B5344]"
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-[#6B5344] font-medium">
                  Colecciones
                </span>
                <ul className={clx("grid grid-cols-1 gap-2 text-[#8B7355] txt-small", {
                  "grid-cols-2": (collections?.length || 0) > 3,
                })}>
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink className="hover:text-[#6B5344]" href={`/collections/${c.handle}`}>
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-[#6B5344] font-medium">Ayuda</span>
              <ul className="grid grid-cols-1 gap-y-2 text-[#8B7355] txt-small">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-[#6B5344]">
                    Sobre Nosotros
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-[#6B5344]">
                    Contacto
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/shipping" className="hover:text-[#6B5344]">
                    Envíos
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/returns" className="hover:text-[#6B5344]">
                    Devoluciones
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/privacy-policy" className="hover:text-[#6B5344]">
                    Política de Privacidad
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/terms" className="hover:text-[#6B5344]">
                    Términos y Condiciones
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full mb-8 justify-between text-[#8B7355] border-t border-[#E5DDD0] pt-8">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Mis 4 Nudos. Todos los derechos reservados.
          </Text>
          <Text className="txt-compact-small">
            Hecho con amor en España
          </Text>
        </div>
      </div>
    </footer>
  )
}
