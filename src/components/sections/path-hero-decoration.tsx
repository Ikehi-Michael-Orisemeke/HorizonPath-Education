"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { AuroraBackground } from "@/components/motion/aurora-background";
import { GridBackground } from "@/components/motion/grid-background";

const PATH_D =
  "M 30 180 C 30 140, 50 120, 80 110 S 120 90, 130 70 S 140 40, 170 30";

type FloatingItem = {
  label: string;
  x: string;
  y: string;
  delay: number;
  accent?: boolean;
};

type PathHeroDecorationProps = {
  floatingItems?: FloatingItem[];
};

export function PathHeroDecoration({ floatingItems }: PathHeroDecorationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const pathY = useTransform(scrollYProgress, [0, 1], [0, 200]);
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
    <div ref={sectionRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <AuroraBackground />
      <GridBackground />

      <motion.div
        className="absolute -right-20 top-1/4 hidden opacity-[0.07] lg:block xl:-right-10"
        style={{ y: pathY, scale: pathScale, rotate: pathRotate }}
      >
        <svg viewBox="0 0 200 200" className="h-[700px] w-[700px]" fill="none">
          <rect x="20" y="20" width="24" height="160" rx="6" fill="#0F3D6E" />
          <rect x="156" y="20" width="24" height="160" rx="6" fill="#0F3D6E" />
          <path
            ref={pathRef}
            d={PATH_D}
            stroke="#0F3D6E"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="170" cy="30" r="12" fill="#0FA3A6" />
        </svg>
      </motion.div>

      {floatingItems && floatingItems.length > 0 && (
        <div className="absolute inset-0 hidden lg:block">
          {floatingItems.map((item) => (
            <motion.div
              key={item.label}
              className="absolute"
              style={{ left: item.x, top: item.y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { delay: 0.8 + item.delay, duration: 0.6 },
                scale: { delay: 0.8 + item.delay, duration: 0.6 },
                y: {
                  delay: 1.5 + item.delay,
                  duration: 4 + item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <span
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur-md ${
                  item.accent
                    ? "bg-teal text-white shadow-teal/25"
                    : "border border-white/40 bg-white/70 text-navy"
                }`}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
