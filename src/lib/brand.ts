export const brand = {
  name: "HorizonPath Education",
  tagline: "Your Bridge to Global Universities",
  parentLine: "A subsidiary of R&M Education Group.",
  colors: {
    deepBlue: "#0F3D6E",
    teal: "#0FA3A6",
    silver: "#C0C7D1",
    white: "#FFFFFF",
    charcoal: "#2B3440",
  },
  pillars: ["Guidance", "Global Ambition", "Trust", "Momentum"] as const,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Programmes" },
  { href: "/destinations", label: "Destinations" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;
