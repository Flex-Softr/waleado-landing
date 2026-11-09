import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideBody } from "@/components/guides/guide-body";
import { GuideCard } from "@/components/guides/guide-card";
import { ButtonLink } from "@/components/ui/button-link";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { getGuide, GUIDES } from "@/content/guides";
import { getModule } from "@/content/modules";
import { SIGNUP_URL } from "@/content/site";
import { articleLd, breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const meta = pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", modifiedTime: guide.updated },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const mod = guide.relatedModule ? getModule(guide.relatedModule) : undefined;
  const more = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const toc = [
    ...guide.sections.map((s) => ({ id: s.id, label: s.heading })),
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <article>
        <header className="container-page max-w-6xl pb-8 pt-12 sm:pt-16 [&>*]:max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides" className="hover:text-foreground">
              Guides
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{guide.category}</span>
          </nav>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-muted-foreground">{guide.description}</p>
          <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span>By the Waleado team</span>
            <span aria-hidden="true">·</span>
            <span>
              Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
            </span>
            <span aria-hidden="true">·</span>
            <span>{guide.readMinutes} min read</span>
          </p>
        </header>

        <div className="container-page grid max-w-6xl items-start gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 max-w-3xl">
            <div className="rounded-2xl border border-primary/30 bg-accent p-6 sm:p-7">
              <h2 className="text-lg font-bold text-foreground">Key takeaways</h2>
              <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-[16px] leading-relaxed text-foreground marker:text-primary">
                {guide.takeaways.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <GuideBody sections={guide.sections} />

            {mod ? (
              <div className="my-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-inverse p-7 text-inverse-foreground">
                <div className="flex max-w-md flex-col gap-1.5">
                  <span className="font-display text-xl font-bold">
                    Do this with Waleado {mod.name.toLowerCase()}
                  </span>
                  <span className="text-[15px] leading-relaxed text-inverse-muted">
                    {mod.tagline} Start on the free plan.
                  </span>
                </div>
                <ButtonLink href={SIGNUP_URL} variant="inverse">
                  Try it free
                </ButtonLink>
              </div>
            ) : null}

            <section id="faq" className="scroll-mt-24">
              <h2 className="mb-5 mt-12 text-2xl font-extrabold text-foreground sm:text-[1.75rem]">
                Frequently asked questions
              </h2>
              <FaqList items={guide.faq} />
            </section>
          </div>

          <aside
            className="order-first rounded-2xl border border-border p-6 lg:sticky lg:top-24 lg:order-none"
            aria-label="On this page"
          >
            <span className="text-xs font-bold uppercase tracking-[0.05em] text-muted-foreground">
              On this page
            </span>
            <ol className="mt-3 flex flex-col gap-2.5">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="text-sm leading-snug text-muted-foreground hover:text-primary"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </article>

      {more.length ? (
        <section className="border-t border-border bg-subtle">
          <div className="container-page py-16">
            <h2 className="mb-8 text-2xl font-extrabold text-foreground">More guides</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {more.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd
        data={[
          articleLd(guide),
          faqLd(guide.faq),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
        ]}
      />
    </>
  );
}
