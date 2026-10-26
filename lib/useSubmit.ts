import { useState } from "react";
import type { FormEvent } from "react";

export type SubmitStatus = "idle" | "sending" | "sent" | "error";

/**
 * Posts a form to /api/contact. Connect that route (app/api/contact/route.ts)
 * to your email / CRM provider and every form on the site starts delivering.
 */
export function useSubmit(type: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...data }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return { status, submit };
}
