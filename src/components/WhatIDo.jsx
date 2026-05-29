import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { Stagger, StaggerItem } from "./Stagger";
import { CodeIcon, ServerIcon, SparkIcon } from "./Icons";

// Three focus areas - grounded in the real stack/experience, not invented.
const areas = [
  {
    Icon: CodeIcon,
    title: "Frontend",
    text: "Responsive, accessible interfaces and mobile apps with React, Next.js, React Native and Tailwind CSS.",
  },
  {
    Icon: ServerIcon,
    title: "Backend & APIs",
    text: "Scalable services and clean REST APIs with Node, Express and JWT auth, backed by MongoDB, MySQL or Firebase.",
  },
  {
    Icon: SparkIcon,
    title: "Cloud & AI",
    text: "Serverless on Azure with GitHub Actions CI/CD, plus practical AI integration: RAG pipelines and fine-tuned LLMs.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="What I do" title="How I can help" />

      <Stagger className="grid gap-5 md:grid-cols-3">
        {areas.map(({ Icon, title, text }) => (
          <StaggerItem key={title} className="h-full">
            <SpotlightCard className="glass h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-fill-strong">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-fill text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
