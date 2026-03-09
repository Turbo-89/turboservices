import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Gerichte rioolherstellingen | Turbo Services",
  description:
    "Gerichte rioolherstellingen bij lokale breuken, verzakkingen en structurele schade aan afvoer of riolering. Turbo Services werkt in heel Vlaanderen met diagnose, beperkte breekwerken en duidelijke opvolging.",
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

export default function GerichteRioolherstellingenPage() {
  const canonicalUrl =
    "https://www.turboservices.be/diensten/gerichte-rioolherstellingen";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    {
      name: "Gerichte rioolherstellingen",
      url: "/diensten/gerichte-rioolherstellingen",
    },
  ];

  const faqItems = [
    {
      question: "Wat zijn gerichte rioolherstellingen precies?",
      answer:
        "Gerichte rioolherstellingen zijn lokale herstellingen aan een beschadigde of verzakte zone van de riolering, zonder meteen het volledige traject te vervangen.",
    },
    {
      question: "Hoe bepalen jullie waar de schade zit?",
      answer:
        "Met camera-inspectie en gerichte diagnose wordt de probleemzone exact gelokaliseerd. Zo beperken we breekwerk, tijdverlies en onnodige kosten.",
    },
    {
      question: "Is dit een alternatief voor volledige renovatie?",
      answer:
        "Ja, in veel situaties is een gerichte herstelling een efficiÃ«nte oplossing om het probleem structureel aan te pakken zonder meteen een volledige renovatie uit te voeren.",
    },
    {
      question: "Kunnen jullie ook advies geven voor latere totaalrenovatie?",
      answer:
        "Ja. Indien nodig geven we duidelijk advies over verdere stappen, gefaseerde vernieuwing of een latere totaalrenovatie van het traject.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      <ServiceJsonLd
        serviceName="Gerichte rioolherstellingen"
        regionLabel="Vlaanderen"
        municipalities={regionLinks.map(labelFromSlug)}
        url={canonicalUrl}
      />

      <FAQJsonLd items={faqItems} />

      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Gerichte rioolherstellingen
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Lokale breuk, verzakking of terugkerend probleem in de riolering?
              Turbo Services voert gerichte rioolherstellingen uit met voorafgaande
              diagnose, beperkte openbreking en een duidelijke aanpak op maat.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Gerichte aanpak:</strong> herstellen waar het probleem zit
              </li>
              <li>
                <strong>Minder breekwerk:</strong> geen onnodige totaalvervanging
              </li>
              <li>
                <strong>Diagnose vooraf:</strong> camera-inspectie en lokalisatie
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
                Vraag herstelling aan â†’
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Afspraak en tijdsvenster worden bevestigd via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="herstelling" />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Wanneer is een gerichte rioolherstelling zinvol?
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Lokale breuk of verzakking in de leiding</li>
              <li>Terugkerende verstopping op exact dezelfde plaats</li>
              <li>Instorting of schade ter hoogte van een bocht of aansluiting</li>
              <li>Probleemzone die duidelijk gelokaliseerd werd via camera-inspectie</li>
              <li>Situaties waar een volledige renovatie niet meteen nodig of haalbaar is</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Werkwijze
            </h3>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Diagnose via camera-inspectie en lokalisatie</li>
              <li>Probleemzone bovengronds aftekenen</li>
              <li>Gericht openmaken van de betrokken zone</li>
              <li>Herstelling of vervanging van het beschadigde deel</li>
              <li>Testen, nacontrole en advies voor verdere opvolging</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Praktische aanpak
            </h2>

            <p className="mt-4 text-slate-700">
              Turbo Services focust op gerichte oplossingen in plaats van meteen
              alles open te breken of volledig te vervangen. Dat is vaak efficiÃ«nter,
              sneller uitvoerbaar en budgettair interessanter wanneer het probleem
              lokaal zit.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong>Gerichte diagnose:</strong> eerst exact bepalen waar het fout zit
              </li>
              <li>
                <strong>Beperkte ingreep:</strong> enkel het noodzakelijke deel aanpakken
              </li>
              <li>
                <strong>Duidelijk advies:</strong> ook bij latere renovatie of vervolgstappen
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Voor wie?
            </h3>

            <p className="mt-3 text-slate-700">
              Deze dienst is geschikt voor particuliere woningen, verhuurpanden,
              syndici, aannemers en andere situaties waar een lokale herstelling
              nodig is zonder onnodige totaalvernieuwing.
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
            Turbo Services voert gerichte rioolherstellingen uit in heel Vlaanderen.
            Deze dienst is bedoeld voor lokale schade, verzakkingen en structurele
            probleemzones die gericht aangepakt kunnen worden zonder meteen het
            volledige traject te vernieuwen. Dankzij diagnose vooraf en beperkte
            openbreking blijft de aanpak technisch gericht en budgettair beheersbaar.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Gerichte rioolherstellingen per regio
          </h2>

          <p className="mt-3 max-w-3xl text-slate-700">
            Bekijk de regiopagina die het best aansluit bij jouw locatie. Zo vind
            je meteen de juiste informatie per werkgebied.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regionLinks.map((slug) => (
              <Link
                key={slug}
                href={`/diensten/gerichte-rioolherstellingen/${slug}`}
                className="rounded-xl border px-4 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                Gerichte rioolherstellingen in {labelFromSlug(slug)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Gerichte herstelling nodig?
          </h2>

          <p className="mb-5 text-slate-700">
            Beschrijf kort het probleem en de locatie. Je krijgt snel duidelijkheid
            over de meest logische aanpak, met gerichte diagnose en verdere opvolging.
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
              Vraag herstelling aan â†’
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


