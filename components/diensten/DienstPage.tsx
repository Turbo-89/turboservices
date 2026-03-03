import Script from "next/script";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { buildHeroImageCandidates } from "@/lib/hero";
import { REGION_CITIES, type RegionKey } from "@/content/regions";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

export type DienstSection = {
  title: string;
  body: string;
};

export type DienstFaq = {
  q: string;
  a: string;
};

type Props = {
  serviceKey: string;               // bv "ontstoppingen"
  serviceName: string;              // bv "Ontstoppingen"
  regionKey?: RegionKey;            // bv "scheldeland"
  regionLabel?: string;             // bv "Scheldeland"
  municipalities?: string[];

  intro?: string;
  sections?: DienstSection[];
  faqs?: DienstFaq[];

  h1?: string;
  breadcrumbTitle?: string;

  heroImageOverride?: string;

  // optioneel: als je expliciet wil sturen (maar werkt ook zonder)
  ctaTitle?: string;
  ctaBody?: string;
  ctaButton?: string;
};

type Crumb = { name: string; url: string };

function uniqueStrings(list: string[] = []) {
  return Array.from(new Set(list.map((x) => String(x).trim()).filter(Boolean)));
}

function buildCanonical(serviceKey: string, regionKey?: string) {
  const base = `/diensten/${slugify(serviceKey)}`;
  return regionKey ? `${base}/${slugify(regionKey)}` : base;
}

function toBreadcrumbs(serviceKey: string, serviceName: string, regionLabel?: string, breadcrumbTitle?: string) {
  const crumbs: Crumb[] = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
  ];

  const serviceUrl = `/diensten/${slugify(serviceKey)}`;
  crumbs.push({ name: breadcrumbTitle || serviceName, url: serviceUrl });

  if (regionLabel) {
    crumbs.push({ name: regionLabel, url: `${serviceUrl}/${slugify(regionLabel)}` });
  }

  return crumbs;
}

function buildWorkAreaText(regionKey?: RegionKey, municipalities?: string[]) {
  const citiesFromKey = regionKey ? REGION_CITIES[regionKey] ?? [] : [];
  const combined = uniqueStrings([...(municipalities ?? []), ...citiesFromKey]);
  return combined.join(", ");
}

/**
 * Compat helper: jouw repo heeft momenteel lib/hero.ts met signature:
 *   buildHeroImageCandidates(service: string, region: string)
 * Daarom altijd strings doorgeven.
 */
function getHeroCandidates(serviceKey: string, regionLabel?: string): string[] {
  const s = String(serviceKey || "").trim();
  const r = String(regionLabel || "").trim();
  try {
    const out = (buildHeroImageCandidates as any)(s, r);
    return Array.isArray(out) ? out.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function defaultCta(serviceName: string, regionLabel?: string) {
  const where = regionLabel ? ` in ${regionLabel}` : "";
  return {
    ctaTitle: `Direct hulp nodig bij ${serviceName.toLowerCase()}${where}?`,
    ctaBody:
      `Bel of vraag online aan. Je krijgt snel bevestiging van je tijdsvenster via sms of WhatsApp.` +
      (regionLabel ? ` We werken actief in ${regionLabel} en omgeving.` : ""),
    ctaButton: "Aanvraag 24u",
  };
}

export function DienstPageLayout({
  serviceKey,
  serviceName,
  regionKey,
  regionLabel,
  municipalities,

  intro = "",
  sections = [],
  faqs = [],

  h1,
  breadcrumbTitle,

  heroImageOverride,

  ctaTitle,
  ctaBody,
  ctaButton,
}: Props) {
  const workArea = buildWorkAreaText(regionKey, municipalities);
  const computedH1 = h1 ?? (regionLabel ? `${serviceName} in ${regionLabel}` : serviceName);

  const canonicalPath = buildCanonical(serviceKey, regionKey);
  const breadcrumbs = toBreadcrumbs(serviceKey, serviceName, regionLabel, breadcrumbTitle);

  // Hero image: override > candidates > /public/assets/base/{serviceKey}.png
  const candidates = getHeroCandidates(serviceKey, regionLabel);
  const baseFallback = `/assets/base/${slugify(serviceKey || serviceName)}.png`;
  const heroImage = (heroImageOverride && String(heroImageOverride)) || candidates[0] || baseFallback;

  const muni = uniqueStrings([
    ...(municipalities ?? []),
    ...(regionKey ? (REGION_CITIES[regionKey] ?? []) : []),
  ]);

  const cta = {
    ...defaultCta(serviceName, regionLabel),
    ...(ctaTitle ? { ctaTitle } : {}),
    ...(ctaBody ? { ctaBody } : {}),
    ...(ctaButton ? { ctaButton } : {}),
  };

  return (
    <>
      {/* SEO */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServiceJsonLd
        serviceName={serviceName}
        regionLabel={regionLabel}
        canonicalPath={canonicalPath}
        municipalities={muni}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
              Turbo Services {regionLabel ? `– ${regionLabel}` : ""}
            </p>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              {computedH1}
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600 whitespace-pre-line">
              {intro}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white text-sm shadow-sm transition hover:opacity-90"
              >
                {serviceName === "Ontstoppingen" ? "Vraag ontstopping aan →" : "Aanvraag 24u →"}
              </Link>

              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                Bel 24/7: 0485 03 18 77
              </a>
            </div>

            {workArea ? (
              <p className="mt-3 text-xs text-slate-500">
                Werkgebied: <span className="text-slate-700">{workArea}</span>
              </p>
            ) : (
              <p className="mt-3 text-xs text-slate-500">
                Afspraak en tijdsvenster worden bevestigd via sms of WhatsApp.
              </p>
            )}
          </div>

          <div className="flex justify-center md:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt={`${serviceName}${regionLabel ? ` – ${regionLabel}` : ""}`}
              className="max-h-64 w-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        {sections.map((sec, idx) => (
          <section key={`${sec.title}-${idx}`} className="mb-10 last:mb-0">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">{sec.title}</h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{sec.body}</p>
          </section>
        ))}

        {!!faqs.length && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Veelgestelde vragen</h2>
            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div key={`${f.q}-${idx}`} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="font-semibold text-slate-900">{f.q}</div>
                  <div className="mt-2 text-slate-700 whitespace-pre-line">{f.a}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Onderste CTA-block (uniform, dynamisch) */}
        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">{cta.ctaTitle}</h2>
          <p className="mb-5 text-slate-700 whitespace-pre-line">{cta.ctaBody}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              {cta.ctaButton}
            </Link>
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Bel 24/7: 0485 03 18 77
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default DienstPageLayout;