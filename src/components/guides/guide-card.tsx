import Link from "next/link";
import type { Guide } from "@/content/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
    >
      <span className="text-[13px] font-semibold text-primary">{guide.category}</span>
      <span className="font-display text-xl font-bold leading-snug text-foreground">
        {guide.title}
      </span>
      <span className="text-[15px] leading-relaxed text-muted-foreground">{guide.description}</span>
      <span className="mt-auto pt-2 text-sm text-muted-foreground">
        {guide.readMinutes} min read
      </span>
    </Link>
  );
}
