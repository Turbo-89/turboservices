import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Geurdetectie bij rioolgeur | Groot Antwerpen, Rupelstreek & Rivierenland | Turbo Services",
  description:
    "Rioolgeur zonder zichtbare oorzaak? Professionele geurdetectie met exacte lokalisatie. Avond, weekend en feestdagen aan hetzelfde tarief. Actief in Groot Antwerpen, Rupelstreek en Rivierenland.",
};

export default function GeurdetectiePage() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Geurdetectie bij rioolgeur",
    serviceType: "Geurdetectie / rioolgeur opsporen",
    provider: {
      "@type": "LocalBusiness",
      name: "Turbo Services",
      url: "https://www.turboservices.be",
      telephone: "+32485031877",
      areaServed: [
        "Groot Antwerpen",
        "Rupelstreek",
        "Rivierenland",
      ],
    },
    areaServed: [
      "Groot Antwerpen",
      "Rupelstreek",
      "Rivierenland",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+32485031877",
      },
    },
  };

  return (
    <>
      <Script id="ldjson-geurdetectie" type="application/ld+json">
        {JSON.stringify(ldJson)}
      </Script>

      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Geurdetectie bij rioolgeur – oorzaak exact gelokaliseerd
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Hardnekkige rioolgeur in badkamer, toilet of keuken zonder zichtbare oorzaak?
              Ik spoor het probleem gericht op en leg duidelijk uit wat nodig is om dit
              definitief op te lossen.
            </p>

            {/* USP BLOK */}
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Rechtstreeks contact</strong> met de uitvoerder (geen callcenter)
              </li>
              <li>
                <strong>Actief in:</strong> Groot Antwerpen – Rupelstreek – Rivierenland
              </li>
            </ul>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm text-white shadow-sm transition hover:opacity-90"
              >
                Bel: 0485 03 18 77
              </a>

              <a
                href="https://wa.me/32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Je spreekt rechtstreeks met de uitvoerder. Afspraak wordt bevestigd via sms of WhatsApp.
            </p>
          </div>

          {/* ICON */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/base/rookdetectie.png"
              alt="Geurdetectie en rookdetectie bij rioolgeur"
              className="w-40 h-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* INHOUD */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Wanneer is geurdetectie nodig?
            </h2>

            <p className="mt-4 text-slate-700">
              Geurdetectie is aangewezen wanneer u terugkerende rioolgeur ervaart,
              maar de oorzaak niet zichtbaar is of eerdere ingrepen geen blijvend
              resultaat gaven.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Rioolgeur in badkamer, toilet, keuken of berging</li>
              <li>Geur die komt en gaat, vaak bij watergebruik</li>
              <li>Geen duidelijke verstopping, maar wel geurhinder</li>
              <li>Terugkerende geur na eerdere ontstopping</li>
              <li>Geur vooral merkbaar in de winter of bij gesloten ramen</li>
            </ul>

            <p className="mt-6 text-slate-700">
              Het doel is steeds: <strong>de exacte oorzaak lokaliseren</strong>,
              zodat herstelling gericht kan gebeuren zonder onnodige breekwerken.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Hoe verloopt geurdetectie?
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
              <li>
                <strong>Analyse ter plaatse:</strong> vaststellen waar en wanneer
                de geur optreedt.
              </li>
              <li>
                <strong>Gerichte detectie:</strong> via rooktest, druktest of controle
                van afvoeren en aansluitingen.
              </li>
              <li>
                <strong>Lokalisatie:</strong> het probleem zo nauwkeurig mogelijk bepalen.
              </li>
              <li>
                <strong>Uitleg en advies:</strong> duidelijke toelichting en voorstel
                voor een gerichte oplossing.
              </li>
            </ol>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Belangrijk</h3>
              <p className="mt-3 text-slate-700">
                Geurdetectie is een <strong>onderzoek</strong>. Herstelwerken of
                breekwerken gebeuren enkel na overleg.
              </p>
              <p className="mt-3 text-slate-700">
                Je krijgt steeds eerst een duidelijke uitleg van de vaststellingen
                en mogelijke oplossingen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Rioolgeur laten opsporen
          </h2>

          <p className="mt-3 max-w-3xl text-slate-700">
            Actief in Groot Antwerpen, Rupelstreek en Rivierenland.  
            Avond, weekend en feestdagen aan hetzelfde tarief.  
            <strong> Na 22u geldt een supplement van +50%.</strong>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm text-white shadow-sm transition hover:opacity-90"
            >
              Bel: 0485 03 18 77
            </a>

            <a
              href="https://wa.me/32485031877"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm text-slate-700 hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
