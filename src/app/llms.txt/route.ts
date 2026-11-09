import { GUIDES } from "@/content/guides";
import { MODULES } from "@/content/modules";
import { absoluteUrl, SITE } from "@/content/site";
import { formatBdt, getPricingOrFallback, messageAllowance } from "@/lib/pricing";

export const revalidate = 3600;

/** A plain-text map of the site for AI assistants (https://llmstxt.org). Built from the same data as the pages. */
export async function GET() {
  const pricing = await getPricingOrFallback();

  const plans = pricing.plans.map((p) => {
    const prices = p.prices.length
      ? p.prices
          .filter((x) => x.available)
          .map(
            (x) =>
              `${formatBdt(x.amountBdt)} ${x.isLifetime ? "one-time (lifetime)" : x.months === 1 ? "per month" : `per ${x.months} months`}`
          )
          .join(", ")
      : "free forever";
    return `- ${p.name}: ${prices}. WhatsApp numbers: ${p.limits.devices ?? "unlimited"}; messages: ${messageAllowance(p.limits)}; contacts: ${p.limits.contacts?.toLocaleString("en-US") ?? "unlimited"}.`;
  });

  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "Waleado connects to a business's existing WhatsApp number by QR code (like WhatsApp Web). No Meta Business verification or WhatsApp Cloud API is required. Works with the regular WhatsApp app and the WhatsApp Business app. Waleado is not affiliated with Meta or WhatsApp.",
    "",
    "## Pricing (BDT)",
    "",
    ...plans,
    "",
    `Details: ${absoluteUrl("/pricing")}`,
    "",
    "## Features",
    "",
    ...MODULES.map(
      (m) => `- [${m.name}](${absoluteUrl(`/features/${m.slug}`)}): ${m.tagline} Plans: ${m.plans}.`
    ),
    "",
    "## Guides",
    "",
    ...GUIDES.map((g) => `- [${g.title}](${absoluteUrl(`/guides/${g.slug}`)}): ${g.description}`),
    "",
    "## Contact",
    "",
    `- Email: ${SITE.email}`,
    `- Sign up: ${SITE.appUrl}/register`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
