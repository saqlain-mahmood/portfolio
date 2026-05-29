import { skills } from "../data";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { Stagger, StaggerItem } from "./Stagger";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Skills" title="Tools I work with" />

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <StaggerItem key={group.title}>
            <SpotlightCard className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-fill-strong">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-fill px-2.5 py-1 text-sm text-ink-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
