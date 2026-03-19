const fs = require("fs");
const path = require("path");

const services = [
  "ontstoppingen",
  "camera-inspectie",
  "noodherstellingen",
  "geurdetectie",
  "gerichte-rioolherstellingen",
  "vervangen-van-deksels"
];

const regions = {
  "scheldeland": ["Boom", "Niel", "Rumst"],
  "rupelstreek": ["Boom", "Rumst", "Niel"],
  "waasland": ["Sint-Niklaas", "Temse", "Lokeren"],
  // uitbreiden met jouw REGION_CITIES
};

function capitalize(str) {
  return str.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

function generateContent(service, region, cities) {
  const serviceLabel = capitalize(service);
  const regionLabel = capitalize(region);

  const cityText = cities.join(", ");

  return {
    intro: `${serviceLabel} in ${regionLabel} nodig? In ${cityText} komen verstoppingen, geurhinder en afvoerproblemen frequent voor door oudere rioleringen en intensief gebruik. Turbo Services zorgt voor snelle en gerichte interventies zonder onnodige kosten.`,

    sections: [
      {
        title: `Veelvoorkomende problemen in ${regionLabel}`,
        body: `In ${cityText} zien we vaak verstoppingen door vetophoping, wortelgroei en verzakkingen. Vooral in oudere woningen komen terugkerende problemen voor die een gerichte aanpak vereisen.`
      },
      {
        title: `Onze aanpak`,
        body: `Wij starten met een gerichte analyse van het probleem. Indien nodig voeren we een camera-inspectie uit om exact de oorzaak te bepalen. Daarna lossen we het probleem efficiënt op zonder onnodige breekwerken.`
      },
      {
        title: `Waarom Turbo Services`,
        body: `Snelle interventie, duidelijke communicatie en correcte prijzen. Actief in ${regionLabel} en directe omgeving, met kennis van lokale situaties en typische problemen.`
      }
    ],

    faqs: [
      {
        q: `Hoe snel kunnen jullie ter plaatse zijn in ${regionLabel}?`,
        a: `In de meeste gevallen zijn we dezelfde dag nog ter plaatse in ${regionLabel} en omliggende gemeenten zoals ${cityText}.`
      },
      {
        q: `Wat kost een ${serviceLabel.toLowerCase()}?`,
        a: `Je krijgt altijd vooraf een duidelijke prijs. Geen verrassingen achteraf.`
      }
    ]
  };
}

function generatePage(service, region, cities) {
  const content = generateContent(service, region, cities);

  return `
import DienstPageLayout from "@/components/diensten/DienstPage";

export default function Page() {
  return (
    <DienstPageLayout
      serviceKey="${service}"
      serviceName="${capitalize(service)}"
      regionKey="${region}"
      regionLabel="${capitalize(region)}"
      municipalities={${JSON.stringify(cities)}}
      intro={\`${content.intro}\`}
      sections={${JSON.stringify(content.sections)}}
      faqs={${JSON.stringify(content.faqs)}}
    />
  );
}
`;
}

function run() {
  services.forEach(service => {
    Object.entries(regions).forEach(([region, cities]) => {
      const dir = path.join(
        process.cwd(),
        "app/diensten",
        service,
        region
      );

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const filePath = path.join(dir, "page.tsx");

      const content = generatePage(service, region, cities);

      fs.writeFileSync(filePath, content, "utf8");

      console.log("Generated:", filePath);
    });
  });
}

run();