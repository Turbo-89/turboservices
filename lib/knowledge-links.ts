import { getAutoKnowledgeItem, getAutoKnowledgeSlugs } from "@/lib/kennisbank";

export type KnowledgeLink = {
  href: string;
  title: string;
  description: string;
  service: string;
  keywords: string[];
  slug: string;
};

function normalizeService(service?: string) {
  return String(service || "").trim().toLowerCase();
}

export function getKnowledgeLinks(limit = 12): KnowledgeLink[] {
  return getAutoKnowledgeSlugs()
    .map((slug) => getAutoKnowledgeItem(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .sort((a, b) => a.title.localeCompare(b.title, "nl-BE"))
    .slice(0, limit)
    .map((item) => ({
      href: `/kennisbank/auto/${item.slug}`,
      title: item.title,
      description: item.description,
      service: item.service,
      keywords: item.keywords,
      slug: item.slug,
    }));
}

export function filterKnowledgeByService(
  service: string,
  limit = 6
): KnowledgeLink[] {
  const normalizedService = normalizeService(service);

  return getAutoKnowledgeSlugs()
    .map((slug) => getAutoKnowledgeItem(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .filter((item) => normalizeService(item.service) === normalizedService)
    .sort((a, b) => a.title.localeCompare(b.title, "nl-BE"))
    .slice(0, limit)
    .map((item) => ({
      href: `/kennisbank/auto/${item.slug}`,
      title: item.title,
      description: item.description,
      service: item.service,
      keywords: item.keywords,
      slug: item.slug,
    }));
}