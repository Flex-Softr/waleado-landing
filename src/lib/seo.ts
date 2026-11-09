import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/content/site";
import type { Faq } from "@/content/faqs";
import type { Guide } from "@/content/guides";
import type { Pricing } from "@/lib/pricing";

/** Setting openGraph on a page replaces the inherited one, so the shared image is listed explicitly. */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Waleado — WhatsApp marketing and automation software",
};

/** Per-page metadata with a canonical URL and matching social previews. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/icon.png"),
    email: SITE.email,
    description: SITE.description,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

/** The product with one Offer per paid price, so assistants can quote real prices. */
export function softwareApplicationLd(pricing: Pricing) {
  const offers = pricing.plans.flatMap((plan) =>
    plan.prices.length
      ? plan.prices.map((p) => ({
          "@type": "Offer",
          name: `${plan.name} ${p.isLifetime ? "lifetime" : p.months === 1 ? "monthly" : `${p.months}-month`}`,
          price: p.amountBdt,
          priceCurrency: "BDT",
          url: absoluteUrl("/pricing"),
        }))
      : [
          {
            "@type": "Offer",
            name: `${plan.name} (free forever)`,
            price: 0,
            priceCurrency: "BDT",
            url: absoluteUrl("/pricing"),
          },
        ]
  );
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "WhatsApp marketing and automation",
    operatingSystem: "Web browser",
    url: SITE.url,
    description: SITE.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    offers,
  };
}

export function faqLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@id": absoluteUrl(item.path), name: item.name },
    })),
  };
}

export function articleLd(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updated,
    datePublished: guide.updated,
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
    author: { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}
