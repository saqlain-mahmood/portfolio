import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { Stagger, StaggerItem } from "./Stagger";
import { ArrowIcon, GitHubIcon, DownloadIcon } from "./Icons";

// Map a link's `icon` string to the matching icon component.
const iconFor = { github: GitHubIcon, download: DownloadIcon, demo: ArrowIcon };

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Projects" title="Selected work" />

      <Stagger className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.name} className="h-full">
            <SpotlightCard
              as="article"
              className="glass h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-fill-strong"
            >
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {project.label}
              </span>

              <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink-900">
                {project.name}
              </h3>

              <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-500">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-line pt-4 text-xs text-ink-500">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              {/* Link buttons - render one per entry in the project's `links` */}
              {project.links?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map(({ label, href, icon }) => {
                    const Icon = iconFor[icon] ?? ArrowIcon;
                    return (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-fill px-3 py-1.5 text-xs font-medium text-ink-700 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-ink-900"
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </a>
                    );
                  })}
                </div>
              )}
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
