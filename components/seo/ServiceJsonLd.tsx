type Props = {
  serviceName: string;
  serviceType?: string;
  url: string;
  providerName?: string;
  providerUrl?: string;
  regionLabel?: string;
  municipalities?: string[];
};

function toAbsolute(url: string, siteUrl: string) {
  if (!url) return url;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!url.startsWith("/")) return `${siteUrl}/${url}`;
  return `${siteUrl}${url}`;
}

export function ServiceJsonLd({
  serviceName,
  serviceType,
  url,
  providerName = "Turbo Services",
  providerUrl = "https://www.turboservices.be",
  regionLabel,
  municipalities = [],
}: Props) {
  const cleanRegion = regionLabel?.trim();
  const cleanCities = municipalities
    .map((x) => x?.trim())
    .filter((x): x is string => Boolean(x));

  const areaServed =
    cleanRegion || cleanCities.length
      ? [
          ...(cleanRegion
            ? [{ "@type": "AdministrativeArea" as const, name: cleanRegion }]
            : []),
          ...cleanCities.map((city) => ({
            "@type": "City" as const,
            name: city,
          })),
        ]
      : [{ "@type": "AdministrativeArea" as const, name: "Vlaanderen" }];

  const absProviderUrl = toAbsolute(providerUrl, "https://www.turboservices.be");
  const absUrl = toAbsolute(url, absProviderUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceType ?? serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: providerName,
      url: absProviderUrl,
    },
    areaServed,
    url: absUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}