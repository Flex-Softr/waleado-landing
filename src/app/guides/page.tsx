import { GuideCard } from "@/components/guides/guide-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { JsonLd } from "@/components/marketing/json-ld";
import { GUIDES } from "@/content/guides";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "WhatsApp marketing guides",
  description:
    "Practical, easy guides on WhatsApp marketing and automation: safe bulk messaging, auto-replies, chatbots, missed-call replies and more.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Guides"
            title="Learn WhatsApp marketing the easy way"
            description="Short, practical guides that help you reach more customers on WhatsApp without risking your number."
          />
        </div>
      </section>
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
    </>
  );
}
