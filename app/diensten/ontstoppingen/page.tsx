import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Ontstoppingen | Turbo Services",
  description:
    "Snelle, schadevrije ontstoppingen in de opstartfase. Kernexpertise: rioolcamera & gerichte rioolherstellingen voor moeilijke dossiers.",
};

export default function Page() {
  const faqs = [
    {
      question: "Blijven jullie standaard ontstoppingen doen?",
      answer:
        "In deze opstartfase wel. Onze kernexpertise is camera-inspectie en gerichte rioolherstellingen. Als de vraag te groot wordt, focussen we opnieuw op complexe interventies met camera.",
    },
    {
      question: "Kunnen jullie meteen camera-inspectie doen?",
      answer:
        "Ja. Op aanvraag voeren we tijdens de interventie ook een camera-inspectie uit en bezorgen we een kort rapport met bevindingen.",
    },
    {
      question: "Gelden er toeslagen ’s avonds of in het weekend?",
      answer:
        "Buiten kantooruren kan een toeslag van toepassing zijn. We communiceren steeds vooraf een transparante richtprijs.",
    },
  ];

  const faqJson = [
    {
      question: "Wat kost een standaard ontstopping?",
      answer:
        "Richtprijs vanaf €160 (typische woning, goed bereikbaar). Camera-inspectie als optie: +€90. Buiten kantooruren kan een toeslag gelden.",
    },
    ...faqs,
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Riool interventie</h1>

      {/* Positionering */}
      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-slate-700">
          <b>Waar we voor staan:</b> Turbo Services positioneert zich als <b>Riool-Expert</b> — gespecialiseerd in{" "}
          <Link href="/diensten/camera-inspectie-rapport" className="underline">
            camera-inspectie & rapport
          </Link>{" "}
          en in{" "}
          <Link href="/diensten/gerichte-rioolherstellingen" className="underline">
            gerichte rioolherstellingen
          </Link>{" "}
          voor de écht moeilijke gevallen (terugkerende verstoppingen, breuken, doorhang, discussies met verzekeraar of gemeente).
        </p>
       
      </div>

      {/* Wat we oplossen / aanpak */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Wat we nu oplossen</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Wc, gootsteen, douche en bad</li>
            <li>Hoofdriolering en regenafvoer</li>
            <li>Gorgelende afvoer en rioolgeur</li>
          </ul>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Onze werkwijze</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Veilige eerste hulp en diagnose</li>
            <li>Mechanische/hogedruk reiniging (geen agressieve chemicaliën)</li>
            <li>
              {" "}
              <Link href="/diensten/camera-inspectie-rapport" className="underline">
                camera-inspectie & kort rapport
              </Link>{" "}
              om de échte oorzaak te objectiveren
            </li>
          </ul>
        </div>
      </section>

      {/* Prijzenblok */}
      <section className="mt-8 rounded-2xl border p-5">
        <h2 className="text-lg font-semibold text-slate-900">Richtprijzen</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border p-4">
            <div className="text-slate-900 font-medium">Standaard ontstopping</div>
            <div className="mt-1 text-2xl font-bold">vanaf €160</div>
            <ul className="mt-2 list-disc pl-5 text-slate-700 text-sm">
              <li>Typische woning, goed bereikbare leiding</li>
              <li>Mechanisch/hogedruk, 30–90 min is vaak voldoende</li>
              <li>Transparante prijs vóór we starten</li>
            </ul>
          </div>
          <div className="rounded-xl border p-4">
            <div className="text-slate-900 font-medium">Camera-inspectie </div>
            <div className="mt-1 text-2xl font-bold">+ €90</div>
            <ul className="mt-2 list-disc pl-5 text-slate-700 text-sm">
              <li>Live beelden, lokalisatie en kort verslag</li>
              <li>Ideaal bij terugkerende klachten of twijfel</li>
              <li>Onderbouwd advies (verzekeraar/aannemer)</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          <b>Opmerking:</b> avond/weekend kan een toeslag hebben. Complexe of slecht bereikbare situaties kunnen afwijken —
          we communiceren dit altijd vooraf.
        </p>
      </section>

      {/* Kennisbank links */}
      <div className="mt-8 rounded-xl bg-slate-50 p-5 text-slate-700">
        <b>Zelf eerst proberen?</b> Lees onze stap-voor-stap gidsen:{" "}
        <Link href="/kennisbank/ontstopping/verstopte-wc" className="underline">
          verstopte wc
        </Link>
        {", "}
        <Link href="/kennisbank/ontstopping/gootsteen-ontstoppen" className="underline">
          gootsteen ontstoppen
        </Link>
        {", "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">
          afvoer borrelt
        </Link>
        .
      </div>

      <CTA
        title="Hulp nodig bij een verstopping?"
        subtitle="Bel 24/7 of vraag direct een interventie aan. Camera-inspectie & rapport kan meteen tijdens de interventie."
      />

      <FAQJsonLd items={faqJson} />
    </main>
  );
}
