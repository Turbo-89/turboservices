import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Camera-inspectie: hoe werkt dat en wanneer heb je het nodig?",
  description:
    "Met een camera zie je exact waar het probleem zit: breuk, doorhang of prop. Zo voorkomen we nodeloos breekwerk.",
};

export default function Page() {
  const faqs = [
    { question: "Krijg ik de beelden mee?", answer: "Ja, we kunnen het rapport delen." },
    { question: "Helpt camera bij geurklachten?", answer: "Zeker. We sporen lekken/open verbindingen op." },
    { question: "Kan het altijd?", answer: "Bij zware aanslag reinigen we eerst voor zichtbaarheid." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Camera-inspectie: hoe werkt dat en wanneer heb je het nodig?
      </h1>
      <p className="mt-3 text-slate-700">
        We brengen een flexibele camera in de leiding en lokaliseren exact waar het probleem zit—desnoods met zender/ontvanger om bovengronds te markeren.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Ideaal bij</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Terugkerende verstoppingen</li>
        <li>Geurproblemen</li>
        <li>Verbouwingen (traject in kaart brengen)</li>
        <li>Vermoeden van breuk of doorhang</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Voordelen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Gericht werken, minder breekwerk</li>
        <li>Bewijs voor verzekeraar/aannemer</li>
        <li>Videorapport mogelijk</li>
      </ul>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/ontstopping-kost" className="underline">
          kost ontstopping
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/riool-verstopt-signalen" className="underline">
          eerste signalen verstopt riool
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
