export const programmeTypes = [
  "Undergraduate Admissions",
  "Postgraduate Admissions",
  "Top-Up (HND to Bachelor's)",
  "Pathway Programmes",
  "Transfer Admissions",
  "ESL Programmes",
  "Short Courses",
  "Professional Certifications",
  "Study-Abroad Consulting",
  "Not sure yet",
] as const;

export const countries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Beyond (Europe & other destinations)",
  "Not sure yet",
] as const;

export const phoneCodes = [
  { value: "+234", label: "🇳🇬 +234" },
  { value: "+44", label: "🇬🇧 +44" },
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+233", label: "🇬🇭 +233" },
  { value: "+other", label: "Other" },
] as const;

export const nextSteps = [
  "We review your application within 48 hours.",
  "A dedicated advisor schedules a free consultation.",
  "Together we map your pathway to the right university.",
] as const;

export const contactContent = {
  hero: {
    label: "Contact & Apply",
    title: "Start your application.",
    description:
      "Ready to begin? Share your details and programme interests — a dedicated advisor will schedule your consultation within 48 hours.",
  },
  enquiry: {
    title: "General Enquiry",
    description:
      "Have a question about our programmes, destinations, or process? Send us a message.",
  },
  application: {
    title: "Start Application",
    description:
      "Ready to begin? Share your details and programme interests — a dedicated advisor will schedule your consultation within 48 hours.",
  },
  success: {
    title: "Thanks — we've got it.",
    description:
      "A dedicated advisor will review your details and reach out within 48 hours to schedule your consultation.",
  },
};
