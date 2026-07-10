"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { destinationsContent } from "@/content/destinations";

function DestinationCard({
  dest,
  translateX,
}: {
  dest: (typeof destinationsContent.destinations)[0];
  translateX: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ x: translateX }}
      className="group relative h-72 w-[22rem] shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-navy/20"
      data-cursor-magnetic
    >
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        sizes="352px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/15" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <h3 className="font-display text-2xl font-bold text-white">
          {dest.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-teal">{dest.tagline}</p>
      </div>
      <div className="absolute inset-0 bg-teal/0 transition-colors duration-500 group-hover:bg-teal/10" />
    </motion.div>
  );
}

export function DestinationsParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const row2X = useTransform(scrollYProgress, [0, 1], [0, 400]);

  const firstRow = destinationsContent.destinations.slice(0, 2);
  const secondRow = destinationsContent.destinations.slice(2, 4);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-32" data-cursor-dark>
      <div className="absolute inset-0 opacity-20">
        <GridPattern />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-teal">
            Global Reach
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Four continents. Endless opportunity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Scroll to explore the destinations where we place students at
            world-class universities.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-6 pl-6">
          {[...firstRow, ...firstRow].map((dest, i) => (
            <DestinationCard
              key={`r1-${dest.id}-${i}`}
              dest={dest}
              translateX={row1X}
            />
          ))}
        </div>
        <div className="flex gap-6 pl-6">
          {[...secondRow, ...secondRow].map((dest, i) => (
            <DestinationCard
              key={`r2-${dest.id}-${i}`}
              dest={dest}
              translateX={row2X}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GridPattern() {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0,163,163,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,163,163,0.1) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
