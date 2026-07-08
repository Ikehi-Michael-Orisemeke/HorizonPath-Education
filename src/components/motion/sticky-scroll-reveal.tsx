"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickyScrollItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
  number: string;
};

export function StickyScrollReveal({ items }: { items: StickyScrollItem[] }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(index);
          }
        },
        {
          root: null,
          rootMargin: "-35% 0px -35% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <div className="relative">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left — sticky visual panel */}
        <div className="lg:sticky lg:top-32 lg:h-fit lg:w-2/5 lg:self-start">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-deep to-navy shadow-2xl shadow-navy/20"
            data-cursor-dark
          >
            <div className="absolute inset-0 opacity-30">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(15,163,166,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(15,163,166,0.15) 1px, transparent 1px)`,
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
                  scale: active === i ? 1 : 0.96,
                  y: active === i ? 0 : 16,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: active === i ? 2 : 1 }}
                aria-hidden={active !== i}
              >
                <span className="font-display text-8xl font-bold text-white/10">
                  {item.number}
                </span>
                <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — scrolling steps */}
        <div className="lg:w-3/5">
          <div className="flex flex-col gap-8 lg:gap-24 lg:py-12">
            {items.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="min-h-[50vh] lg:min-h-[60vh] lg:flex lg:items-center"
              >
                <motion.div
                  className={cn(
                    "w-full rounded-2xl border p-6 transition-colors duration-500 lg:p-8",
                    active === i
                      ? "border-teal/30 bg-white shadow-lg shadow-teal/5"
                      : "border-border/40 bg-muted/30"
                  )}
                  animate={{
                    opacity: active === i ? 1 : 0.45,
                    x: active === i ? 0 : 8,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-teal">
                    Step {item.number}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
