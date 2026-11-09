import { Lightbulb } from "lucide-react";
import type { GuideBlock } from "@/content/guides";

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "p":
      return <p className="mb-4 text-[17px] leading-[1.75] text-foreground/85">{block.text}</p>;
    case "ul":
      return (
        <ul className="mb-5 flex list-disc flex-col gap-2 pl-6 text-[17px] leading-[1.7] text-foreground/85 marker:text-primary">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-5 flex list-decimal flex-col gap-2 pl-6 text-[17px] leading-[1.7] text-foreground/85 marker:font-semibold marker:text-primary">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <aside className="mb-5 flex gap-3 rounded-xl border border-primary/30 bg-accent p-4 text-[15px] leading-relaxed text-foreground">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <span>{block.text}</span>
        </aside>
      );
  }
}

/** Blocks are static content, so their text is a stable key. */
function blockKey(block: GuideBlock): string {
  return block.type + ("text" in block ? block.text : block.items.join("|"));
}

export function GuideBody({
  sections,
}: {
  sections: { id: string; heading: string; blocks: GuideBlock[] }[];
}) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-24">
          <h2 className="mb-3 mt-12 text-2xl font-extrabold leading-snug text-foreground sm:text-[1.75rem]">
            {s.heading}
          </h2>
          {s.blocks.map((b) => (
            <Block key={blockKey(b)} block={b} />
          ))}
        </section>
      ))}
    </>
  );
}
