import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import WhatsAppButton from "@modules/common/components/whatsapp-button"
import StructuredData from "@modules/common/components/structured-data"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Mis 4 Nudos | Macramé Artesanal - Regalos con Alma",
    template: "%s | Mis 4 Nudos",
  },
  description:
    "Creaciones artesanales de macramé hechas a mano con amor. Regalos personalizados para bodas, comuniones, bautizos y momentos especiales. Envíos a toda España.",
  keywords: [
    "macramé",
    "macrame",
    "artesanía",
    "handmade",
    "hecho a mano",
    "regalos personalizados",
    "decoración boho",
    "bodas",
    "comuniones",
    "bautizos",
    "España",
    "regalos únicos",
    "detalles invitados",
  ],
  authors: [{ name: "Lidia Gómez García" }],
  creator: "Mis 4 Nudos",
  publisher: "Mis 4 Nudos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mis4nudos.com",
    siteName: "Mis 4 Nudos",
    title: "Mis 4 Nudos | Macramé Artesanal - Regalos con Alma",
    description:
      "Creaciones artesanales de macramé hechas a mano con amor. Regalos personalizados para bodas, comuniones, bautizos y momentos especiales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mis 4 Nudos - Macramé Artesanal",
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Mis 4 Nudos | Macramé Artesanal",
    description:
      "Creaciones artesanales de macramé hechas a mano con amor. Regalos personalizados para bodas, comuniones y momentos especiales.",
    images: ["/og-image.jpg"],
    creator: "@mis4nudos",
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Verification (añadir cuando tengas los códigos)
  // verification: {
  //   google: "tu-codigo-google",
  // },
  // Alternates
  alternates: {
    canonical: "https://mis4nudos.com",
    languages: {
      "es-ES": "https://mis4nudos.com/es",
    },
  },
  // Category
  category: "ecommerce",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light">
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7f5835" />
      </head>
      <body>
        <main className="relative">{props.children}</main>
        <WhatsAppButton />
      </body>
    </html>
  )
}
