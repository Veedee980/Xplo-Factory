"use client";

import Button from "@/components/Button";
import { useSubmit } from "@/lib/useSubmit";

export default function QuoteForm() {
  const { status, submit } = useSubmit("quote");

  return (
    <form onSubmit={submit} className="grid gap-4">
      <label className="sr-only" htmlFor="q-name">Name</label>
      <input id="q-name" required name="name" type="text" placeholder="Name" className="input-xplo" />
      <label className="sr-only" htmlFor="q-email">Email address</label>
      <input id="q-email" required name="email" type="email" placeholder="Email address" className="input-xplo" />
      <label className="sr-only" htmlFor="q-need">What do you need?</label>
      <textarea id="q-need" required name="need" rows={4} placeholder="What do you need?" className="input-xplo resize-none" />
      <div>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request My Quote"}
        </Button>
      </div>
      {status === "sent" && (
        <p className="text-sm font-medium text-accent">Thank you! We&apos;ll prepare your quote and get back to you shortly.</p>
      )}
      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again or message us on WhatsApp.</p>}
    </form>
  );
}
