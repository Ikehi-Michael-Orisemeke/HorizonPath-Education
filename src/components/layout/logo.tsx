import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/Horizonpath.svg";

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
        width={200}
        height={55}
        className="h-11 w-auto min-w-[130px] sm:h-12"
        unoptimized
        priority={priority}
      />
    </Link>
  );
}
