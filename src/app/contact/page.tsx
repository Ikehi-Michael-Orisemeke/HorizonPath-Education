import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForms } from "@/components/sections/contact-forms";
import { Reveal } from "@/components/motion/reveal";
import { IcefBadge } from "@/components/sections/icef-badge";

export const metadata: Metadata = {
  title: "Contact & Apply",
  description:
    "Start your university application or send a general enquiry to HorizonPath Education. We'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-8">
          <Reveal className="lg:col-span-2">
            <ContactForms />
          </Reveal>

          <Reveal delay={0.15} className="space-y-8">
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-6">
              <h3 className="font-display text-lg font-bold text-navy">
                What happens next?
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-teal">1.</span>
                  We review your enquiry within one business day
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal">2.</span>
                  A dedicated advisor schedules a free consultation
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal">3.</span>
                  Together we map your pathway to the right university
                </li>
              </ol>
            </div>

            <IcefBadge />

            <div className="rounded-2xl border border-border/60 bg-white p-6">
              <p className="text-xs text-muted-foreground">
                A subsidiary of R&M Education Group.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
