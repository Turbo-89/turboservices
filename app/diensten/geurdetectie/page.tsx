import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title: "Geurdetectie | Turbo Services – RioolExpert",
  description:
    "Rioolgeur opsporen en oorzaken exact lokaliseren (badkamer, toilet, keuken). Avond, weekend en feestdagen aan hetzelfde tarief. Actief binnen 20 km rond Boom.",
};

export default function GeurdetectiePage() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Geurdetectie (rioolgeur opsporen)",
    provider: {
      "@type": "LocalBusiness",
      name: "Turbo Services",
      url: "https://www.turboservices.be",
      telephone: "+32485031877",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", address: "Boom, België" },
        geoRadius: "20000",
      },
    },
    serviceType: "Geurdetectie / rioolgeur opsporen",
    areaServed: "Binnen 20 km rond Boom",
    availableChannel: [
      {
        "@type": "ServiceChannel",
        servicePhone: { "@type": "ContactPoint", telephone: "+32485031877" },
      },
    ],
  };

  return (
    <>
      <Script id="ldjson-geurdetectie" type="application/ld+json">
        {JSON.stringify(ldJson)}
      </Script>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Geurdetectie bij rioolgeur – oorzaak exact gelokaliseerd
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Hardnekkige rioolgeur in badkamer, toilet of keuken zonder zichtbare oorzaak? Ik spoor het probleem
              gericht op, met een technisch onderzoek en duidelijke uitleg over de oplossing.
            </p>

            {/* USP BLOK (boven de fold) */}
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief als overdag
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Rechtstreeks contact</strong> met de uitvoerder (geen callcenter)
              </li>
              <li>
                <strong>Actief binnen 20 km</strong> rond Boom
              </li>
            </ul>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white text-sm shadow-sm transition hover:opacity-90"
              >
                Vraag geurdetectie aan →
              </Link>

              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
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
              Je bereikt mij rechtstreeks. Ik bevestig een tijdsvenster via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="default" />
          </div>
        </div>
      </section>

      {/* INHOUD */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Wanneer is geurdetectie nodig?</h2>
            <p className="mt-4 text-slate-700">
              Geurdetectie is aangewezen wanneer u terugkerende rioolgeur ervaart, maar de oorzaak niet zichtbaar is
              of eerdere ingrepen geen blijvend resultaat gaven.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Rioolgeur in badkamer, toilet, keuken of berging</li>
              <li>Geur die komt en gaat (bv. bij gebruik van water of bij drukverschillen)</li>
              <li>Geen duidelijke verstopping, maar toch geurhinder</li>
              <li>Terugkerende geur na eerdere ontstopping</li>
              <li>Geur vooral merkbaar bij gesloten ramen of in de winter</li>
            </ul>

            <p className="mt-6 text-slate-700">
              Doel is: <strong>de oorzaak lokaliseren</strong>, zodat herstelling gericht kan gebeuren en u geen
              onnodige breekwerken uitvoert.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Hoe verloopt geur opsporen?</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
              <li>
                <strong>Analyse ter plaatse:</strong> waar en wanneer de geur optreedt, en welke punten verdacht zijn.
              </li>
              <li>
                <strong>Gerichte detectie:</strong> afhankelijk van de situatie (bv. rooktest/druktest of controle van
                aansluitingen en sifons).
              </li>
              <li>
                <strong>Lokalisatie:</strong> zo nauwkeurig mogelijk bepalen waar het probleem zit.
              </li>
              <li>
                <strong>Uitleg & advies:</strong> duidelijke toelichting en voorstel voor de juiste oplossing.
              </li>
            </ol>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Belangrijk</h3>
              <p className="mt-3 text-slate-700">
                Geurdetectie is <strong>onderzoek</strong>. Herstelwerken (bv. vervangen van delen leiding,
                openbreken, afdichten) gebeuren enkel na overleg.
              </p>
              <p className="mt-3 text-slate-700">
                U krijgt altijd eerst een duidelijke uitleg van de vaststellingen en de opties.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Rioolgeur laten opsporen</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Actief binnen 20 km rond Boom. Avond, weekend en feestdagen aan hetzelfde tarief als overdag.
            <strong> Na 22u geldt +50% supplement.</strong>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white text-sm shadow-sm transition hover:opacity-90"
            >
              Bel: 0485 03 18 77
            </a>

            <Link
              href="/boeken"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Vraag geurdetectie aan →
            </Link>

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
