import { CheckItem } from "@/components/marketing/check-item";
import type { Integration } from "@/content/modules";
import { cn } from "@/lib/utils";

export function IntegrationCard({ integration }: { integration: Integration }) {
  const soon = integration.status === "coming-soon";
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-border bg-card p-7",
        soon && "bg-subtle"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-foreground">{integration.name}</h3>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-bold",
            soon
              ? "bg-card text-muted-foreground ring-1 ring-border"
              : "bg-accent text-accent-foreground"
          )}
        >
          {soon ? "Coming soon" : "Available"}
        </span>
      </div>
      <p className="text-[15px] leading-relaxed text-muted-foreground">{integration.summary}</p>
      <ul className="flex flex-col gap-2.5">
        {integration.features.map((f) => (
          <CheckItem key={f} className={cn("text-sm", soon && "text-muted-foreground")}>
            {f}
          </CheckItem>
        ))}
      </ul>
    </div>
  );
}
