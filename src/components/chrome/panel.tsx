import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  subtitle?: string;
  accent?: "lime" | "info" | "issues" | "critical" | "passes" | "none";
  glow?: boolean;
  headerRight?: ReactNode;
};

const accentBar: Record<NonNullable<PanelProps["accent"]>, string> = {
  lime: "bg-neon",
  info: "bg-info",
  issues: "bg-issues",
  critical: "bg-critical",
  passes: "bg-passes",
  none: "bg-transparent",
};

export function Panel({
  children,
  className,
  title,
  subtitle,
  accent = "lime",
  glow = true,
  headerRight,
}: PanelProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-panel transition-colors duration-200",
        glow && "panel-glow panel-glow-hover",
        className
      )}
    >
      {accent !== "none" && (
        <div className={cn("h-0.5 w-full", accentBar[accent])} />
      )}

      {(title || headerRight) && (
        <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3 md:px-5">
          <div className="min-w-0">
            {title && (
              <div className="text-sm font-semibold tracking-tight text-neon">
                {title}
              </div>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {headerRight}
        </div>
      )}

      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}
