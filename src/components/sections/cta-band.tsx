"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  const { cta } = homeContent;

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 gradient-mesh" />
      <AuroraAccent />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <motion.div
            initial={false}
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl text-balance">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              {cta.description}
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="mt-10 group shadow-xl shadow-teal/20"
              data-cursor-accent
            >
              <Link href="/contact">
                {cta.button}
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function AuroraAccent() {
  return (
    <>
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-navy/10 blur-3xl" />
    </>
  );
}
