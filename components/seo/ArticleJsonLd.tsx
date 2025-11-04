import { ArticleJsonLd as JsonLd } from "next-seo";

export default function ArticleJsonLd({ title, description }: { title: string; description: string }) {
  return (
    <JsonLd
      type="Article"
      url={`https://www.turboservices.be`}
      title={title}
      description={description}
      authorName="Turbo Services"
      publisherName="Turbo Services"
      images={["https://www.turboservices.be/logo.png"]}
    />
  );
}
