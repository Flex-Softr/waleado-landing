"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck, Heart, Globe, MessageSquare, Mail, Send } from "lucide-react";

const footerNavigation = {
  product: [
    { name: "Multi-Device Hub", href: "/features#multi-device" },
    { name: "Bulk AI Campaigns", href: "/features#bulk-campaigns" },
    { name: "Visual Chatbot Builder", href: "/features#chatbot-builder" },
    { name: "Missed Call Auto-Responder", href: "/features#call-responder" },
    { name: "Omnichannel Live Inbox", href: "/features#live-chat" },
    { name: "Group Contact Grabber", href: "/features#group-grabber" },
    { name: "Anti-Ban Protection", href: "/#anti-ban" },
  ],
  solutions: [
    { name: "E-Commerce & DTC", href: "/solutions#ecommerce" },
    { name: "Real Estate & Agencies", href: "/solutions#realestate" },
    { name: "Marketing Agencies", href: "/solutions#agencies" },
    { name: "Customer Support Desks", href: "/solutions#support" },
    { name: "ROI Calculator", href: "/#roi-calculator" },
  ],
  resources: [
    { name: "Pricing & Plans", href: "/pricing" },
    { name: "Documentation & API", href: "http://localhost:4000/api-docs" },
    { name: "Contact & Demo", href: "/contact" },
    { name: "System Status", href: "#" },
    { name: "Client Portal Login", href: "http://localhost:3000/login" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security & Encryption", href: "/#anti-ban" },
    { name: "WhatsApp Compliance", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/60 dark:bg-[#080d16] text-muted-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/icon.png"
                    alt="Waleado Icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Waleado
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold -mt-1">
                  Enterprise Automation
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              The next-generation multi-device WhatsApp marketing, visual chatbot automation, missed
              call auto-responder, and team collaboration suite.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Systems Operational (99.9% Uptime)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Platform Modules
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-emerald-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-emerald-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Resources & Legal
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-emerald-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-emerald-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>&copy; {new Date().getFullYear()} Waleado & Flex-Softr. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-emerald-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-emerald-500 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
