"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
};

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(0, 163, 163, 0.12)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-navy/5",
        className
      )}
      data-cursor-magnetic
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
