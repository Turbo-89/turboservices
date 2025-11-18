"use client";

import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { buildHeroImageCandidates, HeroLogo } from "@/lib/hero";

export type DienstSection = {
  title: string;
  body: string;
};

export type DienstPageProps = {
  brand: string;
  serviceName: string;
  regionLabel: string;
  heroTitle?: string;
  intro: string;
  sections: DienstSection[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  serviceKey?: string;
  heroImageKey?: string;
};

function DienstPageLayout(props: DienstPageProps) {
  const {
    brand,
    regionLabel,
    serviceName,
    heroTitle,
    intro,
    sections,
    ctaTitle,
    ctaBody,
    ctaButton,
    serviceKey,
    heroImageKey,
  } = props;

  const baseKey = heroImageKey || serviceKey || slugify(serviceName);
  const heroCandidates = buildHeroImageCandidates(baseKey, regionLabel);
  const heroImage = heroCandidates[0] ?? null;

  return (
    <>
      {/* HERO-sectie */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
              {brand} – {regionLabel}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              {heroTitle || serviceName}
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
              <HeroLogo variant="ontstopping" />
            )}
          </div>
        </div>
      </section>

      {/* INHOUD – dynamische secties */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        {sections.map((sec, idx) => (
          <section key={idx} className="mb-10 last:mb-0">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              {sec.title}
            </h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {sec.body}
            </p>
          </section>
        ))}

        {/* CTA onderaan */}
        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            {ctaTitle}
          </h2>
          <p className="mb-5 text-slate-700">
            {ctaBody}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              {ctaButton}
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

// ENKEL default export
export default DienstPageLayout;
