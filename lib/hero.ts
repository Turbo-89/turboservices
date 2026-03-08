
// service-only hero candidates (geen regio in filename)
export function buildHeroImageCandidates(service: string, _region?: string) {
  const s = String(service ?? "").trim();
  if (!s) return [];
  return [
    `/assets/base/${s}.png`,
    `/assets/hero/${s}.png`,
    `/assets/generated/${s}.webp`,
    `/assets/generated/${s}.png`,
  ];
}