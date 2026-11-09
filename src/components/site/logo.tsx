import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Brand logo: the dark-text version on light backgrounds, the white-text version in dark mode. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Waleado home"
      className={cn("flex shrink-0 items-center", className)}
    >
      <Image
        src="/brand/waleado-logo-light.webp"
        alt="Waleado"
        width={256}
        height={85}
        priority
        className="h-10 w-auto dark:hidden"
      />
      <Image
        src="/brand/waleado-logo-dark.webp"
        alt="Waleado"
        width={256}
        height={85}
        priority
        className="hidden h-10 w-auto dark:block"
      />
    </Link>
  );
}
