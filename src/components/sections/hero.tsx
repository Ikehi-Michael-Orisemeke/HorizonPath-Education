"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/stock/homepage-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Students on a university campus"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Readability overlay — text left, image visible right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/40 lg:via-white/85 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-teal">
          {homeContent.hero.eyebrow}
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl">
          {homeContent.hero.headline}{" "}
          <span className="text-teal">{homeContent.hero.headlineAccent}</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {homeContent.hero.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="accent" size="lg" data-cursor-accent className="group">
            <Link href="/contact">
              {homeContent.hero.primaryCta}
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/destinations">
              {homeContent.hero.secondaryCta}
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
