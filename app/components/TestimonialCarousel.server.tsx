import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import TestimonialCarousel from "./TestimonialCarousel"; // client

export default async function TestimonialCarouselServer() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const testimonials = await reader.collections.testimonials.all();
  return <TestimonialCarousel testimonials={testimonials} />;
}