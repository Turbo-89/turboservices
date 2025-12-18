import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title:
    "Tarieven ontstoppingen & riolering | Groot Antwerpen, Rupelstreek & Rivierenland | Turbo Services",
  description:
    "Transparante tarieven voor ontstoppingen, camera-inspecties en noodherstellingen. Avond, weekend en feestdagen aan hetzelfde tarief. Na 22u geldt +50%. Actief in Groot Antwerpen, Rupelstreek en Rivierenland.",
};

export default function Prijzen() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Duidelijke tarieven voor{" "}
              <span className="text-[var(--turbo-red,#E34D35)]">
                ontstoppingen
              </span>
              , camera-inspecties en noodherstellingen
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Eén vaste basisstructuur: <strong>€160</strong> interventie,{" "}
              <strong>€90</strong> camera-inspectie, <strong>€250</strong>{" "}
              totaalpakket. Avond, weekend en feestdagen aan hetzelfde tarief.
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
                <strong>Geen callcenter:</strong> rechtstreeks contact
              </li>
              <li>
                <strong>Actief in:</strong> Groot Antwerpen – Rupelstreek –
                Rivierenland
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
                Vraag interventie aan →
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Avond, weekend en feestdagen aan hetzelfde tarief. Na 22u geldt een
              supplement van +50%. Afspraakbevestiging via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="prijzen" />
          </div>
        </div>
      </section>

      {/* PRIJZEN-INHOUD */}
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">
          Basisprijzen
        </h2>

        <p className="mb-6 text-slate-700">
          Alle bedragen zijn <strong>exclusief btw</strong>. Voor particuliere
          woningen ouder dan 10 jaar geldt doorgaans <strong>6%</strong> btw, in
          andere privé-situaties <strong>21%</strong>. Voor zakelijke klanten kan
          een <strong>btw-verlegging (0%)</strong> van toepassing zijn. Het juiste
          tarief wordt steeds correct vermeld op offerte en factuur.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Ontstoppingen & interventies
            </h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>
                <strong>Interventie ontstopping / rioolprobleem:</strong> €160
              </li>
              <li>
                <strong>Camera-inspectie (optioneel):</strong> €90
              </li>
              <li>
                <strong>Totaalpakket (interventie + camera):</strong> €250
              </li>
            </ul>
            <p className="mt-3 text-slate-700">
              Deze tarieven gelden op weekdagen, ’s avonds en in het weekend.
              <strong> Na 22u wordt een supplement van +50% toegepast.</strong>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Wat is inbegrepen?
            </h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>
                Verplaatsing en interventie in{" "}
                <strong>
                  Groot Antwerpen, Rupelstreek, Rivierenland en Waasland
                </strong>
                .
              </li>
              <li>
                Diagnose en ontstopping met professionele apparatuur.
              </li>
              <li>
                Indien gekozen: camera-inspectie met visuele controle en
                lokalisatie.
              </li>
              <li>
                Mondelinge toelichting over oorzaak en mogelijke vervolgstappen.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Mogelijke bijkomende kosten
            </h3>
            <p className="mt-2 text-slate-700">
              In bepaalde situaties zijn bijkomende werken nodig, zoals:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Structurele breuken of verzakkingen.</li>
              <li>Graafwerken of het openbreken en herstellen van vloeren.</li>
              <li>Werken buiten het standaard werkgebied.</li>
            </ul>
            <p className="mt-3 text-slate-700">
              Deze werkzaamheden worden{" "}
              <strong>altijd vooraf besproken</strong>. Er worden geen bijkomende
              kosten uitgevoerd zonder akkoord.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Twijfel je welke formule van toepassing is?
          </h2>
          <p className="mb-5 text-slate-700">
            Beschrijf kort het probleem (verstopping, geurhinder, water dat
            terugkomt) en voeg indien mogelijk een foto toe. Zo kan correct
            ingeschat worden welke interventie nodig is.
          </p>
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
              Vraag interventie aan →
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Afspraakbevestiging via sms of WhatsApp. Na 22u geldt een supplement
            van +50%.
          </p>
        </div>
      </section>
    </>
  );
}
