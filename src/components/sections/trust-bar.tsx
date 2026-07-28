"use client";

import { homeContent } from "@/content/home";
import { IcefBadge } from "@/components/sections/icef-badge";
import { CountUp } from "@/components/motion/count-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/reveal";

export function TrustBar() {
  return (
    <section className="relative border-y border-border/60 bg-card py-16">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerContainer className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:items-center">
          <StaggerItem className="lg:col-span-1">
            <IcefBadge />
          </StaggerItem>
          {homeContent.stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center lg:text-left">
              <CountUp
                value={stat.value}
                className="font-display text-4xl font-bold text-ink sm:text-5xl"
              />
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
