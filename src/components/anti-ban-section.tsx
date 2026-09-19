"use client";

import * as React from "react";
import {
  ShieldCheck,
  Zap,
  Lock,
  Clock,
  Shuffle,
  RefreshCw,
  Sliders,
  AlertTriangle,
  Flame,
} from "lucide-react";

const safeguards = [
  {
    title: "Randomized Human Delays",
    desc: "Configurable pause intervals between 12s and 45s. Adds randomized millisecond jitter to emulate natural human typing patterns.",
    icon: Clock,
  },
  {
    title: "Spintax Permutation Engine",
    desc: "Transforms greetings, bodies, and CTAs into dozens of unique combinations so no two recipients receive the exact same text hash.",
    icon: Shuffle,
  },
  {
    title: "Multi-Device Load Distribution",
    desc: "Automatically rotates broadcasts across multiple connected SIMs with round-robin balancing to keep single-device traffic safe.",
    icon: RefreshCw,
  },
  {
    title: "Warm-Up Volume Ramping",
    desc: "Gradually increases daily message volume for newly connected WhatsApp numbers to build organic sender reputation.",
    icon: Flame,
  },
  {
    title: "Quiet Hours & Sleep Modes",
    desc: "Restricts campaign execution during non-business hours (e.g. 10 PM – 8 AM) to minimize spam reports and customer complaints.",
    icon: Lock,
  },
  {
    title: "Auto-Pause Safety Thresholds",
    desc: "Instantly pauses campaign queues if delivery failure rates spike, preventing account flags before they happen.",
    icon: AlertTriangle,
  },
];

export function AntiBanSection() {
  return (
    <section
      id="anti-ban"
      className="py-20 md:py-28 relative bg-muted/40 border-y border-border/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Enterprise Anti-Ban Safeguards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
              Built to Keep Your WhatsApp Accounts Safe & Operational
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Traditional broadcast extensions trigger instant account bans because they fire
              identical messages simultaneously. Waleado uses an intelligent 6-layer anti-ban
              architecture that emulates authentic human behavior.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {safeguards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border border-border bg-card/80 backdrop-blur-sm space-y-2 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Interactive Graphic */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-emerald-500/30 bg-card/90 dark:bg-[#0c121e] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Top Status */}
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                    Live Anti-Ban Matrix Active
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  Safety Score: 99.8 / 100
                </span>
              </div>

              {/* Simulation Steps */}
              <div className="mt-6 space-y-4">
                {/* Step 1 */}
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <div className="font-bold text-foreground">Spintax Hash Variator</div>
                      <div className="text-[11px] text-muted-foreground">
                        Generated 12 distinct variations per batch
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                    PASSED
                  </span>
                </div>

                {/* Step 2 */}
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <div className="font-bold text-foreground">Humanized Jitter Delay</div>
                      <div className="text-[11px] text-muted-foreground">
                        Pacing set between 15,200ms – 28,400ms
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                    ACTIVE
                  </span>
                </div>

                {/* Step 3 */}
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <div className="font-bold text-foreground">Multi-Device SIM Rotation</div>
                      <div className="text-[11px] text-muted-foreground">
                        Swapping between SIM #1 (+1...) and SIM #2 (+44...)
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                    BALANCED
                  </span>
                </div>

                {/* Step 4 */}
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <div className="font-bold text-foreground">Quiet Hours Policy</div>
                      <div className="text-[11px] text-muted-foreground">
                        Broadcast window restricted: 09:00 AM – 09:00 PM
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                    ENFORCED
                  </span>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Bank-Grade End-to-End Encryption
                </span>
                <span className="font-bold text-foreground">99.4% Inbox Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
