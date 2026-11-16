import { faqs, EMAIL } from "./data.js";

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/TaxiService",
  name: "Royal Black Cars Chicago",
  url: "https://www.royalblackcarschicago.com/",
  telephone: "+1-312-555-0142",
  email: EMAIL,
  priceRange: "$$$",
  address: { "@type": "PostalAddress", streetAddress: "1845 W Golf Rd unit 191", addressLocality: "Mount Prospect", addressRegion: "IL", postalCode: "60056", addressCountry: "US" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
  areaServed: ["Chicago","Schaumburg","Naperville","Oak Brook","Arlington Heights"].map(name => ({ "@type": "City", name })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
};

export const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
