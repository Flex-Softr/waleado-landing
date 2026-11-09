import { Plus } from "lucide-react";
import type { Faq } from "@/content/faqs";

/** Native details/summary: works without JavaScript and every answer stays in the HTML for search engines. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus
              className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-6 pr-10 text-base leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
