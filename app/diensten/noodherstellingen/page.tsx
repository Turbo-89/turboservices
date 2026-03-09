import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Noodherstellingen bij lekken en rioolschade | Turbo Services",
  description: "Noodherstellingen aan afvoer en riolering, inclusief lekken, verzakkingen en acute schade. Snelle interventie bij dringende problemen.",
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

export default function NoodherstellingenPage() {
  const canonicalUrl = "https://www.turboservices.be/diensten/noodherstellingen";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: "Noodherstellingen", url: "/diensten/noodherstellingen" },
  ];

  const faqItems = [
    {
      question: "Wat valt onder noodherstellingen?",
      answer:
        "Dringende herstellingen aan afvoer, riolering of aansluitingen wanneer verdere schade, wateroverlast of uitval dreigt.",
    },
    {
      question: "Kan een noodherstelling ook buiten de kantooruren?",
      answer:
        "Ja. Turbo Services werkt ook â€™s avonds en in het weekend. Na 22u geldt een supplement van +50%.",
    },
    {
      question: "Is eerst diagnose nodig?",
      answer:
        "Bij sommige situaties wel. Wanneer de oorzaak niet onmiddellijk zichtbaar is, kan bijkomende inspectie nodig zijn om gericht te herstellen.",
    },
    {
      question: "Wordt alles meteen definitief hersteld?",
      answer:
        "Dat hangt af van de aard van de schade. Soms gebeurt eerst een veilige noodoplossing, gevolgd door een definitieve herstelling.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      <ServiceJsonLd
        serviceName="Noodherstellingen"
        regionLabel="Vlaanderen"
        municipalities={regionLinks.map(labelFromSlug)}
        url={canonicalUrl}
      />

      <FAQJsonLd items={faqItems} />

      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Noodherstellingen bij lekken en rioolschade
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Lekkende of beschadigde leidingen vereisen snelle en gerichte actie.
              Turbo Services voert noodherstellingen uit om verdere schade te beperken
              en geeft duidelijk advies over wat tijdelijk is en wat definitief moet
              worden opgelost.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Rechtstreeks contact</strong> met de uitvoerder
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
                Vraag noodherstelling aan â†’
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Bij acute situaties zoals actief lek of overstroming is bellen de snelste optie.
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
              Voor welke situaties?
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Lekkende of gesprongen leidingen die bereikbaar zijn</li>
              <li>Breuken of verzakkingen vastgesteld via camera-inspectie</li>
              <li>Rioolproblemen die onmiddellijk schade of overlast veroorzaken</li>
              <li>Tijdelijke oplossingen in afwachting van structurele werken</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Werkwijze
            </h3>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Snelle inschatting van de urgentie</li>
              <li>Indien nodig eerst diagnose via ontstopping en/of camera-inspectie</li>
              <li>Uitvoeren van een noodherstelling binnen technisch veilige grenzen</li>
              <li>Duidelijke uitleg over tijdelijke en definitieve aanpak</li>
              <li>Advies over verdere stappen</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Prijzen
            </h2>

            <p className="mt-4 text-slate-700">
              Noodherstellingen gebeuren binnen een transparante prijsstructuur:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong>Standaard interventiekost:</strong> â‚¬160
              </li>
              <li>
                <strong>Camera-inspectie supplement:</strong> â‚¬90
              </li>
              <li>
                <strong>Bij combinatie geldt:</strong> â‚¬160 interventiekost + â‚¬90 camera-inspectie
              </li>
            </ul>

            <p className="mt-3 text-slate-700">
              Bedragen zijn <strong>exclusief btw</strong>. Bijkomende herstellingen of structurele werken worden altijd vooraf besproken en afzonderlijk geoffreerd.
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
            Turbo Services voert noodherstellingen uit in heel Vlaanderen. Bij lekken, breuken of acute schade is snelle tussenkomst belangrijk om verdere schade en overlast te beperken. De basisinterventie bedraagt â‚¬160 exclusief btw, met camera-inspectie als supplement van â‚¬90 indien nodig.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Noodherstellingen per regio
          </h2>

          <p className="mt-3 max-w-3xl text-slate-700">
            Bekijk de regiopagina die het best aansluit bij jouw locatie.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regionLinks.map((slug) => (
              <Link
                key={slug}
                href={`/diensten/noodherstellingen/${slug}`}
                className="rounded-xl border px-4 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                Noodherstellingen in {labelFromSlug(slug)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Risico op schade door lek of breuk?
          </h2>

          <p className="mb-5 text-slate-700">
            Geef kort door wat je vaststelt en hoe dringend de situatie is. Zo kan de ernst correct ingeschat worden en kan snel teruggekoppeld worden met een passende aanpak.
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
              Vraag noodherstelling aan â†’
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


