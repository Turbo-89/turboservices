import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCTA from "@/components/cta/ServiceCTA";
import { getLocationContext } from "@/content/location-context";
import { getServiceByKey } from "@/content/services";
import { slugify } from "@/lib/slugify";
import { getCommercialKeywordByKey } from "@/content/commercial-keywords";
import { getCommercialTemplate } from "@/content/commercial-templates";
import { COMMERCIAL_TARGETS } from "@/content/commercial-targets";

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

function pickVariant(values: string[], seed: string) {
  if (!values.length) return "";
  const total = seed.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return values[total % values.length];
}

function getCommercialTarget(service: string, keyword: string, citySlug: string) {
  return COMMERCIAL_TARGETS.find(
    (item) =>
      item.service === service &&
      item.keyword === keyword &&
      slugify(item.city) === citySlug
  );
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

function buildCommercialSections(
  template: ReturnType<typeof getCommercialTemplate>,
  city: string
) {
  if (!template) return [];

  const seedBase = city.toLowerCase();

  return [
    {
      title: replaceTokens(template.sectionTitles.urgency, { "{CITY}": city }),
      body: replaceTokens(
        pickVariant(template.urgencyVariants, `${seedBase}-urgency`),
        { "{CITY}": city }
      ),
    },
    {
      title: replaceTokens(template.sectionTitles.symptoms, { "{CITY}": city }),
      body: replaceTokens(
        pickVariant(template.symptomVariants, `${seedBase}-symptoms`),
        { "{CITY}": city }
      ),
    },
    {
      title: replaceTokens(template.sectionTitles.causes, { "{CITY}": city }),
      body: replaceTokens(
        pickVariant(template.causeVariants, `${seedBase}-causes`),
        { "{CITY}": city }
      ),
    },
    {
      title: replaceTokens(template.sectionTitles.approach, { "{CITY}": city }),
      body: replaceTokens(
        pickVariant(template.approachVariants, `${seedBase}-approach`),
        { "{CITY}": city }
      ),
    },
  ];
}

export function generateStaticParams(): Params[] {
  return COMMERCIAL_TARGETS.map((item) => ({
    service: item.service,
    keyword: item.keyword,
    city: slugify(item.city),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const target = getCommercialTarget(params.service, params.keyword, params.city);
  const keywordDef = getCommercialKeywordByKey(params.keyword);

  if (!target || !keywordDef || keywordDef.serviceKey !== params.service) {
    return {};
  }

  return {
    title:
      replaceTokens(keywordDef.titleTemplate, { "{CITY}": target.city }) +
      " | Turbo Services",
    description: replaceTokens(keywordDef.descriptionTemplate, {
      "{CITY}": target.city,
    }),
  };
}

export default function Page({ params }: { params: Params }) {
  const target = getCommercialTarget(params.service, params.keyword, params.city);
  const keywordDef = getCommercialKeywordByKey(params.keyword);

  if (!target || !keywordDef || keywordDef.serviceKey !== params.service) {
    notFound();
  }

  const template = getCommercialTemplate(keywordDef.key);
  const service = getServiceByKey(keywordDef.serviceKey);

  if (!template || !service) {
    notFound();
  }

  const city = target.city;

  const intro =
    replaceTokens(
      pickVariant(template.introVariants, `${city.toLowerCase()}-intro`),
      { "{CITY}": city }
    ) ||
    replaceTokens(keywordDef.introTemplate, { "{CITY}": city });

  const contextParagraph = buildContextParagraph(city, keywordDef.serviceKey);
  const sections = buildCommercialSections(template, city);

  if (contextParagraph) {
    sections.push({
      title: `Waarom dit in ${city} vaak snel moet worden aangepakt`,
      body: contextParagraph,
    });
  }

  const ctaBody = replaceTokens(
    pickVariant(template.ctaVariants, `${city.toLowerCase()}-cta`),
    { "{CITY}": city }
  );

  const canonicalDienstUrl = `/diensten/${keywordDef.serviceKey}/${slugify(city)}`;
  const dynamicImageSrc = `https://www.turboservices.be/assets/base/${keywordDef.serviceKey}.png`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ServiceCTA
        title={replaceTokens(keywordDef.h1Template, { "{CITY}": city })}
        body={intro}
        city={city}
        primaryHref="/boeken"
        phoneNumber="+32485031877"
        whatsAppNumber="+32485031877"
        imageSrc={dynamicImageSrc}
        imageAlt={`${service.name} in ${city}`}
      />

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

      <div className="mt-10 rounded-3xl bg-[#f5f7fa] px-6 py-8 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111827]">
              Snelle tussenkomst nodig in{" "}
              <span className="text-[var(--turbo-red,#E34D35)]">{city}</span>?
            </h2>
            <p className="mt-3 text-neutral-700">{ctaBody}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center rounded-full bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Bel 24/7
            </a>

            <Link
              href="/boeken"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400"
            >
              Vraag interventie aan
            </Link>

            <a
              href="https://wa.me/32485031877"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-5">
          <Link
            href={canonicalDienstUrl}
            className="text-sm font-medium text-neutral-700 underline underline-offset-4"
          >
            Bekijk ook de vaste dienstpagina voor {service.name.toLowerCase()} in {city}
          </Link>
        </div>
      </div>
    </main>
  );
}