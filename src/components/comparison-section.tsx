"use client";

import * as React from "react";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

const rows = [
  {
    feature: "Meta Verification & Approvals Required?",
    waleado: "No (Instant QR Scan)",
    cloudApi: "Yes (Weeks of business verification)",
    chromeExt: "No (Unsafe web inject)",
  },
  {
    feature: "Per-Message Conversation Cost",
    waleado: "$0.00 / Unlimited Plans",
    cloudApi: "High Meta conversation charges",
    chromeExt: "$0.00 (High ban rate)",
  },
  {
    feature: "Template Pre-Approval Needed?",
    waleado: "Never (Send dynamic Spintax freely)",
    cloudApi: "Mandatory 24h Meta approval",
    chromeExt: "No",
  },
  {
    feature: "Multi-Device SIM Rotation & Failover",
    waleado: "Yes (Connect 10+ numbers)",
    cloudApi: "Difficult & costly to cluster",
    chromeExt: "Single browser tab only",
  },
  {
    feature: "Automated Missed Call Follow-Up",
    waleado: "Yes (Instant WhatsApp reply)",
    cloudApi: "Not supported natively",
    chromeExt: "Not supported",
  },
  {
    feature: "Visual Drag & Drop Chatbot Builder",
    waleado: "Built-in Node Canvas",
    cloudApi: "Requires 3rd-party webhook software",
    chromeExt: "Basic static auto-reply only",
  },
  {
    feature: "AI Spintax Permutations (OpenAI/Groq)",
    waleado: "Built-in 1-Click Generator",
    cloudApi: "Not supported natively",
    chromeExt: "Manual spintax only",
  },
  {
    feature: "Anti-Ban Randomized Delay & Warmup",
    waleado: "Enterprise 6-Layer Engine",
    cloudApi: "N/A (Governed by Meta tiers)",
    chromeExt: "High risk of permanent number ban",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <span>Market Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Why Teams Choose <span className="text-gradient-emerald">Waleado</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            See how Waleado stacks up against expensive official Cloud APIs and risky Chrome
            extensions.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-xl shadow-xl">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="p-5 text-sm font-bold text-foreground">Capability / Feature</th>
                <th className="p-5 text-sm font-extrabold text-emerald-500 bg-emerald-500/10 border-x border-emerald-500/20">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Waleado Platform</span>
                  </div>
                </th>
                <th className="p-5 text-sm font-semibold text-muted-foreground">
                  Official Cloud API
                </th>
                <th className="p-5 text-sm font-semibold text-muted-foreground">
                  Chrome Extensions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-xs sm:text-sm">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="p-5 font-semibold text-foreground">{row.feature}</td>
                  <td className="p-5 font-bold text-emerald-500 dark:text-emerald-400 bg-emerald-500/5 border-x border-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{row.waleado}</span>
                    </div>
                  </td>
                  <td className="p-5 text-muted-foreground">{row.cloudApi}</td>
                  <td className="p-5 text-muted-foreground">{row.chromeExt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
