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
  headline: "Lawn care & landscaping for Longs and Horry County.",
  subheadline:
    "Owner-operated out of Longs, SC. Clean cuts, sharp beds, and outdoor work you can count on — from weekly mowing to full landscape installs.",
  image: {
    src: "/lawn1.jpeg",
    alt: "Freshly cut Horry County lawn by Carolina Coast Lawn Care",
  },
};

export const trustBarConfig = [
  { label: "5.0 on Google", href: siteConfig.googleReviewsUrl, external: true },
  { label: "Licensed & insured" },
  { label: "Locally owned in Longs" },
  { label: "Free estimates" },
];

export const whyChooseUsConfig = {
  headline: "Why homeowners choose us",
  subheadline: "A few things that matter when you hire a lawn company.",
  points: [
    {
      title: "We keep the schedule we give you",
      description:
        "You know when we’re coming. If something changes, you hear from us — not a no-show.",
    },
    {
      title: "You talk to the business directly",
      description:
        "Call or text and reach someone who knows the job. Questions get answered without bouncing around.",
    },
    {
      title: "Local crew, local yards",
      description:
        "We’re based in Longs and work Horry County every week — so your yard gets a crew that knows the area, not a rotating cast.",
    },
    {
      title: "Clear estimates before we start",
      description:
        "Tell us what you need. We’ll price it plainly so you can decide without pressure.",
    },
  ],
};

export const testimonialsConfig = {
  headline: "What customers say",
  subheadline: "Reviews from homeowners on Google.",
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
  headline: "Lawn care & outdoor services",
  subheadline:
    "Mowing, turf care, landscaping, and more — for homes across Horry County.",
  services: serviceOfferings,
};

export const aboutConfig = {
  headline: "Owner-operated out of Longs",
  lead:
    "Carolina Coast Lawn Care is run by Tyler Malinski — a local operator who stays involved in the work, not a call center routing jobs to whoever’s available.",
  paragraphs: [
    "That means clearer communication, a crew that learns your property, and a standard you can see after the first few visits.",
  ],
  bullets: [
    "Licensed and insured",
    "Based in Longs — serving Horry County",
    "Estimates with no obligation",
  ],
};

export const galleryConfig = {
  headline: "Recent work",
  subheadline:
    "Real yards around Longs and Horry County — mowing, beds, rock, and outdoor cleanups.",
  /** Reserved for true same-property pairs only — leave empty until real pairs exist */
  beforeAfterPairs: [] as {
    before: { src: string; alt: string; objectPosition?: string };
    after: { src: string; alt: string; objectPosition?: string };
  }[],
  /** Project photos (exclude hero lawn1). Captions describe the work shown. */
  images: [
    {
      src: "/lawn6.jpeg",
      alt: "Front yard landscaping with stone beds and fresh turf",
      objectPosition: "center 35%",
      caption: "Landscape refresh",
      featured: true,
    },
    {
      src: "/lawn2.jpeg",
      alt: "Backyard lawn with sharp mowing lines",
      objectPosition: "center 40%",
      caption: "Weekly mowing",
    },
    {
      src: "/lawn4.jpeg",
      alt: "Decorative rock beds and tree ring",
      objectPosition: "center 22%",
      caption: "Rock beds & tree ring",
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
  ],
};

export const serviceAreaConfig = {
  headline: "Proudly serving Longs & Horry County",
  subheadline:
    "Based in Longs, SC — we take care of lawns and outdoor spaces across Horry County.",
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
  subheadline: "Quick answers before you reach out.",
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
        "Lawn mowing, fertilization and weed control, aeration, sod installation, landscaping, mulch and rock installation, hardscaping, irrigation, and pressure and soft washing. Ask if you need something else.",
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

export const ctaConfig = {
  headline: "Ready for a yard you’re proud of?",
  subheadline: "Tell us about the property — we’ll get back to you soon.",
  buttonText: "Get a free estimate",
};

export const quoteFormConfig = {
  headline: "Get your free estimate",
  subheadline:
    "Share a few details about your property. We’ll follow up within 24 hours.",
  serviceOptions: [
    ...serviceOfferings.map((service) => service.formLabel),
    "Multiple Services",
    "Other",
  ],
};
