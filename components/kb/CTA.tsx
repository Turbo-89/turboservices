"use client";

import Link from "next/link";

export default function CTA({
  title = "Hulp nodig?",
  subtitle = "Neem direct contact op met Turbo Services.",
  primaryHref = "/boeken",
  primaryLabel = "Direct interventie aanvragen",
  phone = "+32485031877",
  whatsapp = "+32485031877",
  showWhatsapp = true,
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  phone?: string;         // internationale vorm zonder spaties
  whatsapp?: string;      // internationale vorm zonder spaties
  showWhatsapp?: boolean;
}) {
  const waHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  return (
    <aside className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {/* Bel-knop */}
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-800 hover:bg-slate-50"
        >
          Bel ons 24/7
        </a>

        {/* WhatsApp (optioneel) */}
        {showWhatsapp && (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600"
          >
            WhatsApp
          </a>
        )}

        {/* Boeken */}
        <Link
          href={primaryHref}
          className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800"
        >
          {primaryLabel}
        </Link>
      </div>
    </aside>
  );
}
