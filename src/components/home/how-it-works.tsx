import { SectionHeading } from "@/components/marketing/section-heading";

const STEPS = [
  {
    title: "Scan the QR code",
    text: "Link your WhatsApp number the same way you open WhatsApp Web.",
  },
  {
    title: "Add your contacts",
    text: "Import an Excel or CSV file, paste numbers, or pull contacts from your groups.",
  },
  {
    title: "Send or automate",
    text: "Launch a campaign, switch on auto-replies or build a chatbot. Then reply from the inbox.",
  },
];

export function HowItWorks() {
  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading eyebrow="How it works" title="Live in three steps" align="center" />
      <ol className="mt-12 grid gap-10 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-3">
            <span className="font-display text-sm font-extrabold text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
