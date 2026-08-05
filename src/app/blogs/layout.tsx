import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Guides, destination insights, and real outcomes from the HorizonPath Education admissions desk.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
