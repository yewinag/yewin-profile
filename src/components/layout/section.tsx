import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  code?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  code,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {code ?? label}
          </p>
          {title && (
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-neon md:text-2xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
