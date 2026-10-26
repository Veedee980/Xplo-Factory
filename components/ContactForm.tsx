"use client";

import Button from "@/components/Button";
import { useSubmit } from "@/lib/useSubmit";

export default function ContactForm() {
  const { status, submit } = useSubmit("contact");

  return (
    <form onSubmit={submit} className="card grid gap-5 p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-2 block text-sm font-medium">Full Name</label>
          <input id="c-name" required name="name" type="text" placeholder="Your full name" className="input-xplo" />
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-2 block text-sm font-medium">Phone Number</label>
          <input id="c-phone" name="phone" type="tel" placeholder="+263 ..." className="input-xplo" />
        </div>
      </div>
      <div>
        <label htmlFor="c-email" className="mb-2 block text-sm font-medium">Email Address</label>
        <input id="c-email" required name="email" type="email" placeholder="you@example.com" className="input-xplo" />
      </div>
      <div>
        <label htmlFor="c-message" className="mb-2 block text-sm font-medium">Message</label>
        <textarea id="c-message" required name="message" rows={6} placeholder="Tell us what you need…" className="input-xplo resize-none" />
      </div>
      <div>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </Button>
      </div>
      {status === "sent" && <p className="text-sm font-medium text-accent">Thanks! Your message has been received and we&apos;ll be in touch soon.</p>}
      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again or message us on WhatsApp.</p>}
    </form>
  );
}
