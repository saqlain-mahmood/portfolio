import { useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

// Toggles the `light` class on <html> and remembers the choice in localStorage.
// (The initial class is applied by a tiny inline script in index.html so there's
// no flash before React loads.)
export default function ThemeToggle() {
  // read the current theme straight from the DOM (set by the inline script)
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  function toggle() {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setLight(isLight);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-fill text-ink-700 transition-all hover:-translate-y-0.5 hover:text-accent"
    >
      {light ? <MoonIcon className="h-[18px] w-[18px]" /> : <SunIcon className="h-[18px] w-[18px]" />}
    </button>
  );
}
