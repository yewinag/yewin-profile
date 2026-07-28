import { siteConfig } from "@/lib/data/site";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const short = siteConfig.shortName;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Shield className="size-4 text-neon" strokeWidth={1.75} />
          <div>
            <p className="text-sm font-bold">
              <span className="text-foreground">{short.slice(0, 2)}</span>
              <span className="text-neon">{short.slice(2)}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {siteConfig.title} · {siteConfig.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-neon"
          >
            GitHub
            <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-neon"
          >
            LinkedIn
            <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-neon"
          >
            Email
            <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>

        <p className="text-[11px] text-muted-foreground md:text-right">
          © {year} · built with next.js
        </p>
      </div>
    </footer>
  );
}
