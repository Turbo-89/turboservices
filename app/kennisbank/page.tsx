import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata = {
  title: "Kennisbank | Turbo Services – Ontstoppingen & Rioolproblemen",
  description:
    "Alle weetjes en artikels over ontstoppingen, geurhinder, camera-inspecties en rioolproblemen. Praktische uitleg en professioneel advies.",
};

export default function KennisbankHome() {
  const artikelen = [
    { href: "/kennisbank/ontstopping/verstopte-wc", label: "Wat te doen bij een verstopte wc?" },
    { href: "/kennisbank/ontstopping/gootsteen-ontstoppen", label: "Zelf je gootsteen ontstoppen of loodgieter bellen?" },
    { href: "/kennisbank/ontstopping/afvoer-borrelt", label: "Waarom borrelt mijn afvoer?" },
    { href: "/kennisbank/ontstopping/keukenafvoer-voorkomen", label: "Verstopte keukenafvoer voorkomen" },
    { href: "/kennisbank/ontstopping/chemische-ontstoppers", label: "Chemische ontstoppers: gebruiken of vermijden?" },
    { href: "/kennisbank/ontstopping/ontstopping-kost", label: "Wat kost een ontstopping in Vlaanderen?" },
    { href: "/kennisbank/ontstopping/camera-inspectie", label: "Camera-inspectie: hoe werkt dat?" },
    { href: "/kennisbank/ontstopping/riool-verstopt-signalen", label: "Riool verstopt: eerste signalen" },
    { href: "/kennisbank/ontstopping/leiding-vervangen-of-ontstoppen", label: "Leiding vervangen of ontstoppen?" },
    { href: "/kennisbank/ontstopping/septische-put-onderhoud", label: "Septische put: wanneer (niet) ruimen" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-10 px-4 py-12 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Kennisbank over ontstoppingen
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Artikels met praktische uitleg over verstopte wc’s, borrelende afvoeren,
              geurhinder, camera-inspectie en onderhoud van leidingen.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm text-white shadow-sm transition hover:opacity-90"
              >
                Vraag ontstopping aan →
              </Link>
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                Bel 24/7: 0485 03 18 77
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="ontstopping" />
          </div>
        </div>
      </section>

      {/* ARTIKELLIJST */}
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Alle artikels</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {artikelen.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-xl border p-4 hover:bg-slate-50 transition"
            >
              <span className="font-medium text-slate-900">{it.label}</span>
              <span className="block text-sm text-slate-600">Lees meer →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
