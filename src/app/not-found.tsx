import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center gap-5 py-28 text-center">
      <span className="eyebrow">404</span>
      <h1 className="text-4xl font-extrabold text-foreground">This page does not exist</h1>
      <p className="max-w-md text-lg text-muted-foreground">
        The link may be old or mistyped. These pages will help you find your way.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/features" variant="secondary">
          Features
        </ButtonLink>
        <ButtonLink href="/guides" variant="secondary">
          Guides
        </ButtonLink>
      </div>
    </section>
  );
}
