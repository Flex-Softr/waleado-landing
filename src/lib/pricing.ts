/** Plans and prices served by the Waleado API (edited from the admin dashboard). */

export type PlanLimits = {
  devices: number | null;
  messagesPerDay: number | null;
  messagesPerMonth: number | null;
  contacts: number | null;
  features: Record<string, boolean>;
};

export type PricingPrice = {
  months: number;
  isLifetime: boolean;
  amountBdt: number;
  compareAtBdt: number | null;
  perMonthBdt: number | null;
  label: string | null;
  saleCap: number | null;
  remaining: number | null;
  available: boolean;
};

export type PricingPlan = {
  id: "free" | "starter" | "pro" | "business";
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
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://dash.waleado.app").replace(
  /\/$/,
  ""
);

/** Fetched on the server (no CORS) and refreshed every minute, so admin price edits show up quickly. */
export async function getPricing(): Promise<Pricing | null> {
  try {
    const res = await fetch(`${API_URL}/v1/public/pricing`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return (await res.json()) as Pricing;
  } catch {
    return null;
  }
}
