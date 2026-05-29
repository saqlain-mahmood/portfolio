import { skills } from "../data";

// Flatten every skill into one list for the scrolling ribbon.
const items = skills.flatMap((group) => group.items);

export default function Marquee() {
  // Duplicate the list so the loop is seamless (animation shifts by -50%).
  const row = [...items, ...items];

  return (
    <div
      className="marquee-hover relative overflow-hidden border-y border-line py-5"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      {/* the row scrolls; the fade above stays put */}
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-wide text-ink-500"
          >
            {tech}
            <span className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
