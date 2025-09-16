import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";

export const metadata: Metadata = {
  title: "Diensten | Turbo Services",
  description:
    "Ontstoppingen, camera-inspectie & rapport, gerichte rioolherstellingen, septische putten, spoedloodgieterij en verwarmingsketels. 24/7 hulp in Antwerpen en omgeving.",
};

const services = [
  {
    href: "/diensten/ontstoppingen",
    title: "Riool interventie",
    desc: "Snelle interventies voor wc, gootsteen, douche, afvoer inclusief camera-inspectie.",
  },
  {
    href: "/diensten/camera-inspectie-rapport",
    title: "Camera-inspectie & rapport",
    desc: "Exacte lokalisatie en diagnose met beelden en onderbouwd advies. Rioolexpert voor moeilijke dossiers.",
  },
  {
    href: "/diensten/gerichte-rioolherstellingen",
    title: "Gerichte rioolherstellingen",
    desc: "We pakken het échte probleem aan zonder meteen alles te vervangen. Perfect om te overbruggen tot renovatie.",
  },
  {
    href: "/diensten/septische-putten",
    title: "Septische putten",
    desc: "Herstel/vervanging van ingezakte of beschadigde putten. Vaak dringend – snel ingepland.",
  },
  {
    href: "/diensten/spoed-loodgieterij",
    title: "Spoed loodgieterij (24/7)",
    desc: "Gesprongen kraan, waterlek, terugstroming. Bel direct – transparante richtprijs.",
  },
  {
    href: "/diensten/verwarmingsketels",
    title: "Verwarmingsketels",
    desc: "Vervanging/plaatsing met keuring en inregeling. Advies op maat en snelle planning.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Onze diensten</h1>
      <p className="mt-3 text-slate-700">
        Snel geholpen door ervaren techniekers. Transparante prijzen en duidelijke communicatie.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-2xl border p-5 hover:bg-slate-50"
          >
            <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
            <p className="mt-1 text-slate-600">{s.desc}</p>
            <span className="mt-3 inline-block text-sm text-slate-700 underline">
              Meer over {s.title} →
            </span>
          </Link>
        ))}
      </div>

      <CTA />
    </main>
  );
}
