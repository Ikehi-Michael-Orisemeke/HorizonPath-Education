"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processContent } from "@/content/process";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function ProcessTimeline() {
  const { steps, cta } = processContent;

  return (
    <div>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-teal/60 via-teal/25 to-teal/60 sm:block"
        />

        <StaggerContainer className="space-y-6">
          {steps.map((step) => (
            <StaggerItem key={step.id}>
              <article className="group relative grid gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:border-teal/20 hover:shadow-md sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
                <div className="flex items-start">
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal bg-background font-display text-lg font-semibold text-teal">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    Step {step.number} — {step.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <Reveal className="mt-10">
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          Looking for foundation pathways, ESL, or short courses too? These are
          offered as separate, dedicated programmes — see{" "}
          <Link
            href="/services"
            className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-teal"
          >
            Programmes
          </Link>{" "}
          for details.
        </p>
      </Reveal>

      <Reveal className="mt-8">
        <Button asChild variant="accent" size="lg" className="group shadow-lg shadow-teal/20">
          <Link href="/contact">
            {cta.button}
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </Reveal>
    </div>
  );
}
