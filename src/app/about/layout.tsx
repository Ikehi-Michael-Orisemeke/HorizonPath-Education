import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about HorizonPath Education — guiding students aged 16 and above to universities that fit, from first conversation to enrolment.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
