import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Hoe vaak moet je leidingen laten reinigen?",
  description:
    "De ideale onderhoudsfrequentie hangt af van gebruik, ouderdom en materiaal. Dit is ons schema.",
};

export default function Page() {
  const faqs = [
    { question: "Is vaak reinigen schadelijk?", answer: "Nee, als het correct gebeurt." },
    { question: "Vervangt warm water onderhoud?", answer: "Nee, het helpt een beetje maar vervangt het niet." },
    { question: "Wat bij wortels?", answer: "Specifiek frezen en hersteladvies om herhaling te vermijden." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Hoe vaak moet je leidingen laten reinigen?
      </h1>
      <p className="mt-3 text-slate-700">
        De frequentie hangt af van vetgebruik, gezinssamenstelling, materiaal/helling en bomen (wortelgroei).
      </p>

      <h2 className="mt-8 text-xl font-semibold">Gemiddelde richtlijnen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Keuken: 1× per 12–24 maanden bij intensief gebruik</li>
        <li>Badkamer: 1× per 24 maanden (haren/zeep)</li>
        <li>Hoofdriolering: na verbouwingen of bij terugkerende signalen</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Onze aanpak</h2>
      <p className="mt-3 text-slate-700">
        Inspectie, gericht reinigen en preventietips. Optioneel serviceplan met herinnering.
      </p>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/keukenafvoer-voorkomen" className="underline">
          keukenafvoer voorkomen
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/ontstopping-kost" className="underline">
          kost ontstopping
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
