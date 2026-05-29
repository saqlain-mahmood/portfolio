import { useEffect, useState } from "react";
import { navLinks } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(""); // id of the section currently in view

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for whichever section is near the top.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand - accent diamond that rotates on hover, + name */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="h-3.5 w-3.5 rotate-45 rounded-[4px] border border-accent/70 bg-accent/20 shadow-[0_0_12px_rgba(77,141,255,0.45)] transition-transform duration-500 group-hover:rotate-[225deg]" />
          <span className="font-display text-base font-semibold tracking-tight text-ink-900">
            Saqlain Mahmood
          </span>
        </a>

        {/* Right cluster: links (desktop) + toggle + CTA (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`group relative text-sm font-medium transition-colors hover:text-ink-900 ${
                      isActive ? "text-ink-900" : "text-ink-500"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* theme toggle - always visible */}
          <ThemeToggle />

          {/* desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-bg transition-all hover:opacity-90 md:inline-flex"
          >
            Let's talk
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-ink-900 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ink-900 transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ink-900 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="glass border-t border-line md:hidden">
          <ul className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-ink-700 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-ink-900 px-4 py-2.5 text-center text-sm font-semibold text-bg"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
