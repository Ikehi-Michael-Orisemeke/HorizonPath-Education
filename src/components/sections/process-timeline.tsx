"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processContent } from "@/content/process";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const steps = containerRef.current.querySelectorAll("[data-step]");
    steps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0.3, x: -20 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
          },
          duration: 0.5,
          delay: i * 0.05,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-teal via-teal/30 to-transparent md:left-8 md:block" />

      <div className="space-y-8">
        {processContent.steps.map((step, index) => (
          <div
            key={step.id}
            data-step
            className={cn(
              "relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all md:ml-16 md:p-8",
              "hover:border-teal/20 hover:shadow-md"
            )}
          >
            <div className="absolute -left-16 top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-teal shadow-md md:block" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-teal">
                  Step {step.number}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              <span className="font-display text-5xl font-bold text-ink/5">
                {step.number}
              </span>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-3">
              {step.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {detail}
                </li>
              ))}
            </ul>
            {index < processContent.steps.length - 1 && (
              <div className="mt-4 block h-px bg-border/60 md:hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
