"use client";

import * as React from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Zap,
  CheckCircle2,
} from "lucide-react";

export function RoiCalculator() {
  const [contacts, setContacts] = React.useState(5000);
  const [orderValue, setOrderValue] = React.useState(45);

  // Math models:
  // WhatsApp average open rate: 98%, click/reply: ~15%, conversion: ~3.5%
  const monthlyConversions = Math.round(contacts * 0.035);
  const estimatedRevenue = Math.round(monthlyConversions * orderValue);
  const hoursSaved = Math.round(contacts * 0.008 + 15);
  const monthlyToolCost = contacts > 10000 ? 199 : contacts > 2000 ? 79 : 29;
  const roiMultiplier = Math.max(1, Math.round(estimatedRevenue / monthlyToolCost));

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Calculate Your WhatsApp <span className="text-gradient-emerald">Revenue Growth</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            See how much more revenue and time you can generate each month using Waleado automation
            compared to email or manual messaging.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-border/80 bg-card/90 dark:bg-[#0c1322] backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-emerald-500/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Input Sliders */}
            <div className="space-y-8">
              {/* Slider 1: Monthly Contacts */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-foreground">
                    Monthly WhatsApp Contacts / Leads
                  </label>
                  <span className="text-base font-mono font-extrabold text-emerald-500">
                    {contacts.toLocaleString()} contacts
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={contacts}
                  onChange={(e) => setContacts(Number(e.target.value))}
                  className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>500</span>
                  <span>25,000</span>
                  <span>50,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Order Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-foreground">
                    Average Order / Deal Value
                  </label>
                  <span className="text-base font-mono font-extrabold text-emerald-500">
                    ${orderValue} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={orderValue}
                  onChange={(e) => setOrderValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>$10</span>
                  <span>$250</span>
                  <span>$500+</span>
                </div>
              </div>

              {/* Benchmark Highlights */}
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>98% Average Open Rate on WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>3.5% Conservative Conversion Benchmark</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Estimated Monthly Additional Revenue
                </div>
                <div className="mt-2 text-4xl sm:text-5xl font-black text-emerald-500 tracking-tight">
                  +${estimatedRevenue.toLocaleString()}{" "}
                  <span className="text-sm font-semibold text-muted-foreground">/ month</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/60">
                <div>
                  <div className="text-[11px] text-muted-foreground uppercase font-bold">
                    Team Time Saved
                  </div>
                  <div className="mt-1 text-2xl font-black text-foreground flex items-center gap-1">
                    <Clock className="w-5 h-5 text-emerald-500" />
                    <span>~{hoursSaved} hrs/mo</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-muted-foreground uppercase font-bold">
                    Projected ROI
                  </div>
                  <div className="mt-1 text-2xl font-black text-cyan-500 flex items-center gap-1">
                    <TrendingUp className="w-5 h-5" />
                    <span>{roiMultiplier}x ROI</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="http://localhost:3000/register"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/25 transition-all text-sm"
                >
                  <span>Unlock This Growth Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
