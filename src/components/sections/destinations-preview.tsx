"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinationsContent } from "@/content/destinations";
import { homeContent } from "@/content/home";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { TiltCard } from "@/components/motion/tilt-card";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const flagEmoji: Record<string, string> = {
  uk: "🇬🇧",
  canada: "🇨🇦",
  usa: "🇺🇸",
  europe: "🇪🇺",
};

const accentBorders: Record<string, string> = {
  uk: "group-hover:border-blue-400/30",
  canada: "group-hover:border-red-400/30",
  usa: "group-hover:border-indigo-400/30",
  europe: "group-hover:border-teal/30",
};

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
              <TiltCard>
                <Link href="/destinations" className="block h-full">
                  <SpotlightCard
                    className={`h-full p-6 ${accentBorders[dest.id] ?? ""}`}
                    spotlightColor="rgba(0, 163, 163, 0.15)"
                  >
                    <span className="text-4xl">{flagEmoji[dest.id]}</span>
                    <h3 className="mt-5 font-display text-xl font-bold text-navy">
                      {dest.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-teal">
                      {dest.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {dest.description}
                    </p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-navy transition-colors group-hover:text-teal">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </SpotlightCard>
                </Link>
              </TiltCard>
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
