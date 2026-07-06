export type Testimonial = {
  id: string;
  name: string;
  role: string;
  destination: string;
  programme: string;
  quote: string;
  outcome: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
};

export const successStoriesContent = {
  hero: {
    label: "Success Stories",
    title: "Real students. Real outcomes.",
    description:
      "Every placement represents a personal journey — from first conversation to acceptance letter. Here are some of the pathways we've helped students achieve.",
  },
  testimonials: [
    {
      id: "amara",
      name: "Amara O.",
      role: "MSc Data Science Graduate",
      destination: "United Kingdom",
      programme: "Postgraduate Admissions",
      quote:
        "HorizonPath didn't just help me apply — they helped me understand which programmes genuinely matched my career goals. I received offers from three Russell Group universities and chose the one that felt right.",
      outcome: "Offer from University of Manchester — MSc Data Science",
    },
    {
      id: "carlos",
      name: "Carlos M.",
      role: "Undergraduate Student",
      destination: "Canada",
      programme: "Foundation & Undergraduate",
      quote:
        "Coming from a different education system, I was overwhelmed by the application process. My advisor broke everything into clear steps and I had my foundation offer within eight weeks.",
      outcome: "Enrolled at University of Toronto — International Foundation",
    },
    {
      id: "priya",
      name: "Priya S.",
      role: "MBA Candidate",
      destination: "United States",
      programme: "Postgraduate Admissions",
      quote:
        "The personal statement coaching was transformative. They pushed me to tell my story authentically, and I secured a partial scholarship I didn't think was possible.",
      outcome: "Scholarship offer — Northeastern University MBA",
    },
    {
      id: "james",
      name: "James K.",
      role: "Professional",
      destination: "Europe",
      programme: "Short Course & Certification",
      quote:
        "I needed a focused programme that wouldn't take me away from work for too long. HorizonPath found a four-week executive course in Amsterdam that was exactly what I needed.",
      outcome: "Completed Executive Leadership Programme — Bocconi",
    },
  ] satisfies Testimonial[],
  caseStudies: [
    {
      id: "foundation-to-russell",
      title: "Foundation to Russell Group",
      summary:
        "An international student with strong potential but non-standard qualifications gained entry to a top UK university through a carefully matched foundation pathway.",
      challenge:
        "Student had completed A-level equivalents that didn't directly map to UK entry requirements, with a target of studying Economics at a Russell Group institution.",
      solution:
        "We identified a foundation programme with guaranteed progression, supported the personal statement, and coordinated the UCAS application timeline.",
      result:
        "Successful completion of foundation year with distinction, progressing to BSc Economics at the University of Bristol.",
    },
    {
      id: "career-change-masters",
      title: "Career Change via Master's",
      summary:
        "A working professional in finance transitioned to tech through a conversion master's programme in Canada.",
      challenge:
        "Mid-career professional with no formal computing background seeking a credible pathway into the technology sector within 18 months.",
      solution:
        "Matched to a postgraduate diploma with co-op placement, supported SOP development, and guided the study permit application process.",
      result:
        "Enrolled at University of Waterloo — Master of Engineering, with co-op placement secured in first term.",
    },
  ] satisfies CaseStudy[],
};
