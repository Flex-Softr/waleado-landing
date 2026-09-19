import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service — Waleado WhatsApp Automation",
  description: "Terms of service and acceptable use policies for Waleado platform.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-6">Terms of Service</h1>
          <p className="text-xs text-muted-foreground mb-8">Last Updated: September 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-6 text-muted-foreground">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By registering for, accessing, or using Waleado services, you agree to be bound by
                these Terms of Service. If you do not agree with any portion of these terms, you may
                not use our services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">2. Acceptable Use Policy</h2>
              <p>
                Waleado is designed to facilitate legitimate business communication, opt-in
                subscriber messaging, automated customer service, and transaction updates. You agree
                not to use Waleado for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Sending unsolicited messages (spam) to recipients who have not granted explicit
                  consent.
                </li>
                <li>
                  Phishing, financial scams, harassment, hate speech, or distributing malicious
                  payloads.
                </li>
                <li>
                  Violating WhatsApp terms of service or local consumer telecommunication laws.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">3. Subscription & Billing</h2>
              <p>
                Subscription plans are billed in advance on a recurring monthly or annual basis. You
                may upgrade, downgrade, or cancel your active subscription at any time via the
                billing portal. Cancelled subscriptions will retain access until the end of the
                current paid billing cycle.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">4. Limitation of Liability</h2>
              <p>
                Waleado is not affiliated with, endorsed by, or sponsored by WhatsApp LLC or Meta
                Platforms, Inc. WhatsApp is a registered trademark of WhatsApp LLC. Waleado provides
                anti-ban and automation tools as-is, and users are responsible for maintaining
                compliance with their local messaging regulations.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
