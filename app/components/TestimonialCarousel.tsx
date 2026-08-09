"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "First keyboard that's made me want to type more, not less.",
    name: "Priya M.",
    role: "Product Designer",
  },
  {
    quote: "Sounds better than boards twice the price. Not exaggerating.",
    name: "Daniel K.",
    role: "Software Engineer",
  },
  {
    quote: "Bought it for the sound. Stayed for how it feels.",
    name: "Ren O.",
    role: "Writer",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    setIndex((i + testimonials.length) % testimonials.length);
  };

  const active = testimonials[index];

  return (
    <div className="mx-auto max-w-xl rounded-2xl bg-cream-card px-8 py-10 text-center shadow-sm">
      <p className="font-body text-lg leading-relaxed text-ink">
        &ldquo;{active.quote}&rdquo;
      </p>
      <p className="mt-4 font-mono text-sm text-muted">
        — {active.name}, {active.role}
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => goTo(index - 1)}
          className="text-ink transition hover:opacity-60"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-ink" : "bg-ink/25"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => goTo(index + 1)}
          className="text-ink transition hover:opacity-60"
        >
          →
        </button>
      </div>
    </div>
  );
}
