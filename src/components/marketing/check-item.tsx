import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex gap-2.5 text-[15px] leading-snug text-foreground", className)}>
      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
