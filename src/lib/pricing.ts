/** Plans and prices served by the Waleado API (edited from the admin dashboard). */
import { FALLBACK_PRICING } from "@/content/fallback-pricing";

export type PlanId = "free" | "starter" | "pro" | "business";

export type PlanFeatures = {
  ai: boolean;
  chatbot: boolean;
  api: boolean;
  groupGrabber: boolean;
  callResponder: boolean;
  bulkScheduling: boolean;
  removeBranding: boolean;
};

/** Count limits: a number, or null for unlimited. */
export type PlanLimits = {
  devices: number | null;
  messagesPerDay: number | null;
  messagesPerMonth: number | null;
  contacts: number | null;
  bulkRecipientsPerCampaign: number | null;
  bulkMessageVariants: number;
  autoReplyRules: number | null;
  templates: number | null;
  chatbotFlows: number | null;
  features: PlanFeatures;
};

export type PricingPrice = {
  months: number;
  isLifetime: boolean;
  amountBdt: number;
  compareAtBdt: number | null;
  amountUsd: number | null;
  perMonthBdt: number | null;
  label: string | null;
  saleCap: number | null;
  remaining: number | null;
  available: boolean;
};

export type PricingPlan = {
  id: PlanId;
  name: string;
  tagline: string | null;
  highlight: boolean;
  limits: PlanLimits;
  highlights: string[];
  prices: PricingPrice[];
};

export type Pricing = {
  currency: "BDT";
  trialDays: number;
  trialPlanId: string;
  plans: PricingPlan[];
};

export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://api.waleado.app").replace(
  /\/$/,
  ""
);

/** Fetched on the server and refreshed every minute, so admin price edits show up quickly. */
export async function getPricing(): Promise<Pricing | null> {
  try {
    const res = await fetch(`${API_URL}/v1/public/pricing`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = (await res.json()) as Pricing;
    return data.plans?.length ? data : null;
  } catch {
    return null;
  }
}

/** Live pricing, or the default plans when the API is unreachable. */
export async function getPricingOrFallback(): Promise<Pricing> {
  return (await getPricing()) ?? FALLBACK_PRICING;
}

export type BillingCycle = "monthly" | "yearly" | "lifetime";

export const CYCLE_MONTHS: Record<BillingCycle, number> = { monthly: 1, yearly: 12, lifetime: 0 };

export function priceFor(plan: PricingPlan, cycle: BillingCycle): PricingPrice | null {
  return plan.prices.find((p) => p.months === CYCLE_MONTHS[cycle] && p.available) ?? null;
}

export function formatBdt(amount: number): string {
  return `৳${Math.round(amount).toLocaleString("en-US")}`;
}

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US", { maximumFractionDigits: amount % 1 === 0 ? 0 : 2 })}`;
}

export function formatLimit(value: number | null, unit = ""): string {
  if (value === null) return "Unlimited";
  return `${value.toLocaleString("en-US")}${unit}`;
}

/** Messages allowance in words, e.g. "50 / day" or "10,000 / month". */
export function messageAllowance(limits: PlanLimits): string {
  if (limits.messagesPerDay !== null) return `${formatLimit(limits.messagesPerDay)} / day`;
  if (limits.messagesPerMonth !== null) return `${formatLimit(limits.messagesPerMonth)} / month`;
  return "Unlimited (fair use)";
}
