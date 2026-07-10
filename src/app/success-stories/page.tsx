import type { Metadata } from "next";
import { successStoriesContent } from "@/content/success-stories";
import { SuccessStoriesHero } from "@/components/sections/success-stories-hero";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Read how HorizonPath Education students achieved their university placement goals across the UK, Canada, USA, and Europe.",
};

export default function SuccessStoriesPage() {
  const { caseStudies } = successStoriesContent;

  return (
    <>
      <SuccessStoriesHero />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Case studies
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Deeper looks at how we navigate complex admissions challenges and deliver
              outcomes that matter.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.id} delay={i * 0.1}>
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
                      <p className="mt-1 text-sm font-medium text-navy">
                        {study.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
