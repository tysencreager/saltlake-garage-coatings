import { useState } from "react";

/**
 * Lead-capture form. This is the single React island on the site; it is the
 * only element that genuinely needs client-side interactivity (validation +
 * success state). Everything else is static HTML for speed.
 *
 * On a static Cloudflare Pages deploy, point `action` at a form handler
 * (Cloudflare Pages Function, Formspree, etc.). Until then it validates and
 * shows a confirmation client-side so the UX is complete out of the box.
 */
const SERVICES = [
  "Garage Floor Coating",
  "Patio / Walkway Coating",
  "Commercial Epoxy Flooring",
  "Concrete Repair",
  "Not sure yet",
];

export default function LeadForm({ phoneDisplay, phoneHref, compact = false }) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [errors, setErrors] = useState({});

  function validate(data) {
    const next = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    const phone = (data.phone || "").replace(/[^\d]/g, "");
    if (phone.length < 10) next.phone = "Enter a valid phone number.";
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // No backend wired yet, so resolve locally and the confirmation shows.
    // Replace this block with a fetch() to your form endpoint at launch.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-sage-300 bg-cream-50 p-6 text-center"
      >
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-sage-400 text-cream-50">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path
              d="m5 13 4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-stone-ink">Request received</h3>
        <p className="mt-1.5 text-sm text-stone-soft">
          Thanks! We&apos;ll call you back shortly to schedule your quote.
          Need a faster answer?
        </p>
        <a
          href={phoneHref}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-sage-500 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-sage-600"
        >
          Call {phoneDisplay}
        </a>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-cream-200 bg-white px-3.5 py-2.5 text-sm text-stone-ink shadow-sm outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-300/50";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className={compact ? "" : "sm:flex sm:gap-4 sm:space-y-0 space-y-4"}>
        <div className="flex-1">
          <label htmlFor="lf-name" className="mb-1 block text-sm font-medium text-stone-ink">
            Name
          </label>
          <input
            id="lf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
            aria-invalid={errors.name ? "true" : undefined}
          />
          {errors.name && <p className="mt-1 text-xs text-sand-600">{errors.name}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor="lf-phone" className="mb-1 block text-sm font-medium text-stone-ink">
            Phone
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(801) 555-0123"
            className={fieldClass}
            aria-invalid={errors.phone ? "true" : undefined}
          />
          {errors.phone && <p className="mt-1 text-xs text-sand-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="lf-service" className="mb-1 block text-sm font-medium text-stone-ink">
          What do you need coated?
        </label>
        <select id="lf-service" name="service" className={fieldClass} defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {!compact && (
        <div>
          <label htmlFor="lf-details" className="mb-1 block text-sm font-medium text-stone-ink">
            Project details <span className="text-stone-soft">(optional)</span>
          </label>
          <textarea
            id="lf-details"
            name="details"
            rows={3}
            placeholder="Square footage, timeline, current floor condition…"
            className={fieldClass}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-sage-500 px-6 py-3 text-sm font-semibold text-cream-50 shadow-soft transition-colors hover:bg-sage-600 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Get My Quote"}
      </button>
      <p className="text-center text-xs text-stone-soft">
        Prefer to talk now?{" "}
        <a href={phoneHref} className="font-semibold text-sage-600 hover:underline">
          Call {phoneDisplay}
        </a>
      </p>
    </form>
  );
}
