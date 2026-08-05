"use client";

import {
  GraduationCap,
  BookOpen,
  Layers,
  ArrowRightLeft,
  Languages,
  Clock,
  Award,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { servicesContent } from "@/content/services";
import { ServicesHero } from "@/components/sections/services-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/reveal";

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

export default function ServicesPage() {
  const { services } = servicesContent;

  return (
    <>
      <ServicesHero />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? GraduationCap;
              return (
                <StaggerItem key={service.id}>
                  <SpotlightCard
                    className="h-full p-6 lg:p-8"
                    data-cursor-magnetic
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
