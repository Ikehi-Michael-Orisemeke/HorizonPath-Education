export type ProcessStep = {
  id: string;
  number: number;
  title: string;
  body: string;
};

export const processContent = {
  hero: {
    label: "Process",
    title: "From first conversation to enrolment",
    description:
      "Every university pathway follows the same careful process — because the details are where students get let down elsewhere.",
  },
  steps: [
    {
      id: "consultation",
      number: 1,
      title: "Consultation",
      body: "We start with a detailed conversation covering your academic history, career ambitions, budget, and preferred destinations — plus any constraints that matter to you or your family. The more we know, the better our advice.",
    },
    {
      id: "recommendation",
      number: 2,
      title: "Recommendation",
      body: "Using everything we've learned, we put together a shortlist of universities and programmes genuinely matched to your profile — with clear reasoning for every recommendation, including destination country where relevant.",
    },
    {
      id: "application",
      number: 3,
      title: "Application",
      body: "Once you've chosen a direction, we guide every application component — personal statements, references, portfolios, and deadlines — and stay with you through submission.",
    },
    {
      id: "preparation",
      number: 4,
      title: "Preparation",
      body: "If a university requires interviews, admissions tests, or English language exams, we help you prepare specifically for those requirements so you arrive ready.",
    },
    {
      id: "visa",
      number: 5,
      title: "Visa Support",
      body: "Once you have an offer, we manage the student visa process end-to-end — the paperwork, the timelines, and the follow-up with the relevant consulate.",
    },
  ] satisfies ProcessStep[],
  cta: {
    title: "Ready to start?",
    description: "Begin with a consultation and we'll map your pathway from first conversation to campus.",
    button: "Begin your consultation",
  },
};
