// app/prijzen/page.tsx
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export default function Prijzen() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Duidelijke tarieven voor
              <span className="block mt-1">
                <span className="text-[var(--turbo-red,#E34D35)]">ontstoppingen</span>, camera-inspecties
                en noodherstellingen.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Eén vaste basisstructuur: <strong>€160</strong> voor de interventie,{" "}
              <strong>€90</strong> voor de camera-inspectie, <strong>€250</strong> voor het
              totaalpakket – <strong>ook ’s avonds en in het weekend</strong>, zonder extra toeslag.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90"
              >
                Vraag interventie aan →
              </Link>
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Bel 24/7: 0485 03 18 77
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              We plannen intern en bevestigen je tijdsvenster via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="prijzen" />
          </div>
        </div>
      </section>

      {/* PRIJZEN-INHOUD */}
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">Basisprijzen</h2>
        <p className="mb-6 text-slate-700">
          Alle bedragen zijn <strong>exclusief btw</strong>. Voor particuliere klanten bedraagt de btw
          doorgaans <strong>6%</strong> bij woningen ouder dan 10 jaar en <strong>21%</strong> in andere situaties.
          Voor zakelijke klanten kan bij medecontractantregeling een <strong>btw-verlegging (0%)</strong> toegepast worden.
          Het juiste btw-tarief wordt steeds correct vermeld op offerte en factuur.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Ontstoppingen &amp; interventies</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>
                <strong>Interventie ontstopping / rioolprobleem:</strong> €160
              </li>
              <li>
                <strong>Camera-inspectie (indien nodig of gevraagd):</strong> €90
              </li>
              <li>
                <strong>Totaalpakket (interventie + camera):</strong> €250
              </li>
            </ul>
            <p className="mt-3 text-slate-700">
              Deze tarieven gelden zowel op weekdagen als <strong>’s avonds en in het weekend</strong>.
              Er is dus geen aparte avond- of weekendtoeslag.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">Wat is inbegrepen?</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Aankomst ter plaatse in de regio (Antwerpen, Waasland, Rupelstreek).</li>
              <li>
                Diagnose en ontstopping met professionele machines, gericht op het effectief vrijmaken van de
                leiding.
              </li>
              <li>
                Indien gekozen: camera-inspectie met duidelijke lokalisatie van het probleem en visuele controle.
              </li>
              <li>Korte toelichting ter plaatse over oorzaak en mogelijke toekomstige risico’s.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">Mogelijke bijkomende kosten</h3>
            <p className="mt-2 text-slate-700">
              In sommige situaties zijn bijkomende werken nodig, bijvoorbeeld bij:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Structurele breuken of verzakkingen die herstelling vragen.</li>
              <li>Uitgebreide graafwerken of het openbreken en herstellen van vloer of verharding.</li>
              <li>Werken buiten de standaardregio of uitzonderlijke bereikbaarheidssituaties.</li>
            </ul>
            <p className="mt-3 text-slate-700">
              Dergelijke bijkomende werkzaamheden worden <strong>altijd vooraf besproken</strong>, zodat je
              op voorhand weet waar je aan toe bent. Er worden geen bijkomende posten uitgevoerd zonder akkoord.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Twijfel je welke formule van toepassing is?
          </h2>
          <p className="mb-5 text-slate-700">
            Beschrijf kort het probleem (bv. wc verstopt, water dat terugkomt, geurhinder) en voeg indien mogelijk
            een foto toe bij je aanvraag. Op basis daarvan kan ik inschatten of een standaardinterventie volstaat of
            dat een camera-inspectie meteen aangewezen is.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Vraag interventie aan →
            </Link>
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Bel 24/7: 0485 03 18 77
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            We plannen intern en bevestigen je tijdsvenster via sms of WhatsApp.
          </p>
        </div>
      </section>
    </>
  );
}
