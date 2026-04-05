import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMMERCIAL_CITIES } from "@/content/commercial-cities";
import {
  COMMERCIAL_KEYWORDS,
  getCommercialKeywordByKey,
} from "@/content/commercial-keywords";
import {
  getCommercialTemplate,
} from "@/content/commercial-templates";
import { getLocationContext } from "@/content/location-context";
import { getServiceByKey } from "@/content/services";
import { slugify } from "@/lib/slugify";

type Params = {
  service: string;
  keyword: string;
  city: string;
};

function replaceTokens(
  value: string,
  replacements: Record<string, string>
): string {
  let out = value;
  for (const [key, replacement] of Object.entries(replacements)) {
    out = out.replaceAll(key, replacement);
  }
  return out;
}

function getCityBySlug(citySlug: string) {
  return COMMERCIAL_CITIES.find((city) => slugify(city) === citySlug);
}

function buildContextParagraph(city: string, serviceKey: string) {
  const context = getLocationContext(city);
  const issues = context.commonIssues ?? [];
  const nuance =
    context.serviceNuances?.[
      serviceKey as keyof NonNullable<typeof context.serviceNuances>
    ] ?? [];

  return [...issues, ...nuance].filter(Boolean).join(" ");
}

export function generateStaticParams(): Params[] {
  return COMMERCIAL_KEYWORDS.flatMap((keywordDef) =>
    COMMERCIAL_CITIES.map((city) => ({
      service: keywordDef.serviceKey,
      keyword: keywordDef.key,
      city: slugify(city),
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const keywordDef = getCommercialKeywordByKey(params.keyword);
  const city = getCityBySlug(params.city);

  if (!keywordDef || !city || keywordDef.serviceKey !== params.service) {
    return {};
  }

  return {
    title:
      replaceTokens(keywordDef.titleTemplate, { "{CITY}": city }) +
      " | Turbo Services",
    description: replaceTokens(keywordDef.descriptionTemplate, {
      "{CITY}": city,
    }),
  };
}

export default function Page({ params }: { params: Params }) {
  const keywordDef = getCommercialKeywordByKey(params.keyword);
  const city = getCityBySlug(params.city);

  if (!keywordDef || !city || keywordDef.serviceKey !== params.service) {
    notFound();
  }

  const template = getCommercialTemplate(keywordDef.key);
  const service = getServiceByKey(keywordDef.serviceKey);

  if (!template || !service) {
    notFound();
  }

  const intro = replaceTokens(keywordDef.introTemplate, {
    "{CITY}": city,
  });

  const contextParagraph = buildContextParagraph(city, keywordDef.serviceKey);

  const sections = template.sections.map((section) => ({
    title: replaceTokens(section.title, { "{CITY}": city }),
    body: replaceTokens(section.body, { "{CITY}": city }),
  }));

  if (contextParagraph) {
    sections.push({
      title: `Waarom dit in ${city} vaak snel moet worden aangepakt`,
      body: contextParagraph,
    });
  }

  const ctaBody = replaceTokens(template.ctaBodyTemplate, {
    "{CITY}": city,
  });

  const canonicalDienstUrl = `/diensten/${keywordDef.serviceKey}/${slugify(city)}`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <p className="mb-2 text-sm text-neutral-500">
          Commercial / {service.name} / {city}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          {replaceTokens(keywordDef.h1Template, { "{CITY}": city })}
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-700">{intro}</p>
      </div>

      <div className="mb-10 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">{keywordDef.ctaTitle}</h2>
        <p className="mt-3 text-neutral-700">{ctaBody}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/boeken"
            className="rounded-full border px-5 py-3 text-sm font-medium"
          >
            {keywordDef.ctaButton}
          </a>
          <Link
            href={canonicalDienstUrl}
            className="rounded-full border px-5 py-3 text-sm font-medium"
          >
            Bekijk {service.name.toLowerCase()} in {city}
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-3 leading-7 text-neutral-700">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Waarom Turbo Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
          {keywordDef.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">
          Gerelateerde vaste dienstpagina
        </h2>
        <p className="mt-3 text-neutral-700">
          Voor de canonieke dienstinformatie in {city} kun je ook terecht op de
          vaste dienstpagina.
        </p>
        <div className="mt-4">
          <Link
            href={canonicalDienstUrl}
            className="rounded-full border px-5 py-3 text-sm font-medium inline-block"
          >
            Naar {service.name.toLowerCase()} in {city}
          </Link>
        </div>
      </div>
    </main>
  );
}