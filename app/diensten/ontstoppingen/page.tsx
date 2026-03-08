import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Ontstoppingen wc, afvoer & riolering | Turbo Services",
  description:
    "Professionele ontstoppingen van wc, lavabo, douche, afvoer en riolering. Turbo Services is actief in heel Vlaanderen, met aparte regiopagina’s per dienst.",
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

export default function OntstoppingenPage() {
  const canonicalUrl = "https://www.turboservices.be/diensten/ontstoppingen";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: "Ontstoppingen", url: "/diensten/ontstoppingen" },
  ];

  const faqItems = [
    {
      question: "Wat kost een ontstopping?",
      answer:
        "De standaard interventiekost bedraagt €160 exclusief btw. Camera-inspectie kan toegevoegd worden als supplement van €90.",
    },
    {
      question: "Hoe snel kan een ontstopping uitgevoerd worden?",
      answer:
        "In veel gevallen kan een interventie snel ingepland worden. Turbo Services werkt ook ’s avonds en in het weekend.",
    },
    {
      question: "Wanneer is camera-inspectie nodig?",
      answer:
        "Bij terugkerende verstoppingen of wanneer de oorzaak niet duidelijk zichtbaar is kan camera-inspectie nodig zijn.",
    },
    {
      question: "Kan een verstopping terugkomen?",
      answer:
        "Wanneer er structurele oorzaken zijn zoals vetophoping, verzakking of schade aan de leiding kan een probleem terugkeren zonder bijkomende diagnose.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      <ServiceJsonLd
        serviceName="Ontstoppingen"
        regionLabel="Vlaanderen"
        municipalities={regionLinks.map(labelFromSlug)}
        url={canonicalUrl}
      />

      <FAQJsonLd items={faqItems} />

      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Ontstoppingen van wc, afvoer en riolering
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Verstopte wc, lavabo, douche of hoofdriolering? Turbo Services
              lost verstoppingen professioneel op met de juiste apparatuur en
              een gerichte diagnose, ook buiten de kantooruren.
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
                Vraag ontstopping aan →
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Afspraak en tijdsvenster worden bevestigd via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="ontstopping" />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Waarmee wij helpen
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Verstopte wc, douche, bad en lavabo</li>
              <li>Keukenafvoeren en vetleidingen</li>
              <li>Hoofdriolering in en rond de woning</li>
              <li>Water dat terugkomt via vloerputjes of kelderafvoeren</li>
              <li>Borrelende geluiden of rioolgeur in huis</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Werkwijze
            </h3>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Korte bevraging van het probleem</li>
              <li>Inspectie van de betrokken afvoeren</li>
              <li>Mechanische ontstopping met professionele machines</li>
              <li>Camera-inspectie indien nodig voor bijkomende diagnose</li>
              <li>Nacontrole en advies om herhaling te vermijden</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Prijzen</h2>

            <p className="mt-4 text-slate-700">
              Turbo Services werkt met een transparante basisstructuur:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong>Standaard interventiekost:</strong> €160
              </li>
              <li>
                <strong>Camera-inspectie supplement:</strong> €90
              </li>
              <li>
                <strong>Bij combinatie geldt:</strong> €160 interventiekost + €90
                camera-inspectie
              </li>
            </ul>

            <p className="mt-3 text-slate-700">
              Bedragen zijn <strong>exclusief btw</strong>. Voor particuliere
              woningen ouder dan 10 jaar geldt doorgaans 6% btw, in andere
              privésituaties 21%. Voor zakelijke klanten kan btw-verlegging
              van toepassing zijn.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Wanneer snel ingrijpen?
            </h3>

            <p className="mt-3 text-slate-700">
              Hoe sneller wordt ingegrepen, hoe kleiner de kans op bijkomende
              schade zoals overstroming of geurhinder. In veel gevallen is een
              snelle interventie goedkoper dan afwachten.
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
            Turbo Services voert ontstoppingen uit in heel Vlaanderen. De
            standaard interventiekost bedraagt €160. Indien nodig kan
            camera-inspectie toegevoegd worden als supplement van €90. Turbo Services voert ontstoppingen ook ’s avonds en in het weekend uit aan hetzelfde tarief als tijdens kantooruren. Daardoor kan een interventie vaak gebeuren zonder dat je verlof moet nemen.
                      </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Ontstoppingen per regio
          </h2>

          <p className="mt-3 max-w-3xl text-slate-700">
            Bekijk de regiopagina die het best aansluit bij jouw locatie. Zo
            vind je meteen de juiste informatie per werkgebied.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regionLinks.map((slug) => (
              <Link
                key={slug}
                href={`/diensten/ontstoppingen/${slug}`}
                className="rounded-xl border px-4 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                Ontstoppingen in {labelFromSlug(slug)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Direct hulp nodig bij een verstopping?
          </h2>

          <p className="mb-5 text-slate-700">
            Beschrijf kort het probleem en de locatie. Je krijgt snel een
            concreet tijdsblok terug, ook na de kantooruren.
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
              Vraag ontstopping aan →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}