"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { servicesContent } from "@/content/services";
import { PathHeroDecoration } from "@/components/sections/path-hero-decoration";
import { LineReveal } from "@/components/motion/text-reveal";

const floatingServices = [
  { label: "Undergraduate", x: "68%", y: "20%", delay: 0 },
  { label: "Postgraduate", x: "78%", y: "35%", delay: 0.4, accent: true },
  { label: "ESL Programmes", x: "62%", y: "50%", delay: 0.8 },
  { label: "Study Abroad", x: "72%", y: "62%", delay: 1.2 },
];

export function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { hero } = servicesContent;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const words = hero.title.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      <PathHeroDecoration floatingItems={floatingServices} />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8"
      >
        <LineReveal delay={0.1}>
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-teal">
            {hero.label}
          </p>
        </LineReveal>

        <h1 className="mt-6 max-w-4xl overflow-hidden">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.25em] inline-block font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <LineReveal delay={0.5} className="mt-6 max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {hero.description}
          </p>
        </LineReveal>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-ink/40"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
