import Reveal from "./Reveal";

// Clean heading: a small accent eyebrow above a bold modern-sans title.
export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="mb-14">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
