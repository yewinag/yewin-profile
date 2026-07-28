import { Panel } from "@/components/chrome/panel";
import { StatusChip } from "@/components/chrome/status-chip";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/data/site";
import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const channels = [
    {
      label: "email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: "phone",
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
      icon: Phone,
    },
    {
      label: "linkedin",
      value: "Connect on LinkedIn",
      href: siteConfig.linkedin,
      icon: ArrowUpRight,
      external: true,
    },
  ];

  return (
    <Section
      id="contact"
      label="Contact"
      title="Open channel"
      description="Open to senior frontend roles, contract work, and technical leadership in Singapore and Thailand."
    >
      <FadeIn>
        <Panel
          title="contact.init"
          accent="passes"
          headerRight={
            <StatusChip tone="passes" pulse>
              Accepting signals
            </StatusChip>
          }
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-neon" />
            {siteConfig.location}
          </div>

          <p className="mt-5 max-w-xl text-lg font-semibold leading-snug tracking-tight md:text-xl">
            Interested in working together? Send a signal — I&apos;d love to
            hear about your team and what you&apos;re building.
          </p>

          <div className="mt-6">
            <a
              href={siteConfig.resume}
              download={siteConfig.resumeFileName}
              className="inline-flex h-11 items-center gap-2 rounded bg-neon px-5 text-xs font-semibold uppercase tracking-wide text-neon-fg transition-opacity hover:opacity-90"
            >
              <Download className="size-4" />
              Download resume
            </a>
          </div>

          <div className="mt-6 divide-y divide-border overflow-hidden rounded-lg border border-border">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-neon-dim"
              >
                <div className="flex items-center gap-3">
                  <channel.icon className="size-4 text-neon" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                      {channel.label}
                    </p>
                    <p className="mt-0.5 text-sm text-foreground group-hover:text-neon">
                      {channel.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-neon" />
              </Link>
            ))}
          </div>
        </Panel>
      </FadeIn>
    </Section>
  );
}
