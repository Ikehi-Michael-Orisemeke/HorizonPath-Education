import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

type IcefBadgeProps = {
  variant?: "default" | "footer";
};

export function IcefBadge({ variant = "default" }: IcefBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-xl border px-4 py-3",
        variant === "footer"
          ? "border-white/10 bg-white/5"
          : "border-ink/10 bg-card shadow-sm"
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg",
          variant === "footer" ? "bg-teal/20" : "bg-teal/10"
        )}
      >
        <ShieldCheck
          className={cn(
            "h-5 w-5",
            variant === "footer" ? "text-teal" : "text-teal"
          )}
        />
      </div>
      <div>
        <p
          className={cn(
            "text-xs font-extrabold uppercase tracking-widest",
            variant === "footer" ? "text-white/80" : "text-ink"
          )}
        >
          ICEF Accredited
        </p>
        <p
          className={cn(
            "text-xs",
            variant === "footer" ? "text-white/50" : "text-muted-foreground"
          )}
        >
          Quality education agency standards
        </p>
      </div>
    </div>
  );
}
