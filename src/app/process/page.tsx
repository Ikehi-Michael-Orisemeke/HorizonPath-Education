import { processContent } from "@/content/process";
import { PageHero } from "@/components/sections/page-hero";
import { StickyScrollReveal } from "@/components/motion/sticky-scroll-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProcessPage() {
  const { hero, cta, steps } = processContent;

  return (
    <>
      <PageHero label={hero.label} title={hero.title} description={hero.description} />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StickyScrollReveal items={steps} />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/60 bg-navy py-24">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,163,163,0.4), transparent 70%)`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-4 text-white/70">{cta.description}</p>
          <Button
            asChild
            variant="accent"
            size="lg"
            className="mt-8 shadow-xl shadow-teal/20"
            data-cursor-accent
          >
            <Link href="/contact">{cta.button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
