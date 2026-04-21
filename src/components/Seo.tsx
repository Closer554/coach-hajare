import { useEffect } from "react";
import { siteContent } from "../content/siteContent";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, extraAttribute?: { name: string; value: string }) {
  const selector = extraAttribute
    ? `link[rel="${rel}"][${extraAttribute.name}="${extraAttribute.value}"]`
    : `link[rel="${rel}"]`;

  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (extraAttribute) {
      element.setAttribute(extraAttribute.name, extraAttribute.value);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function buildAbsoluteUrl(path: string) {
  return new URL(path, window.location.origin).toString();
}

export function Seo() {
  useEffect(() => {
    const currentUrl = window.location.href.split("#")[0];
    const ogImageUrl = buildAbsoluteUrl(siteContent.seo.ogImage);
    const robotsValue = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

    document.title = siteContent.seo.title;

    upsertMeta("name", "description", siteContent.seo.description);
    upsertMeta("name", "author", siteContent.brand.name);
    upsertMeta("name", "robots", robotsValue);
    upsertMeta("name", "googlebot", robotsValue);
    upsertMeta("name", "theme-color", "#f6f2ec");
    upsertMeta("name", "format-detection", "telephone=no");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", siteContent.seo.title);
    upsertMeta("name", "twitter:description", siteContent.seo.description);
    upsertMeta("name", "twitter:image", ogImageUrl);
    upsertMeta("name", "twitter:site", siteContent.brand.instagramHandle);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "fr_FR");
    upsertMeta("property", "og:site_name", siteContent.brand.name);
    upsertMeta("property", "og:title", siteContent.seo.title);
    upsertMeta("property", "og:description", siteContent.seo.description);
    upsertMeta("property", "og:url", currentUrl);
    upsertMeta("property", "og:image", ogImageUrl);
    upsertMeta("property", "og:image:alt", siteContent.seo.ogImageAlt);
    upsertMeta("property", "og:image:type", "image/jpeg");

    upsertLink("canonical", currentUrl);
    upsertLink("alternate", currentUrl, { name: "hreflang", value: "fr-FR" });
  }, []);

  const currentUrl = typeof window !== "undefined" ? window.location.href.split("#")[0] : siteContent.seo.canonicalPath;
  const imageUrl = typeof window !== "undefined" ? buildAbsoluteUrl(siteContent.seo.ogImage) : siteContent.seo.ogImage;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteContent.brand.name,
      jobTitle: "Coach diplomee BPJEPS",
      description: siteContent.seo.description,
      areaServed: "Paris",
      sameAs: [siteContent.brand.instagramUrl],
      knowsAbout: [
        "posture",
        "pilates",
        "silhouette tonique",
        "alignement",
        "controle du mouvement",
        "renforcement intelligent",
      ],
      image: imageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Methode HH - Hexis Harmonia",
      serviceType: "Coaching postural, pilates et renforcement intelligent",
      description: siteContent.method.body,
      areaServed: {
        "@type": "City",
        name: "Paris",
      },
      provider: {
        "@type": "Person",
        name: siteContent.brand.name,
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "City",
          name: "Paris",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: siteContent.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: siteContent.seo.title,
      description: siteContent.seo.description,
      inLanguage: "fr-FR",
      url: currentUrl,
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
