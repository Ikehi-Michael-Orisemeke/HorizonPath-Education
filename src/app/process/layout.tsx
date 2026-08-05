import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process — From first conversation to enrolment",
  description:
    "Every university pathway follows the same careful process — consultation, recommendation, application, preparation, and visa support.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
