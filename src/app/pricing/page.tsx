import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/pricing-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Pricing & Plans — Waleado WhatsApp Marketing & Automation",
  description:
    "Simple and transparent pricing for WhatsApp marketing, chatbot automation, and multi-device management.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24">
        <PricingSection />
        <ComparisonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
