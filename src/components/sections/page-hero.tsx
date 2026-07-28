"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/motion/aurora-background";
import { GridBackground } from "@/components/motion/grid-background";
import { LineReveal } from "@/components/motion/text-reveal";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({ label, title, description, className }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = title.split(" ");

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32",
        className
      )}
    >
      <AuroraBackground />
      <GridBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        {label && (
          <LineReveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-teal">
              {label}
            </p>
          </LineReveal>
        )}
        <h1 className="mt-4 max-w-4xl overflow-hidden">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.25em] inline-block font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        {description && (
          <LineReveal delay={0.4} className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </LineReveal>
        )}
      </motion.div>

      <div className="noise-overlay pointer-events-none absolute inset-0" />
    </section>
  );
}
