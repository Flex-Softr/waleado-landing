import { Navbar } from "@/components/navbar";
import { SolutionsSection } from "@/components/solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Industry Solutions — Waleado WhatsApp Automation",
  description:
    "Tailored WhatsApp marketing and automation workflows for E-Commerce, Real Estate, Marketing Agencies, and Customer Support teams.",
};

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24">
        <SolutionsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
