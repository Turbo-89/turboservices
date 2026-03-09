import type { Metadata } from "next";
import Link from "next/link";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Geurdetectie bij rioolgeur | Turbo Services",
  description:
    "Professionele geurdetectie bij rioolgeur zonder zichtbare oorzaak. Turbo Services lokaliseert geurproblemen gericht en werkt in heel Vlaanderen.",
};

const regionLinks = [
  "antwerpen-noordrand",
  "antwerpen-stad",
  "antwerpen-zuidrand",
  "brussel-centrum",
  "brussel-noord",
  "brussel-zuid",
  "denderstreek",
  "druivenstreek",
  "durmestreek-lokeren",
  "hageland",
  "kempen-noord",
  "kempen-zuid",
  "klein-brabant",
  "leuven-dijleland",
  "lier-neteland",
  "mechelen-rivierenland",
  "noordrand-brussel",
  "pajottenland",
  "ruppelstreek",
  "scheldeland",
  "sint-niklaas-regio",
  "temse-omgeving",
  "waasland",
] as const;

function labelFromSlug(slug: string) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export default function GeurdetectiePage() {
  const canonicalUrl = "https://www.turboservices.be/diensten/geurdetectie";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: "Geurdetectie", url: "/diensten/geurdetectie" },
  ];

  const faqItems = [
    {
      question: "Waar komt rioolgeur meestal vandaan?",
      answer:
        "Vaak ligt de oorzaak bij defecte sifons, losse aansluitingen, lekkende afvoerverbindingen, gebrekkige ontluchting of verborgen schade in het rioleringssysteem.",
    },
    {
      question: "Is geurdetectie hetzelfde als ontstopping?",
      answer:
        "Nee. Een verstopping kan geur veroorzaken, maar geurdetectie focust op het achterhalen van de exacte bron van de stank.",
    },
    {
      question: "Moet er altijd gebroken worden?",
      answer:
        "Nee. Het doel is juist om eerst gericht te lokaliseren waar het probleem zit, zodat onnodig breekwerk vermeden wordt.",
    },
    {
      question: "Kan geurdetectie gecombineerd worden met andere diagnose?",
      answer:
        "Ja. Afhankelijk van de situatie kan geurdetectie gecombineerd worden met camera-inspectie of andere gerichte controles.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      <ServiceJsonLd
        serviceName="Geurdetectie"
        regionLabel="Vlaanderen"
        municipalities={regionLinks.map(labelFromSlug)}
        url={canonicalUrl}
      />

      <FAQJsonLd items={faqItems} />

      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Geurdetectie bij rioolgeur
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Hardnekkige rioolgeur in badkamer, toilet, keuken of technische
              ruimte zonder duidelijke oorzaak? Turbo Services spoort de bron
              van geurproblemen gericht op en legt duidelijk uit welke oplossing
              technisch het meest logisch is.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Gerichte analyse:</strong> eerst lokaliseren, dan pas
                beslissen
              </li>
              <li>
                <strong>Actief in:</strong> heel Vlaanderen
              </li>
            </ul>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Bel direct: 0485 03 18 77
              </a>

              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                Vraag geurdetectie aan →
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Je krijgt eerst duidelijke uitleg over de vaststellingen en de
              meest gerichte vervolgstap.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/base/rookdetectie.png"
              alt="Geurdetectie bij rioolgeur"
              className="h-auto w-64 opacity-90 md:w-80"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2)">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Wanneer is geurdetectie nodig?
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Rioolgeur in badkamer, toilet, keuken of berging</li>
              <li>Geur die terugkomt zonder zichtbare verstopping</li>
              <li>Geurhinder die vooral optreedt bij watergebruik</li>
              <li>Terugkerende geur na eerdere ontstopping of herstelling</li>
              <li>Twijfel tussen meerdere mogelijke oorzaken</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Werkwijze
            </h3>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Analyse van waar en wanneer de geur optreedt</li>
              <li>Controle van sifons, aansluitingen en ontluchting</li>
              <li>Gerichte lokalisatie van het probleem</li>
              <li>Uitleg over oorzaak, risico en mogelijke oplossing</li>
              <li>Advies over herstelling of verdere opvolging</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Belangrijk om te weten
            </h2>

            <p className="mt-4 text-slate-700">
              Geurdetectie is in de eerste plaats een gerichte diagnose. Het
              doel is om eerst exact te begrijpen waar de geurhinder vandaan
              komt, zodat onnodig breekwerk of foutieve ingrepen vermeden worden.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong>Geen blind breekwerk:</strong> eerst lokaliseren
              </li>
              <li>
                <strong>Gerichte beslissing:</strong> pas daarna bepalen welke
                oplossing nodig is
              </li>
              <li>
                <strong>Combinatie mogelijk:</strong> indien nodig samen met
                camera-inspectie of bijkomende controle
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Voor wie?
            </h3>

            <p className="mt-3 text-slate-700">
              Deze dienst is geschikt voor woningen, appartementen, verhuurpanden,
              technische ruimtes en andere situaties waar hardnekkige rioolgeur
              de oorzaak van het probleem niet meteen zichtbaar maakt.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Veelgestelde vragen
          </h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-xl bg-white p-5 ring-1 ring-slate-200"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-2 text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Samenvatting
          </h2>

          <p className="text-slate-700">
            Turbo Services voert geurdetectie uit in heel Vlaanderen. Deze
            dienst is bedoeld om de exacte oorzaak van rioolgeur gericht te
            lokaliseren zonder onnodig breekwerk. Daardoor kan nadien correct
            beslist worden welke herstelling, aanpassing of bijkomende diagnose
            technisch nodig is.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Geurdetectie per regio
          </h2>

          <p className="mt-3 max-w-3xl text-slate-700">
            Bekijk de regiopagina die het best aansluit bij jouw locatie.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regionLinks.map((slug) => (
              <Link
                key={slug}
                href={`/diensten/geurdetectie/${slug}`}
                className="rounded-xl border px-4 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                Geurdetectie in {labelFromSlug(slug)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Rioolgeur laten opsporen?
          </h2>

          <p className="mb-5 text-slate-700">
            Beschrijf kort waar en wanneer de geur optreedt. Je krijgt snel
            duidelijkheid over de meest logische aanpak en mogelijke vervolgstappen.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Bel direct: 0485 03 18 77
            </a>

            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Vraag geurdetectie aan →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


