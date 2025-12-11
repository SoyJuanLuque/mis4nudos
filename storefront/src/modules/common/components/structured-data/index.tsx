// Schema.org Structured Data para SEO
// Ayuda a Google a entender mejor el negocio y mostrar rich snippets

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mis 4 Nudos",
    alternateName: "Mis4Nudos",
    url: "https://mis4nudos.com",
    logo: "https://mis4nudos.com/logo.png",
    description:
      "Creaciones artesanales de macramé hechas con amor. Decoración para el hogar, regalos personalizados y accesorios únicos tejidos a mano.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Lidia Gómez García",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-658-989-743",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
      areaServed: "ES",
    },
    sameAs: [
      "https://www.instagram.com/mis4nudos",
      "https://wa.me/34658989743",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://mis4nudos.com/#store",
    name: "Mis 4 Nudos",
    image: "https://mis4nudos.com/logo.png",
    description:
      "Tienda online de macramé artesanal. Regalos personalizados para bodas, comuniones, bautizos y ocasiones especiales. Envíos a toda España.",
    url: "https://mis4nudos.com",
    telephone: "+34658989743",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Credit Card, PayPal, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Decoración de macramé para hogar",
          category: "Decoración",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Regalos personalizados para eventos",
          category: "Regalos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Accesorios de macramé",
          category: "Accesorios",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mis4nudos.com/#website",
    name: "Mis 4 Nudos",
    url: "https://mis4nudos.com",
    description:
      "Tienda online de macramé artesanal hecho a mano en España",
    publisher: {
      "@type": "Organization",
      name: "Mis 4 Nudos",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://mis4nudos.com/es/store?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es-ES",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Componente combinado para incluir todos los schemas
const StructuredData = () => {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
    </>
  )
}

export default StructuredData
