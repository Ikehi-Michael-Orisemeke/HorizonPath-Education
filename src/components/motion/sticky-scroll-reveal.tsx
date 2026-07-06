"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

type StickyScrollItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
  number: string;
};

export function StickyScrollReveal({ items }: { items: StickyScrollItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(Math.floor(v * items.length), items.length - 1);
    setActive(Math.max(0, index));
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${items.length * 80}vh` }}>
      <div className="sticky top-24 flex flex-col gap-8 lg:top-32 lg:flex-row lg:gap-16">
        <div className="lg:w-2/5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-deep to-navy p-8 shadow-2xl shadow-navy/20">
            <div className="absolute inset-0 opacity-30">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,163,163,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,163,163,0.15) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
            </div>
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className="absolute inset-0 flex flex-col justify-end p-8"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 0.95,
                  y: active === i ? 0 : 20,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display text-8xl font-bold text-white/10">
                  {item.number}
                </span>
                <h3 className="mt-2 font-display text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-3/5">
          <div className="space-y-[40vh] py-[20vh]">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className={cn(
                  "rounded-2xl border p-6 transition-all duration-500 lg:p-8",
                  active === i
                    ? "border-teal/30 bg-white shadow-lg shadow-teal/5"
                    : "border-border/40 bg-muted/30"
                )}
                animate={{
                  opacity: active === i ? 1 : 0.4,
                  x: active === i ? 0 : 10,
                }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-extrabold uppercase tracking-widest text-teal">
                  Step {item.number}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
