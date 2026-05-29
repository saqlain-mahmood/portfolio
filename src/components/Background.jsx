// Textured, glossy backdrop. Colours come from CSS vars so it adapts to the
// light/dark theme automatically (--grid-line, --bg-sheen, --color-accent-soft).
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-bg">
      {/* even grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />
      {/* soft glossy sheen from the top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px circle at 50% -8%, var(--bg-sheen), transparent 55%)",
        }}
      />
      {/* a whisper of accent, low and to the side */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 85% 12%, var(--color-accent-soft), transparent 60%)",
        }}
      />
    </div>
  );
}
