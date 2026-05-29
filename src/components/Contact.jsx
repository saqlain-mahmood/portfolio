import { profile } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import CopyEmail from "./CopyEmail";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
  DownloadIcon,
  ArrowIcon,
} from "./Icons";

// Quick-reach cards shown next to the form.
const methods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "LinkedIn", value: "in/saqlainmahmood", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "saqlain-mahmood", href: profile.github, Icon: GitHubIcon },
  { label: "X (Twitter)", value: "@saqlainmahmood_", href: profile.twitter, Icon: TwitterIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Contact" title="Let's work together" />

      <Reveal className="mb-10 max-w-xl">
        <p className="text-lg leading-relaxed text-ink-700">
          I'm currently looking for Associate Software Engineer opportunities.
          Have a role, a project, or just want to say hi? Drop a message below.
        </p>
        <div className="mt-6">
          <CopyEmail />
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {/* LEFT: the form */}
        <Reveal>
          <ContactForm />
        </Reveal>

        {/* RIGHT: quick links + CV */}
        <Reveal delay={0.1}>
          <div className="space-y-3">
            {methods.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group glass flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-fill-strong"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Icon className="h-5 w-5 flex-shrink-0 text-ink-900" />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-ink-500">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink-900">
                      {value}
                    </span>
                  </span>
                </span>
                <ArrowIcon className="h-4 w-4 flex-shrink-0 -rotate-45 text-ink-500 transition-all group-hover:rotate-0 group-hover:text-accent" />
              </a>
            ))}

            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-fill px-6 py-3 text-sm font-medium text-ink-700 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-ink-900"
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
