import { LegalPage } from "@/components/marketing/legal-page";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How Waleado collects, uses and protects your data when you use our WhatsApp automation platform.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="November 2026"
      sections={[
        {
          heading: "1. Who we are",
          paragraphs: [
            'Waleado ("we", "our" or "us") provides WhatsApp marketing and automation software. This policy explains what data we collect when you use waleado.app and the Waleado dashboard, and how we use and protect it.',
          ],
        },
        {
          heading: "2. Information we collect",
          items: [
            "Account details: your name, email address, phone number and a hashed password.",
            "WhatsApp session data needed to keep your connected numbers linked.",
            "Contacts, messages, templates, chatbot flows and other content you add.",
            "Billing records such as invoices and payment status. Card and mobile banking details are handled by our payment providers (SSLCommerz, Stripe), not stored by us.",
            "Basic technical data such as IP address and browser type, used for security.",
          ],
        },
        {
          heading: "3. How we use it",
          items: [
            "To run the service: send your messages, run your automations and show your inbox.",
            "To send account messages such as login codes, invoices and renewal reminders.",
            "To keep the service secure and prevent abuse.",
            "We do not sell or rent your contacts or messages to anyone.",
          ],
        },
        {
          heading: "4. Third-party services",
          paragraphs: [
            "If you turn on the AI agent, the messages it answers are sent to the AI provider you connect (OpenAI or Google Gemini) using your own key. Payments are processed by SSLCommerz or Stripe. Messages travel through WhatsApp, which is operated by Meta.",
          ],
        },
        {
          heading: "5. Security",
          paragraphs: [
            "Data is encrypted in transit with HTTPS and access to our servers is restricted. No system is perfectly secure, but we work to protect your data and fix issues quickly.",
          ],
        },
        {
          heading: "6. Keeping and deleting data",
          paragraphs: [
            "You own your data. You can delete contacts, campaigns and connected numbers from your dashboard at any time. To delete your whole account, email us and we will remove it.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [`Questions about privacy? Email us at ${SITE.email}.`],
        },
      ]}
    />
  );
}
