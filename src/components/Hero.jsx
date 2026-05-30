import { motion } from "framer-motion";
import { profile } from "../data";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
  DownloadIcon,
  ArrowIcon,
  MapPinIcon,
  CalendarIcon,
} from "./Icons";

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

// Labeled social/contact buttons, styled like the reference design.
const links = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.twitter, label: "X (Twitter)", Icon: TwitterIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 py-28">
      <div className="mx-auto w-full min-w-0 max-w-3xl">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative overflow-hidden rounded-3xl p-8 shadow-soft sm:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
          />

          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-fill px-3 py-1 text-xs font-medium text-ink-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.p {...fade(0.1)} className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Hello, I'm
          </motion.p>

          <motion.h1
            {...fade(0.16)}
            className="mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink-900 sm:text-6xl"
          >
            Saqlain Mahmood
          </motion.h1>

          {/* meta: location + age */}
          <motion.div
            {...fade(0.22)}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500"
          >
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" />
              {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4" />
              {profile.age} years old
            </span>
          </motion.div>

          <motion.p {...fade(0.28)} className="mt-6 text-xl leading-snug text-ink-700 sm:text-2xl">
            Full-stack developer building scalable apps with{" "}
            <span className="text-accent">MERN</span> &amp;{" "}
            <span className="text-accent">Next.js</span>.
          </motion.p>

          <motion.p {...fade(0.34)} className="mt-4 max-w-xl text-base leading-relaxed text-ink-500">
            Computer Science graduate &amp; aspiring Associate Software Engineer,
            focused on clean code, REST APIs, and practical AI integration.
          </motion.p>

          <motion.div {...fade(0.42)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-fill px-6 py-3 text-sm font-medium text-ink-700 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-ink-900"
            >
              <DownloadIcon />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Labeled social buttons (like the reference) */}
        <motion.div
          {...fade(0.5)}
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group glass flex min-w-0 items-center justify-between gap-3 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-fill-strong"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Icon className="h-5 w-5 flex-shrink-0 text-ink-900" />
                <span className="truncate text-sm font-medium text-ink-900">{label}</span>
              </span>
              <ArrowIcon className="h-4 w-4 flex-shrink-0 -rotate-45 text-ink-500 transition-all group-hover:rotate-0 group-hover:text-accent" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-500 transition-colors hover:text-accent sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-accent"
          />
        </span>
      </motion.a>
    </section>
  );
}
