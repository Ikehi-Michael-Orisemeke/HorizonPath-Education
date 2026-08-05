"use client";

import { successStoriesContent } from "@/content/success-stories";
import { SectionHeading } from "@/components/sections/section-heading";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SuccessStoriesSection() {
  const { hero, caseStudies } = successStoriesContent;

  return (
    <>
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

      <section className="relative overflow-hidden border-t border-border/40 bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Case studies
            </h3>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Deeper looks at how we navigate complex admissions challenges and deliver
              outcomes that matter.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.id} delay={0.12 + i * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                    <p className="text-muted-foreground">{study.summary}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-teal">
                        Challenge
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-teal">
                        Solution
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                    <div className="rounded-xl bg-teal/5 p-4">
                      <p className="text-xs font-extrabold uppercase tracking-widest text-teal">
                        Result
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">{study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
