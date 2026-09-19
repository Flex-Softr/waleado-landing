"use client";

import * as React from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Building,
  Briefcase,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    tagline: "Turn Abandoned Carts Into Instant Sales",
    icon: ShoppingBag,
    color: "from-emerald-500 to-teal-500",
    metrics: "+340% Recovery Rate",
    description:
      "Send automatic abandoned cart reminders with personalized discount codes, dispatch instant order and shipping updates, and launch high-converting flash sale broadcasts.",
    benefits: [
      "Automated WhatsApp abandoned cart recovery",
      "Order status & tracking number broadcasts",
      "VIP customer flash sale notifications",
      "Dynamic Spintax promo code distribution",
    ],
  },
  {
    id: "realestate",
    title: "Real Estate & Agencies",
    tagline: "Qualify High-Ticket Inquiries in Seconds",
    icon: Building,
    color: "from-blue-500 to-cyan-500",
    metrics: "2.4x Faster Closings",
    description:
      "When buyers call or message about a property listing, instantly trigger PDF brochures, schedule site visit viewings, and auto-reply to missed buyer calls 24/7.",
    benefits: [
      "Automated property brochure sending via chatbot",
      "Instant missed call response for hot buyer leads",
      "Site inspection date selection menu",
      "VIP investor group broadcasts",
    ],
  },
  {
    id: "agencies",
    title: "Marketing Agencies",
    tagline: "Deliver 10x ROI for Multiple Client Brands",
    icon: Briefcase,
    color: "from-purple-500 to-indigo-500",
    metrics: "Multi-Tenant Ready",
    description:
      "Connect separate client WhatsApp numbers into dedicated workspace accounts. Execute massive client campaigns with full anti-ban protection and detailed exportable metrics.",
    benefits: [
      "Multi-device SIM rotation for bulk outreach",
      "1-Click group contact extraction for targeted lists",
      "AI text rewrite variants per campaign",
      "Detailed delivery and response analytics",
    ],
  },
  {
    id: "support",
    title: "Customer Support & SaaS",
    tagline: "Resolve 70% of Inquiries Without Human Staff",
    icon: Headphones,
    color: "from-amber-500 to-orange-500",
    metrics: "< 2s First Response",
    description:
      "Deploy interactive keyword-driven chatbots to answer repetitive questions, handle billing inquiries, and seamlessly escalate complex cases to live human agents in the unified inbox.",
    benefits: [
      "24/7 automated FAQ and onboarding bot",
      "Seamless escalation to live human agent",
      "Unified multi-agent synchronized team inbox",
      "Quick canned replies and customer conversation tags",
    ],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <span>Tailored Industry Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Designed for How Your <span className="text-gradient-emerald">Industry Sells</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Whether you run a high-volume online store, an agency, or a real estate team, Waleado
            fits your exact workflow.
          </p>
        </div>

        {/* 2x2 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="p-8 rounded-3xl border border-border/80 bg-card/80 dark:bg-card/50 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${sol.color} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {sol.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">{sol.title}</h3>
                  <div className="text-sm font-semibold text-emerald-500 mt-0.5">{sol.tagline}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border/60 space-y-2.5">
                    {sol.benefits.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={`/solutions#${sol.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500 hover:text-emerald-400 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore {sol.title} Use Cases</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
