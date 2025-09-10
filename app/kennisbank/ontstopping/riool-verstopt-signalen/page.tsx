import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Riool verstopt: dit zijn de eerste signalen",
  description:
    "Herken vroegtijdig een verstopt riool: gorgelen, stank en terugslag. Zo beperk je schade.",
};

export default function Page() {
  const faqs = [
    { question: "Verergert regen het probleem?", answer: "Ja, vooral bij gecombineerde systemen kan het snel overlopen." },
    { question: "Is een terugslagklep verplicht?", answer: "Situatieafhankelijk. We adviseren ter plaatse." },
    { question: "Moet er gebroken worden?", answer: "Meestal niet—eerst reinigen en camera-inspectie." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Riool verstopt: dit zijn de eerste signalen
      </h1>
      <p className="mt-3 text-slate-700">
        Vroege herkenning voorkomt schade. Dit zijn de waarschuwingssignalen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Vroege waarschuwingen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Gorgelen/borrelen bij wc of douche</li>
        <li>Langzaam weglopen van meerdere toestellen</li>
        <li>Geur uit afvoer of kelder</li>
        <li>Terugslagklep die dichtvalt</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Snel handelen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Niet blijven doorspoelen</li>
        <li>Waterverbruik beperken</li>
        <li>Bel ons bij <b>meerdere</b> toestellen tegelijk</li>
      </ul>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">
          afvoer borrelt
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/terugstromend-toilet-douche" className="underline">
          terugstromend toilet/douche
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
