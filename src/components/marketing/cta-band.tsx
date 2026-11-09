import { ButtonLink } from "@/components/ui/button-link";
import { SIGNUP_URL } from "@/content/site";

export function CtaBand({
  title = "Start answering every WhatsApp message on time",
  description = "Free forever plan. No card needed.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-[#047857] px-6 py-14 text-center text-white sm:px-12 sm:py-16 dark:bg-[#064e3b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(600px_circle_at_15%_0%,#34d399,transparent_60%)]"
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
          <p className="text-lg text-[#d1fadf]">{description}</p>
          <ButtonLink href={SIGNUP_URL} variant="inverse" size="lg" className="mt-2">
            Create your free account
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
