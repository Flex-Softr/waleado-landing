/** Site-wide facts used by pages, metadata and structured data. */
export const SITE = {
  name: "Waleado",
  url: "https://waleado.app",
  appUrl: process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://dash.waleado.app",
  email: "waleado.app@gmail.com",
  description:
    "Waleado is WhatsApp marketing and automation software for small and growing businesses: bulk campaigns, auto-replies, AI agent, chatbot builder, live chat inbox and an API, on the WhatsApp number you already use.",
  tagline: "WhatsApp campaigns, automation and live chat for growing businesses.",
} as const;

export const SIGNUP_URL = `${SITE.appUrl}/register`;
export const LOGIN_URL = `${SITE.appUrl}/login`;

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
] as const;
