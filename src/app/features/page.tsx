import Link from "next/link";
import { ModuleExplorer } from "@/components/features/module-explorer";
import { ModuleIcon } from "@/components/features/module-icon";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { JsonLd } from "@/components/marketing/json-ld";
import { MODULES } from "@/content/modules";
import { absoluteUrl } from "@/content/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Features: WhatsApp campaigns, auto-reply, AI agent, chatbot and API",
  description:
    "Explore all Waleado modules: bulk WhatsApp campaigns, auto-replies, AI agent, chatbot builder, live chat inbox, missed-call replies, contacts, API and the WHMCS module.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Features"
            title="Every tool you need to run your business on WhatsApp"
            description="Twelve modules that work together: send, automate, talk to customers and connect your other apps. Pick a module to see what it does."
          />
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <ModuleExplorer />
      </section>

      <section className="container-page pb-8">
        <SectionHeading title="All modules at a glance" className="mb-10" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/features/${m.slug}`}
                className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <ModuleIcon name={m.icon} className="size-10" />
                <span className="flex flex-col gap-1">
                  <span className="font-display text-[17px] font-bold text-foreground">
                    {m.name}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{m.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Try every module on the Free plan"
        description="Upgrade only when you need higher limits or Pro tools."
      />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Waleado modules",
            itemListElement: MODULES.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: m.name,
              url: absoluteUrl(`/features/${m.slug}`),
            })),
          },
        ]}
      />
    </>
  );
}
