import type { MetadataRoute } from "next";
import { REGION_CITIES } from "@/content/regions";
import { slugify } from "@/lib/slugify";

const SITE = "https://www.turboservices.be";

const SERVICES = [
  "ontstoppingen",
  "camera-inspectie",
  "noodherstellingen",
  "geurdetectie",
  "gerichte-rioolherstellingen",
  "vervangen-van-deksels",
] as const;

const REGIONS = [
  "antwerpen-noordrand",
  "antwerpen-stad",
  "antwerpen-zuidrand",
  "brussel-centrum",
  "brussel-noord",
  "brussel-zuid",
  "denderstreek",
  "druivenstreek",
  "durmestreek-lokeren",
  "hageland",
  "kempen-noord",
  "kempen-zuid",
  "klein-brabant",
  "leuven-dijleland",
  "lier-neteland",
  "mechelen-rivierenland",
  "noordrand-brussel",
  "pajottenland",
  "rupelstreek",
  "scheldeland",
  "sint-niklaas-regio",
  "temse-omgeving",
  "waasland",
] as const;

const STATIC_PAGES = [
  "",
  "/diensten",
  "/prijzen",
  "/over-ons",
  "/boeken",
  "/kennisbank",
  "/blog",
  "/privacy",
] as const;

const KNOWLEDGE_PAGES = [
  "/kennisbank/ontstopping",
  "/kennisbank/ontstopping/afvoer-borrelt",
  "/kennisbank/ontstopping/appartement-gedeelde-riolering",
  "/kennisbank/ontstopping/camera-inspectie",
  "/kennisbank/ontstopping/chemische-ontstoppers",
  "/kennisbank/ontstopping/gereedschap-ontstopping",
  "/kennisbank/ontstopping/gootsteen-ontstoppen",
  "/kennisbank/ontstopping/keukenafvoer-voorkomen",
  "/kennisbank/ontstopping/leiding-vervangen-of-ontstoppen",
  "/kennisbank/ontstopping/leidingen-hoe-vaak-reinigen",
  "/kennisbank/ontstopping/ontstopping-kost",
  "/kennisbank/ontstopping/riool-verstopt-signalen",
  "/kennisbank/ontstopping/septische-put-onderhoud",
  "/kennisbank/ontstopping/stank-uit-afvoer",
  "/kennisbank/ontstopping/terugstromend-toilet-douche",
  "/kennisbank/ontstopping/verstopte-wc",
] as const;

function getUniqueCities() {
  const all = Object.values(REGION_CITIES).flat();
  return Array.from(new Set(all)).sort((a, b) => a.localeCompare(b, "nl-BE"));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const cities = getUniqueCities();

  const staticUrls: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
  }));

  const serviceUrls: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE}/diensten/${service}`,
    lastModified: now,
  }));

  const regionalServiceUrls: MetadataRoute.Sitemap = SERVICES.flatMap((service) =>
    REGIONS.map((region) => ({
      url: `${SITE}/diensten/${service}/${region}`,
      lastModified: now,
    }))
  );

  const municipalServiceUrls: MetadataRoute.Sitemap = SERVICES.flatMap((service) =>
    cities.map((city) => ({
      url: `${SITE}/diensten/${service}/${slugify(city)}`,
      lastModified: now,
    }))
  );

  const knowledgeUrls: MetadataRoute.Sitemap = KNOWLEDGE_PAGES.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
  }));

  return [
    ...staticUrls,
    ...serviceUrls,
    ...regionalServiceUrls,
    ...municipalServiceUrls,
    ...knowledgeUrls,
  ];
}
