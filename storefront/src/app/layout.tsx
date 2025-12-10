import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Mis 4 Nudos | Macramé Artesanal",
    template: "%s | Mis 4 Nudos",
  },
  description: "Creaciones artesanales de macramé hechas con amor. Decoración para el hogar, regalos personalizados y accesorios únicos tejidos a mano.",
  keywords: ["macramé", "artesanía", "decoración", "handmade", "regalos personalizados", "España"],
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
