export const SITE_CONFIG = {
  name: "Rettay Chiropractic Office PSC",
  shortName: "Rettay Chiropractic",
  description:
    "Premier chiropractic care in Florence, KY. Helping you move better, feel better, and live pain-free. Expert treatment for back pain, neck pain, sciatica, sports injuries and more.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://rettaychiropracticofficepsc.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "Florence Chiropractor",
    "Chiropractor Florence KY",
    "Back Pain Treatment Florence KY",
    "Neck Pain Relief Florence KY",
    "Sciatica Treatment Florence KY",
    "Sports Injury Chiropractor Florence",
    "Chiropractic Adjustments Florence",
    "Spinal Alignment KY",
    "Auto Accident Chiropractor",
    "Whiplash Treatment",
    "Posture Correction",
    "Wellness Chiropractor",
  ],
  creator: "Lawrence Mikkelson",
} as const;

export const BUSINESS_INFO = {
  legalName: "Rettay Chiropractic Office PSC",
  displayName: "Rettay Chiropractic",
  owner: "Lawrence Mikkelson",
  email: "info@rettaychiropracticofficepsc.com",
  phone: "859-274-9894",
  phoneLink: "+18592749894",
  phoneFormatted: "(859) 274-9894",
  address: {
    street: "7560 B Burlington Pike",
    city: "Florence",
    state: "KY",
    stateName: "Kentucky",
    zip: "41042",
    country: "US",
    countryName: "United States",
  },
  geo: {
    latitude: 38.9853,
    longitude: -84.6266,
  },
  hours: {
    monday: "8:00 AM – 6:00 PM",
    tuesday: "8:00 AM – 6:00 PM",
    wednesday: "8:00 AM – 6:00 PM",
    thursday: "8:00 AM – 6:00 PM",
    friday: "8:00 AM – 4:00 PM",
    saturday: "By Appointment",
    sunday: "Closed",
  },
  hoursStructured: [
    { day: "Monday", open: "08:00", close: "18:00" },
    { day: "Tuesday", open: "08:00", close: "18:00" },
    { day: "Wednesday", open: "08:00", close: "18:00" },
    { day: "Thursday", open: "08:00", close: "18:00" },
    { day: "Friday", open: "08:00", close: "16:00" },
  ],
  social: {
    google: "https://www.google.com/search?q=Rettay+Chiropractic+Office+PSC",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  yearsExperience: 25,
  patientsServed: "5,000+",
  rating: 4.9,
  reviewCount: 187,
} as const;

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Chiropractic Adjustments", href: "/services/chiropractic-adjustments" },
    { label: "Spinal Alignment", href: "/services/spinal-alignment" },
    { label: "Sciatica Treatment", href: "/services/sciatica-treatment" },
    { label: "Sports Injury Recovery", href: "/services/sports-injury-recovery" },
    { label: "Neck & Back Pain", href: "/services/neck-back-pain-treatment" },
    { label: "Auto Injury Care", href: "/services/auto-injury-care" },
    { label: "Posture Correction", href: "/services/posture-correction" },
    { label: "Wellness Care", href: "/services/wellness-care" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "New Patients", href: "/new-patients" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;

export const INSURANCE_PROVIDERS = [
  "Aetna",
  "Anthem",
  "BlueCross BlueShield",
  "Cigna",
  "Humana",
  "Medicare",
  "Medicaid",
  "UnitedHealthcare",
  "Tricare",
  "Workers' Comp",
  "Auto Insurance (PIP)",
] as const;

export const TRUST_STATS = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 8, suffix: "", label: "Specialized Services" },
  { value: 4.9, suffix: "", label: "Average Rating", decimals: 1 },
] as const;
