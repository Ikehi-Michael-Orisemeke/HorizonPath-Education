import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Undergraduate, postgraduate, foundation, transfer, ESL, short courses, professional certifications, and study-abroad consulting — guided by HorizonPath Education.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
