"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: string;
  className?: string;
};

function parseValue(value: string): { num: number; suffix: string; prefix: string } {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3] };
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const { prefix, num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(prefersReducedMotion ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${Math.round(num * eased)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, num, prefix, suffix, value, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
