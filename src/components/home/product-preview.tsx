import { Check, PhoneMissed, Reply, Send, Sparkles, type LucideIcon } from "lucide-react";

type Activity = {
  icon: LucideIcon;
  title: string;
  detail: string;
  time: string;
  progress?: number;
};

const METRICS = [
  { value: "1,240", label: "Messages sent" },
  { value: "312", label: "Auto-replies" },
  { value: "18", label: "Calls answered" },
];

const ACTIVITY: Activity[] = [
  {
    icon: Send,
    title: "Weekend offer",
    detail: "Sending to VIP customers",
    time: "now",
    progress: 64,
  },
  { icon: Reply, title: "Auto-reply sent", detail: "“price” → Price list.pdf", time: "1m" },
  {
    icon: Sparkles,
    title: "AI agent answered",
    detail: "Yes, we deliver on weekends.",
    time: "3m",
  },
  {
    icon: PhoneMissed,
    title: "Missed call replied",
    detail: "Sorry we missed you, reply here",
    time: "5m",
  },
];

/**
 * An illustrative "today" view of the product, drawn in HTML so it stays sharp, follows the
 * theme and reflows on small screens instead of squeezing a desktop dashboard.
 */
export function ProductPreview() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-2xl [background:radial-gradient(60%_60%_at_70%_30%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-5 right-6 z-10 hidden items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-[13px] font-semibold text-foreground shadow-lg lg:flex"
      >
        <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3" strokeWidth={3} />
        </span>
        No Meta approval needed
      </div>

      <div
        role="img"
        aria-label="Example of the Waleado dashboard: today's message totals and live activity from campaigns, auto-replies, the AI agent and missed calls"
        className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(16,24,40,0.35)] dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
      >
        <div className="flex items-center justify-between gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Today</p>
            <p className="font-display text-lg font-bold text-foreground">
              Your WhatsApp at a glance
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            <span className="size-1.5 rounded-full bg-primary" />3 numbers online
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 px-5 pt-5 sm:gap-3 sm:px-6">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl bg-subtle px-3 py-3 ring-1 ring-border sm:px-4"
            >
              <p className="font-display text-xl font-extrabold tabular-nums text-foreground sm:text-2xl">
                {m.value}
              </p>
              <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <p className="px-5 pb-2 pt-6 text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground sm:px-6">
          Live activity
        </p>
        <ul className="divide-y divide-border border-t border-border">
          {ACTIVITY.map((a) => (
            <li key={a.title} className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <a.icon className="size-[18px]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="truncate text-sm font-semibold text-foreground">{a.title}</p>
                  <span className="shrink-0 text-xs text-muted-foreground">{a.time}</span>
                </div>
                <p className="truncate text-[13px] text-muted-foreground">{a.detail}</p>
                {a.progress !== undefined ? (
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-subtle ring-1 ring-border">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${a.progress}%` }}
                    />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
