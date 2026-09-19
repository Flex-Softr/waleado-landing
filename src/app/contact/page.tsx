"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Mail,
  CheckCircle2,
  ArrowRight,
  Send,
  MessageSquare,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    volume: "10,000 – 50,000 messages / mo",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Information */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="gradient" className="gap-1.5 px-3.5 py-1 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Talk to WhatsApp Automation Experts</span>
              </Badge>

              <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
                Let&apos;s Scale Your WhatsApp{" "}
                <span className="text-gradient-emerald">Conversions</span>
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                Whether you need a personalized enterprise demo, custom pricing for large volume
                broadcasts, or API consultation, our team is here to assist.
              </p>

              <div className="space-y-4 pt-4">
                <Card className="flex items-start gap-4 p-5 rounded-2xl border-border bg-card/60">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Instant WhatsApp Demo</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Chat directly with our live WhatsApp sales bot
                    </div>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-2 hover:underline"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-5 rounded-2xl border-border bg-card/60">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Email Support & Sales</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      sales@waleado.com • 24-hour response SLA
                    </div>
                  </div>
                </Card>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 text-xs text-muted-foreground space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Enterprise Security & Data Confidentiality</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Your contact information will only be used to answer your inquiry and schedule
                  your requested product tour.
                </p>
              </div>
            </div>

            {/* Right Column: Contact / Demo Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Demo Request Received!</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out,{" "}
                      <span className="font-semibold text-foreground">{formData.name}</span>. A
                      Waleado product specialist will contact you via WhatsApp and email within 2
                      business hours.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-foreground">Schedule a Live Demo</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Johnson"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Work Email *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          WhatsApp Phone Number *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Company / Brand Name
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Commerce"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        Expected Monthly Broadcast Volume
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-input bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring transition-colors"
                      >
                        <option>1,000 – 10,000 messages / mo</option>
                        <option>10,000 – 50,000 messages / mo</option>
                        <option>50,000 – 200,000 messages / mo</option>
                        <option>200,000+ messages / mo (Enterprise Scale)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        How can we help your team?
                      </label>
                      <Textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your WhatsApp marketing goals, desired integrations, or team setup..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full font-bold shadow-xl"
                    >
                      <Send className="w-4 h-4 mr-1.5" />
                      <span>Request Personalized Demo</span>
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
