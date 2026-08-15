import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import TestimonialCarousel from "./TestimonialCarousel"; // client

export default async function TestimonialCarouselServer() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const testimonials = await reader.collections.testimonials.all();

  const data = testimonials.map(t => ({
    quote: t.entry.quote,
    name: t.entry.name,
    role: t.entry.role.name,
  }));

  if (testimonials.length === 0) return null;

  return <TestimonialCarousel testimonials={data} />;
}