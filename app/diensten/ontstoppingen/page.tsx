import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title:
    "Ontstoppingen wc, afvoer & riolering | Groot Antwerpen, Rupelstreek & Rivierenland | Turbo Services",
  description:
    "Ontstopping van wc, lavabo, douche en hoofdriolering. Avond, weekend en feestdagen aan hetzelfde tarief. Snelle interventie in Groot Antwerpen, Rupelstreek en Rivierenland.",
};

export default function OntstoppingenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Ontstoppingen van wc, afvoer en riolering
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Verstopte wc, lavabo, douche of hoofdriolering? Ik los dit op met
              professionele apparatuur en een gerichte aanpak, ook buiten
              kantooruren.
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

      {/* INHOUD */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Waarmee ik help
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
              <li>Camera-inspectie indien nodig om oorzaak vast te stellen</li>
              <li>Nacontrole en advies om herhaling te vermijden</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Prijzen
            </h2>

            <p className="mt-4 text-slate-700">
              Ik werk met vaste basisprijzen, ook buiten kantooruren:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong>Interventie ontstopping:</strong> €160
              </li>
              <li>
                <strong>Camera-inspectie (optioneel):</strong> €90
              </li>
              <li>
                <strong>Totaalpakket (ontstopping + camera):</strong> €250
              </li>
            </ul>

            <p className="mt-3 text-slate-700">
              Bedragen zijn <strong>exclusief btw</strong>. Voor particuliere
              woningen ouder dan 10 jaar geldt doorgaans 6% btw, in andere
              privé-situaties 21%. Voor zakelijke klanten kan btw-verlegging
              (0%) van toepassing zijn.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Wanneer snel ingrijpen?
            </h3>

            <p className="mt-3 text-slate-700">
              Hoe sneller wordt ingegrepen, hoe kleiner de kans op bijkomende
              schade zoals overstroming of geurhinder. Bij twijfel is een
              korte interventie meestal goedkoper dan afwachten.
            </p>
          </div>
        </div>

        {/* CTA ONDERAAN */}
        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Direct hulp nodig bij een verstopping?
          </h2>

          <p className="mb-5 text-slate-700">
            Beschrijf kort het probleem en de locatie. Ik koppel snel terug met
            een concreet tijdsblok, ook na de kantooruren.
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
