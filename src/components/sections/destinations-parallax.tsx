"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { destinationsContent } from "@/content/destinations";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Destination = (typeof destinationsContent.destinations)[0];

function DestinationCard({
  dest,
  index,
}: {
  dest: Destination;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), {
    stiffness: 220,
    damping: 24,
  });
  const imageX = useSpring(useTransform(mouseX, [0, 1], [18, -18]), {
    stiffness: 180,
    damping: 28,
  });
  const imageY = useSpring(useTransform(mouseY, [0, 1], [14, -14]), {
    stiffness: 180,
    damping: 28,
  });
  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const glowBackground = useMotionTemplate`radial-gradient(420px circle at ${glowX} ${glowY}, rgba(15,163,166,0.28), transparent 55%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <StaggerItem>
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, index % 2 === 0 ? -6 : 6, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 5.5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }
        }
        className="h-full"
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={
            prefersReducedMotion
              ? undefined
              : { rotateX, rotateY, transformStyle: "preserve-3d" }
          }
          className="perspective-1000 group h-full"
          data-cursor-magnetic
        >
          <Link
            href="/destinations"
            className={cn(
              "relative block h-full min-h-[22rem] overflow-hidden rounded-3xl border border-white/10 bg-deep shadow-2xl shadow-black/30",
              "transition-shadow duration-500 hover:shadow-teal/20"
            )}
          >
            {!prefersReducedMotion && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: glowBackground }}
              />
            )}

            <motion.div
              className="absolute inset-[-12%]"
              style={
                prefersReducedMotion
                  ? undefined
                  : { x: imageX, y: imageY, scale: 1.12 }
              }
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index < 2}
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10" />
            <div className="absolute inset-0 bg-teal/0 transition-colors duration-500 group-hover:bg-teal/10" />

            <div className="relative z-10 flex h-full min-h-[22rem] flex-col justify-end p-6 sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal">
                Destination {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {dest.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-teal/90">
                {dest.tagline}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65 line-clamp-2 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                {dest.description}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                Explore pathway
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

export function DestinationsParallax() {
  const destinations = destinationsContent.destinations;

  return (
    <section
      className="relative overflow-hidden bg-navy py-28 lg:py-36"
      data-cursor-dark
    >
      <div className="absolute inset-0 opacity-20">
        <GridPattern />
      </div>
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 text-center lg:mb-16">
          <p className="font-display text-4xl font-bold uppercase tracking-[0.12em] text-teal sm:text-5xl">
            Global Reach
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Study where ambition meets opportunity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
          We place students at leading universities across all continents
          </p>
        </Reveal>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2 lg:gap-6"
          staggerDelay={0.12}
        >
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} index={index} />
          ))}
        </StaggerContainer>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-white/25 bg-transparent text-white hover:border-teal hover:bg-teal/10 hover:text-white"
          >
            <Link href="/destinations">
              View all destinations
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
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
