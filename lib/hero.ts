"use client";

export function buildHeroImageCandidates(service: string, region: string) {
  const slug = region.toLowerCase().replace(/\s+/g, "-");
  return [
    `/assets/generated/${service}-${slug}.webp`,
    `/assets/hero/${service}-${slug}.png`,
  ];
}
