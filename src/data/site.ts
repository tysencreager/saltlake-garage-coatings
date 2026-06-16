// Single source of truth for business NAP + conversion details.
// Update the phone number here and it propagates to every CTA and schema block.

export const site = {
  name: "Salt Lake Garage Coatings",
  shortName: "SLC Garage Coatings",
  tagline: "Premium Epoxy & Polyaspartic Floor Coatings",
  url: "https://saltlakegaragecoatings.com",

  // Tracked business line.
  phoneDisplay: "(801) 515-4573",
  phoneHref: "tel:+18015154573",

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
