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
    <section className="relative overflow-hidden bg-navy py-28 lg:py-36" data-cursor-dark>
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,163,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,163,163,0.3) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label={servicesTeaser.label}
            title={servicesTeaser.title}
            description={servicesTeaser.description}
            light
          />
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2">
          {preview.map((service, i) => {
            const Icon = iconMap[service.icon] ?? GraduationCap;
            const isLarge = i === 0;
            return (
              <StaggerItem
                key={service.id}
                className={isLarge ? "sm:col-span-2" : ""}
              >
                <Link href="/services" data-cursor-magnetic>
                  <SpotlightCard
                    className={`border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 ${
                      isLarge ? "sm:p-8" : ""
                    }`}
                    spotlightColor="rgba(0, 163, 163, 0.2)"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal/20 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3
                          className={`font-display font-bold text-white ${
                            isLarge ? "text-2xl" : "text-lg"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`mt-2 leading-relaxed text-white/60 ${
                            isLarge ? "text-base line-clamp-3" : "text-sm line-clamp-2"
                          }`}
                        >
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white group"
          >
            <Link href="/services">
              View all services
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
