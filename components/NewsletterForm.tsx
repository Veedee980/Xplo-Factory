"use client";

import { useSubmit } from "@/lib/useSubmit";

export default function NewsletterForm() {
  const { status, submit } = useSubmit("newsletter");

  return (
    <div className="w-full max-w-md">
      <form onSubmit={submit} className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          aria-label="Email address"
          placeholder="Your email address"
          className="w-full rounded-full border border-paper/20 bg-transparent px-5 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent-light disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : status === "sent" ? "Subscribed ✓" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-accent-light">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
