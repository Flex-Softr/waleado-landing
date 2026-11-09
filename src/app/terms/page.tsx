import { LegalPage } from "@/components/marketing/legal-page";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of service",
  description:
    "The terms that apply when you use Waleado, the WhatsApp marketing and automation platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="November 2026"
      sections={[
        {
          heading: "1. Agreement",
          paragraphs: [
            "By creating an account or using Waleado you agree to these terms. If you do not agree, please do not use the service.",
          ],
        },
        {
          heading: "2. Acceptable use",
          paragraphs: [
            "Waleado is for legitimate business messaging with people who expect to hear from you. You agree not to use it for:",
          ],
          items: [
            "Unwanted messages (spam) to people who did not agree to receive them.",
            "Scams, phishing, harassment, hate speech or harmful files.",
            "Anything that breaks WhatsApp's terms or the law where you or your recipients live.",
          ],
        },
        {
          heading: "3. Your WhatsApp numbers",
          paragraphs: [
            "You are responsible for the numbers you connect and how you use them. WhatsApp may limit or ban numbers that break its rules. Waleado provides safety settings but cannot guarantee that a number will not be restricted.",
          ],
        },
        {
          heading: "4. Plans and payments",
          paragraphs: [
            "Paid plans are paid in advance for the chosen period, or once for a lifetime plan. You can upgrade at any time; unused time on your current plan is credited. Moving to a smaller plan takes effect when your current period ends. If a plan is not renewed it moves to the Free plan after a short grace period.",
          ],
        },
        {
          heading: "5. Lifetime plans",
          paragraphs: [
            "A lifetime plan gives you its plan for as long as Waleado operates the service, with the limits of that plan. Lifetime plans are not transferable.",
          ],
        },
        {
          heading: "6. Not affiliated with WhatsApp",
          paragraphs: [
            "Waleado is not affiliated with, endorsed or sponsored by WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a trademark of Meta Platforms, Inc.",
          ],
        },
        {
          heading: "7. Service changes and liability",
          paragraphs: [
            'We work to keep Waleado available and reliable, but the service is provided "as is". To the extent allowed by law we are not liable for indirect losses, such as lost sales caused by a WhatsApp restriction.',
          ],
        },
        {
          heading: "8. Contact",
          paragraphs: [`Questions about these terms? Email us at ${SITE.email}.`],
        },
      ]}
    />
  );
}
