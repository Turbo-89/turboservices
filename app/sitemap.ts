import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { REGION_CITIES } from "@/content/regions";
import { SITE_URL } from "@/content/site";
import { slugify } from "@/lib/slugify";

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

  const regionKeys = Object.keys(REGION_CITIES);
  const cities = getUniqueCities();

  const allServiceKeys = SERVICES.map((service) => service.key);
  const regionalServiceKeys = SERVICES.filter((service) => service.hasRegionalPages).map(
    (service) => service.key
  );
  const municipalServiceKeys = SERVICES.filter((service) => service.hasMunicipalPages).map(
    (service) => service.key
  );

  const staticUrls: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  const serviceUrls: MetadataRoute.Sitemap = allServiceKeys.map((serviceKey) => ({
    url: `${SITE_URL}/diensten/${serviceKey}`,
    lastModified: now,
  }));

  const regionalServiceUrls: MetadataRoute.Sitemap = regionalServiceKeys.flatMap((serviceKey) =>
    regionKeys.map((regionKey) => ({
      url: `${SITE_URL}/diensten/${serviceKey}/${regionKey}`,
      lastModified: now,
    }))
  );

  const municipalServiceUrls: MetadataRoute.Sitemap = municipalServiceKeys.flatMap((serviceKey) =>
    cities.map((city) => ({
      url: `${SITE_URL}/diensten/${serviceKey}/${slugify(city)}`,
      lastModified: now,
    }))
  );

  const knowledgeUrls: MetadataRoute.Sitemap = KNOWLEDGE_PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
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

