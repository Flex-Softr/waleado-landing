import Link from "next/link";
import { notFound } from "next/navigation";
import { ModuleIcon } from "@/components/features/module-icon";
import { IntegrationCard } from "@/components/features/integration-card";
import { GuideCard } from "@/components/guides/guide-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FaqList } from "@/components/marketing/faq-list";
import { CtaBand } from "@/components/marketing/cta-band";
import { JsonLd } from "@/components/marketing/json-ld";
import { getModule, MODULES } from "@/content/modules";
import { guidesForModule } from "@/content/guides";
import { SIGNUP_URL } from "@/content/site";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) return {};
  return pageMetadata({
    title: mod.seo.title,
    description: mod.seo.description,
    path: `/features/${mod.slug}`,
  });
}

export default async function ModulePage({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();

  const related = MODULES.filter((m) => m.group === mod.group && m.slug !== mod.slug)
    .concat(MODULES.filter((m) => m.group !== mod.group && m.slug !== mod.slug))
    .slice(0, 3);
  const guides = guidesForModule(mod.slug);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page flex flex-col gap-6 py-14 sm:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/features" className="hover:text-foreground">
              Features
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{mod.name}</span>
          </nav>
          <div className="flex max-w-3xl flex-col gap-5">
            <ModuleIcon name={mod.icon} className="size-12" />
            <h1 className="text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl">
              {mod.seo.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {mod.summary}
            </p>
            <p className="text-sm font-semibold text-accent-foreground">Included in: {mod.plans}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={SIGNUP_URL} size="lg">
                Start free
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary" size="lg">
                See pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading title="What you can do" className="mb-10" />
        <div className="grid gap-5 sm:grid-cols-2">
          {mod.details.map((d) => (
            <div
              key={d.title}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-7"
            >
              <h3 className="text-xl font-bold text-foreground">{d.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {mod.integrations ? (
        <section className="container-page pb-20">
          <SectionHeading title="Ready-made integrations" className="mb-10" />
          <div className="grid gap-5 md:grid-cols-2">
            {mod.integrations.map((i) => (
              <IntegrationCard key={i.name} integration={i} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-y border-border bg-subtle">
        <div className="container-page py-20">
          <SectionHeading title="How to get started" className="mb-10" />
          <ol className="grid gap-8 md:grid-cols-3">
            {mod.steps.map((s, i) => (
              <li key={s} className="flex flex-col gap-2">
                <span className="font-display text-sm font-extrabold text-primary">
                  Step {i + 1}
                </span>
                <p className="text-lg font-semibold leading-snug text-foreground">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {guides.length ? (
        <section className="container-page pt-20">
          <SectionHeading title="Learn more" className="mb-10" />
          <div className="grid gap-5 md:grid-cols-3">
            {guides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="container-page max-w-3xl py-20">
        <SectionHeading title="Questions" className="mb-8" />
        <FaqList items={mod.faq} />
      </section>

      <section className="container-page pb-4">
        <SectionHeading title="Works well with" className="mb-8" />
        <ul className="grid gap-4 md:grid-cols-3">
          {related.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/features/${m.slug}`}
                className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <ModuleIcon name={m.icon} className="size-10" />
                <span className="flex flex-col gap-1">
                  <span className="font-display text-[17px] font-bold text-foreground">
                    {m.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{m.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: mod.name, path: `/features/${mod.slug}` },
          ]),
          faqLd(mod.faq),
        ]}
      />
    </>
  );
}
