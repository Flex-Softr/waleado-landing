"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/40 bg-gradient-to-br from-emerald-950/80 via-[#0a151b] to-[#081017] p-8 sm:p-14 lg:p-16 shadow-2xl shadow-emerald-500/20">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Sparkles className="w-4 h-4" />
              <span>Start Growing in Under 2 Minutes</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to Turn WhatsApp Into Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Most Profitable Channel?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              Experience the power of multi-device AI broadcasts, visual drag-and-drop chatbots, and
              automated missed call follow-ups with full anti-ban safety.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="http://localhost:3000/register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all duration-200"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-colors"
              >
                <span>Schedule 1-on-1 Demo</span>
              </Link>
            </div>

            {/* Micro badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/70 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Anti-Ban Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Instant QR Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
