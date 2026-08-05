"use client";

import { successStoriesContent } from "@/content/success-stories";
import { SectionHeading } from "@/components/sections/section-heading";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Reveal } from "@/components/motion/reveal";

export function SuccessStoriesSection() {
  const { hero } = successStoriesContent;

  return (
    <section
      id="success-stories"
      className="relative overflow-hidden border-t border-border/40 bg-secondary/50 py-20 lg:py-28"
    >
      <div className="absolute inset-0 opacity-40 gradient-mesh" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label={hero.label}
            title={hero.title}
            description={hero.description}
          />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-4xl" delay={0.08}>
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  );
}
