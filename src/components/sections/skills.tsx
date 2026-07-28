import { Panel } from "@/components/chrome/panel";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { skills } from "@/lib/data/skills";

const accents = ["lime", "info", "passes", "issues"] as const;

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Tech matrix"
      description="Frontend-first toolkit with solid backend, cloud, and collaboration coverage."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((group, index) => (
          <FadeIn key={group.category} delay={index * 0.05}>
            <Panel
              title={group.category}
              accent={accents[index % accents.length]}
              className="h-full"
            >
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border bg-background px-2 py-1 text-[11px] text-foreground/90 transition-colors hover:border-neon/40 hover:text-neon"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Panel>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
