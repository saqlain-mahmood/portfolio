import { profile, navLinks } from "../data";
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from "./Icons";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.twitter, label: "X (Twitter)", Icon: TwitterIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <a href="#home" className="group flex items-center gap-3">
              <span className="h-3 w-3 rotate-45 rounded-[3px] border border-accent/70 bg-accent/20" />
              <span className="font-display text-base font-semibold text-ink-900">
                Saqlain Mahmood
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-ink-500">
              Full-stack developer · MERN &amp; Next.js. Open to graduate /
              junior roles.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-ink-500 transition-colors hover:text-ink-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider + bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {profile.name}. Built with React,
            Tailwind CSS &amp; Framer Motion.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-fill text-ink-500 transition-all hover:-translate-y-0.5 hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
