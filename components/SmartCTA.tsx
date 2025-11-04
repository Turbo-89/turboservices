// components/SmartCTA.tsx
'use client';

import { useEffect, useState } from 'react';

type CTAData = {
  title: string;
  body: string;
  buttonLabel: string;
};

export default function SmartCTA() {
  const [cta, setCta] = useState<CTAData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCTA() {
      try {
        const pageContext =
          typeof window !== 'undefined' ? window.location.pathname : '/';
        const res = await fetch('/api/cta-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageContext }),
        });
        const data = await res.json();
        if (data && data.title) {
          setCta(data as CTAData);
        } else {
          setCta({
            title: 'Vraag je interventie aan',
            body:
              'Beschrijf kort je probleem en we bekijken binnen 24 uur hoe we dit het snelst kunnen oplossen.',
            buttonLabel: 'Aanvraag binnen 24u',
          });
        }
      } catch {
        setCta({
          title: 'Vraag je interventie aan',
          body:
            'Beschrijf kort je probleem en we bekijken binnen 24 uur hoe we dit het snelst kunnen oplossen.',
          buttonLabel: 'Aanvraag binnen 24u',
        });
      } finally {
        setLoading(false);
      }
    }

    loadCTA();
  }, []);

  if (loading || !cta) return null;

  return (
    <section className="mt-10">
      <div className="rounded-2xl border bg-slate-50 px-5 py-6 md:px-8 md:py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            {cta.title}
          </h2>
          <p className="mt-1 text-sm md:text-base text-slate-700">{cta.body}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <a
            href="/boeken"
            className="inline-flex justify-center rounded-lg bg-[var(--turbo-red,#E34D35)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            {cta.buttonLabel}
          </a>
          <a
            href="tel:+32485031877"
            className="inline-flex justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Bel 24/7
          </a>
        </div>
      </div>
    </section>
  );
}
