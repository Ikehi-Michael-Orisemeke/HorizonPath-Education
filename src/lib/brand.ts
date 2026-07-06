export const brand = {
  name: "HorizonPath Education",
  tagline: "Your Bridge to Global Universities",
  parentLine: "A subsidiary of R&M Education Group.",
  colors: {
    navy: "#0A2864",
    deep: "#001F6B",
    teal: "#00A3A3",
    silver: "#B8BCC4",
    white: "#FFFFFF",
    gold: "#C9A24B",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;
