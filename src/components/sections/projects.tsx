import { Panel } from "@/components/chrome/panel";
import { ProjectImageSlider } from "@/components/chrome/project-image-slider";
import { StatusChip } from "@/components/chrome/status-chip";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { projects } from "@/lib/data/projects";
import { ArrowUpRight, GitBranch } from "lucide-react";
import Link from "next/link";

const accents = ["lime", "info", "passes", "issues"] as const;

function isExternal(url?: string) {
  return Boolean(url && url !== "#" && /^https?:\/\//.test(url));
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected deployments"
      description="Enterprise platforms, loyalty systems, travel booking, and marketplace products."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {featured.map((project, index) => {
          const hasLive = isExternal(project.href);
          const hasGithub = isExternal(project.github);
          const images = project.images ?? [];
          const hasMeta = Boolean(
            project.client || project.role || project.engagement
          );

          return (
            <FadeIn key={project.title} delay={index * 0.05}>
              <Panel
                title={`project_0${index + 1}`}
                accent={accents[index % accents.length]}
                className="h-full"
                headerRight={
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    {project.engagement && (
                      <StatusChip tone="issues">{project.engagement}</StatusChip>
                    )}
                    <StatusChip tone="info">Featured</StatusChip>
                  </div>
                }
              >
                {images.length > 0 && (
                  <ProjectImageSlider images={images} alt={project.title} />
                )}

                <h3 className="text-base font-semibold text-foreground">
                  {project.client
                    ? `${project.client} — ${project.title}`
                    : project.title}
                </h3>

                {hasMeta && (
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                    {project.role && (
                      <span>
                        <span className="text-neon">role:</span> {project.role}
                      </span>
                    )}
                  </div>
                )}

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-neon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(hasLive || hasGithub) && (
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {hasLive && project.href && (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-neon/40 bg-neon-dim px-3 py-1.5 text-[11px] font-medium text-neon transition-colors hover:border-neon"
                      >
                        Live
                        <ArrowUpRight className="size-3" />
                      </Link>
                    )}
                    {hasGithub && project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-neon/40 hover:text-neon"
                      >
                        <GitBranch className="size-3" />
                        Code
                      </Link>
                    )}
                  </div>
                )}
              </Panel>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
