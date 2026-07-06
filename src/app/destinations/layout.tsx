import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Study in the UK, Canada, USA, or Europe with HorizonPath Education — expert placement at leading universities worldwide.",
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
