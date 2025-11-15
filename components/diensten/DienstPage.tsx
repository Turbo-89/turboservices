// components/diensten/DienstPage.tsx

import type { ReactNode } from "react";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export type DienstSection = {
  heading: string;
  body: string;
};

export type DienstPageProps = {
  brand: string;
  regionLabel: string;   // bv. "Antwerpen"
  serviceName: string;   // bv. "Ontstoppingsdienst"
  h1: string;
  intro: string;
  sections: DienstSection[];
  cta: string;
  metaTitle?: string;
  metaDescription?: string;

  /**
   * Optioneel: key om automatisch de juiste hero-afbeelding te kiezen.
   * Voorbeeld: "ontstopping", "camera-inspectie", "rookdetectie"
   *
   * Als deze niet meegegeven wordt, proberen we een slug te maken op basis van serviceName.
   */
  serviceKey?: string;

  /**
   * Optioneel: expliciete hero key als je ooit wil afwijken van serviceKey.
   * In de huidige setup niet verplicht.
   */
  heroImageKey?: string;
};

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

/**
 * Resolutielogica voor hero-afbeeldingen:
 *
 * 1. Als heroKey bestaat:
 *    - /assets/logo/<heroKey>-<region>.png
 *    - /assets/logo/<heroKey>.png
 * 2. Als heroKey niet bestaat:
 *    - probeer slug(serviceName) op dezelfde manier
 * 3. Als er geen match of file is, tonen we HeroLogo als fallback.
 *
 * Let op: we kunnen in de frontend niet controleren of de file echt bestaat.
 * We geven enkel het pad terug; als er geen bestand is, zie je een broken image.
 * Daarom is het zinvol om voor elke service minstens /assets/logo/<serviceKey>.png te hebben.
 */
function buildHeroImageCandidates(
  heroKey: string | undefined,
  regionLabel: string
): string[] {
  const regionSlug = slugify(regionLabel);
  const base = heroKey ? slugify(heroKey) : "";

  if (!base) return [];

  return [
    `/assets/logo/${base}-${regionSlug}.png`,
    `/assets/logo/${base}.png`,
  ];
}

export function DienstPageLayout(props: DienstPageProps) {
  const {
    brand,
    regionLabel,
    serviceName,
    h1,
    intro,
    sections,
    cta,
    serviceKey,
    heroImageKey,
  } = props;

  // Bepaal basis-key voor hero-afbeelding
  const baseKey = heroImageKey || serviceKey || slugify(serviceName);
  const heroCandidates = buildHeroImageCandidates(baseKey, regionLabel);
  const heroImage = heroCandidates[0] || null; // we gebruiken het eerste pad als src

  return (
    <>
      {/* HERO – gebaseerd op /diensten/ontstoppingen */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
              {brand} – {regionLabel}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              {h1}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              {intro}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white text-sm shadow-sm transition hover:opacity-90"
              >
                Vraag ontstopping aan →
              </Link>
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                Bel 24/7: 0485 03 18 77
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              We plannen intern en bevestigen je tijdsvenster via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            {heroImage ? (
              <img
                src={heroImage}
                alt={`${serviceName} – ${regionLabel}`}
                className="max-h-64 w-auto object-contain drop-shadow-lg"
              />
            ) : (
              // Fallback identiek aan de basis-ontstoppingspagina
              <HeroLogo variant="ontstopping" />
            )}
          </div>
        </div>
      </section>

      {/* INHOUD – AI-secties */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        {sections.map((sec, idx) => (
          <section key={idx} className="mb-10 last:mb-0">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              {sec.heading}
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {sec.body}
            </p>
          </section>
        ))}

        {/* CTA onderaan – identiek aan /diensten/ontstoppingen */}
        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Direct hulp nodig bij een verstopping?
          </h2>
          <p className="mb-5 text-slate-700">
            Beschrijf kort het probleem en voeg indien mogelijk een foto toe. Ik koppel snel terug
            met een concreet tijdsblok, ook na de kantooruren.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Vraag ontstopping aan →
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
