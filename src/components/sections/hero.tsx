"use client";

import { StatusChip } from "@/components/chrome/status-chip";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/data/site";
import { Terminal } from "lucide-react";
import type { MouseEvent } from "react";

function scrollToHash(e: MouseEvent<HTMLAnchorElement>, hash: string) {
  e.preventDefault();
  const el = document.getElementById(hash.replace(/^#/, ""));
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", hash);
}

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center">
      <div className="mx-auto w-full max-w-5xl px-6 pt-28 pb-20">
        <FadeIn>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <StatusChip tone="passes" pulse>
              System online
            </StatusChip>
            <StatusChip tone="info">{siteConfig.location}</StatusChip>
            <StatusChip tone="lime">Senior FE</StatusChip>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-lg border border-border bg-panel p-6 md:p-9">
            <div className="flex items-center gap-2 border-b border-border pb-4 text-xs text-muted-foreground">
              <Terminal className="size-3.5 text-neon" />
              <span>identity.sh</span>
              <span className="ml-auto text-passes">● ready</span>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              <span className="text-neon">$</span> whoami
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              <span className="text-foreground">Ye Win </span>
              <span className="text-neon">Aung</span>
            </h1>

            <p className="mt-3 text-sm font-semibold text-neon md:text-base">
              {siteConfig.title}
            </p>

            <p className="mt-2 text-xs text-muted-foreground md:text-sm">
              {">"} {siteConfig.focus}
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {siteConfig.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => scrollToHash(e, "#projects")}
                className="inline-flex h-10 items-center rounded bg-neon px-5 text-xs font-semibold uppercase tracking-wide text-neon-fg transition-opacity hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToHash(e, "#contact")}
                className="inline-flex h-10 items-center rounded border border-neon/40 bg-neon-dim px-5 text-xs font-semibold uppercase tracking-wide text-neon transition-colors hover:border-neon"
              >
                Initiate contact
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
