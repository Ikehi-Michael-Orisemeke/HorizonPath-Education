"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinationsContent } from "@/content/destinations";
import { homeContent } from "@/content/home";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function DestinationsPreview() {
  const { destinationsPreview } = homeContent;

  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label={destinationsPreview.label}
            title={destinationsPreview.title}
            description={destinationsPreview.description}
          />
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinationsContent.destinations.map((dest) => (
            <StaggerItem key={dest.id}>
              <Link
                href="/destinations"
                className="group block h-full overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-shadow hover:shadow-lg"
                data-cursor-magnetic
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-xl font-bold text-white">
                      {dest.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-teal">
                      {dest.tagline}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {dest.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-navy transition-colors group-hover:text-teal">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <Button asChild variant="outline" size="lg" className="group">
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
