import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import ArticleShell from "@/components/kb/ArticleShell";
import {
  getAutoKnowledgeItem,
  getAutoKnowledgeSlugs,
} from "@/lib/kennisbank";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getAutoKnowledgeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const item = getAutoKnowledgeItem(params.slug);

  if (!item) {
    return {
      title: "Kennisbank | Turbo Services",
      description: "Praktische kennisbankartikels van Turbo Services.",
    };
  }

  return {
    title: `${item.title} | Turbo Services – RioolExpert`,
    description: item.description,
    keywords: item.keywords,
    alternates: {
      canonical: `/kennisbank/auto/${item.slug}`,
    },
  };
}

export default async function AutoKnowledgePage({ params }: PageProps) {
  const item = getAutoKnowledgeItem(params.slug);

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
      "@id": `https://www.turboservices.be/kennisbank/auto/${item.slug}`,
    },
  };

  return (
    <ArticleShell
      title={item.title}
      subtitle=""
      intro={item.description}
      logoVariant="ontstopping"
      canonicalPath={`/kennisbank/auto/${item.slug}`}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
    </ArticleShell>
  );
}