import { REGION_CITIES, type RegionKey } from "@/content/regions";
import { slugify } from "@/lib/slugify";

export type MunicipalityDef = {
  name: string;
  slug: string;
  regions: RegionKey[];
};

export const REGION_KEYS = Object.keys(REGION_CITIES) as RegionKey[];

const municipalityMap = new Map<string, MunicipalityDef>();

for (const regionKey of REGION_KEYS) {
  for (const city of REGION_CITIES[regionKey]) {
    const name = city.trim();
    const slug = slugify(name);

    const existing = municipalityMap.get(slug);

    if (existing) {
      if (!existing.regions.includes(regionKey)) {
        existing.regions.push(regionKey);
      }
    } else {
      municipalityMap.set(slug, {
        name,
        slug,
        regions: [regionKey],
      });
    }
  }
}

export const MUNICIPALITIES: MunicipalityDef[] = Array.from(
  municipalityMap.values()
).sort((a, b) => a.name.localeCompare(b.name, "nl-BE"));

export const MUNICIPALITY_BY_SLUG: Record<string, MunicipalityDef> =
  Object.fromEntries(MUNICIPALITIES.map((m) => [m.slug, m]));

export function isRegionSlug(value: string): value is RegionKey {
  return REGION_KEYS.includes(value as RegionKey);
}

export function getMunicipalityBySlug(slug: string) {
  return MUNICIPALITY_BY_SLUG[slug];
}