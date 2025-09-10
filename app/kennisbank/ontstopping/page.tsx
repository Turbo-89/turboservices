import Link from "next/link";
import type { Metadata } from "next";
import CTA from "@/components/kb/CTA";

export const metadata: Metadata = {
  title: "Alles over Ontstopping: oorzaken, oplossingen en professionele aanpak",
  description:
    "Leer verstoppingen snel herkennen en veilig oplossen. Praktische stappen, preventietips en wanneer je best Turbo Services inschakelt in Antwerpen en Vlaanderen.",
};

const items = [
  { href: "/kennisbank/ontstopping/verstopte-wc", label: "Wat te doen bij een verstopte wc?" },
  { href: "/kennisbank/ontstopping/gootsteen-ontstoppen", label: "Zelf je gootsteen ontstoppen of loodgieter bellen?" },
  { href: "/kennisbank/ontstopping/afvoer-borrelt", label: "Waarom borrelt mijn afvoer? Oorzaken en oplossingen" },
  { href: "/kennisbank/ontstopping/keukenafvoer-voorkomen", label: "Hoe voorkom je een verstopte afvoer in de keuken?" },
  { href: "/kennisbank/ontstopping/chemische-ontstoppers", label: "Chemische ontstoppers: gebruiken of vermijden?" },
  { href: "/kennisbank/ontstopping/ontstopping-kost", label: "Wat kost een professionele ontstopping in Vlaanderen?" },
  { href: "/kennisbank/ontstopping/camera-inspectie", label: "Camera-inspectie: hoe werkt dat en wanneer nodig?" },
  { href: "/kennisbank/ontstopping/riool-verstopt-signalen", label: "Riool verstopt: dit zijn de eerste signalen" },
  { href: "/kennisbank/ontstopping/leidingen-hoe-vaak-reinigen", label: "Hoe vaak moet je leidingen laten reinigen?" },
  { href: "/kennisbank/ontstopping/terugstromend-toilet-douche", label: "Terugstromend toilet of douche: oorzaken en aanpak" },
  { href: "/kennisbank/ontstopping/appartement-gedeelde-riolering", label: "Ontstopping in appartementen: wie betaalt?" },
  { href: "/kennisbank/ontstopping/gereedschap-ontstopping", label: "Welk gereedschap werkt echt: plopper, veer of hogedruk?" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Alles over Ontstopping
      </h1>
      <p className="mt-3 text-slate-700">
        Verstoppingen ontstaan door vet, zeep, haren, keukenresten of constructiefouten. 
        Hier vind je directe hulp, duidelijke stappenplannen en wanneer je best een professional inschakelt.
      </p>

      <ul className="mt-8 grid gap-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="block rounded-xl border p-4 hover:bg-slate-50"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>

      <CTA />
    </main>
  );
}
