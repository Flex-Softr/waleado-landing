import { BookOpen, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { SIGNUP_URL, SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact us",
  description:
    "Get in touch with the Waleado team for sales questions, custom plans, partnerships or support.",
  path: "/contact",
});

const OPTIONS = [
  {
    icon: Mail,
    title: "Email us",
    text: "Sales questions, custom plans, partnerships or support. We usually reply within one working day.",
    action: { href: `mailto:${SITE.email}`, label: SITE.email },
  },
  {
    icon: MessageCircle,
    title: "Already a customer?",
    text: "Sign in to your dashboard to see your plan, invoices and connected numbers.",
    action: { href: `${SITE.appUrl}/login`, label: "Open the dashboard" },
  },
  {
    icon: BookOpen,
    title: "Learn on your own",
    text: "Step-by-step guides for campaigns, auto-replies, chatbots and safe sending.",
    action: { href: "/guides", label: "Read the guides" },
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="We are happy to help"
            description="Tell us what you want to do on WhatsApp and we will point you to the right plan or setup."
          />
        </div>
      </section>
      <section className="container-page grid gap-5 py-16 md:grid-cols-3">
        {OPTIONS.map((o) => (
          <div
            key={o.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-7"
          >
            <o.icon className="size-6 text-primary" aria-hidden="true" />
            <h2 className="text-xl font-bold text-foreground">{o.title}</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{o.text}</p>
            <ButtonLink href={o.action.href} variant="secondary" className="mt-auto self-start">
              {o.action.label}
            </ButtonLink>
          </div>
        ))}
      </section>
      <section className="container-page pb-20 text-center">
        <p className="text-muted-foreground">
          New to Waleado?{" "}
          <a href={SIGNUP_URL} className="font-semibold text-primary hover:underline">
            Start free, no card needed
          </a>
          .
        </p>
      </section>
    </>
  );
}
