import { useEffect } from "react";
import { siteContent } from "../content/siteContent";
import { absoluteUrl, buildStructuredData, getCanonicalUrl, getOgImageUrl, robotsContent } from "../lib/seo";

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

export function Seo() {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl();
    const ogImageUrl = getOgImageUrl();

    document.title = siteContent.seo.title;

    upsertMeta("name", "description", siteContent.seo.description);
    upsertMeta("name", "keywords", siteContent.seo.keywords.join(", "));
    upsertMeta("name", "author", siteContent.brand.name);
    upsertMeta("name", "robots", robotsContent);
    upsertMeta("name", "googlebot", robotsContent);
    upsertMeta("name", "theme-color", "#f6f2ec");
    upsertMeta("name", "color-scheme", "light");
    upsertMeta("name", "application-name", siteContent.brand.name);
    upsertMeta("name", "apple-mobile-web-app-title", siteContent.brand.name);
    upsertMeta("name", "format-detection", "telephone=no");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", siteContent.seo.title);
    upsertMeta("name", "twitter:description", siteContent.seo.description);
    upsertMeta("name", "twitter:image", ogImageUrl);
    upsertMeta("name", "twitter:image:alt", siteContent.seo.ogImageAlt);
    upsertMeta("name", "twitter:site", siteContent.brand.instagramHandle);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", siteContent.seo.locale);
    upsertMeta("property", "og:site_name", siteContent.brand.name);
    upsertMeta("property", "og:title", siteContent.seo.title);
    upsertMeta("property", "og:description", siteContent.seo.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImageUrl);
    upsertMeta("property", "og:image:secure_url", ogImageUrl);
    upsertMeta("property", "og:image:alt", siteContent.seo.ogImageAlt);
    upsertMeta("property", "og:image:type", "image/jpeg");
    upsertMeta("property", "og:image:width", "1080");
    upsertMeta("property", "og:image:height", "1080");

    upsertLink("canonical", canonicalUrl);
    upsertLink("alternate", canonicalUrl, { name: "hreflang", value: siteContent.seo.language });
    upsertLink("alternate", canonicalUrl, { name: "hreflang", value: "x-default" });
    upsertLink("manifest", absoluteUrl("/site.webmanifest"));
  }, []);

  const structuredData = buildStructuredData();

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
