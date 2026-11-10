"use client";

import * as React from "react";
import { buttonVariants } from "@/components/ui/button-link";
import { CheckItem } from "@/components/marketing/check-item";
import { SIGNUP_URL } from "@/content/site";
import { cn } from "@/lib/utils";
import {
  CYCLE_MONTHS,
  formatBdt,
  formatUsd,
  priceFor,
  type BillingCycle,
  type PricingPlan,
  type PricingPrice,
} from "@/lib/pricing";

type Currency = "BDT" | "USD";

const CYCLES: { id: BillingCycle; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
  { id: "lifetime", label: "Lifetime" },
];

function money(price: PricingPrice, currency: Currency, divideBy = 1): string {
  if (currency === "USD" && price.amountUsd !== null)
    return formatUsd(Math.round((price.amountUsd / divideBy) * 100) / 100);
  return formatBdt(price.amountBdt / divideBy);
}

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex gap-1 rounded-xl bg-subtle p-1 ring-1 ring-border"
    >
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={o.id === value}
          onClick={() => onChange(o.id)}
          className={cn(
            "h-10 rounded-lg px-4 text-sm font-semibold transition-colors",
            o.id === value
              ? "bg-card text-foreground shadow-sm ring-1 ring-border"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function PlanCard({
  plan,
  cycle,
  currency,
}: {
  plan: PricingPlan;
  cycle: BillingCycle;
  currency: Currency;
}) {
  const isFree = plan.id === "free";
  const price = isFree ? null : priceFor(plan, cycle);
  const unavailable = !isFree && !price;

  let amount = currency === "USD" ? "$0" : "৳0";
  let period = "forever";
  let note = "No card needed";
  if (price && cycle === "monthly") {
    amount = money(price, currency);
    period = "/ month";
    note = "Billed monthly";
  } else if (price && cycle === "yearly") {
    amount = money(price, currency, 12);
    period = "/ month";
    note = `${money(price, currency)} billed yearly${price.label ? ` · ${price.label}` : ""}`;
  } else if (price && cycle === "lifetime") {
    amount = money(price, currency);
    period = "once";
    note =
      price.remaining !== null && price.saleCap !== null
        ? `Pay once, keep it · ${price.remaining} of ${price.saleCap} seats left`
        : "Pay once, keep it";
  } else if (unavailable) {
    amount = "—";
    period = "";
    note = cycle === "lifetime" ? "Not offered as a lifetime deal" : "Not available for this cycle";
  }

  // While showing taka, also show the dollar equivalent for visitors outside Bangladesh.
  const usdHint =
    currency === "BDT" && price?.amountUsd != null
      ? `≈ ${money(price, "USD", cycle === "yearly" ? 12 : 1)}${period ? ` ${period}` : ""}`
      : null;

  const href =
    isFree || unavailable
      ? SIGNUP_URL
      : `${SIGNUP_URL}?plan=${plan.id}&months=${CYCLE_MONTHS[cycle]}`;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 rounded-2xl border bg-card p-7",
        plan.highlight
          ? "border-2 border-primary shadow-[0_20px_40px_-24px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
          : "border-border"
      )}
    >
      <div className="flex min-h-7 items-center justify-between gap-2">
        <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
        {plan.highlight ? (
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
            Recommended
          </span>
        ) : null}
      </div>
      <p className="min-h-10 text-sm text-muted-foreground">{plan.tagline}</p>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-extrabold text-foreground">{amount}</span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="-mt-3 min-h-5 text-[13px] text-muted-foreground">{usdHint}</p>
      <p className="min-h-9 text-[13px] text-muted-foreground">{note}</p>
      <a
        href={href}
        className={buttonVariants({
          variant: plan.highlight ? "primary" : "secondary",
          className: "w-full",
        })}
      >
        {isFree ? "Start free" : unavailable ? "Start free" : `Choose ${plan.name}`}
      </a>
      <ul className="mt-2 flex flex-col gap-2.5">
        {plan.highlights.map((h) => (
          <CheckItem key={h} className="text-sm">
            {h}
          </CheckItem>
        ))}
      </ul>
    </div>
  );
}

/** Plan cards with a billing cycle switch, and a currency switch when USD prices are set. */
export function PricingPlans({
  plans,
  defaultCycle = "monthly",
}: {
  plans: PricingPlan[];
  defaultCycle?: BillingCycle;
}) {
  const [cycle, setCycle] = React.useState<BillingCycle>(defaultCycle);
  const [currency, setCurrency] = React.useState<Currency>("BDT");
  const hasUsd = plans.some((p) => p.prices.some((x) => x.amountUsd !== null));
  const hasLifetime = plans.some((p) => p.prices.some((x) => x.isLifetime && x.available));
  const cycles = hasLifetime ? CYCLES : CYCLES.filter((c) => c.id !== "lifetime");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Segmented label="Billing cycle" options={cycles} value={cycle} onChange={setCycle} />
        {hasUsd ? (
          <Segmented
            label="Currency"
            options={[
              { id: "BDT" as Currency, label: "BDT ৳" },
              { id: "USD" as Currency, label: "USD $" },
            ]}
            value={currency}
            onChange={setCurrency}
          />
        ) : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} cycle={cycle} currency={currency} />
        ))}
      </div>
    </div>
  );
}
