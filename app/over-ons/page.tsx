import Link from "next/link";

export default function OverOns() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Over mij</h1>

      <p className="mb-4 text-slate-700">
        Ik ben <strong>Wim Verloo</strong>, oprichter van <strong>Turbo</strong>.{" "}
        <strong>Services</strong> leveren was altijd de kern van wat het bedrijf deed:
        technische precisie, degelijke uitvoering en betrouwbare interventies in
        riolerings- en afvoerwerken.
      </p>

      <p className="mb-4 text-slate-700">
        Na jaren ervaring groeide echter het besef dat die oorspronkelijke kracht – directe
        betrokkenheid en persoonlijke service – in de bedrijfsstructuur van toen
        gedeeltelijk verloren was gegaan.
      </p>

      <p className="mb-6 text-slate-700">
        Met het nieuwe bedrijf <strong>Turbo Services</strong> wil ik precies dat herstellen
        en versterken: opnieuw rechtstreeks werken voor de klant, zonder tussenlagen, met
        korte lijnen en volledige transparantie. De focus ligt vandaag volledig op{" "}
        <strong>ontstoppingen</strong>, <strong>camera-inspecties</strong> en{" "}
        <strong>noodherstellingen</strong>, ook <strong>’s avonds en in het weekend</strong>{" "}
        aan hetzelfde tarief.
      </p>

      <h2 className="mt-6 mb-3 text-2xl font-semibold text-slate-900">Waar ik voor sta</h2>

      <ul className="mb-8 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <strong>Ervaring en vakkennis</strong> – meer dan twintig jaar terreinervaring in
          rioleringssystemen, camera-diagnoses en gerichte herstellingen.
        </li>
        <li>
          <strong>Transparante afspraken</strong> – duidelijke tarieven zonder verborgen
          toeslagen, ook niet voor avond- of weekendinterventies.
        </li>
        <li>
          <strong>Controle en verslaggeving</strong> – waar nodig gebruik ik camera-inspectie
          en lever ik beelden of een verslag aan voor verzekering of aannemers.
        </li>
        <li>
          <strong>Rechtstreeks contact</strong> – je spreekt altijd met de persoon die
          langskomt, zonder callcenter of anonieme helpdesk.
        </li>
      </ul>

      {/* Call to action blok – zelfde stijl als op de homepagina */}
      <div className="mt-10 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
        <h2 className="mb-3 text-2xl font-semibold text-slate-900">
          Verstopping of rioolprobleem?
        </h2>
        <p className="mb-5 text-slate-700">
          Heb je een verstopte afvoer, een terugkerende blokkade of twijfel je aan de staat van
          je leidingen? Dan bekijk ik het ter plaatse, met indien nodig camera-inspectie, ook{" "}
          <strong>’s avonds of in het weekend</strong> aan hetzelfde tarief:{" "}
          <strong>€160</strong> interventie, <strong>€90</strong> camera,{" "}
          <strong>€250</strong> totaalpakket.
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
            Bel: 0485 03 18 77
          </a>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          We plannen intern en bevestigen je tijdsvenster via sms of WhatsApp.
        </p>
      </div>

      <p className="mt-8 text-slate-600 italic">
        Turbo Services – RioolExpert voor ontstoppingen, camera-inspecties en noodherstellingen.
      </p>
    </section>
  );
}
