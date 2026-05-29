import { about } from "../data";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Stagger";

const facts = [
  { k: "Focus", v: "Full-stack web development" },
  { k: "Stack", v: "MERN · Next.js" },
  { k: "Interests", v: "REST APIs · AI integration" },
  { k: "Status", v: "Open to graduate / junior roles" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="About" title="A little about me" />

      <Stagger className="grid gap-10 md:grid-cols-5">
        <div className="space-y-6 md:col-span-3">
          {about.map((para, i) => (
            <StaggerItem key={i}>
              <p className="text-lg leading-relaxed text-ink-700">{para}</p>
            </StaggerItem>
          ))}
        </div>

        {/* glass facts panel */}
        <StaggerItem className="md:col-span-2">
          <dl className="glass divide-y divide-line rounded-2xl px-6">
            {facts.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-sm uppercase tracking-wide text-ink-500">{f.k}</dt>
                <dd className="text-right font-medium text-ink-900">{f.v}</dd>
              </div>
            ))}
          </dl>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
