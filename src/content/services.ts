export type Service = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
};

export const servicesContent = {
  hero: {
    label: "Our Programmes",
    title: "Pathways to world-class higher education",
    description:
      "From undergraduate admissions to professional certifications abroad — HorizonPath provides end-to-end guidance for students aged 16 and above, graduates, and working professionals.",
  },
  services: [
    {
      id: "undergraduate",
      title: "Undergraduate Admissions",
      description:
        "Navigate UCAS, Common App, and direct-entry applications with confidence. We help you identify the right programmes, craft compelling personal statements, and meet every deadline.",
      highlights: [
        "University shortlisting & fit analysis",
        "Personal statement & essay coaching",
        "Application review & submission support",
      ],
      icon: "GraduationCap",
    },
    {
      id: "postgraduate",
      title: "Postgraduate Admissions",
      description:
        "Pursue your master's, MBA, or doctoral ambitions at leading institutions worldwide. We support research proposals, references, and the nuanced requirements of graduate admissions.",
      highlights: [
        "Programme & supervisor matching",
        "Research proposal development",
        "Scholarship & funding guidance",
      ],
      icon: "BookOpen",
    },
    {
      id: "foundation",
      title: "Pathway Programmes",
      description:
        "Bridge the gap between your current qualifications and degree-level study. Foundation pathways prepare international students for success at UK, European, and North American universities.",
      highlights: [
        "Academic readiness assessment",
        "Pathway university partnerships",
        "Pre-departure preparation",
      ],
      icon: "Layers",
    },
    {
      id: "transfer",
      title: "Transfer Admissions",
      description:
        "Already studying but seeking a better fit? We guide credit transfers, articulation agreements, and mid-course moves to institutions that align with your evolving goals.",
      highlights: [
        "Credit evaluation support",
        "Transfer application strategy",
        "Seamless transition planning",
      ],
      icon: "ArrowRightLeft",
    },
    {
      id: "esl",
      title: "ESL Programmes",
      description:
        "Strengthen your English proficiency with curated language programmes at accredited institutions — the essential foundation for academic success in English-speaking environments.",
      highlights: [
        "IELTS & TOEFL preparation pathways",
        "Intensive & academic English courses",
        "Conditional offer support",
      ],
      icon: "Languages",
    },
    {
      id: "short-courses",
      title: "Short Courses",
      description:
        "Gain specialised skills through focused short programmes — ideal for professionals and students seeking targeted expertise without committing to a full degree.",
      highlights: [
        "Professional development courses",
        "Summer & winter intensives",
        "Certificate programmes abroad",
      ],
      icon: "Clock",
    },
    {
      id: "certifications",
      title: "Professional Certifications",
      description:
        "Advance your career with internationally recognised professional qualifications. We connect you with accredited certification bodies and guide the application process.",
      highlights: [
        "Industry-recognised credentials",
        "Career-aligned programme matching",
        "Application & enrolment support",
      ],
      icon: "Award",
    },
    {
      id: "study-abroad",
      title: "Study-Abroad Consulting",
      description:
        "Comprehensive consulting for students and professionals planning an international education experience — from destination selection to visa preparation and arrival.",
      highlights: [
        "Personalised destination strategy",
        "Budget & timeline planning",
        "End-to-end journey support",
      ],
      icon: "Globe",
    },
  ] satisfies Service[],
};
