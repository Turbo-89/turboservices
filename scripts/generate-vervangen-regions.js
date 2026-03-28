const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const regionsFile = path.join(projectRoot, "content", "regions.ts");
const outputBase = path.join(
  projectRoot,
  "app",
  "diensten",
  "vervangen-van-deksels"
);

if (!fs.existsSync(regionsFile)) {
  console.error("Bestand niet gevonden:", regionsFile);
  process.exit(1);
}

const regionsSource = fs.readFileSync(regionsFile, "utf8");

function parseRegionCities(tsSource) {
  const match = tsSource.match(
    /export const REGION_CITIES: Record<RegionKey, string\[]> = \{([\s\S]*?)\n\};/
  );

  if (!match) {
    throw new Error("REGION_CITIES blok niet gevonden in content/regions.ts");
  }

  const block = match[1];
  const regionMap = {};

  const regionRegex = /"([^"]+)":\s*\[([\s\S]*?)\](?:,|$)/g;
  let regionMatch;

  while ((regionMatch = regionRegex.exec(block)) !== null) {
    const regionKey = regionMatch[1];
    const citiesBlock = regionMatch[2];

    const cities = [];
    const cityRegex = /"([^"]+)"/g;
    let cityMatch;

    while ((cityMatch = cityRegex.exec(citiesBlock)) !== null) {
      cities.push(cityMatch[1]);
    }

    regionMap[regionKey] = cities;
  }

  return regionMap;
}

function slugToLabel(slug) {
  return String(slug)
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function cityToSlug(city) {
  return String(city)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeMunicipalityLinks(cities) {
  return cities.map((city) => ({
    slug: cityToSlug(city),
    label: city,
  }));
}

function makeIntro(regionLabel, cities) {
  const cityText = cities.join(", ");
  return `Vervangen van deksels in ${regionLabel} nodig? In ${cityText} zien we regelmatig beschadigde, verzakte of versleten putdeksels en inspectiedeksels. Turbo Services vervangt deksels veilig en correct, met aandacht voor bereikbaarheid, belasting en de bestaande situatie ter plaatse.`;
}

function makeSections(regionLabel, cities) {
  const cityText = cities.join(", ");

  return [
    {
      title: `Wanneer is vervangen van deksels nodig in ${regionLabel}?`,
      body: `In ${cityText} komen beschadigde, losliggende of verzakte deksels regelmatig voor. Dat kan zorgen voor geurhinder, onveilige situaties, waterinsijpeling of bijkomende schade aan de put of aansluiting. Tijdig vervangen voorkomt verdere problemen en maakt de situatie opnieuw veilig en bruikbaar.`,
    },
    {
      title: `Onze aanpak in ${regionLabel}`,
      body: `We bekijken eerst het type deksel, de maat, de belasting en de toestand van de bestaande putrand. Daarna vervangen we het beschadigde of foutieve deksel door een geschikte oplossing. Waar nodig stemmen we de uitvoering af op de omliggende verharding en de praktische toegankelijkheid ter plaatse.`,
    },
    {
      title: `Actief in ${regionLabel}`,
      body: `Turbo Services werkt actief in ${regionLabel}, onder meer in ${cityText}. We zorgen voor een duidelijke aanpak, correcte uitvoering en snelle opvolging zonder onnodige omwegen.`,
    },
  ];
}

function makeFaqs(regionLabel, cities) {
  const cityText = cities.join(", ");

  return [
    {
      q: `Doen jullie vervanging van deksels in ${regionLabel}?`,
      a: `Ja. We zijn actief in ${regionLabel}, onder meer in ${cityText}, en vervangen beschadigde, verzakte of versleten deksels afhankelijk van de situatie ter plaatse.`,
    },
    {
      q: `Wanneer moet een putdeksel vervangen worden?`,
      a: `Wanneer een deksel scheurt, verzakt, los ligt, niet meer correct afsluit of onveilig wordt om te belasten, is vervanging meestal de juiste oplossing.`,
    },
    {
      q: `Bekijken jullie eerst welke oplossing technisch past?`,
      a: `Ja. We bekijken eerst het type put, de maat, de belasting en de plaatsingssituatie zodat het juiste deksel en de juiste uitvoering gekozen worden.`,
    },
  ];
}

function generatePage(regionKey, cities) {
  const regionLabel = slugToLabel(regionKey);
  const municipalityLinks = makeMunicipalityLinks(cities);
  const intro = makeIntro(regionLabel, cities);
  const sections = makeSections(regionLabel, cities);
  const faqs = makeFaqs(regionLabel, cities);

  return `import DienstPageLayout from "@/components/diensten/DienstPage";

export default function Page() {
  return (
    <DienstPageLayout
      serviceKey="vervangen-van-deksels"
      serviceName="Vervangen van deksels"
      regionKey="${regionKey}"
      regionLabel="${regionLabel}"
      municipalities={${JSON.stringify(cities, null, 2)}}
      municipalityLinks={${JSON.stringify(municipalityLinks, null, 2)}}
      intro={${JSON.stringify(intro)}}
      sections={${JSON.stringify(sections, null, 2)}}
      faqs={${JSON.stringify(faqs, null, 2)}}
    />
  );
}
`;
}

function run() {
  const regionCities = parseRegionCities(regionsSource);
  const regionKeys = Object.keys(regionCities);

  if (!regionKeys.length) {
    throw new Error("Geen regio's gevonden in REGION_CITIES");
  }

  for (const regionKey of regionKeys) {
    const cities = regionCities[regionKey] || [];
    const targetDir = path.join(outputBase, regionKey);
    const targetFile = path.join(targetDir, "page.tsx");

    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(targetFile, generatePage(regionKey, cities), "utf8");

    console.log("Generated:", targetFile);
  }
}

run();