import Link from "next/link";
import { MODULES } from "@/content/modules";
import { SITE } from "@/content/site";
import { Logo } from "./logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "All features" },
      { href: "/pricing", label: "Pricing" },
      ...MODULES.filter((m) =>
        [
          "bulk-whatsapp-campaigns",
          "whatsapp-auto-reply",
          "whatsapp-chatbot-builder",
          "whatsapp-api-and-integrations",
        ].includes(m.slug)
      ).map((m) => ({
        href: `/features/${m.slug}`,
        label: m.name,
      })),
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/guides/bulk-whatsapp-messages-without-ban", label: "Safe bulk sending" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-subtle">
      <div className="container-page py-14">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-xs flex-col gap-3">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">{SITE.tagline}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {SITE.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-12 sm:gap-16">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title} className="flex flex-col gap-2.5">
                <span className="text-sm font-bold text-foreground">{col.title}</span>
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-6 text-[13px] leading-relaxed text-muted-foreground">
          © {new Date().getFullYear()} Waleado. WhatsApp is a trademark of Meta Platforms, Inc.
          Waleado is not affiliated with or endorsed by Meta or WhatsApp.
        </p>
      </div>
    </footer>
  );
}
