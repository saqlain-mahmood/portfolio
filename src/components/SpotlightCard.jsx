import { useRef } from "react";

// A card that shows a soft accent glow which follows the cursor while hovering.
// We store the mouse position in CSS variables (--spot-x / --spot-y) and feed
// them into a radial-gradient. Cheap and smooth (no React re-renders).
export default function SpotlightCard({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden ${className}`}
    >
      {/* the glow - sits behind the content (z-0) and fades in on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--color-accent-soft), transparent 70%)",
        }}
      />
      {/* content always sits above the glow */}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </Tag>
  );
}
