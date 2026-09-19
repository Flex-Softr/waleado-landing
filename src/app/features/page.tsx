import { Navbar } from "@/components/navbar";
import { FeaturesSection } from "@/components/features-section";
import { AntiBanSection } from "@/components/anti-ban-section";
import { HowItWorks } from "@/components/how-it-works";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Features & Architecture — Waleado WhatsApp Automation Suite",
  description:
    "Explore Waleado's multi-device hub, bulk AI spintax campaign engine, visual chatbot builder, and missed call auto-responder.",
};

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24">
        <FeaturesSection />
        <AntiBanSection />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
