import {
  COMMERCIAL_TARGETS,
  type CommercialTarget,
} from "@/content/commercial-targets";
import { getCommercialKeywordByKey } from "@/content/commercial-keywords";
import { slugify } from "@/lib/slugify";

export type FeaturedCommercialTarget = CommercialTarget & {
  citySlug: string;
  title: string;
};

export function getActiveCommercialTargetsByServiceAndCity(
  service: string,
  city: string,
  limit = 3
): FeaturedCommercialTarget[] {
  const citySlug = slugify(city);

  return COMMERCIAL_TARGETS.filter(
    (target) =>
      target.service === service &&
      slugify(target.city) === citySlug &&
      (target.active ?? true)
  )
    .sort((a, b) => (b.priority ?? b.score ?? 0) - (a.priority ?? a.score ?? 0))
    .slice(0, limit)
    .map((target) => {
      const keywordDef = getCommercialKeywordByKey(target.keyword);

      return {
        ...target,
        citySlug,
        title:
          target.title ??
          (keywordDef
            ? keywordDef.keyword.charAt(0).toUpperCase() +
              keywordDef.keyword.slice(1) +
              ` in ${target.city}`
            : `${target.keyword} in ${target.city}`),
      };
    });
}

export function getFeaturedCommercialTargetsByService(
  service: string,
  limit = 3
): FeaturedCommercialTarget[] {
  return COMMERCIAL_TARGETS.filter(
    (target) => target.service === service && (target.active ?? true)
  )
    .sort((a, b) => (b.priority ?? b.score ?? 0) - (a.priority ?? a.score ?? 0))
    .slice(0, limit)
    .map((target) => {
      const keywordDef = getCommercialKeywordByKey(target.keyword);

      return {
        ...target,
        citySlug: slugify(target.city),
        title:
          target.title ??
          (keywordDef
            ? keywordDef.keyword.charAt(0).toUpperCase() +
              keywordDef.keyword.slice(1) +
              ` in ${target.city}`
            : `${target.keyword} in ${target.city}`),
      };
    });
}