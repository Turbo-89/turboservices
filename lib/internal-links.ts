import { COMMERCIAL_TARGETS } from "@/content/commercial-targets";
import { SERVICES } from "@/content/services";
import { slugify } from "@/lib/slugify";

export type InternalLink = {
  href: string;
  label: string;
};

export function getCommercialLinksForServiceAndCity(
  serviceKey: string,
  city: string,
  limit = 4
): InternalLink[] {
  const citySlug = slugify(city);

  return COMMERCIAL_TARGETS.filter(
    (target) =>
      (target.active ?? true) &&
      target.service === serviceKey &&
      slugify(target.city) === citySlug
  )
    .sort((a, b) => (b.priority ?? b.score ?? 0) - (a.priority ?? a.score ?? 0))
    .slice(0, limit)
    .map((target) => ({
      href: `/commercial/${target.service}/${target.keyword}/${citySlug}`,
      label: target.title ?? `${target.keyword} in ${target.city}`,
    }));
}

export function getRelatedServiceLinksForCity(
  currentServiceKey: string,
  city: string,
  limit = 4
): InternalLink[] {
  const citySlug = slugify(city);

  return SERVICES.filter(
    (service) =>
      service.key !== currentServiceKey &&
      service.isPrimary !== false &&
      service.hasMunicipalPages !== false
  )
    .slice(0, limit)
    .map((service) => ({
      href: `/diensten/${service.key}/${citySlug}`,
      label: `${service.name} in ${city}`,
    }));
}

export function getFeaturedCommercialTargetsByService(
  serviceKey: string,
  limit = 3
): InternalLink[] {
  return COMMERCIAL_TARGETS.filter(
    (target) => (target.active ?? true) && target.service === serviceKey
  )
    .sort((a, b) => (b.priority ?? b.score ?? 0) - (a.priority ?? a.score ?? 0))
    .slice(0, limit)
    .map((target) => ({
      href: `/commercial/${target.service}/${target.keyword}/${slugify(target.city)}`,
      label: target.title ?? `${target.keyword} in ${target.city}`,
    }));
}