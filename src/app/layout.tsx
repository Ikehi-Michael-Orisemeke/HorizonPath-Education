import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { Providers } from "@/components/layout/providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Expert university admissions guidance for undergraduate, postgraduate, foundation, ESL, and study-abroad pathways across the UK, Canada, USA, and Europe.",
  keywords: [
    "university admissions",
    "study abroad",
    "HorizonPath Education",
    "international students",
    "postgraduate",
    "undergraduate",
  ],
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Your bridge to global universities. Expert guidance from first enquiry to enrolment.",
    type: "website",
    locale: "en_GB",
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Your bridge to global universities. Expert guidance from first enquiry to enrolment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          <SmoothScroll>
            <CustomCursor />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
