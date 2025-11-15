import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontstoppingsdienst Antwerpen | Turbo Services snel en professioneel",
  description: "Snel en betrouwbaar ontstoppingsdienst in Antwerpen. Turbo Services is binnen 1 uur ter plaatse voor afvoer- en rioolontstoppingen.",
};

export default function OntstoppingenAntwerpenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
            Turbo Services – Antwerpen
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            { "Betrouwbare Ontstopping in Antwerpen" }
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            { "Turbo Services biedt snelle en efficiënte ontstoppingsdiensten in de regio Antwerpen. Onze ervaren vakmannen lossen verstoppingen grondig op zodat uw sanitair snel weer werkt zoals het hoort. Bel ons en wij zijn binnen het uur ter plaatse." }
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/boeken"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition"
            >
              Bel of boek nu – Antwerpen
            </Link>
            <span className="text-sm text-slate-500">
              { "Bel nu – binnen 1u ter plaatse" }
            </span>
          </div>
        </div>
      </section>

      <main className="bg-white">
        
          <section className="py-8 border-b">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                { "Onze Ontstoppingsdiensten" }
              </h2>
              <p className="text-slate-600 leading-relaxed">
                { "Wij verzorgen ontstoppingen van afvoeren, rioleringen en toiletten voor zowel particulieren als bedrijven in Antwerpen. Met professionele apparatuur verwijderen wij blokkades zonder schade aan te richten." }
              </p>
            </div>
          </section>

          <section className="py-8 border-b">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                { "Waarom Kiezen voor Turbo Services?" }
              </h2>
              <p className="text-slate-600 leading-relaxed">
                { "Expertise, snelle interventie en transparante communicatie staan bij ons centraal. Dankzij jaren ervaring en modern materiaal garanderen we een duurzame oplossing voor elk ontstoppingsprobleem." }
              </p>
            </div>
          </section>

          <section className="py-8 border-b">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                { "Dienstverlening in Antwerpen" }
              </h2>
              <p className="text-slate-600 leading-relaxed">
                { "Onze ontstoppingsservice is beschikbaar in heel Antwerpen en omliggende gemeenten. We komen snel ter plekke om verstoppingen te verhelpen, ook buiten de kantooruren." }
              </p>
            </div>
          </section>
      </main>
    </>
  );
}
