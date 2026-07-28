import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type StatusChipProps = {
  children: ReactNode;
  tone?: "lime" | "critical" | "issues" | "warnings" | "info" | "passes" | "muted";
  pulse?: boolean;
  className?: string;
};

const tones = {
  lime: "border-neon/30 bg-neon-dim text-neon",
  critical: "border-critical/30 bg-critical-bg text-critical",
  issues: "border-issues/30 bg-issues-bg text-issues",
  warnings: "border-warnings/30 bg-warnings-bg text-warnings",
  info: "border-info/30 bg-info-bg text-info",
  passes: "border-passes/30 bg-passes-bg text-passes",
  muted: "border-border bg-muted text-muted-foreground",
};

export function StatusChip({
  children,
  tone = "lime",
  pulse = false,
  className,
}: StatusChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {pulse && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-40" />
          <span className="relative inline-flex size-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
