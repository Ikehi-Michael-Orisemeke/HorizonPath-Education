import { processContent } from "@/content/process";
import { PageHero } from "@/components/sections/page-hero";
import { StickyScrollReveal } from "@/components/motion/sticky-scroll-reveal";
import { CtaBand } from "@/components/sections/cta-band";

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

      <CtaBand
        title={cta.title}
        description={cta.description}
        button={cta.button}
      />
    </>
  );
}
