"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Bot,
  ShieldCheck,
  PhoneCall,
  Users,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  {
    name: "Features",
    href: "/features",
    dropdown: [
      {
        title: "Multi-Device Hub",
        desc: "Connect 10+ WhatsApp numbers seamlessly",
        icon: Users,
        href: "/features#multi-device",
      },
      {
        title: "Bulk AI Campaigns",
        desc: "High-converting broadcasts with Spintax",
        icon: MessageSquare,
        href: "/features#bulk-campaigns",
      },
      {
        title: "Visual Chatbot Builder",
        desc: "Drag-and-drop conversational workflows",
        icon: Bot,
        href: "/features#chatbot-builder",
      },
      {
        title: "Missed Call Auto-Responder",
        desc: "Instant follow-up message on missed calls",
        icon: PhoneCall,
        href: "/features#call-responder",
      },
      {
        title: "Anti-Ban Protection",
        desc: "Randomized delays & dynamic warmup",
        icon: ShieldCheck,
        href: "/features#anti-ban",
      },
    ],
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Anti-Ban Matrix", href: "/#anti-ban" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [featureDropdownOpen, setFeatureDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 shadow-sm shadow-primary/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-teal-400 p-[1.5px] shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="Waleado Icon"
                  width={28}
                  height={28}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-primary via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Waleado
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold -mt-1">
                Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setFeatureDropdownOpen(true)}
                    onMouseLeave={() => setFeatureDropdownOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors cursor-pointer"
                      onClick={() => setFeatureDropdownOpen(!featureDropdownOpen)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                    </button>

                    {/* Dropdown Menu */}
                    {featureDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 p-2 rounded-2xl border border-border bg-popover/95 backdrop-blur-xl shadow-2xl shadow-primary/10 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="grid gap-1">
                          {link.dropdown.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setFeatureDropdownOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted/80 transition-colors group"
                              >
                                <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {subItem.title}
                                  </div>
                                  <div className="text-xs text-muted-foreground line-clamp-1">
                                    {subItem.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Link href="https://dash.waleado.app/login">
              <Button variant="ghost" size="sm" className="font-semibold">
                Sign In
              </Button>
            </Link>

            <Link href="https://dash.waleado.app/register">
              <Button variant="default" size="sm" className="font-bold">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] p-4 bg-background/95 backdrop-blur-2xl border-b border-border shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-foreground hover:bg-muted/80 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-border/80 flex flex-col gap-3">
            <Link
              href="https://dash.waleado.app/login"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button variant="outline" className="w-full font-semibold">
                Sign In
              </Button>
            </Link>
            <Link
              href="https://dash.waleado.app/register"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button variant="default" className="w-full font-bold">
                Start Free 14-Day Trial
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
