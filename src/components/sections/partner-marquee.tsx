"use client";

const partners = [
  "University of Manchester",
  "King's College London",
  "University of Toronto",
  "McGill University",
  "Northeastern University",
  "University of Amsterdam",
  "Trinity College Dublin",
  "University of Edinburgh",
  "University of Bristol",
  "Boston University",
];

export function PartnerMarquee() {
  const doubled = [...partners, ...partners];

  return (
    <section className="overflow-hidden bg-muted/40 py-14">
      <p className="mb-8 text-center text-xs font-extrabold uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by students placed at leading institutions
      </p>
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-16">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold text-navy/25 transition-colors hover:text-navy/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
