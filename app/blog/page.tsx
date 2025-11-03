import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import HeroLogo from "@/components/HeroLogo";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Weetjes | Turbo Services – tips over ontstoppingen en rioolproblemen",
  description:
    "Praktische tips en handleidingen rond ontstoppingen, rioolproblemen, geurhinder en camera-inspecties. Artikels die je helpen te beslissen wanneer je zelf iets kan doen en wanneer Turbo Services moet langskomen.",
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
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Weetjes over ontstoppingen
              <span className="block mt-1">
                en <span className="text-[var(--turbo-red,#E34D35)]">rioolproblemen</span>.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Praktische artikels over verstopte wc&apos;s, afvoeren, geurhinder en camera-inspecties. Zo weet je
              wanneer je zelf iets kunt doen en wanneer <strong>Turbo Services</strong> beter langskomt.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm text-white shadow-sm transition hover:opacity-90"
              >
                Vraag interventie aan →
              </Link>
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                Bel: 0485 03 18 77
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Artikels worden stapsgewijs aangevuld. Bij dringende problemen is een interventie meestal
              de veiligste keuze.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* Blog/weetjes: algemene rioolfocus → default of ontstopping; hier bewust 'ontstopping' */}
            <HeroLogo variant="ontstopping" />
          </div>
        </div>
      </section>

      {/* LIJST MET ARTIKELS */}
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Rioolproblemen</h2>
        <p className="mt-3 text-slate-700">
          Deze artikels gaan specifiek over verstopte leidingen, rioolproblemen en geurhinder. Ze helpen je inschatten
          wat je zelf kan proberen en waar de grens ligt waarop professionele hulp nodig is.
        </p>

        {/* Rioolproblemen */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {rioolFiles.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-xl border p-4 hover:bg-slate-50"
            >
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
        <h2 className="mt-12 mb-2 text-2xl font-semibold text-slate-900">Overige onderwerpen</h2>
        <p className="mb-4 text-slate-700">
          Bijkomende thema&apos;s zoals spoed-loodgieterij, waterlekken en verwarming blijven hier toegankelijk,
          maar de operationele focus van <strong>Turbo Services</strong> ligt vandaag op riool- en afvoerproblemen.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {otherFiles.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-xl border p-4 hover:bg-slate-50"
            >
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

        <div className="mt-10">
          <CTA />
        </div>
      </main>
    </>
  );
}
