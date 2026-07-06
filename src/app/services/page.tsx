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
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

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

const bentoLayout: Record<string, string> = {
  undergraduate: "sm:col-span-2 sm:row-span-2",
  postgraduate: "sm:col-span-1",
  foundation: "sm:col-span-1",
  transfer: "sm:col-span-1",
  esl: "sm:col-span-1",
  "short-courses": "sm:col-span-1",
  certifications: "sm:col-span-1",
  "study-abroad": "sm:col-span-2",
};

export default function ServicesPage() {
  const { hero, services } = servicesContent;

  return (
    <>
      <PageHero label={hero.label} title={hero.title} description={hero.description} />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? GraduationCap;
              const isLarge = service.id === "undergraduate";
              return (
                <StaggerItem
                  key={service.id}
                  className={bentoLayout[service.id] ?? ""}
                >
                  <SpotlightCard
                    className={cn(
                      "h-full p-6 lg:p-8",
                      isLarge && "sm:p-10"
                    )}
                    data-cursor-magnetic
                  >
                    <div
                      className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white",
                        isLarge && "h-16 w-16"
                      )}
                    >
                      <Icon className={isLarge ? "h-8 w-8" : "h-6 w-6"} />
                    </div>
                    <h3
                      className={cn(
                        "font-display font-bold text-navy",
                        isLarge ? "text-2xl lg:text-3xl" : "text-xl"
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 leading-relaxed text-muted-foreground",
                        isLarge ? "text-base" : "text-sm"
                      )}
                    >
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

      <section className="relative overflow-hidden border-t border-border/60 bg-muted/30 py-24">
        <div className="absolute inset-0 opacity-50 gradient-mesh" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              label="EduVoyage absorbed"
              title="ESL, short courses & study-abroad — all under one roof"
              description="Former EduVoyage programmes now live here at HorizonPath. From intensive English courses to professional certifications and study-abroad consulting, we cover the full spectrum of international education for students aged 16 and above."
              align="center"
              className="max-w-3xl"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
