export function buildHeroImageCandidates(serviceKey: string, regionLabel: string) {
  const base = serviceKey.toLowerCase();
  const region = regionLabel.toLowerCase().replace(/\s+/g, "-");

  return [
    `/assets/generated/${base}-${region}.webp`,
    `/assets/generated/${base}.webp`,
  ];
}
