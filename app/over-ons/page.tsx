import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title:
    "Over Turbo Services | RioolExpert in Groot Antwerpen, Rupelstreek & Rivierenland",
  description:
    "Turbo Services, opgericht door Wim Verloo. Meer dan 20 jaar ervaring in ontstoppingen, camera-inspecties en noodherstellingen. Rechtstreeks contact, duidelijke tarieven en actief in Groot Antwerpen, Rupelstreek en Rivierenland.",
};

export default function OverOns() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Over{" "}
              <span className="text-[var(--turbo-red,#E34D35)]">
                Turbo Services
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Meer dan twintig jaar ervaring in ontstoppingen, camera-inspecties
              en noodherstellingen, met een duidelijke focus op vakkennis,
              transparantie en rechtstreeks contact.
            </p>

            {/* USP BLOK */}
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Meer dan 20 jaar ervaring</strong> in riolering en afvoer
              </li>
              <li>
                <strong>Geen callcenter:</strong> rechtstreeks contact
              </li>
              <li>
                <strong>Avond & weekend:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
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
            <HeroLogo variant="overmij" />
          </div>
        </div>
      </section>

      {/* INHOUD */}
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold text-slate-900">Over mij</h2>

        {/* >>> DEZE PARAGRAAF IS WOORDELIJK ONGEWIJZIGD <<< */}
        <p className="mb-4 text-slate-700">
          Ik ben <strong>Wim Verloo</strong>, oprichter van <strong>Turbo</strong>.{" "}
          <strong>Services</strong> leveren was altijd de kern van wat het bedrijf deed:
          technische precisie, degelijke uitvoering en betrouwbare interventies in
          riolerings- en afvoerwerken.
        </p>

        <p className="mb-4 text-slate-700">
          Na jaren ervaring groeide het besef dat directe betrokkenheid en
          persoonlijke opvolging voor klanten steeds belangrijker werden, maar
          in grotere structuren vaak onder druk kwamen te staan.
        </p>

        <p className="mb-6 text-slate-700">
          Met <strong>Turbo Services</strong> ligt de focus opnieuw volledig op
          rechtstreeks werken voor de klant, zonder tussenpersonen, met heldere
          afspraken en transparante tarieven. De activiteiten zijn vandaag
          duidelijk afgebakend tot <strong>ontstoppingen</strong>,{" "}
          <strong>camera-inspecties</strong> en{" "}
          <strong>noodherstellingen</strong>.
        </p>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-slate-900">
          Waar ik voor sta
        </h2>

        <ul className="mb-8 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <strong>Ervaring en vakkennis</strong> – meer dan twintig jaar
            praktijkervaring in rioleringssystemen en gerichte herstellingen.
          </li>
          <li>
            <strong>Transparante tarieven</strong> – duidelijke prijzen zonder
            verborgen kosten.
          </li>
          <li>
            <strong>Controle en verslaggeving</strong> – camera-inspectie en
            beeldmateriaal indien nodig voor verzekering of aannemer.
          </li>
          <li>
            <strong>Rechtstreeks contact</strong> – je weet altijd wie er
            langskomt.
          </li>
        </ul>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Verstopping of rioolprobleem?
          </h2>
          <p className="mb-5 text-slate-700">
            Heb je een verstopte afvoer, terugkerende blokkade of twijfel over de
            staat van je leidingen? Dan bekijk ik het ter plaatse, eventueel met
            camera-inspectie. Avond en weekend aan hetzelfde tarief.
            <strong> Na 22u geldt +50%.</strong>
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
            Afspraakbevestiging via sms of WhatsApp.
          </p>
        </div>

        <p className="mt-8 text-slate-600 italic">
          Turbo Services – RioolExpert voor ontstoppingen, camera-inspecties en
          noodherstellingen in Groot Antwerpen, Rupelstreek en Rivierenland.
        </p>
      </section>
    </>
  );
}
