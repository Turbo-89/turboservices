// components/diensten/DienstPage.tsx

import type { ReactNode } from "react";

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
  heroImageSrc?: string; // pad naar hero-afbeelding, bv. "/heroes/ontstoppingen-antwerpen.png"
  extraHero?: ReactNode; // optioneel, voor variaties/overlays
};

/**
 * Centrale layout voor alle dienstenpagina's.
 * Pas deze component éénmaal aan zodat hij 1:1 lijkt op je bestaande hero + layout.
 */
export function DienstPageLayout(props: DienstPageProps) {
  const {
    brand,
    regionLabel,
    serviceName,
    h1,
    intro,
    sections,
    cta,
    heroImageSrc,
    extraHero,
  } = props;

  return (
    <>
      {/* HERO – pas deze structuur aan naar je bestaande pagina's */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8">
          {/* Tekstkolom */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
              {brand} – {regionLabel}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              {h1}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl">
              {intro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {/* Pas de CTA-link aan naar je eigen flow/route */}
              <a
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition"
              >
                Bel of boek nu – {regionLabel}
              </a>
              <span className="text-sm text-slate-500">
                {cta}
              </span>
            </div>
          </div>

          {/* Afbeeldingskolom (logo-mannetje / mascotte / AI-hero) */}
          {(heroImageSrc || extraHero) && (
            <div className="flex-1 flex justify-center items-center relative">
              {heroImageSrc && (
                // Je kunt dit vervangen door <Image> van next/image als je dat al gebruikt
                <img
                  src={heroImageSrc}
                  alt={`${serviceName} – ${regionLabel}`}
                  className="max-h-64 w-auto object-contain drop-shadow-lg"
                />
              )}
              {extraHero}
            </div>
          )}
        </div>
      </section>

      {/* CONTENT – structuur/classes afstemmen op je bestaande layout */}
      <main className="bg-white">
        {sections.map((sec, idx) => (
          <section key={idx} className="py-8 border-b">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                {sec.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {sec.body}
              </p>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
