import { CreditCard, Wallet } from "lucide-react";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FaqList } from "@/components/marketing/faq-list";
import { CtaBand } from "@/components/marketing/cta-band";
import { JsonLd } from "@/components/marketing/json-ld";
import { PRICING_FAQS } from "@/content/faqs";
import { getPricingOrFallback } from "@/lib/pricing";
import { breadcrumbLd, faqLd, pageMetadata, softwareApplicationLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing: free forever, monthly, yearly and lifetime plans",
  description:
    "Waleado pricing: a free forever plan, Starter, Pro and Business with monthly, yearly or one-time lifetime payment. Compare WhatsApp numbers, messages and features.",
  path: "/pricing",
});

const PAYMENT_NOTES = [
  {
    icon: CreditCard,
    title: "Pay the way you like",
    text: "Cards and mobile banking such as bKash and Nagad through SSLCommerz. Every payment comes with an invoice.",
  },
  {
    icon: Wallet,
    title: "Wallet and auto-renew",
    text: "Top up a prepaid wallet once and let your plan renew from it automatically, so your automations never stop.",
  },
];

export default async function PricingPage() {
  const pricing = await getPricingOrFallback();

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            align="center"
            title="Simple pricing that grows with your business"
            description="Start on the Free plan. Upgrade, renew or switch to a lifetime deal whenever you are ready. Unused time is credited when you upgrade."
          />
          <div className="mt-12">
            <PricingPlans plans={pricing.plans} defaultCycle="yearly" />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading title="Compare every plan" align="center" className="mb-10" />
        <ComparisonTable plans={pricing.plans} />
      </section>

      <section className="container-page grid gap-5 pb-20 md:grid-cols-2">
        {PAYMENT_NOTES.map((n) => (
          <div key={n.title} className="flex gap-4 rounded-2xl border border-border bg-card p-7">
            <n.icon className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-foreground">{n.title}</h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{n.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container-page max-w-3xl pb-8">
        <SectionHeading title="Billing questions" align="center" className="mb-10" />
        <FaqList items={PRICING_FAQS} />
      </section>

      <CtaBand title="Try Waleado free today" />
      <JsonLd
        data={[
          softwareApplicationLd(pricing),
          faqLd(PRICING_FAQS),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
    </>
  );
}
