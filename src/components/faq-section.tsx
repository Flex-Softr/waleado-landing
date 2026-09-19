"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How does Waleado prevent my WhatsApp number from getting banned?",
    a: "Waleado utilizes a proprietary 6-layer anti-ban protection matrix. This includes randomized human delays (12s–45s), spintax text permutations ({Hello|Hi|Hey}), multi-device SIM rotation, automated quiet hours, and auto-pause safety limits that prevent spam triggers and account flags.",
  },
  {
    q: "Do I need a Meta / Facebook Business verification or Cloud API?",
    a: "No! You do not need any Meta developer accounts, complex business paperwork, or approval waiting periods. Simply scan the QR code using your WhatsApp app, and your connection is established instantly in under 10 seconds.",
  },
  {
    q: "Can I connect both personal WhatsApp and WhatsApp Business accounts?",
    a: "Yes. Waleado supports standard WhatsApp personal numbers as well as WhatsApp Business numbers. You can even mix and match multiple numbers within the same workspace.",
  },
  {
    q: "How does the Missed Call Auto-Responder work?",
    a: "When an inbound voice or video call is placed to your connected WhatsApp number and goes unanswered (missed or rejected), Waleado immediately detects the call event and dispatches a pre-configured, personalized WhatsApp message with dynamic tags like {{name}} and {{phone}} in ~1.2 seconds.",
  },
  {
    q: "Can multiple team members manage conversations at the same time?",
    a: "Yes. Waleado includes a multi-agent unified Live Chat Inbox. Your sales and support agents can log in, view live message feeds, tag conversations, add internal team notes, and reply to customers simultaneously without sharing WhatsApp phone handsets.",
  },
  {
    q: "How does the AI Spintax Rewrite Generator work?",
    a: "You can provide a base message template or ask our built-in AI (integrated with OpenAI, Gemini, and Groq) to generate spintax variations automatically. The engine produces dozens of unique linguistic versions, ensuring each recipient receives a freshly formatted message.",
  },
  {
    q: "Can I extract contacts from WhatsApp groups I have joined?",
    a: "Yes. The built-in Group Grabber tool lets you extract all active participant phone numbers from any WhatsApp group you are a member of with a single click, automatically formatting international country codes for campaign targeting.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, American Express) via Stripe, as well as SSLCommerz (bKash, Nagad, Rocket, Net Banking, and regional payment gateways).",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 relative bg-muted/20 border-t border-border/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge variant="gradient" className="gap-1.5 px-3.5 py-1 text-xs">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Frequently Asked <span className="text-gradient-emerald">Questions</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Everything you need to know about Waleado WhatsApp marketing & automation.
          </p>
        </div>

        {/* Shadcn Accordion */}
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
