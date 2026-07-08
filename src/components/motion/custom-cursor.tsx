"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { isOnDarkSurface } from "@/lib/cursor-theme";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isAccent, setIsAccent] = useState(false);
  const [onDark, setOnDark] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { damping: 28, stiffness: 400, mass: 0.3 });
  const dotY = useSpring(mouseY, { damping: 28, stiffness: 400, mass: 0.3 });
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.6 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) return;

    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const magnetic = target.closest("[data-cursor-magnetic]") as HTMLElement | null;
      const accent = target.closest("[data-cursor-accent]");

      let x = e.clientX;
      let y = e.clientY;

      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        x += (rect.left + rect.width / 2 - e.clientX) * 0.3;
        y += (rect.top + rect.height / 2 - e.clientY) * 0.3;
      }

      mouseX.set(x);
      mouseY.set(y);
      setIsVisible(true);
      setIsHovering(!!magnetic);
      setIsAccent(!!accent);
      setOnDark(isOnDarkSurface(target));
    };

    window.addEventListener("mousemove", moveCursor);
    document.documentElement.addEventListener("mouseleave", () =>
      setIsVisible(false)
    );
    document.documentElement.addEventListener("mouseenter", () =>
      setIsVisible(true)
    );

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  const dotColor = onDark
    ? isAccent
      ? "#0FA3A6"
      : "#FFFFFF"
    : isAccent
      ? "#0FA3A6"
      : "#0F3D6E";

  const ringColor = onDark
    ? isAccent
      ? "rgba(15, 163, 166, 0.85)"
      : "rgba(255, 255, 255, 0.5)"
    : isAccent
      ? "rgba(15, 163, 166, 0.5)"
      : "rgba(15, 61, 110, 0.25)";

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isHovering ? 0.4 : 1 }}
        transition={{ duration: 0.12 }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full shadow-sm"
          style={{
            width: isAccent ? 10 : 7,
            height: isAccent ? 10 : 7,
            backgroundColor: dotColor,
            boxShadow: onDark ? "0 0 6px rgba(0,0,0,0.25)" : undefined,
          }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isHovering ? 2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-colors duration-200"
          style={{
            width: 44,
            height: 44,
            borderColor: ringColor,
          }}
        />
      </motion.div>
    </>
  );
}
