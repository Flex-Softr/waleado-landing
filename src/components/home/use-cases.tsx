import { Briefcase, GraduationCap, Server, Store, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";

const CASES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Store,
    title: "Online stores",
    text: "Order updates, restock alerts and festival offers.",
  },
  {
    icon: Server,
    title: "Hosting and IT companies",
    text: "Invoice reminders, service notices and WhatsApp login codes with WHMCS.",
  },
  {
    icon: GraduationCap,
    title: "Coaching and schools",
    text: "Class reminders, results and admission follow-ups.",
  },
  {
    icon: Briefcase,
    title: "Service businesses",
    text: "Appointment reminders and instant replies to missed calls.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="border-y border-border bg-subtle">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading eyebrow="Use cases" title="Made for businesses that live on WhatsApp" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <c.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
