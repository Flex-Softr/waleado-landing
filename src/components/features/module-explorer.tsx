"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-link";
import { CheckItem } from "@/components/marketing/check-item";
import { MODULE_GROUPS, MODULES, type ProductModule } from "@/content/modules";
import { SIGNUP_URL } from "@/content/site";
import { cn } from "@/lib/utils";
import { ModuleIcon } from "./module-icon";

function ModulePanel({ module, active }: { module: ProductModule; active: boolean }) {
  return (
    // Every panel is in the HTML so search engines read all modules; only the active one is shown.
    <div
      role="tabpanel"
      id={`panel-${module.slug}`}
      aria-labelledby={`tab-${module.slug}`}
      hidden={!active}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex flex-col gap-5 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-primary/30 bg-accent px-2.5 py-1 text-[13px] font-semibold text-accent-foreground">
              {module.group}
            </span>
            <span className="rounded-full bg-subtle px-2.5 py-1 text-[13px] font-semibold text-muted-foreground ring-1 ring-border">
              {module.plans}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ModuleIcon name={module.icon} />
            <h2 className="text-3xl font-extrabold leading-tight text-foreground">{module.name}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {module.summary}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {module.highlights.map((h) => (
              <CheckItem key={h} className="rounded-xl bg-subtle p-3.5">
                {h}
              </CheckItem>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href={`/features/${module.slug}`} className={buttonVariants()}>
              Explore {module.name.toLowerCase()}{" "}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={SIGNUP_URL} className={buttonVariants({ variant: "secondary" })}>
              Try it free
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="flex flex-col gap-2.5 border-t border-border bg-subtle p-6 sm:px-9"
        >
          {module.preview.map((line, i) => (
            <div
              key={line}
              className={cn(
                "rounded-xl border border-border bg-card px-4 py-3 text-sm",
                i === 0 ? "font-semibold text-foreground" : "text-muted-foreground"
              )}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Module list on the left, details on the right. Stacks into scrollable tabs on small screens. */
export function ModuleExplorer() {
  const [active, setActive] = React.useState(MODULES[1].slug);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
      <div
        role="tablist"
        aria-label="Waleado modules"
        aria-orientation="vertical"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0"
      >
        {MODULE_GROUPS.map((group) => (
          <React.Fragment key={group}>
            <span className="hidden px-3 pb-1.5 pt-4 text-xs font-bold uppercase tracking-[0.06em] text-muted-foreground first:pt-0 lg:block">
              {group}
            </span>
            {MODULES.filter((m) => m.group === group).map((m) => {
              const selected = m.slug === active;
              return (
                <button
                  key={m.slug}
                  id={`tab-${m.slug}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${m.slug}`}
                  onClick={() => setActive(m.slug)}
                  className={cn(
                    "h-11 shrink-0 whitespace-nowrap rounded-xl px-3.5 text-left text-[15px] transition-colors",
                    selected
                      ? "bg-accent font-bold text-accent-foreground"
                      : "font-medium text-muted-foreground ring-1 ring-border hover:bg-subtle hover:text-foreground lg:ring-0"
                  )}
                >
                  {m.name}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="min-w-0">
        {MODULES.map((m) => (
          <ModulePanel key={m.slug} module={m} active={m.slug === active} />
        ))}
      </div>
    </div>
  );
}
