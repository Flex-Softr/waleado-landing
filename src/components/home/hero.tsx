import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { SIGNUP_URL } from "@/content/site";
import { ProductPreview } from "./product-preview";

const POINTS = ["Connect with a QR scan", "Regular or Business app", "Cancel any time"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_circle_at_70%_-10%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_60%)]"
      />
      <div className="container-page relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="self-start rounded-full border border-primary/30 bg-accent px-3 py-1 text-[13px] font-semibold text-accent-foreground">
            Free forever plan · Lifetime deals open
          </span>
          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] text-foreground sm:text-6xl">
            WhatsApp automation for businesses that sell on chat
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Send campaigns, reply automatically day and night, run chatbots and answer every
            customer from one inbox. On the WhatsApp number you already use. No Meta approval
            needed.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={SIGNUP_URL} size="lg">
              Start free, no card needed
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" size="lg">
              See pricing
            </ButtonLink>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <Check className="size-4 text-primary" strokeWidth={3} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}
