/** A drawn (not screenshotted) dashboard preview: stays sharp, light and theme-aware. */
export function ProductPreview() {
  const chats = [
    { name: "Customer A", text: "Is the blue one in stock?", active: true },
    { name: "Customer B", text: "Auto-reply: Thanks! We open at 10am" },
    { name: "Missed call", text: "Sorry we missed you, reply here" },
  ];
  const stats = [
    { label: "Rotation", value: "3 numbers" },
    { label: "Delay", value: "150–200s" },
    { label: "Variants", value: "5 AI" },
  ];

  return (
    <div
      role="img"
      aria-label="Waleado dashboard preview with the chat inbox and a running campaign"
      className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-24px_rgba(16,24,40,0.28)] dark:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground">dash.waleado.app</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="hidden flex-col gap-1.5 border-r border-border p-3.5 sm:flex">
          <span className="px-2 pb-1.5 text-xs font-semibold text-muted-foreground">Inbox</span>
          {chats.map((c) => (
            <div
              key={c.name}
              className={`flex gap-2.5 rounded-xl p-2.5 ${c.active ? "bg-accent" : ""}`}
            >
              <span
                className={`size-8 shrink-0 rounded-full ${c.active ? "bg-primary/40" : "bg-subtle"}`}
              />
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-foreground">{c.name}</div>
                <div className="truncate text-xs text-muted-foreground">{c.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3.5 bg-subtle p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-foreground">
              Campaign: Weekend offer
            </span>
            <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
              Sending
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-border">
            <div className="h-full w-[64%] rounded-full bg-primary" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-2.5">
                <div className="text-[11px] text-muted-foreground">{s.label}</div>
                <div className="whitespace-nowrap text-[13px] font-bold text-foreground">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-[#dcfce7] px-3 py-2.5 text-[13px] leading-relaxed text-[#0b1220] dark:bg-[#064e3b] dark:text-[#ecfdf5]">
            Hi Sara, your weekend discount is ready. Use code WEEKEND20 before Sunday.
          </div>
          <div className="max-w-[80%] self-end rounded-2xl rounded-br-md border border-border bg-card px-3 py-2.5 text-[13px] text-foreground">
            Great, ordering now!
          </div>
        </div>
      </div>
    </div>
  );
}
