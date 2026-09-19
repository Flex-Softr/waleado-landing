"use client";

import * as React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Waleado transformed our e-commerce sales. The automated abandoned cart reminders with dynamic Spintax have generated an extra $18,400 in revenue in just 30 days.",
    author: "Omar Faruk",
    role: "Head of Growth",
    company: "TrendMart Direct",
    metric: "+340% Cart Recovery",
    stars: 5,
  },
  {
    quote:
      "The missed call auto-responder is pure magic. High-intent property buyers calling after hours immediately get our WhatsApp brochure. We closed 3 additional deals this month!",
    author: "Liam Davies",
    role: "Managing Director",
    company: "Horizon Real Estate",
    metric: "3 Extra Deals / Mo",
    stars: 5,
  },
  {
    quote:
      "Running bulk campaigns across 8 connected SIMs with round-robin rotation and zero account bans is unprecedented. Our marketing agency has completely switched to Waleado.",
    author: "Elena Rossi",
    role: "Founder & CEO",
    company: "Scalex Agency Group",
    metric: "8 SIMs Operating Safely",
    stars: 5,
  },
  {
    quote:
      "The visual chatbot builder took our support team 15 minutes to configure. It answers 75% of routine questions instantly, freeing up our human agents for complex issues.",
    author: "Rajesh Menon",
    role: "Customer Operations Lead",
    company: "PayFlow Africa",
    metric: "75% Inquiries Automated",
    stars: 5,
  },
  {
    quote:
      "No Meta developer verification headaches and zero per-message charges. We connected our WhatsApp Business number via QR code and were sending campaigns in 3 minutes.",
    author: "Sophie Dubois",
    role: "E-Commerce Founder",
    company: "Maison Botanicals",
    metric: "3 Min Onboarding",
    stars: 5,
  },
  {
    quote:
      "The live unified team inbox lets our 6 support agents collaborate simultaneously on the same WhatsApp business hotline without stepping on each other's toes.",
    author: "Tariq Al-Mansoor",
    role: "VP of Support",
    company: "NovaCloud Systems",
    metric: "6 Agents in 1 Inbox",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <span>Customer Stories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Loved by Over <span className="text-gradient-emerald">2,000+ Businesses</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Discover how companies use Waleado to drive explosive customer engagement and revenue.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-border/80 bg-card/80 dark:bg-card/50 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                    {t.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-sm text-foreground/90 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} • {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
