import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/brand/horizonpath.svg";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("relative z-10 flex shrink-0 items-center", className)}
      data-cursor-magnetic
      aria-label="HorizonPath Education — Home"
    >
      <Image
        src={LOGO_SRC}
        alt="HorizonPath Education"
        width={130}
        height={130}
        className="h-14 w-14 sm:h-16 sm:w-16"
        unoptimized
        priority={priority}
      />
    </Link>
  );
}
