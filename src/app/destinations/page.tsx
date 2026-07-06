"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinationsContent } from "@/content/destinations";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { TiltCard } from "@/components/motion/tilt-card";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const flagEmoji: Record<string, string> = {
  uk: "🇬🇧",
  canada: "🇨🇦",
  usa: "🇺🇸",
  europe: "🇪🇺",
};

const headerGradients: Record<string, string> = {
  uk: "from-blue-800 via-navy to-deep",
  canada: "from-red-900 via-navy to-deep",
  usa: "from-indigo-900 via-navy to-deep",
  europe: "from-teal-800 via-navy to-deep",
};

export default function DestinationsPage() {
  const { hero, destinations } = destinationsContent;

  return (
    <>
      <PageHero label={hero.label} title={hero.title} description={hero.description} />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 lg:grid-cols-2">
            {destinations.map((dest) => (
              <StaggerItem key={dest.id}>
                <TiltCard>
                  <SpotlightCard className="overflow-hidden p-0" data-cursor-magnetic>
                    <div
                      className={cn(
                        "relative h-52 bg-gradient-to-br p-8",
                        headerGradients[dest.id]
                      )}
                    >
                      <div className="absolute inset-0 opacity-30">
                        <div
                          className="h-full w-full"
                          style={{
                            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(0,163,163,0.5), transparent 60%)`,
                          }}
                        />
                      </div>
                      <span className="relative text-5xl">{flagEmoji[dest.id]}</span>
                      <h2 className="relative mt-4 font-display text-3xl font-bold text-white">
                        {dest.name}
                      </h2>
                      <p className="relative mt-1 text-sm font-semibold text-teal">
                        {dest.tagline}
                      </p>
                    </div>
                    <div className="flex flex-col p-8">
                      <p className="leading-relaxed text-muted-foreground">
                        {dest.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {dest.highlights.map((h) => (
                          <Badge key={h} variant="accent">
                            {h}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-6 border-t border-border/60 pt-6">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                          Partner institutions
                        </p>
                        <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                          {dest.universities.map((u) => (
                            <li key={u} className="text-sm font-medium text-navy">
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal className="mt-14 text-center">
            <Button asChild variant="accent" size="lg" data-cursor-accent className="group shadow-lg shadow-teal/20">
              <Link href="/contact">
                Start Your Application
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
