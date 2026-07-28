import { Panel } from "@/components/chrome/panel";
import { StatusChip } from "@/components/chrome/status-chip";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { experience } from "@/lib/data/experience";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const accents = ["lime", "info", "passes", "issues", "info"] as const;

function CompanyTitle({
  company,
  logo,
  companyUrl,
  logoOnLight,
}: {
  company: string;
  logo?: string;
  companyUrl?: string;
  logoOnLight?: boolean;
}) {
  const content = (
    <>
      {logo && (
        <span
          className={cn(
            "relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded border border-border",
            logoOnLight ? "bg-white" : "bg-background"
          )}
        >
          <Image
            src={logo}
            alt={`${company} logo`}
            width={36}
            height={36}
            className="size-7 object-contain"
            unoptimized={logo.endsWith(".svg")}
          />
        </span>
      )}
      <span>{company}</span>
      {companyUrl && (
        <ArrowUpRight className="size-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
      )}
    </>
  );

  if (companyUrl) {
    return (
      <Link
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 transition-colors hover:text-neon/90"
      >
        {content}
      </Link>
    );
  }

  return <span className="inline-flex items-center gap-3">{content}</span>;
}

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Work history"
      description="Roles across Bangkok and Yangon — enterprise platforms, loyalty, travel, and marketplaces."
    >
      <div className="space-y-3">
        {experience.map((item, index) => (
          <FadeIn key={`${item.company}-${item.period}`} delay={index * 0.05}>
            <Panel
              title={
                <CompanyTitle
                  company={item.company}
                  logo={item.logo}
                  companyUrl={item.companyUrl}
                  logoOnLight={item.logoOnLight}
                />
              }
              subtitle={
                item.engagement
                  ? `${item.role} · ${item.engagement}`
                  : item.role
              }
              accent={accents[index % accents.length]}
              headerRight={
                <div className="flex flex-col items-end gap-1.5">
                  <StatusChip
                    tone={index === 0 ? "passes" : "muted"}
                    pulse={index === 0}
                  >
                    {index === 0 ? "Current" : "Past"}
                  </StatusChip>
                  <span className="text-[11px] text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              }
            >
              <p className="mb-3 text-xs text-muted-foreground">
                @ {item.location}
              </p>
              <ul className="space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-neon" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Panel>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
