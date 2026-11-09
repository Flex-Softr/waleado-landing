import { Check, Minus } from "lucide-react";
import {
  formatLimit,
  messageAllowance,
  type PlanFeatures,
  type PlanLimits,
  type PricingPlan,
} from "@/lib/pricing";

type Cell = string | boolean;
type Row = { label: string; value: (l: PlanLimits) => Cell };

const feature = (key: keyof PlanFeatures) => (l: PlanLimits) => l.features[key];

/** Built from the live plan limits, so admin changes show up here automatically. */
const GROUPS: { title: string; rows: Row[] }[] = [
  {
    title: "Usage",
    rows: [
      { label: "WhatsApp numbers", value: (l) => formatLimit(l.devices) },
      { label: "Messages", value: messageAllowance },
      { label: "Contacts", value: (l) => formatLimit(l.contacts) },
      { label: "Recipients per campaign", value: (l) => formatLimit(l.bulkRecipientsPerCampaign) },
      { label: "Message variants per campaign", value: (l) => String(l.bulkMessageVariants) },
      { label: "Saved templates", value: (l) => formatLimit(l.templates) },
    ],
  },
  {
    title: "Automation",
    rows: [
      { label: "Auto-reply rules", value: (l) => formatLimit(l.autoReplyRules) },
      {
        label: "Chatbot flows",
        value: (l) => (l.features.chatbot ? formatLimit(l.chatbotFlows) : false),
      },
      { label: "AI agent and rewrites", value: feature("ai") },
      { label: "Scheduled campaigns", value: feature("bulkScheduling") },
      { label: "Missed-call responder", value: feature("callResponder") },
      { label: "Group grabber", value: feature("groupGrabber") },
    ],
  },
  {
    title: "Inbox and integrations",
    rows: [
      { label: "Live chat inbox", value: () => true },
      { label: "API and WHMCS module", value: feature("api") },
      { label: "No Waleado branding on messages", value: feature("removeBranding") },
    ],
  },
];

function CellView({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <>
        <Check className="mx-auto size-[18px] text-primary" strokeWidth={3} aria-hidden="true" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus className="mx-auto size-4 text-muted-foreground/60" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="font-medium text-foreground">{value}</span>;
}

export function ComparisonTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="relative overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <caption className="sr-only">Compare Waleado plans</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="w-[32%] p-4 text-left">
              <span className="sr-only">Feature</span>
            </th>
            {plans.map((p) => (
              <th
                key={p.id}
                scope="col"
                className={`p-4 text-center text-[15px] font-bold ${p.highlight ? "text-primary" : "text-foreground"}`}
              >
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        {GROUPS.map((g) => (
          <tbody key={g.title}>
            <tr className="bg-subtle">
              <th
                scope="colgroup"
                colSpan={plans.length + 1}
                className="px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.05em] text-muted-foreground"
              >
                {g.title}
              </th>
            </tr>
            {g.rows.map((r) => (
              <tr key={r.label} className="border-b border-border last:border-0">
                <th scope="row" className="p-4 text-left font-medium text-muted-foreground">
                  {r.label}
                </th>
                {plans.map((p) => (
                  <td key={p.id} className="p-4 text-center">
                    <CellView value={r.value(p.limits)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
