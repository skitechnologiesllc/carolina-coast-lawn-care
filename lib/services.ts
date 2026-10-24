export type ServiceOffering = {
  slug: string;
  name: string;
  shortName: string;
  cardDescription: string;
  description: string;
  highlights: string[];
  formLabel: string;
  /**
   * Real project photo for cards + service page hero.
   * Omit when no existing photo genuinely represents the service —
   * homepage uses a mark/icon treatment; service pages use a solid dark hero.
   */
  image?: { src: string; alt: string; objectPosition?: string };
  /** Optional clarification shown on the dedicated service page only */
  imageCaption?: string;
  /** Core offerings get stronger visual weight on the homepage */
  featured?: boolean;
};

/**
 * Dedicated service pages + homepage cards.
 * Customer-facing names stay consistent site-wide via `name` / `formLabel`.
 * Imagery mapped from existing project photos only.
 */
export const serviceOfferings: ServiceOffering[] = [
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing",
    shortName: "Lawn Mowing",
    formLabel: "Lawn Mowing",
    featured: true,
    image: {
      src: "/clean-front-lawn.jpeg",
      alt: "Clean front lawn with sharp edges after professional mowing",
      objectPosition: "center 45%",
    },
    cardDescription:
      "Weekly or bi-weekly cuts with edging and cleanup — on a schedule you can count on.",
    description:
      "Keep your grass looking sharp without chasing a crew. We mow on a steady weekly or bi-weekly schedule, edge along walks and beds, and blow off hard surfaces before we leave. Built for residential yards around Longs and across Horry County.",
    highlights: [
      "Weekly or bi-weekly schedules that stay consistent",
      "Edging and blow-off included with every visit",
      "Residential and light commercial properties welcome",
    ],
  },
  {
    slug: "fertilization-weed-control",
    name: "Fertilization & Weed Control",
    shortName: "Fertilization & Weed Control",
    formLabel: "Fertilization & Weed Control",
    featured: true,
    image: {
      src: "/fertilization-aerial.jpeg",
      alt: "Aerial view showing the two middle lawns we service",
      objectPosition: "center 64%",
    },
    imageCaption:
      "Aerial view showing the two center lawns we service. Surrounding properties are neighboring homes.",
    cardDescription:
      "Aerial view showing the two center lawns we service with fertilization and weed control.",
    description:
      "A good-looking lawn needs more than a sharp mower. We set up fertilization and weed-control visits timed for how grass actually grows here in Horry County — so you’re not guessing when to feed or spot-treat.",
    highlights: [
      "Programs timed for local growing seasons",
      "Weed control that fits your turf goals",
      "Plain-language recommendations before we start",
    ],
  },
  {
    slug: "aeration",
    name: "Aeration",
    shortName: "Aeration",
    formLabel: "Aeration",
    image: {
      src: "/fertilized-lawn-a.jpeg",
      alt: "Thick, healthy residential turf after professional lawn care",
      objectPosition: "center 40%",
    },
    cardDescription:
      "Core aeration for compacted yards so water and nutrients reach the roots.",
    description:
      "When soil gets packed down from foot traffic, pets, or clay pockets, grass struggles. Core aeration pulls plugs so air, water, and fertilizer can reach the root zone — a solid step for lawns that look thin or stay soggy after rain.",
    highlights: [
      "Core aeration for compacted soil",
      "Works well ahead of fertilization",
      "Helpful for high-traffic or thinning lawns",
    ],
  },
  {
    slug: "sod-installation",
    name: "Sod Installation",
    shortName: "Sod Installation",
    formLabel: "Sod Installation",
    image: {
      src: "/fertilized-lawn-c.jpeg",
      alt: "Uniform green residential lawn with clean mowing lines",
      objectPosition: "center 40%",
    },
    cardDescription:
      "Bare spots and new lawns graded, prepped, and laid for a finished result.",
    description:
      "Whether you’re fixing worn patches or starting a new lawn, we handle grading, prep, and sod install so the turf has a fair shot at taking root. We’ll also walk you through watering for the first couple of weeks.",
    highlights: [
      "Site prep and grading before install",
      "Sod suited to local yards",
      "Clear watering guidance after the job",
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    formLabel: "Landscaping",
    featured: true,
    image: {
      src: "/fertilized-lawn-mulch-job.jpeg",
      alt: "Front yard with fresh mulch beds and a fertilized green lawn",
      objectPosition: "center 35%",
    },
    cardDescription:
      "Beds, plantings, and outdoor upgrades planned around how you use your yard.",
    description:
      "Need beds cleaned up, new plantings, or a layout that finally makes sense for your home? We plan and install landscaping that fits the property — not a cookie-cutter package. Tyler stays involved so the finished look matches what you asked for.",
    highlights: [
      "Plantings and bed work matched to your property",
      "Owner-involved planning and install",
      "Clean finishes that improve day-to-day curb appeal",
    ],
  },
  {
    slug: "landscape-lighting",
    name: "Landscape Lighting",
    shortName: "Landscape Lighting",
    formLabel: "Landscape Lighting",
    image: {
      src: "/additional%20photo.jpeg",
      alt: "Nighttime landscape lighting on palms, garden beds, and a coastal home",
      objectPosition: "center 38%",
    },
    cardDescription:
      "Professionally installed lighting for walkways, garden beds, and outdoor living spaces.",
    description:
      "Enhance your property's curb appeal, safety, and nighttime beauty with professionally installed landscape lighting. We offer outdoor lighting solutions for walkways, garden beds, landscape features, and outdoor living spaces.",
    highlights: [
      "Walkways, garden beds, and landscape features",
      "Lighting planned for safety and nighttime curb appeal",
      "Installs sized for outdoor living spaces",
    ],
  },
  {
    slug: "mulch-rock-installation",
    name: "Mulch & Rock Installation",
    shortName: "Mulch & Rock Installation",
    formLabel: "Mulch & Rock Installation",
    image: {
      src: "/lawn6.jpeg",
      alt: "Front yard landscape refresh with white rock beds and mulch",
      objectPosition: "center 35%",
    },
    cardDescription:
      "Fresh mulch or decorative rock with clean edges for beds that stay tidy.",
    description:
      "Mulch and rock are simple upgrades that make a yard look finished. We refresh beds, set clean edges, and install mulch or decorative rock so weeds stay down and the property looks cared for with less weekly effort.",
    highlights: [
      "Defined bed edges and borders",
      "Mulch or decorative rock options",
      "Less bed weeding and upkeep over time",
    ],
  },
  {
    slug: "hardscaping",
    name: "Hardscaping",
    shortName: "Hardscaping",
    formLabel: "Hardscaping",
    image: {
      src: "/lawn5.jpeg",
      alt: "Concrete walkway running beside a maintained residential lawn",
      objectPosition: "center 62%",
    },
    cardDescription:
      "Patios, walkways, and borders built for everyday use around your home.",
    description:
      "Hardscape is the structure around your lawn — patios, paths, and borders that make outdoor space easier to use. We build with solid base prep so the work holds up and looks intentional next to your plantings and turf.",
    highlights: [
      "Patios, walkways, and border installs",
      "Proper base prep for longer life",
      "Finishes that fit the rest of your landscape",
    ],
  },
  {
    slug: "irrigation",
    name: "Irrigation",
    shortName: "Irrigation",
    formLabel: "Irrigation",
    image: {
      src: "/fertilized-lawn-b.jpeg",
      alt: "Lush green residential lawn that stays healthy with proper watering",
      objectPosition: "center 45%",
    },
    cardDescription:
      "Watering support so lawns and beds stay healthy through dry stretches.",
    description:
      "When summer gets dry, hand-watering gets old fast. We help with irrigation options that put water where your lawn and beds need it — practical setups sized for your property, not more system than you asked for.",
    highlights: [
      "Practical watering solutions for your yard size",
      "Support for lawns and planted beds",
      "Help keeping coverage even and efficient",
    ],
  },
  {
    slug: "pressure-soft-washing",
    name: "Pressure & Soft Washing",
    shortName: "Pressure & Soft Washing",
    formLabel: "Pressure & Soft Washing",
    image: {
      src: "/soft-wash-house.jpeg",
      alt: "Home exterior during a soft wash and pressure washing job",
      objectPosition: "center 40%",
    },
    cardDescription:
      "Driveways, walks, and exterior surfaces cleaned so the whole property looks sharp.",
    description:
      "A fresh cut looks even better when the driveway and walks aren’t stained. We pressure wash and soft wash exterior surfaces to clear dirt, mildew, and buildup — a clean finish that matches the rest of the yard work.",
    highlights: [
      "Driveways, sidewalks, and hard surfaces",
      "Soft-wash approach where the surface needs it",
      "Easy add-on alongside lawn or landscape work",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceOfferings.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return serviceOfferings.map((service) => service.slug);
}
