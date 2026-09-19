"use client";

import * as React from "react";
import Link from "next/link";
import {
  Smartphone,
  Send,
  Bot,
  PhoneCall,
  MessageSquare,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  Zap,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";

const features = [
  {
    id: "multi-device",
    title: "Multi-Device WhatsApp Hub",
    badge: "Session Matrix",
    description:
      "Connect 10+ WhatsApp numbers with live QR streaming and 8-digit pairing code. Monitor battery life, sync health, and distribute campaign load with automatic failover and round-robin routing.",
    icon: Smartphone,
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Instant scan-to-connect QR streaming",
      "Real-time battery & connection monitoring",
      "Multi-SIM round-robin load distribution",
      "Automatic failover session routing",
    ],
  },
  {
    id: "bulk-campaigns",
    title: "Smart Bulk AI Campaigns",
    badge: "Anti-Ban Engine",
    description:
      "Execute high-converting broadcast campaigns with intelligent spintax generation and dynamic AI rewrites. Send personalized messages to thousands of customers while mimicking organic human pacing.",
    icon: Send,
    color: "from-teal-500 to-cyan-500",
    highlights: [
      "Dynamic Spintax variation engine",
      "AI text rewrites via OpenAI, Gemini & Groq",
      "Randomized delay intervals (12s–45s)",
      "Automated quiet hours & batch cooldowns",
    ],
  },
  {
    id: "chatbot-builder",
    title: "Visual Drag-and-Drop Chatbot",
    badge: "No-Code Canvas",
    description:
      "Design powerful conversation workflows without writing a single line of code. Trigger flows by exact keywords, regex, or fuzzy matching, qualify inbound leads, and hand off to live agents.",
    icon: Bot,
    color: "from-emerald-600 to-green-500",
    highlights: [
      "Node-based visual flowchart designer",
      "Exact, fuzzy, and wildcard keyword triggers",
      "Dynamic quick reply & numbered menus",
      "Seamless human agent live chat escalation",
    ],
  },
  {
    id: "call-responder",
    title: "Missed Call Auto-Responder",
    badge: "Unique Innovation",
    description:
      "Never lose an inbound caller again. When a customer calls your WhatsApp number and you are busy or out of office, Waleado sends an immediate personalized WhatsApp message with dynamic tags.",
    icon: PhoneCall,
    color: "from-amber-500 to-orange-500",
    highlights: [
      "Auto-detect missed voice & video calls",
      "Dynamic tags: {{name}}, {{phone}}, {{time}}",
      "Custom cooldowns & office hour schedules",
      "Instant 1.2-second response dispatch",
    ],
  },
  {
    id: "live-chat",
    title: "Omnichannel Live Chat Inbox",
    badge: "Team Collaboration",
    description:
      "A unified inbox where multiple team agents can manage customer chats across all connected devices in real time. Full synchronization with bulk campaigns and automated chatbot flows.",
    icon: MessageSquare,
    color: "from-blue-500 to-indigo-500",
    highlights: [
      "Multi-agent synchronized conversation inbox",
      "Real-time incoming message notifications",
      "In-browser voice notes & file attachments",
      "Quick canned responses & internal customer notes",
    ],
  },
  {
    id: "group-grabber",
    title: "Group Grabber & Contact Manager",
    badge: "Lead Intelligence",
    description:
      "Extract active participants from your joined WhatsApp groups in one click. Import bulk CSV/Excel contact sheets with automated international country code sanitization and tagging.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    highlights: [
      "1-Click group participant extractor",
      "Bulk CSV and Excel (XLSX) import/export",
      "Automatic international phone formatter",
      "Segmented audience tags and lists",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete WhatsApp Marketing Suite</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
            Everything You Need to Turn WhatsApp Into Your{" "}
            <span className="text-gradient-emerald">#1 Revenue Channel</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Engineered from the ground up for business scale, message deliverability, and complete
            session safety.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={feature.id}
                className="rounded-3xl border border-border/80 bg-card/80 dark:bg-card/50 backdrop-blur-xl p-6 sm:p-8 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights List */}
                  <div className="mt-6 pt-6 border-t border-border/60 space-y-2.5">
                    {feature.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4">
                  <Link
                    href={`/features#${feature.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500 hover:text-emerald-400 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn how it works</span>
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
