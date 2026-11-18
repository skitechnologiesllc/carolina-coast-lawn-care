import { serviceOfferings } from "@/lib/services";

export const siteConfig = {
  companyName: "Carolina Coast Lawn Care",
  phone: "(854) 901-1700",
  phoneHref: "tel:+18549011700",
  smsHref: "sms:+18549011700",
  email: "ccmblawncare@gmail.com",
  location: "Longs, SC",
  serviceArea: "Serving all of Horry County",
  facebook:
    "https://www.facebook.com/share/1V9EodVEV6/?mibextid=wwXIfr",
  /** Verified Google Business Profile / Maps short link — no street address on site */
  googleReviewsUrl: "https://maps.app.goo.gl/uKXJqkUXfwcZyLFf9?g_st=ipc",
  /** Absolute homepage estimate anchor (safe from any route) */
  estimateAnchor: "/#estimate",
  /** Same-page estimate hash (homepage + service pages) */
  estimateHash: "#estimate",
  googleRatingLabel: "5.0 on Google",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#estimate" },
];

export const heroConfig = {
  brand: "Carolina Coast Lawn Care",
  placeLine: "Serving Longs, North Myrtle Beach, and Horry County",
  headline: "Exceptional Lawn Care. Beautiful Outdoor Spaces.",
  subheadline:
    "Dependable service. Exceptional results. Professional lawn care and landscaping throughout Longs, North Myrtle Beach, and the Grand Strand.",
  image: {
    src: "/mainphoto.jpeg",
    alt: "Elevated coastal home with palm trees, manicured lawn, and landscaped beds",
  },
};

export const trustBarConfig = [
  {
    label: "5-Star Google Rating",
    href: siteConfig.googleReviewsUrl,
    external: true,
    icon: "star" as const,
  },
  { label: "Licensed & Insured", icon: "shield" as const },
  { label: "Locally Owned & Operated", icon: "home" as const },
  { label: "Free Estimates", icon: "clipboard" as const },
];

export const whyChooseUsConfig = {
  headline: "Why homeowners choose us",
  subheadline:
    "Straightforward service from a local team that shows up, communicates clearly, and takes pride in the finished yard.",
  points: [
    {
      title: "Reliable Scheduling",
      description:
        "You know when we’re coming. If something changes, you hear from us — no guessing, no last-minute surprises.",
      icon: "calendar" as const,
    },
    {
      title: "Direct Communication",
      description:
        "Call or text and reach someone who knows your property. Questions go to the people doing the work.",
      icon: "message" as const,
    },
    {
      title: "Locally Owned & Operated",
      description:
        "Based in Longs, SC, with a real understanding of local yards and lawn conditions across Horry County.",
      icon: "map" as const,
    },
    {
      title: "Honest, Upfront Pricing",
      description:
        "Clear pricing and expectations before work begins, so you can decide without pressure.",
      icon: "check" as const,
    },
  ],
};

export const testimonialsConfig = {
  headline: "What customers say",
  subheadline: "Real reviews from homeowners on Google.",
  reviews: [
    {
      quote:
        "Carolina Coast Lawn Care does an awesome job. Honest, reasonably priced and takes time to explain everything and answers all my questions. They don't make you feel pressured. They will always have my business. Highly recommend!",
      author: "Lori L.",
      source: "Google Local Guide",
    },
    {
      quote:
        "The best lawn service I have ever had! Always on time and always clean up after themselves. Carolina Coast Lawn Care communicates with you so you know exactly what is going on. Can not wait to see how good my yard looks this year!",
      author: "Thomas B.",
    },
    {
      quote:
        "We hired them for yard cleanup and landscaping and they did an amazing job. They were on time, professional, and paid attention to details. Our yard looks completely transformed. Highly recommend!",
      author: "Svitlana G.",
    },
    {
      quote:
        "Carolina Coast Lawn Care does an outstanding job. Always on time, professional, and the yard looks perfect every time. Reliable and easy to work with. Highly recommend!",
      author: "Mike G.",
    },
    {
      quote:
        "We feel very lucky to have found Carolina Coast Lawn Care. Knowledgeable, honest and goes the extra mile to make our lawn look great. We have nothing but good things to say — you will not be disappointed.",
      author: "Greg K.",
    },
  ],
};

export const servicesConfig = {
  headline: "Our services",
  subheadline:
    "From weekly mowing to full outdoor upgrades — consistent quality for homes across Horry County.",
  services: serviceOfferings,
};

export const aboutConfig = {
  headline: "Your Property. Our Reputation.",
  lead:
    "Carolina Coast Lawn Care is owned and operated by Tyler Malinski in Longs. When you hire us, you’re working with a local business that puts its name on every property it cares for.",
  paragraphs: [
    "Tyler stays involved from the first estimate through the finished result — so communication stays direct, details don’t get lost, and the workmanship reflects the standards he puts on his own reputation.",
  ],
  bullets: [
    "Licensed and insured",
    "Based in Longs — serving Horry County",
    "Estimates with no obligation",
  ],
};

export const galleryConfig = {
  headline: "Our Work Speaks for Itself.",
  subheadline:
    "Real projects from homes around Longs and Horry County — clean lines, finished beds, and yards that look cared for.",
  /** Reserved for true same-property pairs only — leave empty until real pairs exist */
  beforeAfterPairs: [] as {
    before: { src: string; alt: string; objectPosition?: string };
    after: { src: string; alt: string; objectPosition?: string };
  }[],
  /** Project photos — avoid repeating the hero image when possible */
  images: [
    {
      src: "/lawn2.jpeg",
      alt: "Backyard lawn with sharp mowing lines",
      objectPosition: "center 40%",
      caption: "Weekly mowing",
      featured: true,
    },
    {
      src: "/fertilized-lawn-mulch-job.jpeg",
      alt: "Front yard with fresh mulch beds and fertilized green lawn",
      objectPosition: "center 40%",
      caption: "Mulch & lawn care",
    },
    {
      src: "/lawn3.jpg",
      alt: "Front lawn with clean edging and planting bed",
      objectPosition: "center 28%",
      caption: "Lawn care & bed detail",
    },
    {
      src: "/lawn5.jpeg",
      alt: "Street-facing lawn with crisp sidewalk edges",
      objectPosition: "center 30%",
      caption: "Precision edging",
    },
    {
      src: "/fertilized-lawn-c.jpeg",
      alt: "Uniform green residential lawn after professional turf care",
      objectPosition: "center 40%",
      caption: "Healthy turf",
    },
  ],
};

export const serviceAreaConfig = {
  headline: "Proudly serving Longs and the Grand Strand",
  subheadline:
    "Based in Longs, SC. We care for lawns and outdoor spaces across Horry County.",
  areas: [
    "Longs",
    "North Myrtle Beach",
    "Little River",
    "Myrtle Beach",
    "Conway",
    "Loris",
    "Aynor",
    "Surfside Beach",
  ],
  note: "Not sure if you’re in our area? Call or text — we’ll let you know quickly.",
};

export const faqConfig = {
  headline: "Frequently asked questions",
  subheadline: "Straightforward answers before you reach out.",
  items: [
    {
      question: "Where are you based?",
      answer:
        "We’re based in Longs, SC and serve properties throughout Horry County.",
    },
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes. Request an estimate online, or call or text us. There’s no obligation to book.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. Carolina Coast Lawn Care is licensed and insured.",
    },
    {
      question: "What services do you offer?",
      answer:
        "Lawn mowing, fertilization and weed control, aeration, sod installation, landscaping, landscape lighting, mulch and rock installation, hardscaping, irrigation, and pressure and soft washing. Ask if you need something else.",
    },
    {
      question: "How do I get on the schedule?",
      answer:
        "Send an estimate request with your service address and what you need. We’ll follow up — usually within one business day.",
    },
    {
      question: "Can I call or text instead of using the form?",
      answer: `Yes. Call or text ${siteConfig.phone} whenever you’re ready to talk about your yard.`,
    },
  ],
};

export const quoteFormConfig = {
  headline: "Get your free estimate",
  subheadline:
    "Tell us a little about your property. We’ll follow up — usually within one business day. No obligation to book.",
  serviceOptions: [
    ...serviceOfferings.map((service) => service.formLabel),
    "Multiple Services",
    "Other",
  ],
};
