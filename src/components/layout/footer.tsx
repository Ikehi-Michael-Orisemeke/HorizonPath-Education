import Link from "next/link";
import { brand, navLinks } from "@/lib/brand";
import { Separator } from "@/components/ui/separator";
import { IcefBadge } from "@/components/sections/icef-badge";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,163,163,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,163,163,0.2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-bold">{brand.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {brand.tagline}
            </p>
            <p className="mt-8 text-xs text-white/40">{brand.parentLine}</p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-teal">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-teal"
                    data-cursor-magnetic
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-teal">
              Accredited
            </p>
            <div className="mt-5">
              <IcefBadge variant="footer" />
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">{brand.parentLine}</p>
        </div>
      </div>
    </footer>
  );
}
