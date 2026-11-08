import { Sparkles, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PricingCards } from "@/components/pricing-cards";
import { APP_URL, getPricing } from "@/lib/pricing";

export async function PricingSection() {
  const pricing = await getPricing();
  const trialPlan = pricing?.plans.find((p) => p.id === pricing.trialPlanId)?.name ?? "Pro";

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-muted/20 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="gradient" className="gap-1.5 px-3.5 py-1 text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start at zero cost — free forever</span>
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Free forever. <span className="text-gradient-emerald">Upgrade when you grow.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            {pricing && pricing.trialDays > 0
              ? `Every new account gets ${pricing.trialDays} days of ${trialPlan} free, then keeps the Free plan for life. `
              : "Start on the Free plan and keep it for life. "}
            No card needed. Pay in Taka with bKash, Nagad, Rocket or card.
          </p>
        </div>

        {pricing ? (
          <PricingCards pricing={pricing} appUrl={APP_URL} />
        ) : (
          <div className="text-center text-sm text-muted-foreground">
            Pricing is loading — see all plans in your{" "}
            <a className="text-primary underline" href={`${APP_URL}/register`}>
              free dashboard
            </a>
            .
          </div>
        )}

        <div className="mt-16 text-center text-xs text-muted-foreground space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2 font-medium">
            <CreditCard className="w-4 h-4 text-primary" />
            <span>Supported payment methods:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <Badge
              variant="outline"
              className="px-2.5 py-1 text-xs font-bold border-pink-500/40 bg-pink-500/10 text-pink-600 dark:text-pink-300"
            >
              bKash
            </Badge>
            <Badge
              variant="outline"
              className="px-2.5 py-1 text-xs font-bold border-orange-500/40 bg-orange-500/10 text-orange-600 dark:text-orange-300"
            >
              Nagad
            </Badge>
            <Badge
              variant="outline"
              className="px-2.5 py-1 text-xs font-bold border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-300"
            >
              Rocket
            </Badge>
            <Badge
              variant="outline"
              className="px-2.5 py-1 text-xs font-bold border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
            >
              SSLCommerz
            </Badge>
            <Badge
              variant="outline"
              className="px-2.5 py-1 text-xs font-bold border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-300"
            >
              Visa / Mastercard
            </Badge>
          </div>
          <div className="text-[11px] text-muted-foreground/80 pt-1">
            🔒 Secure checkout. Your plan activates instantly after payment.
          </div>
        </div>
      </div>
    </section>
  );
}
