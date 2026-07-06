"use client";

import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { successStoriesContent } from "@/content/success-stories";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TestimonialCarousel() {
  const { testimonials } = successStoriesContent;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) next();
    else if (info.offset.x > 80) prev();
  };

  const current = testimonials[active];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-border/60 bg-white shadow-lg">
        <motion.div
          key={active}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="cursor-grab p-8 active:cursor-grabbing lg:p-14"
        >
          <Quote className="h-10 w-10 text-teal/30" />
          <blockquote className="mt-8 font-display text-xl font-medium leading-relaxed text-navy sm:text-2xl lg:text-3xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div>
              <p className="text-lg font-semibold text-navy">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.role}</p>
            </div>
            <Badge variant="accent" className="text-sm">
              {current.destination}
            </Badge>
          </div>
          <p className="mt-4 text-sm font-semibold text-teal">{current.outcome}</p>
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-10 bg-teal" : "w-2 bg-navy/15 hover:bg-navy/30"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prev} aria-label="Previous">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={next} aria-label="Next">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground lg:hidden">
        Swipe to navigate
      </p>
    </div>
  );
}
