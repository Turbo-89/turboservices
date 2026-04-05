#!/usr/bin/env node

/**
 * Genereert vaste dienst x regio- en dienst x gemeentepagina's
 * vanuit de centrale contentbestanden.
 *
 * Gebruik:
 *   node .\scripts\generate-service-location-pages.js
 */

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT = process.cwd();

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function loadTsModule(relativePath) {
  const absPath = path.join(ROOT, relativePath);
  const source = readFile(absPath);

  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: absPath,
  });

  const module = { exports: {} };
  const wrapped = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    transpiled.outputText
  );
  wrapped(
    module.exports,
    require,
    module,
    absPath,
    path.dirname(absPath)
  );

  return module.exports;
}

function replaceTokens(input, replacements) {
  let output = input;
  for (const [token, value] of Object.entries(replacements)) {
    output = output.split(token).join(value);
  }
  return output;
}

function escapeTemplateString(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function slugify(input) {
  return String(input)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " en ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getRegionLabel(regionKey) {
  const labels = {
    "antwerpen-noordrand": "Antwerpen Noordrand",
    "antwerpen-stad": "Antwerpen Stad",
    "antwerpen-zuidrand": "Antwerpen Zuidrand",
    "brussel-centrum": "Brussel Centrum",
    "brussel-noord": "Brussel Noord",
    "brussel-zuid": "Brussel Zuid",
    denderstreek: "Denderstreek",
    druivenstreek: "Druivenstreek",
    "durmestreek-lokeren": "Durmestreek",
    hageland: "Hageland",
    "kempen-noord": "Kempen Noord",
    "kempen-zuid": "Kempen Zuid",
    "klein-brabant": "Klein-Brabant",
    "leuven-dijleland": "Leuven & Dijleland",
    "lier-neteland": "Lier & Neteland",
    "mechelen-rivierenland": "Mechelen & Rivierenland",
    "noordrand-brussel": "Noordrand Brussel",
    pajottenland: "Pajottenland",
    rupelstreek: "Rupelstreek",
    scheldeland: "Scheldeland",
    "sint-niklaas-regio": "Sint-Niklaas regio",
    "temse-omgeving": "Temse & omstreken",
    waasland: "Waasland",
  };

  return labels[regionKey] ?? regionKey;
}

function dedupeCities(regionCities) {
  const all = Object.values(regionCities).flat();
  return Array.from(new Set(all)).sort((a, b) => a.localeCompare(b, "nl-BE"));
}

function getCityToRegionsMap(regionCities) {
  const map = new Map();

  for (const [regionKey, cities] of Object.entries(regionCities)) {
    for (const city of cities) {
      if (!map.has(city)) {
        map.set(city, []);
      }
      map.get(city).push(regionKey);
    }
  }

  return map;
}

function buildContextSummary(serviceKey, locationContext) {
  const issues = locationContext.commonIssues ?? [];
  const serviceNuances = locationContext.serviceNuances?.[serviceKey] ?? [];
  return [...issues, ...serviceNuances].filter(Boolean).join(" ");
}

function createPageSource({
  service,
  template,
  pageType,
  regionKey,
  regionLabel,
  city,
  municipalities,
  relatedRegionLinks,
  contextSummary,
}) {
  const locationLabel = pageType === "region" ? regionLabel : city;

  const introTemplate =
    pageType === "region"
      ? template.regionalIntroTemplate
      : template.municipalIntroTemplate;

  const titleTemplate =
    pageType === "region"
      ? template.regionalTitleTemplate
      : template.municipalTitleTemplate;

  const descriptionTemplate =
    pageType === "region"
      ? template.regionalDescriptionTemplate
      : template.municipalDescriptionTemplate;

  const ctaBodyTemplate =
    pageType === "region"
      ? template.regionalCtaBodyTemplate
      : template.municipalCtaBodyTemplate;

  const sectionsTemplate =
    pageType === "region"
      ? template.regionalSections
      : template.municipalSections;

  const replacements = {
    "{SERVICE_NAME}": service.name,
    "{REGION}": regionLabel ?? "",
    "{CITY}": city ?? "",
    "{LOCATION_CONTEXT}": contextSummary,
  };

  const intro = replaceTokens(introTemplate, replacements).trim();
  const metaTitle = replaceTokens(titleTemplate, replacements).trim();
  const metaDescription = replaceTokens(descriptionTemplate, replacements).trim();
  const ctaBody = replaceTokens(ctaBodyTemplate, replacements).trim();

  const sections = sectionsTemplate.map((section) => ({
    title: replaceTokens(section.title, replacements).trim(),
    body: replaceTokens(section.body, replacements).trim(),
  }));

  const municipalitiesJson = JSON.stringify(municipalities ?? [], null, 2);
  const relatedRegionLinksJson = JSON.stringify(relatedRegionLinks ?? [], null, 2);
  const sectionsJson = JSON.stringify(sections, null, 2);
  const faqsJson = JSON.stringify(service.faqs ?? [], null, 2);

  return `import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";

export const metadata: Metadata = {
  title: \`${escapeTemplateString(metaTitle)} | Turbo Services\`,
  description: \`${escapeTemplateString(metaDescription)}\`,
};

export default function Page() {
  const municipalities = ${municipalitiesJson};
  const relatedRegionLinks = ${relatedRegionLinksJson};
  const sections = ${sectionsJson};
  const faqs = ${faqsJson};

  return (
    <DienstPageLayout
      serviceKey="${escapeTemplateString(service.key)}"
      serviceName="${escapeTemplateString(service.name)}"
      ${pageType === "region" ? `regionKey="${escapeTemplateString(regionKey)}"` : ""}
      regionLabel="${escapeTemplateString(locationLabel)}"
      municipalities={municipalities}
      intro={\`${escapeTemplateString(intro)}\`}
      sections={sections}
      faqs={faqs}
      ctaTitle="${escapeTemplateString(service.ctaTitle ?? "")}"
      ctaBody={\`${escapeTemplateString(ctaBody)}\`}
      ctaButton="${escapeTemplateString(service.ctaButton ?? "")}"
      heroImageOverride="${escapeTemplateString(service.heroImage ?? "")}"
      ${
        pageType === "region"
          ? `municipalityLinks={municipalities.map((name) => ({ slug: name.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/&/g, " en ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), label: name }))}`
          : `relatedRegionLinks={relatedRegionLinks}`
      }
    />
  );
}
`;
}

function main() {
  const { SERVICES } = loadTsModule("content/services.ts");
  const {
    getServiceLocationTemplate,
  } = loadTsModule("content/service-location-templates.ts");
  const { REGION_CITIES } = loadTsModule("content/regions.ts");
  const {
    getLocationContext,
  } = loadTsModule("content/location-context.ts");

  const cityToRegionsMap = getCityToRegionsMap(REGION_CITIES);
  const allCities = dedupeCities(REGION_CITIES);

  let writtenCount = 0;

  for (const service of SERVICES) {
    const template = getServiceLocationTemplate(service.key);
    if (!template) {
      console.warn(`Geen template voor service: ${service.key}`);
      continue;
    }

    if (service.hasRegionalPages) {
      for (const [regionKey, cities] of Object.entries(REGION_CITIES)) {
        const regionLabel = getRegionLabel(regionKey);
        const locationContext = getLocationContext(regionLabel);
        const contextSummary = buildContextSummary(service.key, locationContext);

        const pageSource = createPageSource({
          service,
          template,
          pageType: "region",
          regionKey,
          regionLabel,
          municipalities: cities,
          relatedRegionLinks: [],
          contextSummary,
        });

        const outDir = path.join(ROOT, "app", "diensten", service.key, regionKey);
        ensureDir(outDir);
        fs.writeFileSync(path.join(outDir, "page.tsx"), pageSource, "utf8");
        writtenCount += 1;
      }
    }

    if (service.hasMunicipalPages) {
      for (const city of allCities) {
        const locationContext = getLocationContext(city);
        const contextSummary = buildContextSummary(service.key, locationContext);

        const relatedRegionLinks = (cityToRegionsMap.get(city) ?? []).map(
          (regionKey) => ({
            slug: regionKey,
            label: getRegionLabel(regionKey),
          })
        );

        const pageSource = createPageSource({
          service,
          template,
          pageType: "city",
          city,
          municipalities: [city],
          relatedRegionLinks,
          contextSummary,
        });

        const outDir = path.join(
          ROOT,
          "app",
          "diensten",
          service.key,
          slugify(city)
        );
        ensureDir(outDir);
        fs.writeFileSync(path.join(outDir, "page.tsx"), pageSource, "utf8");
        writtenCount += 1;
      }
    }
  }

  console.log(`Klaar. ${writtenCount} pagina's geschreven.`);
}

main();