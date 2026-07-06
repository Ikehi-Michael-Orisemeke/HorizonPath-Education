"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/motion/aurora-background";
import { GridBackground } from "@/components/motion/grid-background";
import { LineReveal } from "@/components/motion/text-reveal";

const PATH_D =
  "M 30 180 C 30 140, 50 120, 80 110 S 120 90, 130 70 S 140 40, 170 30";

const floatingDestinations = [
  { label: "United Kingdom", x: "72%", y: "18%", delay: 0 },
  { label: "Canada", x: "58%", y: "32%", delay: 0.5, accent: true },
  { label: "United States", x: "68%", y: "52%", delay: 1 },
  { label: "Europe", x: "80%", y: "38%", delay: 1.5 },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const pathScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const pathRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  useEffect(() => {
    if (prefersReducedMotion || !pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power3.inOut",
      delay: 0.3,
    });
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] overflow-hidden"
    >
      <AuroraBackground />
      <GridBackground />

      {/* Large path mark — parallax on scroll */}
      <motion.div
        className="pointer-events-none absolute -right-20 top-1/4 hidden opacity-[0.07] lg:block xl:-right-10"
        style={{ y: heroY, scale: pathScale, rotate: pathRotate }}
      >
        <svg viewBox="0 0 200 200" className="h-[700px] w-[700px]" fill="none">
          <rect x="20" y="20" width="24" height="160" rx="6" fill="#0A2864" />
          <rect x="156" y="20" width="24" height="160" rx="6" fill="#0A2864" />
          <path
            ref={pathRef}
            d={PATH_D}
            stroke="#00A3A3"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="170" cy="30" r="12" fill="#00A3A3" />
        </svg>
      </motion.div>

      {/* Floating destination pills */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingDestinations.map((dest) => (
          <motion.div
            key={dest.label}
            className="absolute"
            style={{ left: dest.x, top: dest.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { delay: 0.8 + dest.delay, duration: 0.6 },
              scale: { delay: 0.8 + dest.delay, duration: 0.6 },
              y: {
                delay: 1.5 + dest.delay,
                duration: 4 + dest.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <span
              className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur-md ${
                dest.accent
                  ? "bg-teal text-white shadow-teal/25"
                  : "border border-white/40 bg-white/70 text-navy"
              }`}
            >
              {dest.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-8"
      >
        <LineReveal delay={0.1}>
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-teal">
            {homeContent.hero.eyebrow}
          </p>
        </LineReveal>

        <h1 className="mt-6 max-w-5xl">
          <span className="block overflow-hidden">
            {homeContent.hero.headline.split(" ").map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.3em] inline-block font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl xl:text-8xl"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="mt-1 block overflow-hidden">
            {homeContent.hero.headlineAccent.split(" ").map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.3em] inline-block bg-gradient-to-r from-teal via-teal to-[#00cfcf] bg-clip-text font-display text-5xl font-bold leading-[1.05] tracking-tight text-transparent sm:text-6xl lg:text-7xl xl:text-8xl"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <LineReveal delay={0.7} className="mt-8 max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {homeContent.hero.subheadline}
          </p>
        </LineReveal>

        <LineReveal delay={0.9} className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="accent" size="lg" data-cursor-accent className="group">
            <Link href="/contact">
              {homeContent.hero.primaryCta}
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/destinations">
              {homeContent.hero.secondaryCta}
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </LineReveal>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-navy/40"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      <div className="noise-overlay pointer-events-none absolute inset-0" />
    </section>
  );
}
