"use client";

import { Palette } from "lucide-react";
import { useTheme } from "@/components/layout/theme-provider";
import { THEME_LABELS } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

export function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const { theme, cycleTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="outline"
      size={compact ? "icon" : "sm"}
      onClick={cycleTheme}
      aria-label={`Switch site theme. Current theme: ${THEME_LABELS[theme]}`}
      title={`Theme: ${THEME_LABELS[theme]} — click to flip`}
      className={cn(
        "border-ink/15 bg-card/60 text-ink hover:border-ink/40 hover:bg-ink/5",
        className
      )}
    >
      <Palette className="h-4 w-4" />
      {!compact && (
        <span className="hidden sm:inline">{THEME_LABELS[theme]}</span>
      )}
    </Button>
  );
}
