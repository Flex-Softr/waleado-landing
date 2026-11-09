"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-link";
import { LOGIN_URL, NAV_LINKS, SIGNUP_URL } from "@/content/site";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center rounded-xl border border-border text-foreground"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-border bg-background px-5 pb-6 pt-2 shadow-lg"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href={LOGIN_URL} className={buttonVariants({ variant: "secondary" })}>
              Sign in
            </a>
            <a href={SIGNUP_URL} className={buttonVariants()}>
              Start free
            </a>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
