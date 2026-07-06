"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
  highlight?: string;
  highlightClassName?: string;
};

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
  highlight,
  highlightClassName,
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    if (highlight && text.includes(highlight)) {
      const [before, after] = text.split(highlight);
      return (
        <Tag className={className}>
          {before}
          <span className={highlightClassName}>{highlight}</span>
          {after}
        </Tag>
      );
    }
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <Tag className={cn("flex flex-wrap gap-x-[0.3em]", className)}>
      {words.map((word, i) => {
        const isHighlight = highlight && word.includes(highlight.replace(/[^\w]/g, ""));
        return (
          <motion.span
            key={`${word}-${i}`}
            className={cn("inline-block", isHighlight && highlightClassName)}
            initial={{ opacity: 0, y: 40, rotateX: -40 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformPerspective: 800 }}
          >
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
}

export function LineReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
