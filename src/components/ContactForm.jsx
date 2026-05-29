import { useState } from "react";
import { profile } from "../data";
import { ArrowIcon } from "./Icons";

// A real contact form.
// - If `profile.formEndpoint` (Formspree) is set, it submits in-page via fetch.
// - Otherwise it falls back to opening the visitor's email app with the message
//   pre-filled, so it still "works" with zero setup.
export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const inputClass =
    "w-full rounded-lg border border-line bg-fill px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-500 transition-colors focus:border-accent focus:outline-none";

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    // Fallback: no Formspree endpoint → open the email app
    if (!profile.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email" className={inputClass} />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Your message…"
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {status === "success" && (
        <p className="text-sm text-accent">Thanks! I'll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong — please email me directly.
        </p>
      )}
    </form>
  );
}
