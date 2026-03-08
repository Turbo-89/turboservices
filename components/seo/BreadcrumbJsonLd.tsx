export type BreadcrumbItem = {
  name: string;
  url: string; // mag relatief of absoluut binnenkomen
};

type Props = {
  items?: BreadcrumbItem[];
  breadcrumbs?: BreadcrumbItem[];
  siteUrl?: string; // default https://www.turboservices.be
};

function toAbsolute(url: string, siteUrl: string) {
  if (!url) return url;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!url.startsWith("/")) return `${siteUrl}/${url}`;
  return `${siteUrl}${url}`;
}

export function BreadcrumbJsonLd({ items, breadcrumbs, siteUrl = "https://www.turboservices.be" }: Props) {
  const list = (items ?? breadcrumbs ?? [])
    .filter(
      (it): it is BreadcrumbItem =>
        !!it &&
        typeof it.name === "string" &&
        it.name.trim().length > 0 &&
        typeof it.url === "string" &&
        it.url.trim().length > 0
    )
    .map((it) => ({ ...it, url: toAbsolute(it.url.trim(), siteUrl) }));

  if (!list.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}