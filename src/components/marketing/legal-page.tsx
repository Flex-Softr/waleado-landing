export type LegalSection = { heading: string; paragraphs?: string[]; items?: string[] };

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <article className="container-page max-w-3xl py-16 sm:py-20">
      <h1 className="text-4xl font-extrabold text-foreground">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
      <div className="mt-10 flex flex-col gap-9">
        {sections.map((s) => (
          <section key={s.heading} className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {s.items ? (
              <ul className="flex list-disc flex-col gap-1.5 pl-5 text-base leading-relaxed text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
