import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schools",
  description:
    "Explore partner universities and pathway schools HorizonPath Education works with across the UK, Canada, USA, and beyond.",
};

export default function SchoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
