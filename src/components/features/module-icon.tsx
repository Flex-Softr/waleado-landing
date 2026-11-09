import {
  Code,
  FileText,
  Inbox,
  PhoneMissed,
  Reply,
  Send,
  Smartphone,
  Sparkles,
  UserPlus,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ModuleIconName } from "@/content/modules";
import { cn } from "@/lib/utils";

const ICONS: Record<ModuleIconName, LucideIcon> = {
  smartphone: Smartphone,
  send: Send,
  zap: Zap,
  "file-text": FileText,
  users: Users,
  "user-plus": UserPlus,
  reply: Reply,
  sparkles: Sparkles,
  workflow: Workflow,
  inbox: Inbox,
  "phone-missed": PhoneMissed,
  code: Code,
};

export function ModuleIcon({ name, className }: { name: ModuleIconName; className?: string }) {
  const Icon = ICONS[name];
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground",
        className
      )}
    >
      <Icon className="size-[22px]" aria-hidden="true" />
    </span>
  );
}
