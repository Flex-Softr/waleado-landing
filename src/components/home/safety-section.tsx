import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SAFEGUARDS = [
  { title: "Number rotation", text: "Split a campaign across several connected numbers." },
  { title: "Random delays", text: "Natural gaps between messages, set by you." },
  { title: "AI message variants", text: "Each contact gets slightly different wording." },
  { title: "Quiet hours", text: "Pause at night in your customers' time zone." },
];

export function SafetySection() {
  return (
    <section className="bg-inverse text-inverse-foreground dark:border-y dark:border-border">
      <div className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#6ce9a6]">
            Safer sending
          </span>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
            Built-in safeguards for your WhatsApp numbers
          </h2>
          <p className="text-lg leading-relaxed text-inverse-muted">
            Sending too fast from one number is the main reason accounts get restricted. Waleado
            spreads the load and keeps your sending pattern human. No tool can remove the risk
            completely, but these settings lower it a lot.
          </p>
          <Link
            href="/guides/bulk-whatsapp-messages-without-ban"
            className="inline-flex items-center gap-1.5 self-start font-semibold text-[#6ce9a6] hover:underline"
          >
            Read the safe sending guide <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid gap-3.5 sm:grid-cols-2">
          {SAFEGUARDS.map((s) => (
            <li key={s.title} className="rounded-2xl border border-white/15 p-5">
              <div className="mb-1.5 font-bold">{s.title}</div>
              <div className="text-sm leading-relaxed text-inverse-muted">{s.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
