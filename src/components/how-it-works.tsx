"use client";

import * as React from "react";
import Link from "next/link";
import { QrCode, Sliders, TrendingUp, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Connect WhatsApp in 10s",
    tagline: "Instant QR & Pairing Code",
    desc: "Scan the on-screen QR code with your regular or WhatsApp Business app. No Meta developer account, complex verification, or waiting periods needed.",
    icon: QrCode,
    points: ["Zero Meta API fees", "Normal & Business WhatsApp support", "Multi-device clustering"],
  },
  {
    step: "02",
    title: "Build Campaigns or Chatbots",
    tagline: "AI Spintax & Visual Canvas",
    desc: "Import your contacts via CSV or WhatsApp group grabber. Customize dynamic variables, generate AI spintax rewrites, and configure randomized delays.",
    icon: Sliders,
    points: ["6-Step interactive wizard", "Spintax preview engine", "Visual node chatbot canvas"],
  },
  {
    step: "03",
    title: "Scale Leads & Revenue",
    tagline: "Live Inbox & 99.4% Delivery",
    desc: "Sit back as your messages deliver with human-like pacing. Your team can reply to hot leads in the unified live inbox or let the chatbot auto-close sales.",
    icon: TrendingUp,
    points: [
      "Real-time message sync",
      "Missed call auto-responder",
      "Comprehensive analytics & exports",
    ],
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 relative bg-muted/20 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <span>Simple 3-Step Setup</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            From Zero to WhatsApp Automation in{" "}
            <span className="text-gradient-emerald">3 Minutes</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            No technical skills or API keys required. Start converting your WhatsApp audience right
            away.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-border/80 bg-card/90 dark:bg-card/60 backdrop-blur-xl p-8 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-muted-foreground/30 font-mono">
                    {s.step}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">
                    {s.tagline}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                  <div className="mt-6 pt-4 border-t border-border/60 space-y-2">
                    {s.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bottom */}
        <div className="mt-12 text-center">
          <Link
            href="http://localhost:3000/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
          >
            <span>Get Started in 30 Seconds</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
