import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCTA from "@/components/cta/ServiceCTA";
import { getServiceByKey } from "@/content/services";
import { getCommercialKeywordByKey } from "@/content/commercial-keywords";
import { getCommercialTemplate } from "@/content/commercial-templates";

type Params = {
  service: string;
  keyword: string;
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

function resolveCommercialKeyword(keyword: string) {
  if (keyword === "wc-ontstoppen") return "wc-verstopt";
  return keyword;
}

function buildCommercialSections(
  template: ReturnType<typeof getCommercialTemplate>
) {
  if (!template) return [];

  const seedBase = "default";

  return [
    {
      title: stripCitySuffix(
        replaceTokens(template.sectionTitles.urgency, { "{CITY}": "je regio" })
      ),
      body: stripCitySuffix(
        replaceTokens(
          pickVariant(template.urgencyVariants, `${seedBase}-urgency`),
          { "{CITY}": "je regio" }
        )
      ),
    },
    {
      title: stripCitySuffix(
        replaceTokens(template.sectionTitles.symptoms, { "{CITY}": "je regio" })
      ),
      body: stripCitySuffix(
        replaceTokens(
          pickVariant(template.symptomVariants, `${seedBase}-symptoms`),
          { "{CITY}": "je regio" }
        )
      ),
    },
    {
      title: stripCitySuffix(
        replaceTokens(template.sectionTitles.causes, { "{CITY}": "je regio" })
      ),
      body: stripCitySuffix(
        replaceTokens(
          pickVariant(template.causeVariants, `${seedBase}-causes`),
          { "{CITY}": "je regio" }
        )
      ),
    },
    {
      title: stripCitySuffix(
        replaceTokens(template.sectionTitles.approach, { "{CITY}": "je regio" })
      ),
      body: stripCitySuffix(
        replaceTokens(
          pickVariant(template.approachVariants, `${seedBase}-approach`),
          { "{CITY}": "je regio" }
        )
      ),
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const resolvedKeyword = resolveCommercialKeyword(params.keyword);
  const keywordDef = getCommercialKeywordByKey(resolvedKeyword);

  if (!keywordDef || keywordDef.serviceKey !== params.service) {
    return {};
  }

  const title =
  params.keyword === "wc-ontstoppen"
    ? "WC ontstoppen | Turbo Services"
    : `${stripCitySuffix(
        replaceTokens(keywordDef.h1Template, { "{CITY}": "" })
          .replace(/\s+in\s*$/i, "")
          .trim()
      )} | Turbo Services`;

  const description =
    params.keyword === "wc-ontstoppen"
      ? "WC ontstoppen? Turbo Services helpt snel bij een verstopte wc. 24/7 bereikbaar met gerichte interventie."
      : stripCitySuffix(
          keywordDef.descriptionTemplate.replaceAll("{CITY}", "je regio")
        );

  return {
    title,
    description,
  };
}

export default function Page({ params }: { params: Params }) {
  const resolvedKeyword = resolveCommercialKeyword(params.keyword);
  const keywordDef = getCommercialKeywordByKey(resolvedKeyword);

  if (!keywordDef || keywordDef.serviceKey !== params.service) {
    notFound();
  }

  const template = getCommercialTemplate(keywordDef.key);
  const service = getServiceByKey(keywordDef.serviceKey);

  if (!template || !service) {
    notFound();
  }

  const pageTitle =
  params.keyword === "wc-ontstoppen"
    ? "WC ontstoppen"
    : stripCitySuffix(
        replaceTokens(keywordDef.h1Template, { "{CITY}": "" })
          .replace(/\s+in\s*$/i, "")
          .trim()
      );

  const intro =
    stripCitySuffix(
      replaceTokens(
        pickVariant(template.introVariants, `default-intro-${resolvedKeyword}`),
        { "{CITY}": "je regio" }
      )
    ) ||
    stripCitySuffix(keywordDef.introTemplate.replaceAll("{CITY}", "je regio"));

  const sections = buildCommercialSections(template);

  const ctaBody = stripCitySuffix(
    replaceTokens(
      pickVariant(template.ctaVariants, `default-cta-${resolvedKeyword}`),
      { "{CITY}": "je regio" }
    )
  );

  const dynamicImageSrc = `https://www.turboservices.be/assets/base/${keywordDef.serviceKey}.png`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ServiceCTA
        title={pageTitle}
        body={intro}
        city=""
        primaryHref="/boeken"
        phoneNumber="+32485031877"
        whatsAppNumber="+32485031877"
        imageSrc={dynamicImageSrc}
        imageAlt={`${service.name} door Turbo Services`}
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
              Snelle tussenkomst nodig?
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
            href={`/diensten/${keywordDef.serviceKey}`}
            className="text-sm font-medium text-neutral-700 underline underline-offset-4"
          >
            Bekijk ook de vaste dienstpagina voor {service.name.toLowerCase()}
          </Link>
        </div>
      </div>
    </main>
  );
}
