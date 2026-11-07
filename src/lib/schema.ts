// Structured data (schema.org JSON-LD) shared across pages, so Google sees one
// consistent Person entity: the same @id, name, location and profiles everywhere.
import { SITE_URL, SITE_DESCRIPTION, SITE_EMAIL, SOCIAL, LOCATION } from "../config";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const address = {
  "@type": "PostalAddress",
  addressLocality: LOCATION.city,
  addressRegion: LOCATION.region,
  addressCountry: LOCATION.countryCode,
};

export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Danish Siddique",
  givenName: "Danish",
  familyName: "Siddique",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/profile.webp`,
  email: `mailto:${SITE_EMAIL}`,
  jobTitle: "Senior Product Engineer",
  description: SITE_DESCRIPTION,
  address,
  homeLocation: { "@type": "Place", name: `${LOCATION.city}, ${LOCATION.country}`, address },
  nationality: { "@type": "Country", name: LOCATION.country },
  worksFor: { "@type": "Organization", name: "Kindred AI", url: "https://kindredeq.com" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Air University",
    address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Senior Product Engineer",
      occupationLocation: { "@type": "City", name: LOCATION.city },
      skills: "TypeScript, Python, Node.js, React, PostgreSQL, AWS, LLM agents, RAG, evals",
    },
    {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: { "@type": "City", name: LOCATION.city },
    },
    {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: { "@type": "City", name: LOCATION.city },
    },
  ],
  knowsAbout: [
    "Software Engineering",
    "Product Engineering",
    "Full-Stack Development",
    "Web Application Development",
    "SaaS Development",
    "Artificial Intelligence",
    "LLM Agents",
    "Agent Memory",
    "Retrieval-Augmented Generation",
    "Voice AI",
    "On-device AI",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL",
  ],
  knowsLanguage: ["English", "Urdu"],
  sameAs: [SOCIAL.linkedin, SOCIAL.github],
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Danish Siddique",
  alternateName: "Danish Siddique, Senior Product Engineer",
  url: `${SITE_URL}/`,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

/** Breadcrumbs for an inner page: Home → name */
export const breadcrumbs = (name: string, path: string) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
  ],
});
