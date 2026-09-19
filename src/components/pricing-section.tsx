"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";

export function PricingSection() {
  const [annual, setAnnual] = React.useState(true);

  const plans = [
    {
      name: "Starter",
      badge: "For Solo Founders & Shops",
      priceMonthly: 29,
      priceAnnual: 23,
      desc: "Perfect for small businesses getting started with WhatsApp marketing & automated customer chats.",
      popular: false,
      features: [
        "1 Connected WhatsApp Device",
        "5,000 Messages / month",
        "Visual Node Chatbot Builder",
        "Group Contact Grabber",
        "Standard Anti-Ban Safety Delays",
        "1 Team Member Seat",
        "Community & Email Support",
      ],
      cta: "Start 14-Day Free Trial",
      href: "http://localhost:3000/register?plan=starter",
    },
    {
      name: "Professional",
      badge: "Most Popular • Growth Teams",
      priceMonthly: 79,
      priceAnnual: 63,
      desc: "Everything you need to run high-volume broadcasts, automated call follow-ups, and multi-SIM campaigns.",
      popular: true,
      features: [
        "5 Connected WhatsApp Devices",
        "50,000 Messages / month",
        "Dynamic AI Spintax Rewriter (OpenAI & Groq)",
        "Automated Missed Call & Video Call Responder",
        "Multi-SIM Round-Robin & Failover Rotation",
        "Unified Team Inbox (5 Seats Included)",
        "Advanced Anti-Ban Randomized Jitter Engine",
        "Priority 24/7 WhatsApp & Email Support",
      ],
      cta: "Start 14-Day Free Trial",
      href: "http://localhost:3000/register?plan=pro",
    },
    {
      name: "Enterprise",
      badge: "Agencies & Scale-ups",
      priceMonthly: 199,
      priceAnnual: 159,
      desc: "Unlimited scale for marketing agencies, high-volume e-commerce brands, and enterprise teams.",
      popular: false,
      features: [
        "Unlimited Connected WhatsApp Devices",
        "Unlimited Monthly Messages",
        "Custom Dedicated IP & Proxy Routing",
        "Advanced Custom AI Knowledge Base Agents",
        "Unlimited Team Member Seats",
        "Custom Webhook & CRM API Integrations",
        "Dedicated Account Manager & 99.9% SLA",
      ],
      cta: "Contact Enterprise Sales",
      href: "/contact",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-muted/20 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="gradient" className="gap-1.5 px-3.5 py-1 text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simple, Transparent Pricing</span>
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Predictable Plans for{" "}
            <span className="text-gradient-emerald">Every Stage of Growth</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            All plans include full access to the anti-ban suite and 14-day risk-free trial. No
            hidden per-conversation charges.
          </p>

          {/* Billing Interval Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-muted border border-border">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !annual
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                annual
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded bg-primary-foreground/20 text-[10px] uppercase font-black">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <Card
                key={i}
                className={`p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "border-2 border-primary bg-card/95 shadow-2xl shadow-primary/15 lg:-translate-y-2"
                    : "border-border/80 bg-card/70 backdrop-blur-xl hover:border-primary/40 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge
                      variant="gradient"
                      className="px-4 py-1 text-xs font-black uppercase tracking-widest bg-primary text-primary-foreground border-none shadow-md"
                    >
                      Recommended Choice
                    </Badge>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black text-foreground">{plan.name}</h3>
                      <p className="text-xs font-semibold text-primary mt-0.5">{plan.badge}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{plan.desc}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground">
                      ${price}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      / month{" "}
                      {annual && (
                        <span className="text-xs block text-primary font-medium">
                          (billed annually)
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Feature checklist */}
                  <div className="mt-8 pt-6 border-t border-border/60 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Included with {plan.name}:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <Link href={plan.href} className="w-full block">
                    <Button
                      variant={plan.popular ? "gradient" : "outline"}
                      className="w-full font-bold h-12"
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Payment Gateways Bar */}
        <div className="mt-16 text-center text-xs text-muted-foreground space-y-2">
          <div className="flex items-center justify-center gap-2 font-medium">
            <CreditCard className="w-4 h-4 text-primary" />
            <span>
              Supported payment methods: Credit Cards (Visa / Mastercard / Amex), Stripe,
              SSLCommerz, bKash, Nagad, Rocket & Bank Transfers
            </span>
          </div>
          <div className="text-[11px] text-muted-foreground/80">
            🔒 All transactions are secured with 256-bit SSL encryption. Cancel anytime with 1
            click.
          </div>
        </div>
      </div>
    </section>
  );
}
