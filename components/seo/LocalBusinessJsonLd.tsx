// components/seo/LocalBusinessJsonLd.tsx
// Server component – GEEN 'use client'

export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.turboservices.be/#rioolexpert",
    "name": "Turbo Services – RioolExpert",
    "url": "https://www.turboservices.be",
    "telephone": "+32 485 03 18 77",
    "description":
      "Ontstoppingen, camera-inspecties en noodherstellingen aan riolering en afvoer in regio Antwerpen, Waasland en Rupelstreek.",
    "priceRange": "€€",
    "areaServed": [
      "Antwerpen",
      "Waasland",
      "Rupelstreek"
    ],
    "serviceType": [
      "Ontstopping",
      "Camera-inspectie riolering",
      "Noodherstelling riolering"
    ]
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
