"use client";

import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Layers,
  ArrowRightLeft,
  Languages,
  Clock,
  Award,
  Globe,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { servicesContent } from "@/content/services";
import { homeContent } from "@/content/home";
import { SectionHeading } from "@/components/sections/section-heading";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  Layers,
  ArrowRightLeft,
  Languages,
  Clock,
  Award,
  Globe,
};

export function ServicesTeaser() {
  const preview = servicesContent.services.slice(0, 4);
  const { servicesTeaser } = homeContent;

  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-muted py-28 lg:py-36">
      <div className="absolute inset-0 opacity-60 gradient-mesh" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label={servicesTeaser.label}
            title={servicesTeaser.title}
            description={servicesTeaser.description}
          />
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2">
          {preview.map((service) => {
            const Icon = iconMap[service.icon] ?? GraduationCap;
            return (
              <StaggerItem key={service.id}>
                <Link href="/services" data-cursor-magnetic>
                  <SpotlightCard className="h-full p-6 lg:p-8">
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal className="mt-12" delay={0.15}>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/services">
              View all programmes
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
