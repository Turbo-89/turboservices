import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";
import { getKnowledgeLinks } from "@/lib/knowledge-links";

export const metadata = {
  title: "Kennisbank | Turbo Services",
  description: "Praktische uitleg over ontstoppingen en rioolproblemen.",
};

export default function KennisbankHome() {
  const artikelen = getKnowledgeLinks();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-10 px-4 py-12 md:py-16">
          <div>
            <h1 className="text-3xl font-bold md:text-5xl">
              Kennisbank
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Alle artikels over ontstoppingen, geurproblemen en riolering.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="ontstopping" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {artikelen.map((it) => (
  <Link
    key={it.href}
    href={it.href}
    className="rounded-xl border p-4 hover:bg-slate-50"
  >
    <span className="font-medium text-slate-900">
      {it.title}
    </span>
    {it.description ? (
      <span className="mt-1 block text-sm text-slate-600">
        {it.description}
      </span>
    ) : null}
    <span className="block text-sm text-slate-600">
      Lees meer →
    </span>
  </Link>
))}
        </div>
      </main>
    </>
  );
}