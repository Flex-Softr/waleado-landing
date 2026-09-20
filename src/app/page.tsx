import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SocialProof } from "@/components/social-proof";
import { FeaturesSection } from "@/components/features-section";
import { AntiBanSection } from "@/components/anti-ban-section";
import { SolutionsSection } from "@/components/solutions-section";
import { HowItWorks } from "@/components/how-it-works";
import { ComparisonSection } from "@/components/comparison-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <AntiBanSection />
        <SolutionsSection />
        <HowItWorks />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
