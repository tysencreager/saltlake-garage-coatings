// Single source of truth for business NAP + conversion details.
// Update the phone number here and it propagates to every CTA and schema block.

export const site = {
  name: "Salt Lake Garage Coatings",
  shortName: "SLC Garage Coatings",
  tagline: "Premium Epoxy & Polyaspartic Floor Coatings",
  url: "https://saltlakegaragecoatings.com",

  // Placeholder phone — swap for the tracked rental number at launch.
  phoneDisplay: "(801) 555-0142",
  phoneHref: "tel:+18015550142",
  emailDisplay: "hello@saltlakegaragecoatings.com",
  emailHref: "mailto:hello@saltlakegaragecoatings.com",

  hours: "Mon–Sat, 7:00 AM – 6:00 PM",
  city: "Salt Lake City",
  region: "UT",
  regionName: "Utah",

  serviceAreas: ["Salt Lake City", "Taylorsville", "Sandy", "Draper"],

  serviceAreasExtended: [
    "Salt Lake City",
    "Taylorsville",
    "Sandy",
    "Draper",
    "South Jordan",
    "West Jordan",
    "Holladay",
    "Cottonwood Heights",
    "Murray",
    "Midvale",
  ],
} as const;

export type Site = typeof site;
