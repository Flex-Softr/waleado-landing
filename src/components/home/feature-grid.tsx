import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ModuleIcon } from "@/components/features/module-icon";
import { getModule } from "@/content/modules";

const HOME_MODULES = [
  "bulk-whatsapp-campaigns",
  "whatsapp-auto-reply",
  "whatsapp-ai-agent",
  "whatsapp-chatbot-builder",
  "whatsapp-live-chat-inbox",
  "whatsapp-missed-call-auto-reply",
];

export function FeatureGrid() {
  const modules = HOME_MODULES.map(getModule).filter((m) => m !== undefined);
  return (
    <section id="features" className="container-page py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to sell and support on WhatsApp"
          description="One place for campaigns, automation and conversations, so no customer message slips through."
        />
        <Link
          href="/features"
          className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
        >
          See all 12 modules <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <Link
            key={m.slug}
            href={`/features/${m.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
          >
            <ModuleIcon name={m.icon} />
            <h3 className="text-xl font-bold text-foreground">{m.name}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{m.summary}</p>
            <span className="mt-auto pt-2 text-sm font-semibold text-primary group-hover:underline">
              Learn more
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
