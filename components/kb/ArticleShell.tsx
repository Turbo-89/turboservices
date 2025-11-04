// components/kb/ArticleShell.tsx
'use client';

import type { ReactNode } from "react";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

type ArticleShellProps = {
  title: string;
  subtitle?: string;
  intro: string;
  logoVariant?: "default" | "ontstopping" | "camera" | "herstelling" | "prijzen" | "overmij";
  children: ReactNode;
};

export default function ArticleShell({
  title,
  subtitle,
  intro,
  logoVariant = "ontstopping",
  children,
}: ArticleShellProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              {title}
              {subtitle && (
                <span className="block mt-1">
                  {subtitle}
                </span>
              )}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              {intro}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm text-white shadow-sm transition hover:opacity-90"
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
              Bij blijvende verstopping, terugkerend water of geurhinder is een interventie meestal de veiligste keuze.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant={logoVariant} />
          </div>
        </div>
      </section>

      {/* ARTIKEL-INHOUD + ONDERSTE CTA */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-slate max-w-none">
          {children}
        </article>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Hulp nodig bij een concreet probleem?
          </h2>
          <p className="mb-5 text-slate-700">
            Als de tips uit het artikel het probleem niet oplossen, is er vaak een dieperliggend rioolprobleem.
            Beschrijf kort de situatie en voeg indien mogelijk een foto toe bij je aanvraag.
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
      </main>
    </>
  );
}
