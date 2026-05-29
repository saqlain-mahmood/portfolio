import { experience } from "../data";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Stagger";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <Stagger className="space-y-8">
        {experience.map((job) => (
          <StaggerItem key={job.company}>
            <article className="glass rounded-2xl p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-ink-900">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <p className="text-sm text-ink-500">{job.period}</p>
              </div>

              {job.team && <p className="mt-1 text-sm text-ink-500">{job.team}</p>}

              <ul className="mt-5 space-y-2.5">
                {job.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
