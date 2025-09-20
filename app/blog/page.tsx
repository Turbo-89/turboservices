import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Weetjes: snelle tips over ontstopping en sanitair",
  description:
    "Een snel overzicht met de beste tips en handleidingen rond rioolproblemen, geurhinder, camera-inspectie, spoedherstellingen en meer.",
};

// Handmatige, SEO-proof titels
const LABELS: Record<string, string> = {
  // ── Rioolproblemen (submap /ontstopping)
  "verstopte-wc": "Wat te doen bij een verstopte wc?",
  "gootsteen-ontstoppen": "Zelf je gootsteen ontstoppen of loodgieter bellen?",
  "afvoer-borrelt": "Waarom borrelt mijn afvoer? Oorzaken & oplossingen",
  "keukenafvoer-voorkomen": "Verstopte keukenafvoer voorkomen",
  "chemische-ontstoppers": "Chemische ontstoppers: gebruiken of vermijden?",
  "ontstopping-kost": "Wat kost een ontstopping in Vlaanderen?",
  "camera-inspectie": "Camera-inspectie: hoe werkt dat & wanneer nodig?",
  "riool-verstopt-signalen": "Riool verstopt: eerste signalen",
  "leidingen-hoe-vaak-reinigen": "Hoe vaak leidingen reinigen?",
  "terugstromend-toilet-douche": "Terugstromend toilet of douche",
  "appartement-gedeelde-riolering": "Appartement: wie betaalt de ontstopping?",
  "gereedschap-ontstopping": "Welk gereedschap werkt echt?",
  "stank-uit-afvoer": "Stank uit afvoer: oorzaken & oplossingen",
  "leiding-vervangen-of-ontstoppen": "Leiding vervangen of ontstoppen?",
  "septische-put-onderhoud": "Septische put: wanneer (niet) ruimen",

  // ── Overige onderwerpen (hoofdmap /kennisbank)
  "spoed-loodgieter": "Spoed loodgieter Antwerpen: 24/7 bereikbaarheid",
  "spoed-waterlek": "Waterlek spoed: wat nu doen?",
  "verwarmingsketel-vervangen": "Verwarmingsketel vervangen: prijs, timing & subsidies",
  "ketel-herstellen-of-vervangen": "Ketel herstellen of vervangen? Checklist & advies",
};

// Fallback: slug → nette titel
function formatLabel(slug: string): string {
  if (LABELS[slug]) return LABELS[slug];
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// Geeft alle submap-namen terug die een page.tsx bevatten
function listRouteSlugs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .filter((e) => fs.existsSync(path.join(dir, e.name, "page.tsx")))
    .map((e) => e.name);
}

export default function Page() {
  const baseDir = path.join(process.cwd(), "app/kennisbank");
  const ontstoppingDir = path.join(baseDir, "ontstopping");

  // 1) Rioolproblemen (alles in /kennisbank/ontstopping/*/page.tsx)
  const rioolSlugs = listRouteSlugs(ontstoppingDir);
  const rioolFiles = rioolSlugs.map((slug) => ({
    href: `/kennisbank/ontstopping/${slug}`,
    label: formatLabel(slug),
  }));

  // 2) Overige onderwerpen (alle submappen in /kennisbank behalve 'ontstopping')
  const otherSlugs = listRouteSlugs(baseDir).filter((slug) => slug !== "ontstopping");
  const otherFiles = otherSlugs.map((slug) => ({
    href: `/kennisbank/${slug}`,
    label: formatLabel(slug),
  }));

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Weetjes</h1>
      <p className="mt-3 text-slate-700">
        Snelle, praktische tips en handleidingen. Klik door naar de artikels zodat je meteen geholpen bent of
        gericht een interventie kan aanvragen.
      </p>

      {/* Rioolproblemen */}
      <h2 className="mt-10 mb-4 text-xl font-semibold text-slate-900">Rioolproblemen</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {rioolFiles.map((it) => (
          <Link key={it.href} href={it.href} className="rounded-xl border p-4 hover:bg-slate-50">
            <span className="font-medium text-slate-900">{it.label}</span>
            <span className="block text-sm text-slate-600">Lees meer →</span>
          </Link>
        ))}
        {rioolFiles.length === 0 && (
          <div className="rounded-xl border p-4 text-sm text-slate-600">
            Momenteel geen artikels gevonden in <code>/kennisbank/ontstopping</code>.
          </div>
        )}
      </div>

      {/* Overige onderwerpen */}
      <h2 className="mt-12 mb-4 text-xl font-semibold text-slate-900">Overige onderwerpen</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {otherFiles.map((it) => (
          <Link key={it.href} href={it.href} className="rounded-xl border p-4 hover:bg-slate-50">
            <span className="font-medium text-slate-900">{it.label}</span>
            <span className="block text-sm text-slate-600">Lees meer →</span>
          </Link>
        ))}
        {otherFiles.length === 0 && (
          <div className="rounded-xl border p-4 text-sm text-slate-600">
            Momenteel geen artikels gevonden in <code>/kennisbank</code> (behalve <code>/ontstopping</code>).
          </div>
        )}
      </div>

      <CTA />
    </main>
  );
}
