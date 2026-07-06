export type Destination = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  universities: string[];
};

export const destinationsContent = {
  hero: {
    label: "Destinations",
    title: "Study where ambition meets opportunity",
    description:
      "We place students at leading universities across four continents — each destination offering distinct academic strengths, cultural experiences, and career pathways.",
  },
  destinations: [
    {
      id: "uk",
      name: "United Kingdom",
      tagline: "Centuries of academic excellence",
      description:
        "Home to Oxford, Cambridge, and the Russell Group — the UK offers rigorous degrees, shorter programme lengths, and a globally respected qualification framework that opens doors worldwide.",
      highlights: [
        "Russell Group & post-1992 universities",
        "One-year master's programmes",
        "Rich cultural & historical heritage",
      ],
      universities: [
        "University of Manchester",
        "King's College London",
        "University of Edinburgh",
        "University of Bristol",
      ],
    },
    {
      id: "canada",
      name: "Canada",
      tagline: "Quality education, welcoming communities",
      description:
        "Canada combines world-ranked research universities with a multicultural society and clear post-study work pathways — an increasingly popular choice for international students seeking long-term opportunity.",
      highlights: [
        "Post-graduation work permits",
        "Affordable tuition vs. US/UK peers",
        "Safe, inclusive student cities",
      ],
      universities: [
        "University of Toronto",
        "McGill University",
        "University of British Columbia",
        "University of Waterloo",
      ],
    },
    {
      id: "usa",
      name: "United States",
      tagline: "Innovation at the world's top institutions",
      description:
        "From the Ivy League to leading state universities, the US offers unparalleled breadth of programmes, cutting-edge research, and a campus culture that shapes leaders across every industry.",
      highlights: [
        "Liberal arts & specialised majors",
        "Generous scholarship opportunities",
        "OPT & career pathways",
      ],
      universities: [
        "Northeastern University",
        "Arizona State University",
        "University of California system",
        "Boston University",
      ],
    },
    {
      id: "europe",
      name: "Europe",
      tagline: "Diverse programmes, borderless learning",
      description:
        "From the Netherlands and Germany to Ireland and beyond — Europe offers affordable or tuition-free options, English-taught programmes, and the chance to study at the heart of global culture and industry.",
      highlights: [
        "English-taught bachelor's & master's",
        "Affordable tuition in many countries",
        "Schengen travel & cultural immersion",
      ],
      universities: [
        "TU Munich",
        "University of Amsterdam",
        "Trinity College Dublin",
        "Bocconi University",
      ],
    },
  ] satisfies Destination[],
};
