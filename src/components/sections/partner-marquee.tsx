"use client";

import Image from "next/image";
import { partnerUniversities } from "@/content/partners";

function PartnerLogo({ name, crest }: { name: string; crest: string }) {
  return (
    <div className="group flex shrink-0 items-center gap-4 px-2">
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-white p-2 shadow-sm transition-shadow group-hover:shadow-md">
        <Image
          src={crest}
          alt={`${name} crest`}
          width={48}
          height={48}
          className="h-full w-full object-contain"
          unoptimized={crest.endsWith(".svg")}
        />
      </div>
      <span className="whitespace-nowrap font-display text-base font-medium text-ink/40 transition-colors group-hover:text-ink/70 sm:text-lg">
        {name}
      </span>
    </div>
  );
}

export function PartnerMarquee() {
  const doubled = [...partnerUniversities, ...partnerUniversities];

  return (
    <section className="overflow-hidden border-y border-border/40 bg-muted/40 py-14">
      <p className="mb-10 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        Trusted by students placed at leading institutions
      </p>
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 sm:gap-16">
          {doubled.map((partner, i) => (
            <PartnerLogo
              key={`${partner.id}-${i}`}
              name={partner.name}
              crest={partner.crest}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
