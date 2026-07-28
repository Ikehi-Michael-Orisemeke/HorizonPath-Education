import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-teal",
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-balance",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
