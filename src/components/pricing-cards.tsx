"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Infinity as InfinityIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Pricing, PricingPlan } from "@/lib/pricing";

const LIFETIME = 0;

function cycleLabel(m: number): string {
  if (m === LIFETIME) return "Lifetime";
  if (m === 1) return "Monthly";
  if (m === 12) return "Yearly";
  return `${m} months`;
}

function suffix(m: number): string {
  if (m === LIFETIME) return "one-time";
  if (m === 1) return "/ month";
  if (m === 12) return "/ year";
  return `/ ${m} months`;
}

const bdt = (n: number) => `৳${Math.round(n).toLocaleString("en-US")}`;

export function PricingCards({ pricing, appUrl }: { pricing: Pricing; appUrl: string }) {
  const cycles = React.useMemo(() => {
    const set = new Set<number>();
    pricing.plans.forEach((p) => p.prices.forEach((x) => set.add(x.months)));
    return [...set].sort((a, b) => (a === LIFETIME ? 1 : b === LIFETIME ? -1 : a - b));
  }, [pricing]);
  const [cycle, setCycle] = React.useState<number>(cycles.includes(12) ? 12 : (cycles[0] ?? 1));

  const saving = (m: number) => {
    let best = 0;
    for (const p of pricing.plans) {
      const x = p.prices.find((y) => y.months === m);
      if (x?.compareAtBdt && x.compareAtBdt > x.amountBdt) {
        best = Math.max(best, Math.round((1 - x.amountBdt / x.compareAtBdt) * 100));
      }
    }
    return best;
  };

  return (
    <>
      {cycles.length > 1 ? (
        <div className="mb-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center p-1.5 rounded-2xl bg-muted border border-border">
            {cycles.map((m) => {
              const s = m !== LIFETIME ? saving(m) : 0;
              return (
                <button
                  key={m}
                  onClick={() => setCycle(m)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    cycle === m
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === LIFETIME ? <InfinityIcon className="w-4 h-4" /> : null}
                  <span>{cycleLabel(m)}</span>
                  {s > 0 ? (
                    <span className="px-1.5 py-0.5 rounded bg-primary-foreground/20 text-[10px] uppercase font-black">
                      Save {s}%
                    </span>
                  ) : m === LIFETIME ? (
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-[10px] uppercase font-black">
                      Limited
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {pricing.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} cycle={cycle} appUrl={appUrl} />
        ))}
      </div>
    </>
  );
}

function PlanCard({ plan, cycle, appUrl }: { plan: PricingPlan; cycle: number; appUrl: string }) {
  const isFree = plan.id === "free";
  const price = isFree ? null : (plan.prices.find((p) => p.months === cycle) ?? null);
  const unavailable = !isFree && (!price || !price.available);
  const href = isFree ? `${appUrl}/register` : `${appUrl}/register?plan=${plan.id}&months=${cycle}`;
  const strike =
    price?.compareAtBdt && price.compareAtBdt > price.amountBdt ? price.compareAtBdt : null;

  return (
    <Card
      className={`p-7 flex flex-col justify-between transition-all duration-300 relative ${
        plan.highlight
          ? "border-2 border-primary bg-card/95 shadow-2xl shadow-primary/15 xl:-translate-y-2"
          : "border-border/80 bg-card/70 backdrop-blur-xl hover:border-primary/40 hover:shadow-lg"
      }`}
    >
      {plan.highlight ? (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge
            variant="gradient"
            className="px-4 py-1 text-xs font-black uppercase tracking-widest bg-primary text-primary-foreground border-none shadow-md"
          >
            Most popular
          </Badge>
        </div>
      ) : null}

      <div>
        <h3 className="text-2xl font-black text-foreground">{plan.name}</h3>
        {plan.tagline ? (
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{plan.tagline}</p>
        ) : null}

        <div className="mt-6 min-h-[92px]">
          {isFree ? (
            <>
              <span className="text-4xl sm:text-5xl font-black text-foreground">৳0</span>
              <p className="text-sm font-semibold text-primary mt-1">Free forever</p>
            </>
          ) : price ? (
            <>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-foreground">{bdt(price.amountBdt)}</span>
                {strike ? (
                  <span className="text-sm text-muted-foreground line-through">{bdt(strike)}</span>
                ) : null}
              </div>
              <p className="text-sm font-semibold text-muted-foreground mt-1">
                {suffix(price.months)}
                {price.perMonthBdt && price.months > 1 ? ` · ${bdt(price.perMonthBdt)}/mo` : ""}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {price.label ? (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                    {price.label}
                  </span>
                ) : null}
                {price.isLifetime && price.remaining !== null && price.available ? (
                  <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 dark:text-amber-300">
                    Only {price.remaining} left
                  </span>
                ) : null}
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Not offered as {cycleLabel(cycle).toLowerCase()}.
            </p>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-border/60 space-y-3">
          {plan.highlights.map((feat) => (
            <div
              key={feat}
              className="flex items-start gap-2.5 text-sm text-foreground/90 font-medium"
            >
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4">
        {unavailable ? (
          <Button variant="outline" className="w-full font-bold h-12" disabled>
            {price && price.remaining === 0 ? "Sold out" : "Not available"}
          </Button>
        ) : (
          <Link href={href} className="w-full block">
            <Button
              variant={plan.highlight ? "gradient" : "outline"}
              className="w-full font-bold h-12"
            >
              <span>
                {isFree
                  ? "Start free"
                  : cycle === LIFETIME
                    ? `Get ${plan.name} for life`
                    : `Get ${plan.name}`}
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
}
