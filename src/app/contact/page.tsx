import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForms } from "@/components/sections/contact-forms";
import { Reveal } from "@/components/motion/reveal";
import { IcefBadge } from "@/components/sections/icef-badge";

export const metadata: Metadata = {
  title: "Contact & Apply",
  description:
    "Start your university application or send a general enquiry to HorizonPath Education. A dedicated advisor will respond within 48 hours.",
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
            <IcefBadge />

            <div className="rounded-2xl border border-border/60 bg-card p-6">
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
