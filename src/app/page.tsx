import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { DestinationsParallax } from "@/components/sections/destinations-parallax";
import { DestinationsPreview } from "@/components/sections/destinations-preview";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PartnerMarquee />
      <DestinationsParallax />
      <DestinationsPreview />
      <ServicesTeaser />
      <CtaBand />
    </>
  );
}
