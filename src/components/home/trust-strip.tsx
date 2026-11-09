const FACTS = [
  { title: "No Meta verification", text: "Works with your current number" },
  { title: "Free forever plan", text: "Start without a card" },
  { title: "Up to 15 numbers", text: "One dashboard for all of them" },
  { title: "Pay your way", text: "Cards, bKash, Nagad and more" },
];

/** Honest facts instead of logos or testimonials we don't have yet. */
export function TrustStrip() {
  return (
    <section aria-label="Why businesses choose Waleado" className="border-b border-border">
      <ul className="container-page grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
        {FACTS.map((f) => (
          <li key={f.title} className="flex flex-col gap-1">
            <span className="text-[15px] font-bold text-foreground">{f.title}</span>
            <span className="text-sm text-muted-foreground">{f.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
