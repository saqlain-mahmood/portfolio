import { useState } from "react";
import { profile } from "../data";
import { MailIcon, CopyIcon, CheckIcon } from "./Icons";

// A pill that copies the email to the clipboard and briefly confirms it.
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked — fall back to opening the mail app
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="glass group inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm transition-all hover:-translate-y-0.5 hover:bg-fill-strong"
    >
      <MailIcon className="h-4 w-4 text-accent" />
      <span className="font-medium text-ink-900">{profile.email}</span>
      <span className="flex items-center gap-1 text-xs text-ink-500">
        {copied ? (
          <>
            <CheckIcon className="h-3.5 w-3.5 text-accent" /> Copied
          </>
        ) : (
          <>
            <CopyIcon className="h-3.5 w-3.5" /> Copy
          </>
        )}
      </span>
    </button>
  );
}
