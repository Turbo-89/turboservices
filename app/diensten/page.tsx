import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import HeroLogo from "@/components/HeroLogo";
import { trackEvent } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Diensten | Turbo Services – RioolExpert",
  description:
    "Ontstoppingen, camera-inspecties en noodherstellingen aan riolering en afvoer. Turbo Services helpt je snel, ook ’s avonds en in het weekend, aan hetzelfde tarief.",
};

const services = [
  {
    href: "/diensten/ontstoppingen",
    title: "Ontstoppingen",
    desc: "Verstopte wc, lavabo, douche of hoofdriolering. Professioneel ontstopt met de juiste apparatuur.",
  },
  {
    href: "/diensten/camera-inspectie",
    title: "Camera-inspecties",
    desc: "Inwendige controle van leidingen met camera. Ideaal bij terugkerende problemen of twijfel over de staat van de riolering.",
  },
  {
    href: "/diensten/noodherstellingen",
    title: "Noodherstellingen",
    desc: "Snelle ingrepen bij lekken, breuken of ernstige schade aan leidingen, met gericht advies voor verdere werken.",
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Diensten van <span className="text-[var(--turbo-red,#E34D35)]">Turbo Services</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Gespecialiseerd in <strong>ontstoppingen</strong>,{" "}
              <strong>camera-inspecties</strong> en <strong>noodherstellingen</strong> aan
              riolering en afvoer – ook <strong>’s avonds en in het weekend</strong>, aan hetzelfde tarief.
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
                onClick={() => trackEvent('phone_click', { source: 'diensten_hero' })}
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
            {/* Overzichtspagina: standaardvariant van het logo */}
            <HeroLogo variant="default" />
          </div>
        </div>
      </section>

      {/* DIENSTEN-OVERZICHT */}
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Onze kernactiviteiten</h2>
        <p className="mt-3 text-slate-700">
          Alle diensten zijn opgebouwd rond één duidelijk prijsmodel:{" "}
          <strong>€160</strong> interventie, <strong>€90</strong> camera-inspectie,{" "}
          <strong>€250</strong> voor het totaalpakket. Zonder extra toeslag voor avond of weekend.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl border p-5 hover:bg-slate-50"
            >
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-slate-600">{s.desc}</p>
              <span className="mt-3 inline-block text-sm text-slate-700 underline">
                Meer over {s.title} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <CTA />
        </div>
      </main>
    </>
  );
}
