import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import ArticleShell from "@/components/kb/ArticleShell";
import {
  getCommercialItem,
  getCommercialStaticParams,
} from "@/lib/kennisbank";
import { getKnowledgeLinks } from "@/lib/internal-links";

type PageProps = {
  params: {
    service: string;
    slug: string;
  };
};

export async function generateStaticParams() {
  return getCommercialStaticParams();
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const item = getCommercialItem(params.service, params.slug);

  if (!item) {
    return {
      title: "Commerciële pagina | Turbo Services",
      description: "Turbo Services – snelle interventies en gerichte oplossingen.",
    };
  }

  return {
    title: `${item.title} | Turbo Services – RioolExpert`,
    description: item.description,
    keywords: item.keywords,
    alternates: {
      canonical: `/commercial/${params.service}/${item.slug}`,
    },
  };
}

function getLogoVariant(service: string) {
  if (service === "camera-inspectie") return "camera-inspectie";
  if (service === "geurdetectie") return "geurdetectie";
  if (service === "noodherstellingen") return "noodherstellingen";
  return "ontstopping";
}

export default async function CommercialPage({ params }: PageProps) {
  const item = getCommercialItem(params.service, params.slug);

  if (!item) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    keywords: item.keywords,
    author: {
      "@type": "Person",
      name: "Wim Verloo",
    },
    publisher: {
      "@type": "Organization",
      name: "Turbo Services",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.turboservices.be/commercial/${params.service}/${item.slug}`,
    },
  };

  return (
    <ArticleShell
      title={item.title}
      subtitle=""
      intro={item.description}
      logoVariant={getLogoVariant(params.service)}
      canonicalPath={`/commercial/${params.service}/${item.slug}`}
    >
      <div className="space-y-6 text-[17px] leading-8 text-slate-700">
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="mt-10 text-4xl font-semibold tracking-tight text-slate-900 first:mt-0">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-[17px] leading-8 text-slate-700">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="ml-6 list-disc space-y-3 text-[17px] leading-8 text-slate-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="ml-6 list-decimal space-y-3 text-[17px] leading-8 text-slate-700">
                {children}
              </ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => (
              <strong className="font-semibold text-slate-900">{children}</strong>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="underline underline-offset-4 hover:text-slate-900"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                {children}
              </blockquote>
            ),
          }}
        >
          {item.body}
        </ReactMarkdown>
      </div>
{/* GERELATEERDE KENNISBANK */}
{(() => {
  const related = getKnowledgeLinks().slice(0, 6);

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold text-slate-900">
        Meer uitleg over dit probleem
      </h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {related.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-xl border p-4 hover:bg-slate-50"
          >
            <span className="font-medium text-slate-900">
              {item.label}
            </span>
            <span className="block text-sm text-slate-600">
              Lees artikel →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
})()}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
    </ArticleShell>
  );
}