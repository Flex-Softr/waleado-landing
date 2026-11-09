import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { FeatureGrid } from "@/components/home/feature-grid";
import { SafetySection } from "@/components/home/safety-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { UseCases } from "@/components/home/use-cases";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { GuideCard } from "@/components/guides/guide-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FaqList } from "@/components/marketing/faq-list";
import { CtaBand } from "@/components/marketing/cta-band";
import { JsonLd } from "@/components/marketing/json-ld";
import { HOME_FAQS } from "@/content/faqs";
import { GUIDES } from "@/content/guides";
import { getPricingOrFallback } from "@/lib/pricing";
import { faqLd, softwareApplicationLd } from "@/lib/seo";

export default async function HomePage() {
  const pricing = await getPricingOrFallback();

  return (
    <>
      <Hero />
      <TrustStrip />
      <FeatureGrid />
      <SafetySection />
      <HowItWorks />
      <UseCases />

      <section id="pricing" className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Pricing"
          title="Start free. Upgrade when you grow."
          align="center"
        />
        <div className="mt-10">
          <PricingPlans plans={pricing.plans} />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Compare every limit on the{" "}
          <Link href="/pricing" className="font-semibold text-primary hover:underline">
            pricing page
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-border bg-subtle">
        <div className="container-page py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Guides" title="Learn WhatsApp marketing" />
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
            >
              All guides <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {GUIDES.slice(0, 3).map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page max-w-3xl py-20 sm:py-28">
        <SectionHeading title="Frequently asked questions" align="center" className="mb-10" />
        <FaqList items={HOME_FAQS} />
      </section>

      <CtaBand />
      <JsonLd data={[softwareApplicationLd(pricing), faqLd(HOME_FAQS)]} />
    </>
  );
}
