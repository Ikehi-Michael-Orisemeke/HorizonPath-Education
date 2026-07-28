"use client";

import Image from "next/image";
import { successStoriesContent } from "@/content/success-stories";

const HERO_IMAGE = "/stock/success-stories-hero.jpg";

export function SuccessStoriesHero() {
  const { hero } = successStoriesContent;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Students celebrating university success"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Readability overlay — text left, image visible right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40 lg:via-background/85 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-teal">
          {hero.label}
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
