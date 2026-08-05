export type Destination = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
};

export const destinationsContent = {
  hero: {
    label: "Destinations",
    title: "Study where ambition meets opportunity",
    description:
      "We place students at leading universities across all continents",
  },
  destinations: [
    {
      id: "uk",
      name: "United Kingdom",
      tagline: "Centuries of academic excellence",
      description:
        "Home to Oxford, Cambridge, and the Russell Group — the UK offers rigorous degrees, shorter programme lengths, and a globally respected qualification framework that opens doors worldwide.",
      image: "/stock/uk.jpg",
      highlights: [
        "Russell Group & post-1992 universities",
        "One-year master's programmes",
        "Rich cultural & historical heritage",
      ],
    },
    {
      id: "canada",
      name: "Canada",
      tagline: "Quality education, welcoming communities",
      description:
        "Canada combines world-ranked research universities with a multicultural society and clear post-study work pathways — an increasingly popular choice for international students seeking long-term opportunity.",
      image: "/stock/canada.jpg",
      highlights: [
        "Post-graduation work permits",
        "Affordable tuition vs. US/UK peers",
        "Safe, inclusive student cities",
      ],
    },
    {
      id: "usa",
      name: "United States",
      tagline: "Innovation at the world's top institutions",
      description:
        "From the Ivy League to leading state universities, the US offers unparalleled breadth of programmes, cutting-edge research, and a campus culture that shapes leaders across every industry.",
      image: "/stock/usa.jpg",
      highlights: [
        "Liberal arts & specialised majors",
        "Generous scholarship opportunities",
        "OPT & career pathways",
      ],
    },
    {
      id: "europe",
      name: "Rest of Europe and Beyond",
      tagline: "Wider horizons, borderless learning",
      description:
        "Beyond the UK — from the Netherlands, Germany, and Ireland to destinations further afield. Affordable or tuition-free options, English-taught programmes, and study experiences at the heart of global culture and industry.",
      image: "/stock/europe.jpg",
      highlights: [
        "English-taught bachelor's & master's",
        "Affordable tuition in many countries",
        "Schengen travel & cultural immersion",
      ],
    },
  ] satisfies Destination[],
};
