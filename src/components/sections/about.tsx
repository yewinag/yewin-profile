import { Panel } from "@/components/chrome/panel";
import { StatusChip } from "@/components/chrome/status-chip";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/data/site";

export function About() {
  const meta = [
    { key: "location", value: siteConfig.location },
    { key: "focus", value: siteConfig.focus },
    { key: "languages", value: siteConfig.languages.join(" · ") },
    {
      key: "education",
      value: "M.C.Sc · Software Engineering · University of Mandalay",
    },
  ];

  return (
    <Section id="about" label="About" title="Profile dossier">
      <FadeIn>
        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <Panel title="meta.json" accent="info">
            <ul className="space-y-4">
              {meta.map((item) => (
                <li
                  key={item.key}
                  className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <p className="shrink-0 text-xs font-medium text-muted-foreground">
                    {item.key}
                  </p>
                  <p className="text-right text-sm leading-relaxed text-foreground">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel
            title="summary.md"
            accent="lime"
            headerRight={<StatusChip tone="passes">10+ yrs</StatusChip>}
          >
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Senior Frontend Engineer with 10+ years designing, developing,
                and delivering scalable web applications, enterprise platforms,
                SaaS products, and customer-facing systems.
              </p>
              <p>
                Strong expertise in React, Vue, TypeScript, Next.js, and Nuxt.js
                — with deep experience in frontend architecture, reusable
                component systems, performance optimization, design systems, and
                modern development practices. I work closely with Product
                Managers, Business Analysts, QA, and backend teams to ship
                complex business solutions.
              </p>
              <p>
                Currently based in Bangkok and exploring senior frontend roles
                in Singapore and Thailand — positions where I can lead
                technically while staying close to the product.
              </p>
            </div>
          </Panel>
        </div>
      </FadeIn>
    </Section>
  );
}
