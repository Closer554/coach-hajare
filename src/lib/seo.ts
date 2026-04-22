import { siteContent } from "../content/siteContent";

export const robotsContent = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function normalizePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string) {
  return new URL(normalizePath(path), `${stripTrailingSlash(siteContent.seo.siteUrl)}/`).toString();
}

export function getCanonicalUrl() {
  return absoluteUrl(siteContent.seo.canonicalPath);
}

export function getOgImageUrl() {
  return absoluteUrl(siteContent.seo.ogImage);
}

export function buildStructuredData() {
  const canonicalUrl = getCanonicalUrl();
  const siteUrl = stripTrailingSlash(siteContent.seo.siteUrl);
  const imageUrl = getOgImageUrl();
  const methodDescription =
    siteContent.faq.find((item) => item.question.includes("M\u00e9thode HH"))?.answer ??
    siteContent.seo.description;
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${canonicalUrl}#webpage`;
  const personId = `${canonicalUrl}#person`;
  const businessId = `${canonicalUrl}#coach`;
  const serviceId = `${canonicalUrl}#methode-hh`;
  const tariffOffers = siteContent.tariffs.offers.map((offer) => {
    const fixedPrice = offer.kind === "fixed" ? offer.price.replace(/[^\d]/g, "") : undefined;

    return {
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      url: canonicalUrl,
      price: fixedPrice,
      priceCurrency: fixedPrice ? "EUR" : undefined,
      itemOffered: {
        "@type": "Service",
        name: offer.name,
        description: offer.description,
        provider: {
          "@id": personId,
        },
        areaServed: {
          "@type": "City",
          name: "Paris",
        },
      },
    };
  });

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteContent.brand.name,
      url: siteUrl,
      inLanguage: siteContent.seo.language,
      publisher: {
        "@id": personId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: canonicalUrl,
      name: siteContent.seo.title,
      description: siteContent.seo.description,
      inLanguage: siteContent.seo.language,
      isPartOf: {
        "@id": websiteId,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1080,
        height: 1080,
      },
      about: [
        {
          "@id": personId,
        },
        {
          "@id": serviceId,
        },
      ],
      mainEntity: {
        "@id": serviceId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: siteContent.brand.name,
      alternateName: "Hajare",
      url: canonicalUrl,
      image: imageUrl,
      jobTitle: "Coach sportive dipl\u00f4m\u00e9e BPJEPS",
      description: siteContent.seo.description,
      sameAs: [siteContent.brand.instagramUrl],
      knowsAbout: siteContent.seo.keywords,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "BPJEPS",
      },
      areaServed: {
        "@type": "City",
        name: "Paris",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": businessId,
      name: siteContent.brand.name,
      url: canonicalUrl,
      image: imageUrl,
      description: siteContent.seo.description,
      priceRange: "Sur demande",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      areaServed: {
        "@type": "City",
        name: "Paris",
      },
      founder: {
        "@id": personId,
      },
      sameAs: [siteContent.brand.instagramUrl],
      makesOffer: tariffOffers,
      review: siteContent.reviews.map((review) => ({
        "@type": "Review",
        reviewBody: review.text,
        author: {
          "@type": "Person",
          name: review.name,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "M\u00e9thode HH\u2122 - Hexis Harmonia",
      alternateName: "Hexis Harmonia",
      serviceType: "Coaching Pilates, posture et renforcement intelligent",
      description: methodDescription,
      provider: {
        "@id": personId,
      },
      areaServed: {
        "@type": "City",
        name: "Paris",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "City",
          name: "Paris",
        },
        serviceUrl: canonicalUrl,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tarifs Coach Hajare",
        itemListElement: tariffOffers.map((offer, index) => ({
          ...offer,
          position: index + 1,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: siteContent.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
