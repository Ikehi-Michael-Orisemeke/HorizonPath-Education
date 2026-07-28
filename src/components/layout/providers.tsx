"use client";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster position="top-center" richColors closeButton />
    </ThemeProvider>
  );
}
