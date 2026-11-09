import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { LOGIN_URL, NAV_LINKS, SIGNUP_URL } from "@/content/site";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page relative flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={LOGIN_URL}
            className="hidden px-2 text-[15px] font-medium text-muted-foreground hover:text-foreground md:inline"
          >
            Sign in
          </a>
          <ButtonLink href={SIGNUP_URL} size="sm" className="hidden sm:inline-flex">
            Start free
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
