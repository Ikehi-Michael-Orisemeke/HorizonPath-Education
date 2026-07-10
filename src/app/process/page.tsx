import { processContent } from "@/content/process";
import { ProcessHero } from "@/components/sections/process-hero";
import { StickyScrollReveal } from "@/components/motion/sticky-scroll-reveal";
import { CtaBand } from "@/components/sections/cta-band";

export default function ProcessPage() {
  const { cta, steps } = processContent;

  return (
    <>
      <ProcessHero />

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
