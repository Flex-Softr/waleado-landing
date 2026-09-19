"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Smartphone,
  Send,
  Bot,
  PhoneMissed,
  MessageCircle,
  TrendingUp,
  RefreshCw,
  QrCode,
  BatteryCharging,
  Play,
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = React.useState<
    "devices" | "campaign" | "chatbot" | "call" | "inbox"
  >("campaign");

  const [spintaxVariant, setSpintaxVariant] = React.useState(0);
  const spintaxExamples = [
    "Hello Sarah! 👋 Your VIP coupon code VIP25 is ready for instant checkout.",
    "Hi Sarah! ✨ We reserved your VIP coupon VIP25. Click here to claim it today.",
    "Hey there Sarah! 🎉 Enjoy 25% off with code VIP25 before midnight tonight.",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-primary/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <Badge
            variant="gradient"
            className="gap-2 px-4 py-1.5 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="font-bold">Waleado 2.0 Engine</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground/90 font-medium">
              Multi-Device AI Spintax & Missed Call Auto-Reply
            </span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </Badge>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-foreground">
            Scale WhatsApp Marketing{" "}
            <span className="block mt-1 sm:mt-2 text-gradient-emerald">
              Without Getting Banned.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The enterprise WhatsApp automation suite. Connect multiple devices, launch bulk
            campaigns with dynamic AI spintax rewrites, build visual chatbots, and auto-reply to
            missed calls on autopilot.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="http://localhost:3000/register" className="w-full sm:w-auto">
              <Button
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto font-bold text-base px-8 h-13 shadow-xl"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <a href="#live-demo" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-semibold text-base px-6 h-13 backdrop-blur-md"
              >
                <Play className="w-4 h-4 fill-current text-primary mr-2" />
                <span>Watch Interactive Tour</span>
              </Button>
            </a>
          </div>

          {/* Micro trust signals */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>1-Click QR Setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>99.4% Delivery rate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Anti-Ban Safeguards</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Platform Showcase */}
        <div id="live-demo" className="mt-14 sm:mt-18">
          <Card className="border-border/80 bg-card/90 dark:bg-card/70 backdrop-blur-2xl shadow-2xl shadow-primary/10 p-3 sm:p-6 lg:p-8">
            {/* Top Showcase Toolbar & Tabs */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">
                  app.waleado.com / dashboard-preview
                </span>
              </div>

              {/* Showcase Tab Switcher */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-muted/60 border border-border/50">
                <button
                  onClick={() => setActiveTab("campaign")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === "campaign"
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Bulk AI Spintax</span>
                </button>

                <button
                  onClick={() => setActiveTab("devices")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === "devices"
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Multi-Device Hub</span>
                </button>

                <button
                  onClick={() => setActiveTab("chatbot")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === "chatbot"
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Visual Chatbot</span>
                </button>

                <button
                  onClick={() => setActiveTab("call")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === "call"
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <PhoneMissed className="w-3.5 h-3.5" />
                  <span>Call Responder</span>
                </button>

                <button
                  onClick={() => setActiveTab("inbox")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === "inbox"
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Live Inbox</span>
                </button>
              </div>
            </div>

            {/* Showcase Tab Content Panels */}
            <div className="mt-6">
              {/* 1. Bulk Campaign Wizard Preview */}
              {activeTab === "campaign" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 rounded-2xl border border-border bg-background/60">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="text-[11px] uppercase font-bold">
                            Step 3 / 6: AI Spintax Engine
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Campaign: Black Friday Flash Sale
                          </span>
                        </div>
                        <span className="text-xs text-primary font-semibold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Anti-Ban Active
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-muted/50 border border-border/70 font-mono text-xs text-foreground/90 leading-relaxed">
                        <span className="text-primary font-bold">&#123;Hello|Hi|Hey&#125;</span>{" "}
                        &#123;&#123;name&#125;&#125;! 👋 We reserved your VIP coupon{" "}
                        <span className="text-cyan-500 font-bold">VIP25</span>.{" "}
                        <span className="text-primary font-bold">
                          &#123;Click here to claim it today|Enjoy 25% off before midnight|Your
                          exclusive discount is ready&#125;
                        </span>
                        .
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>AI Variational Multiplier: 9 unique versions generated</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setSpintaxVariant((prev) => (prev + 1) % spintaxExamples.length)
                          }
                          className="text-primary hover:text-primary"
                        >
                          <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                          <span>Simulate Next Recipient</span>
                        </Button>
                      </div>
                    </div>

                    {/* Safety Delay Configuration Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-2xl border border-border bg-background/50">
                        <div className="text-[11px] text-muted-foreground uppercase font-bold">
                          Randomized Delay
                        </div>
                        <div className="mt-1 text-base font-bold text-foreground">
                          12s – 35s{" "}
                          <span className="text-xs font-normal text-primary">(Human-like)</span>
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl border border-border bg-background/50">
                        <div className="text-[11px] text-muted-foreground uppercase font-bold">
                          Active Device Rotation
                        </div>
                        <div className="mt-1 text-base font-bold text-foreground">
                          3 Connected SIMs
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl border border-border bg-background/50">
                        <div className="text-[11px] text-muted-foreground uppercase font-bold">
                          Delivery Forecast
                        </div>
                        <div className="mt-1 text-base font-bold text-primary flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" /> 99.8% Success
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recipient Phone Preview */}
                  <div className="lg:col-span-5 bg-[#0b141a] text-white p-4 rounded-3xl border border-border shadow-xl">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
                      <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm">
                        W
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Waleado Store</div>
                        <div className="text-[10px] text-emerald-400">
                          Online • WhatsApp Official
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="bg-[#202c33] p-3.5 rounded-2xl rounded-tl-none max-w-[88%] text-xs leading-relaxed shadow-sm">
                        <p>{spintaxExamples[spintaxVariant]}</p>
                        <div className="mt-1.5 flex items-center justify-end gap-1 text-[10px] text-gray-400">
                          <span>10:42 AM</span>
                          <span className="text-emerald-400">✓✓</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-center text-[11px] text-emerald-300">
                        ⚡ AI Spintax delivered unique permutation #{spintaxVariant + 1}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Multi-Device Hub Preview */}
              {activeTab === "devices" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl border border-primary/40 bg-primary/5 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold text-primary uppercase">
                          Primary Sales SIM
                        </span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <BatteryCharging className="w-3.5 h-3.5 text-primary" /> 92%
                      </span>
                    </div>
                    <div className="mt-3 text-lg font-bold text-foreground">+1 (555) 019-2834</div>
                    <div className="text-xs text-muted-foreground">
                      Session active • Baileys Bridge v6
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/60 flex justify-between text-xs">
                      <span className="text-muted-foreground">Processed Today:</span>
                      <span className="font-bold text-foreground">1,420 msgs</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-primary/40 bg-primary/5 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold text-primary uppercase">
                          Support Hotline
                        </span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <BatteryCharging className="w-3.5 h-3.5 text-primary" /> 84%
                      </span>
                    </div>
                    <div className="mt-3 text-lg font-bold text-foreground">+44 7700 900481</div>
                    <div className="text-xs text-muted-foreground">
                      Session active • Round-Robin Pool
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/60 flex justify-between text-xs">
                      <span className="text-muted-foreground">Processed Today:</span>
                      <span className="font-bold text-foreground">890 msgs</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-dashed border-border bg-muted/30 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-foreground">Add New Device</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Instant QR Scan or 8-Digit Pairing Code
                    </div>
                    <Button variant="default" size="xs" className="mt-3 font-bold">
                      Connect SIM #3
                    </Button>
                  </div>
                </div>
              )}

              {/* 3. Visual Chatbot Builder Preview */}
              {activeTab === "chatbot" && (
                <div className="p-6 rounded-2xl border border-border bg-muted/20 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="p-4 rounded-2xl border border-cyan-500/40 bg-card shadow-sm">
                      <div className="flex items-center gap-2 text-cyan-500 text-xs font-bold uppercase mb-2">
                        <Zap className="w-3.5 h-3.5" /> Trigger: Inbound Keyword
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        Matches: &quot;pricing&quot; | &quot;order&quot;
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Exact & Fuzzy regex match
                      </div>
                    </div>

                    <div className="hidden md:flex justify-center text-primary">
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                    </div>

                    <div className="p-4 rounded-2xl border border-primary/40 bg-card shadow-sm">
                      <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase mb-2">
                        <Bot className="w-3.5 h-3.5" /> Action: Send Menu Options
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        1. View Plans 2. Speak to Agent
                      </div>
                      <div className="text-xs text-primary mt-1">
                        ✓ Auto-routes based on user reply
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Automated Call Responder Preview */}
              {activeTab === "call" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <Badge variant="destructive" className="gap-1.5 font-bold">
                      <PhoneMissed className="w-3.5 h-3.5" /> Inbound Voice / Video Call Missed
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      Never Lose a Call Lead Again
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Whenever a customer calls your WhatsApp business number and you are unable to
                      answer, Waleado automatically triggers an immediate personalized follow-up
                      message with dynamic tags.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0b141a] text-white border border-border shadow-md">
                    <div className="flex items-center gap-2 text-red-400 text-xs mb-2">
                      <PhoneMissed className="w-3.5 h-3.5" /> Missed WhatsApp Call from +1 (917)
                      482-9901
                    </div>
                    <div className="bg-[#202c33] p-3.5 rounded-xl text-xs space-y-1">
                      <div className="text-emerald-400 font-bold">Auto-Response Sent (1.2s):</div>
                      <p>
                        &quot;Hi! 👋 Sorry we missed your call. How can our team assist you right
                        now? Reply 1 for Sales or 2 for Support.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Live Inbox Preview */}
              {activeTab === "inbox" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-4 border border-border rounded-2xl p-3 bg-background/50 space-y-2">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                      <div className="text-xs font-bold text-foreground">Marcus Vance</div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1">
                        I want to upgrade to Enterprise...
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="text-xs font-bold text-foreground">Sophia Chen</div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1">
                        Tracking number received, thanks!
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-8 border border-border rounded-2xl p-4 bg-background/50 flex flex-col justify-between h-44">
                    <div className="text-xs text-muted-foreground">
                      Marcus Vance • Synced across 2 active team agents
                    </div>
                    <div className="bg-primary/10 border border-primary/20 p-3 rounded-2xl text-xs text-foreground self-end max-w-[85%]">
                      Hello Marcus! We have upgraded your workspace. Your 10 connected devices are
                      ready!
                    </div>
                    <div className="text-[10px] text-primary text-right font-medium">
                      Delivered & Read ✓✓
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
