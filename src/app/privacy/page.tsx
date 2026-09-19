import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy — Waleado WhatsApp Automation",
  description: "Privacy policy and data protection terms for Waleado WhatsApp automation platform.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-6">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground mb-8">Last Updated: September 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-6 text-muted-foreground">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">1. Introduction</h2>
              <p>
                Waleado (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                protecting your privacy and ensuring the security of your data. This Privacy Policy
                explains how we collect, process, and safeguard information when you use our
                WhatsApp marketing platform, visual chatbot tools, and related services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">2. Information We Collect</h2>
              <p>
                When you create an account, connect WhatsApp devices, or launch campaigns, we
                collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Account credentials (name, business email, password hash).</li>
                <li>
                  WhatsApp session identifiers and encryption keys necessary to maintain device
                  socket connectivity.
                </li>
                <li>
                  Contact records, broadcast message content, and spintax variations configured by
                  you.
                </li>
                <li>
                  Transactional payment and billing details processed securely by third-party
                  PCI-compliant providers (Stripe, SSLCommerz).
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">3. How We Protect Your Data</h2>
              <p>
                We do not sell, rent, or trade your contact lists or message content to third
                parties. All communication between your browser, our servers, and the WhatsApp
                bridge is encrypted using industry-standard TLS 1.3 and AES-256 protocols.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">4. Data Retention & Deletion</h2>
              <p>
                You retain complete ownership of your subscriber data. You may export or permanently
                delete your contact lists, campaign logs, and WhatsApp session tokens at any time
                directly through your dashboard settings.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">5. Contact Information</h2>
              <p>
                For any questions or privacy inquiries, please contact our Data Protection Officer
                at <span className="font-mono text-emerald-500">privacy@waleado.com</span>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
