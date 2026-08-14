"use client";
import { useState } from "react";

type SimpleTestimonial = { 
  quote: string; 
  name: string; 
  role: string 
};

type Props = { 
  testimonials: SimpleTestimonial[] 
};

export default function TestimonialCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    if (testimonials.length === 0) return;
    setIndex((i + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const safeIndex = testimonials.length === 0 ? 0 : index % ((index % testimonials.length) + testimonials.length) % testimonials.length;
  const active = testimonials[safeIndex];

  return (
  <div className="mx-auto flex h-72 max-w-xl flex-col rounded-2xl bg-cream-card px-8 py-10 text-center shadow-sm">
    <div className="flex flex-1 flex-col items-center justify-center overflow-hidden">
      <p className="font-body text-lg leading-relaxed text-ink">
        {active.quote}
      </p>
      <p className="mt-4 font-mono text-sm text-muted">
        — {active.name}, {active.role}
      </p>
    </div>

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
)}