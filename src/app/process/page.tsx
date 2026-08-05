import { ProcessHero } from "@/components/sections/process-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProcessTimeline />
        </div>
      </section>
    </>
  );
}
