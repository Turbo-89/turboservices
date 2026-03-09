import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Camera-inspectie riolering en leidingen | Turbo Services",
  description:
    "Camera-inspectie van riolering en afvoerleidingen om breuken, verzakkingen, wortelgroei en hardnekkige verstoppingen exact in beeld te brengen. Turbo Services is actief in heel Vlaanderen.",
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

export default function CameraInspectiePage() {
  const canonicalUrl = "https://www.turboservices.be/diensten/camera-inspectie";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: "Camera-inspectie", url: "/diensten/camera-inspectie" },
  ];

  const faqItems = [
    {
      question: "Wat kost een camera-inspectie?",
      answer:
        "De standaard interventiekost bedraagt â‚¬160 exclusief btw. Camera-inspectie is een supplement van â‚¬90 exclusief btw.",
    },
    {
      question: "Wanneer is camera-inspectie nodig?",
      answer:
        "Camera-inspectie is nuttig bij terugkerende verstoppingen, vermoeden van breuk of verzakking, geurhinder of wanneer de exacte oorzaak van het probleem niet zichtbaar is.",
    },
    {
      question: "Kan ik beelden of een verslag krijgen?",
      answer:
        "Ja. De vaststellingen kunnen gebruikt worden voor verdere bespreking met aannemer, syndicus of verzekering, afhankelijk van de situatie.",
    },
    {
      question: "Moet een leiding eerst vrijgemaakt worden?",
      answer:
        "In veel gevallen wel. Wanneer de leiding door vuil of blokkage niet toegankelijk is, moet ze eerst vrijgemaakt worden voor een correcte inspectie.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      <ServiceJsonLd
        serviceName="Camera-inspectie"
        regionLabel="Vlaanderen"
        municipalities={regionLinks.map(labelFromSlug)}
        url={canonicalUrl}
      />

      <FAQJsonLd items={faqItems} />

      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Camera-inspectie van riolering en leidingen
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Met camera-inspectie zie je exact wat er in je leidingen gebeurt:
              breuken, verzakkingen, wortelgroei of hardnekkige verstoppingen.
              Ideaal bij terugkerende problemen of twijfel over de oorzaak.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Beelden en verslag</strong> mogelijk voor verzekering of aannemer
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
                Bel 24/7: 0485 03 18 77
              </a>

              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Plan camera-inspectie â†’
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Avond, weekend en feestdagen aan hetzelfde tarief. Na 22u geldt een supplement van +50%. Afspraakbevestiging via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="camera" />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Wanneer is camera-inspectie zinvol?
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Terugkerende verstoppingen op dezelfde plaats</li>
              <li>Vermoeden van breuk, verzakking of wortelgroei</li>
              <li>Rioolgeur of water dat blijft staan zonder zichtbare oorzaak</li>
              <li>Vochtproblemen langs leidingen of muren</li>
              <li>Discussie met aannemer, syndicus of verzekering</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Werkwijze
            </h3>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Indien nodig wordt de leiding eerst vrijgemaakt</li>
              <li>De camera wordt systematisch ingebracht</li>
              <li>Probleemzones worden duidelijk vastgelegd</li>
              <li>Je krijgt heldere uitleg over oorzaak en impact</li>
              <li>Beelden of verslag kunnen gebruikt worden in verder dossier</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Prijzen</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
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
              Bedragen zijn <strong>exclusief btw</strong>. Avond, weekend en feestdagen zonder toeslag. <strong>Na 22u geldt +50%.</strong>
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
            Turbo Services voert camera-inspecties uit in heel Vlaanderen. De standaard interventiekost bedraagt â‚¬160. Camera-inspectie wordt toegevoegd als supplement van â‚¬90. Deze aanpak is vooral zinvol bij terugkerende problemen, geurhinder of wanneer de exacte oorzaak van schade of verstopping niet zichtbaar is.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Camera-inspectie per regio
          </h2>

          <p className="mt-3 max-w-3xl text-slate-700">
            Bekijk de regiopagina die het best aansluit bij jouw locatie.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regionLinks.map((slug) => (
              <Link
                key={slug}
                href={`/diensten/camera-inspectie/${slug}`}
                className="rounded-xl border px-4 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                Camera-inspectie in {labelFromSlug(slug)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Camera-inspectie nodig?
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Bel 24/7: 0485 03 18 77
            </a>

            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Plan camera-inspectie â†’
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

