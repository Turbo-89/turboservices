import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Welk gereedschap werkt écht: plopper, veer of hogedruk?",
  description:
    "Kies het juiste ontstoppingsgereedschap per probleem—en voorkom schade.",
};

export default function Page() {
  const faqs = [
    { question: "Kan ik zelf hogedruk gebruiken?", answer: "We raden dit af door schade- en overstroomrisico." },
    { question: "Welke veer kies ik?", answer: "Kort, flexibel en met beleid gebruiken." },
    { question: "Werkt dit voor elke wc?", answer: "De aanpak kan per model verschillen; ter plekke testen wij wat veilig is." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Welk gereedschap werkt écht: plopper, veer of hogedruk?
      </h1>
      <p className="mt-3 text-slate-700">
        Kies het juiste hulpmiddel per probleem en vermijd onnodige schade.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Plopper</h2>
      <p className="mt-3 text-slate-700">Beste eerste stap bij wc en spoelbak. Snel en veilig.</p>

      <h2 className="mt-8 text-xl font-semibold">Veer</h2>
      <p className="mt-3 text-slate-700">Voor lokale proppen. Voorzichtig in pvc/bochten om krassen te voorkomen.</p>

      <h2 className="mt-8 text-xl font-semibold">Hogedruk</h2>
      <p className="mt-3 text-slate-700">Voor aanslag en lange trajecten. Professioneel gebruik aanbevolen.</p>

      <h2 className="mt-8 text-xl font-semibold">Beslisboom</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>Één toestel traag → plopper/sifon/veer</li>
        <li>Meerdere toestellen → bel professional</li>
        <li>Terugkerend → camera + plan</li>
      </ol>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/gootsteen-ontstoppen" className="underline">
          gootsteen ontstoppen
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/chemische-ontstoppers" className="underline">
          chemische ontstoppers
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
