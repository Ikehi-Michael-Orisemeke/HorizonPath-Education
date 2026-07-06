import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Process",
  description:
    "Follow HorizonPath Education's step-by-step application journey — from discovery to arrival at your chosen university.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
