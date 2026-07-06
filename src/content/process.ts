export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
};

export const processContent = {
  hero: {
    label: "How It Works",
    title: "Your application journey, step by step",
    description:
      "We've refined our process over years of placements — clear stages, honest counsel, and support at every milestone from first enquiry to arrival on campus.",
  },
  steps: [
    {
      id: "discover",
      number: "01",
      title: "Discover",
      description:
        "We start with a conversation — understanding your academic background, career ambitions, budget, and preferred destinations.",
      details: [
        "Free initial consultation",
        "Academic profile assessment",
        "Destination & programme exploration",
      ],
    },
    {
      id: "consult",
      number: "02",
      title: "Consult",
      description:
        "Your dedicated advisor builds a personalised pathway — shortlisting universities and programmes that genuinely fit your profile and goals.",
      details: [
        "University shortlisting",
        "Entry requirement mapping",
        "Timeline & budget planning",
      ],
    },
    {
      id: "apply",
      number: "03",
      title: "Apply",
      description:
        "We guide you through every application component — personal statements, references, portfolios, and submission deadlines.",
      details: [
        "Document preparation & review",
        "Personal statement coaching",
        "Application submission support",
      ],
    },
    {
      id: "offer",
      number: "04",
      title: "Offer",
      description:
        "When offers arrive, we help you evaluate options, respond to conditions, and secure your place at the institution that's right for you.",
      details: [
        "Offer comparison & decision support",
        "Conditional requirement guidance",
        "Deposit & acceptance coordination",
      ],
    },
    {
      id: "visa",
      number: "05",
      title: "Visa & Pre-Departure",
      description:
        "Navigate visa applications, accommodation, and pre-departure preparation with confidence — we know what each destination requires.",
      details: [
        "Visa application guidance",
        "Accommodation assistance",
        "Pre-departure briefing",
      ],
    },
    {
      id: "arrive",
      number: "06",
      title: "Arrive",
      description:
        "Your journey doesn't end at the airport. We remain available for enrolment support and settling-in guidance as you begin your new chapter.",
      details: [
        "Enrolment & registration support",
        "Settling-in resources",
        "Ongoing advisory access",
      ],
    },
  ] satisfies ProcessStep[],
  cta: {
    title: "Begin your journey today",
    description:
      "The first step is a conversation. Tell us about your ambitions and we'll map the path forward.",
    button: "Start Your Application",
  },
};
