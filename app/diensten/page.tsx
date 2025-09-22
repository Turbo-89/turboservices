import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";

export const metadata: Metadata = {
  title: "Diensten | Turbo Services",
  description:
    "Spoedloodgieterij en verwarmingsketels. 24/7 hulp in Antwerpen en omgeving. Transparante service voor dringende herstellingen.",
};

const services = [
  {
    href: "/diensten/spoed-loodgieterij",
    title: "Spoedloodgieterij (24/7)",
    desc: "Gesprongen kraan, waterlek, terugstroming. Bel direct – transparante richtprijs.",
  },
  {
    href: "/diensten/verwarmingsketels",
    title: "Verwarmingsketels",
    desc: "Vervanging of herstelling met keuring en inregeling. Snel ingepland bij noodgevallen.",
  },
  {
    href: "/diensten/sanitair-herstelling",
    title: "Sanitair herstellingen",
    desc: "Vervanging van kranen, sifons, leidingen of toestellen. Lokaal en efficiënt opgelost.",
  },
  {
    href: "/diensten/drukverlies-leidingen",
    title: "Drukverlies & ontluchten",
    desc: "Problemen met circulatie of radiator? Wij lossen het snel op met minimale ingreep.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Onze diensten</h1>
      <p className="mt-3 text-slate-700">
        Spoedinterventies voor sanitair en verwarming. Transparante prijzen, snel ter plaatse.
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
