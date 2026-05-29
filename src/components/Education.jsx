import { education } from "../data";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Stagger";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Education" title="My background" />

      <Stagger className="space-y-5">
        {education.map((edu) => (
          <StaggerItem key={edu.school}>
            <article className="glass flex flex-col gap-3 rounded-2xl p-7 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900">
                  {edu.school}
                </h3>
                <p className="mt-1 text-ink-700">{edu.degree}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm text-ink-500">{edu.period}</p>
                {edu.detail && (
                  <p className="mt-1 text-sm font-medium text-accent">{edu.detail}</p>
                )}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
