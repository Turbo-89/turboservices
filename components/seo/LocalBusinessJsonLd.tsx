import Script from "next/script";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.turboservices.be/#localbusiness",
    name: "Turbo Services",
    url: "https://www.turboservices.be",
    telephone: "+32485031877",
    priceRange: "€€",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Groot Antwerpen",
      },
      {
        "@type": "AdministrativeArea",
        name: "Rupelstreek",
      },
      {
        "@type": "AdministrativeArea",
        name: "Rivierenland",
      },
      {
        "@type": "AdministrativeArea",
        name: "Waasland",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
    },
    serviceOffered: [
      {
        "@type": "Service",
        name: "Ontstoppingen",
        description:
          "Ontstopping van wc, lavabo, douche en hoofdriolering met professionele apparatuur.",
      },
      {
        "@type": "Service",
        name: "Camera-inspectie",
        description:
          "Camera-inspectie van riolering en afvoerleidingen om breuken, verzakkingen en verstoppingen exact in beeld te brengen.",
      },
      {
        "@type": "Service",
        name: "Noodherstellingen",
        description:
          "Snelle noodherstellingen bij lekken, breuken en acute rioolproblemen.",
      },
      {
        "@type": "Service",
        name: "Geurdetectie",
        description:
          "Opsporen en lokaliseren van rioolgeur in woning of gebouw.",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+32485031877",
      contactType: "customer service",
      areaServed: "BE",
      availableLanguage: ["nl"],
    },
  };

  return (
    <Script
      id="localbusiness-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
