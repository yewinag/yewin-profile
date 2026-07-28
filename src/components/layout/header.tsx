"use client";

import { StatusChip } from "@/components/chrome/status-chip";
import { siteConfig, navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash;
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToHash(hash), 50);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const handleHashClick =
    (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) return;

      e.preventDefault();

      if (pathname !== "/") {
        router.push(`/${href}`);
        return;
      }

      scrollToHash(href);
    };

  const short = siteConfig.shortName;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-bold tracking-tight transition-opacity hover:opacity-80"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }
          }}
        >
          <Shield className="size-5 text-neon" strokeWidth={1.75} />
          <span>
            <span className="text-foreground">{short.slice(0, 2)}</span>
            <span className="text-neon">{short.slice(2)}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                onClick={handleHashClick(link.href)}
                className="text-xs text-muted-foreground transition-colors hover:text-neon"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-neon"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <StatusChip tone="passes" pulse className="hidden sm:inline-flex">
            Available
          </StatusChip>
          <a
            href="#contact"
            onClick={handleHashClick("#contact")}
            className="rounded border border-neon/40 bg-neon-dim px-3 py-1 text-xs font-medium text-neon transition-colors hover:border-neon hover:bg-neon/20"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
