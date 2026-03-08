import React from "react";

const BASE_URL = "https://www.turboservices.be";
const LOCALBUSINESS_ID = `${BASE_URL}/#localbusiness`;

type Props = {
  sameAs?: string[];
};

export default function LocalBusinessJsonLd({ sameAs = [] }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LOCALBUSINESS_ID,
    name: "Turbo Services",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: [`${BASE_URL}/logo-horizontal.png`, `${BASE_URL}/logo.png`],
    telephone: "+32485031877",
    email: "info@turboservices.be",
    priceRange: "€€",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Vlaanderen" },
      { "@type": "AdministrativeArea", name: "Antwerpen" },
      { "@type": "AdministrativeArea", name: "Oost-Vlaanderen" },
      { "@type": "AdministrativeArea", name: "Vlaams-Brabant" },
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
        name: "Gerichte rioolherstellingen",
        description:
          "Gerichte herstellingen aan beschadigde of verzakte leidingen na diagnose ter plaatse.",
      },
      {
        "@type": "Service",
        name: "Geurdetectie",
        description:
          "Opsporen en lokaliseren van rioolgeur in woning of gebouw.",
      },
      {
        "@type": "Service",
        name: "Noodherstellingen",
        description:
          "Snelle noodherstellingen bij lekken, breuken en acute rioolproblemen.",
      },
      {
        "@type": "Service",
        name: "Vervangen van deksels",
        description:
          "Vervangen of aanpassen van beschadigde, losse of verzakte putdeksels en afdekkingselementen.",
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
    sameAs,
  };

  return (
    <script
      id="localbusiness-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}