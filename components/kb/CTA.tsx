"use client";

import Link from "next/link";

export default function CTA({
  title = "Hulp nodig bij een verstopping?",
  subtitle = "24/7 bereikbaar in Antwerpen en omstreken. Transparante prijzen vóór we starten.",
  primaryHref = "/aanvraag",
  primaryLabel = "Direct interventie aanvragen",
  secondaryHref = "/contact",
  secondaryLabel = "Bel ons 24/7",
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <aside className="mt-10 rounded-2xl border bg-slate-50 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{subtitle}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-white"
        >
          {secondaryLabel}
        </Link>
      </div>
    </aside>
  );
}
