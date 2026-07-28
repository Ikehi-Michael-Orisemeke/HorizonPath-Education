import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MARK_SRC = "/H_logo.svg";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Brand lockup (reversed on dark atmospheres):
 * teal H mark + HORIZON (ink/white) PATH (teal) in Instrument Sans,
 * Education in Newsreader italic. Wordmark hidden on mobile — mark only.
 */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "relative z-10 flex shrink-0 items-center gap-2.5 sm:gap-3",
        className
      )}
      data-cursor-magnetic
      aria-label="HorizonPath Education — Home"
    >
      {/* Crop SVG padding so the mark optically matches brand clearspace */}
      <span className="relative block h-9 w-9 shrink-0 overflow-hidden sm:h-10 sm:w-10">
        <Image
          src={MARK_SRC}
          alt=""
          width={64}
          height={64}
          className="absolute left-1/2 top-1/2 h-[118%] w-[118%] max-w-none -translate-x-1/2 -translate-y-[46%] object-contain"
          unoptimized
          priority={priority}
          aria-hidden
        />
      </span>

      <span className="hidden h-10 flex-col pt-2.5 sm:flex">
        <span className="font-sans text-[13px] font-semibold leading-none tracking-[0.02em]">
          <span className="text-ink">HORIZON</span>
          <span className="text-teal">PATH</span>
        </span>
        <span className="mt-1 font-display text-[9px] font-normal italic leading-none tracking-[0.01em] text-teal">
          Education
        </span>
      </span>
    </Link>
  );
}
