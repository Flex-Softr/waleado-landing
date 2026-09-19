import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070b12" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://waleado.com"),
  title: "Waleado — Enterprise WhatsApp Marketing, Chatbot & Call Automation Platform",
  description:
    "Scale customer conversations, bulk campaigns, visual chatbots, and missed call auto-replies on WhatsApp with zero ban risks. Multi-device rotation, AI spintax rewrites, and unified team inbox.",
  keywords: [
    "WhatsApp Marketing",
    "WhatsApp Automation",
    "WhatsApp Chatbot Builder",
    "WhatsApp Missed Call Auto Responder",
    "Bulk WhatsApp Sender",
    "Anti-Ban WhatsApp Marketing",
    "WhatsApp Spintax AI",
    "Multi-Device WhatsApp Hub",
    "WhatsApp Live Chat Inbox",
  ],
  authors: [{ name: "Waleado Team", url: "https://waleado.com" }],
  openGraph: {
    title: "Waleado — Next-Gen WhatsApp Marketing & Automation Platform",
    description:
      "Automate bulk broadcast campaigns, visual chatbots, missed call auto-replies, and customer conversations on WhatsApp with built-in anti-ban protection.",
    url: "https://waleado.com",
    siteName: "Waleado",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Waleado WhatsApp Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleado — Enterprise WhatsApp Marketing & Automation Platform",
    description:
      "Scale WhatsApp bulk campaigns, visual chatbots, and auto-replies with built-in anti-ban intelligence.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-500",
          outfit.variable,
          jetbrainsMono.variable,
          "font-sans"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
