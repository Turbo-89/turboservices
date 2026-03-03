// components/seo/ServiceJsonLd.tsx
export type AreaServedInput = {
  region?: string;           // bv "Scheldeland" of "Vlaanderen"
  municipalities?: string[]; // steden
};

type Props = {
  serviceName: string;     // "Ontstoppingen"
  serviceType?: string;    // default = serviceName
  providerName?: string;   // default "Turbo Services"
  providerUrl?: string;    // default https://www.turboservices.be
  url: string;             // canonieke URL VAN DE PAGINA (dus incl. regio indien regio-pagina)
  areaServed?: AreaServedInput;
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
  providerName = "Turbo Services",
  providerUrl = "https://www.turboservices.be",
  url,
  areaServed,
}: Props) {
  const region = areaServed?.region?.trim();
  const cities = (areaServed?.municipalities ?? []).map((x) => x?.trim()).filter(Boolean);

  const areaServedArr =
    region || cities.length
      ? [
          ...(region ? [{ "@type": "AdministrativeArea", name: region }] : []),
          ...cities.map((c) => ({ "@type": "City", name: c })),
        ]
      : [{ "@type": "AdministrativeArea", name: "Vlaanderen" }];

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
    areaServed: areaServedArr,
    url: absUrl,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}