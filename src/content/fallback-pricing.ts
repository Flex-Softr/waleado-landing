import type { PlanLimits, Pricing, PricingPrice } from "@/lib/pricing";

/**
 * Default plans, used only when the pricing API cannot be reached, so the page (and search engines)
 * still see real plans. Live prices from the admin dashboard replace these within a minute.
 */
/** USD shown next to BDT, converted at about this many taka per dollar. */
const BDT_PER_USD = 123;

const price = (
  months: number,
  amountBdt: number,
  label: string | null = null,
  saleCap: number | null = null
): PricingPrice => ({
  months,
  isLifetime: months === 0,
  amountBdt,
  compareAtBdt: null,
  amountUsd: Math.round((amountBdt / BDT_PER_USD) * 100) / 100,
  perMonthBdt: months ? Math.round(amountBdt / months) : null,
  label,
  saleCap,
  remaining: saleCap,
  available: true,
});

const none = {
  ai: false,
  chatbot: false,
  api: false,
  groupGrabber: false,
  callResponder: false,
  bulkScheduling: false,
  removeBranding: false,
};
const all = {
  ai: true,
  chatbot: true,
  api: true,
  groupGrabber: true,
  callResponder: true,
  bulkScheduling: true,
  removeBranding: true,
};

const limits = (l: Omit<PlanLimits, "features">, features: PlanLimits["features"]): PlanLimits => ({
  ...l,
  features,
});

export const FALLBACK_PRICING: Pricing = {
  currency: "BDT",
  trialDays: 7,
  trialPlanId: "pro",
  plans: [
    {
      id: "free",
      name: "Free",
      tagline: "Free forever — try Waleado at zero cost",
      highlight: false,
      limits: limits(
        {
          devices: 1,
          messagesPerDay: 50,
          messagesPerMonth: null,
          contacts: 500,
          bulkRecipientsPerCampaign: 50,
          bulkMessageVariants: 2,
          autoReplyRules: 3,
          templates: 5,
          chatbotFlows: 0,
        },
        none
      ),
      highlights: [
        "1 WhatsApp number",
        "50 messages / day",
        "500 contacts",
        "Live chat inbox",
        "3 auto-reply rules",
      ],
      prices: [],
    },
    {
      id: "starter",
      name: "Starter",
      tagline: "For small shops getting started",
      highlight: false,
      limits: limits(
        {
          devices: 2,
          messagesPerDay: null,
          messagesPerMonth: 10000,
          contacts: 5000,
          bulkRecipientsPerCampaign: null,
          bulkMessageVariants: 5,
          autoReplyRules: null,
          templates: 50,
          chatbotFlows: 3,
        },
        { ...none, chatbot: true, api: true, removeBranding: true }
      ),
      highlights: [
        "2 WhatsApp numbers",
        "10,000 messages / month",
        "5,000 contacts",
        "3 chatbot flows",
        "API access",
      ],
      prices: [
        price(1, 149),
        price(12, 1190, "4 months free"),
        price(0, 2490, "Launch offer", 300),
      ],
    },
    {
      id: "pro",
      name: "Pro",
      tagline: "Everything you need to grow",
      highlight: true,
      limits: limits(
        {
          devices: 5,
          messagesPerDay: null,
          messagesPerMonth: 50000,
          contacts: 25000,
          bulkRecipientsPerCampaign: null,
          bulkMessageVariants: 10,
          autoReplyRules: null,
          templates: null,
          chatbotFlows: null,
        },
        all
      ),
      highlights: [
        "5 WhatsApp numbers",
        "50,000 messages / month",
        "25,000 contacts",
        "AI agent and rewrites",
        "Missed-call responder",
      ],
      prices: [
        price(1, 249),
        price(12, 1990, "4 months free"),
        price(0, 3990, "Launch offer", 200),
      ],
    },
    {
      id: "business",
      name: "Business",
      tagline: "High volume with priority support",
      highlight: false,
      limits: limits(
        {
          devices: 15,
          messagesPerDay: null,
          messagesPerMonth: null,
          contacts: null,
          bulkRecipientsPerCampaign: null,
          bulkMessageVariants: 20,
          autoReplyRules: null,
          templates: null,
          chatbotFlows: null,
        },
        all
      ),
      highlights: [
        "15 WhatsApp numbers",
        "Unlimited messages (fair use)",
        "Unlimited contacts",
        "Everything in Pro",
        "Priority support",
      ],
      prices: [price(1, 349), price(12, 2790, "4 months free"), price(0, 5500, "Launch offer", 50)],
    },
  ],
};
