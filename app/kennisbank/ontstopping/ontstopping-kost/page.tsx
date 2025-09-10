import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Wat kost een professionele ontstopping in Vlaanderen?",
  description:
    "Zo wordt de prijs van een ontstopping opgebouwd—en hoe je verrassingen vermijdt.",
};

export default function Page() {
  const faqs = [
    { question: "Kan ik vooraf een richtprijs krijgen?", answer: "Ja, zeker als je foto’s/filmpjes meestuurt." },
    { question: "Is camera altijd nodig?", answer: "Nee. We gebruiken die bij twijfel of terugkerende klachten." },
    { question: "Hoe lang duurt een ontstopping?", answer: "Vaak 30–90 minuten, afhankelijk van complexiteit." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Wat kost een professionele ontstopping in Vlaanderen?
      </h1>
      <p className="mt-3 text-slate-700">
        De prijs hangt af van toegankelijkheid, ernst, apparatuur (hogedruk/camera) en tijd.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Waar let je op bij offertes</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Voorrij- en uurkost duidelijk gescheiden</li>
        <li>Inclusief/Exclusief: camera, hogedruk, spoelen</li>
        <li>Weekend/nacht toeslag transparant</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Hoe verrassingen vermijden</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Probleem goed beschrijven bij aanvraag</li>
        <li>Foto’s/filmpje meesturen</li>
        <li>Vraag een all-in richtprijs voor typische gevallen</li>
      </ul>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="underline">
          camera-inspectie
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/gereedschap-ontstopping" className="underline">
          gereedschap dat werkt
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
