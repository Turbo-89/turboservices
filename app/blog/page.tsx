import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";

export const metadata: Metadata = {
  title: "Weetjes: snelle tips over ontstopping en sanitair",
  description:
    "Een snel overzicht met de beste tips en handleidingen rond verstoppingen, geurproblemen, camera-inspectie en meer.",
};

const items = [
  // ── Losse kennisbank-artikels (niet in /ontstopping)
  { href: "/kennisbank/spoed-loodgieter", label: "Spoed loodgieter Antwerpen: 24/7 bereikbaarheid" },
  { href: "/kennisbank/spoed-waterlek", label: "Waterlek spoed: wat nu doen?" },
  { href: "/kennisbank/verwarmingsketel-vervangen", label: "Verwarmingsketel vervangen: prijs, timing & subsidies" },
  { href: "/kennisbank/ketel-herstellen-of-vervangen", label: "Ketel herstellen of vervangen? Checklist & advies" },

  // ── Ontstopping (submap)
  { href: "/kennisbank/ontstopping/verstopte-wc", label: "Wat te doen bij een verstopte wc?" },
  { href: "/kennisbank/ontstopping/gootsteen-ontstoppen", label: "Zelf je gootsteen ontstoppen of loodgieter bellen?" },
  { href: "/kennisbank/ontstopping/afvoer-borrelt", label: "Waarom borrelt mijn afvoer? Oorzaken & oplossingen" },
  { href: "/kennisbank/ontstopping/keukenafvoer-voorkomen", label: "Verstopte keukenafvoer voorkomen" },
  { href: "/kennisbank/ontstopping/chemische-ontstoppers", label: "Chemische ontstoppers: gebruiken of vermijden?" },
  { href: "/kennisbank/ontstopping/ontstopping-kost", label: "Wat kost een ontstopping in Vlaanderen?" },
  { href: "/kennisbank/ontstopping/camera-inspectie", label: "Camera-inspectie: hoe werkt dat & wanneer nodig?" },
  { href: "/kennisbank/ontstopping/riool-verstopt-signalen", label: "Riool verstopt: eerste signalen" },
  { href: "/kennisbank/ontstopping/leidingen-hoe-vaak-reinigen", label: "Hoe vaak leidingen reinigen?" },
  { href: "/kennisbank/ontstopping/terugstromend-toilet-douche", label: "Terugstromend toilet of douche" },
  { href: "/kennisbank/ontstopping/appartement-gedeelde-riolering", label: "Appartement: wie betaalt de ontstopping?" },
  { href: "/kennisbank/ontstopping/gereedschap-ontstopping", label: "Welk gereedschap werkt echt?" },
  { href: "/kennisbank/ontstopping/stank-uit-afvoer", label: "Stank uit afvoer: oorzaken & oplossingen" },
  { href: "/kennisbank/ontstopping/leiding-vervangen-of-ontstoppen", label: "Leiding vervangen of ontstoppen?" },
  { href: "/kennisbank/ontstopping/septische-put-onderhoud", label: "Septische put: wanneer (niet) ruimen" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Weetjes</h1>
      <p className="mt-3 text-slate-700">
        Snelle, praktische tips en how-to’s. Klik door naar de volledige handleidingen zodat je meteen geholpen bent of
        gericht een interventie kan aanvragen.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="rounded-xl border p-4 hover:bg-slate-50"
          >
            <span className="font-medium text-slate-900">{it.label}</span>
            <span className="block text-sm text-slate-600">Lees meer →</span>
          </Link>
        ))}
      </div>

      <CTA />
    </main>
  );
}
