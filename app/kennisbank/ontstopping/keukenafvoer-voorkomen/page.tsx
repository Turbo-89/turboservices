import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Hoe voorkom je een verstopte afvoer in de keuken?",
  description:
    "Met deze simpele gewoonten en maandelijkse routine hou je je keukenafvoer vrij—zonder chemische middelen.",
};

export default function Page() {
  const faqs = [
    { question: "Helpt azijn?", answer: "Als nabehandeling wel. Niet tegen harde proppen." },
    { question: "Veroorzaakt de vaatwasser verstopping?", answer: "Indirect: vet en zeep kunnen neerslaan in de buis." },
    { question: "Maakt materiaal uit (pvc/koper)?", answer: "Beide kunnen dichtslibben; pvc is gevoeliger voor krassen door veren." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Hoe voorkom je een verstopte afvoer in de keuken?
      </h1>
      <p className="mt-3 text-slate-700">
        Kleine gewoonten maken het verschil. Zo blijft je keukenafvoer vrij.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Dagelijkse gewoonten</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Vet nooit in de gootsteen—afkoelen en in de vuilbak.</li>
        <li>Zeefje in de spoelbak, etensresten weggooien.</li>
        <li>Warmwater-flush na vettige afwas.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Maandelijkse routine (10 min)</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>Sifon los, reinigen, terugplaatsen.</li>
        <li>Warm water + beetje soda.</li>
        <li>Visueel check: geen lek/speling.</li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Wanneer extra onderhoud?</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Veel frituren/bakken</li>
        <li>Oudere leidingen</li>
        <li>Vaker borrelen of geur</li>
      </ul>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/gootsteen-ontstoppen" className="underline">
          gootsteen ontstoppen
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">
          afvoer borrelt
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
