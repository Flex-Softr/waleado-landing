"use client";

import * as React from "react";
import {
  Building2,
  ShoppingBag,
  Briefcase,
  Headphones,
  Zap,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

const stats = [
  {
    label: "Messages Delivered",
    value: "15M+",
    desc: "With 99.4% inbox delivery success",
    icon: Zap,
  },
  {
    label: "Conversion Uplift",
    value: "3.8x",
    desc: "Compared to traditional email marketing",
    icon: TrendingUp,
  },
  {
    label: "Connected WhatsApp SIMs",
    value: "2,500+",
    desc: "Operating concurrently 24/7",
    icon: Shield,
  },
  {
    label: "Lead Response Time",
    value: "< 2s",
    desc: "Instant chatbot & missed call replies",
    icon: Clock,
  },
];

const brands = [
  "OmniShop Global",
  "Apex Properties",
  "Nordic Logistics",
  "Veloce Commerce",
  "PrimeScale Agency",
  "CloudPulse SaaS",
];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-border/60 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Logos */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by high-growth brands, agencies & e-commerce teams worldwide
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-foreground/80 tracking-tight hover:text-emerald-500 transition-colors cursor-default"
              >
                <Building2 className="w-4 h-4 text-emerald-500" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase">
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
