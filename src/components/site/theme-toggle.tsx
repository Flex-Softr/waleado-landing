"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** Both icons render; CSS shows the right one, so there is no flash or mount state. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-subtle hover:text-foreground"
      aria-label="Switch between light and dark mode"
    >
      <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
    </button>
  );
}
