import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Ontstopping in appartementen of gedeelde riolering: wie betaalt?",
  description:
    "Zo bepaal je of de verstopping privaat of collectief is en wie de kosten draagt.",
};

export default function Page() {
  const faqs = [
    { question: "Wat als enkel mijn appartement last heeft?", answer: "Dan is het vaak privaat. We testen dit en rapporteren." },
    { question: "Wat als de VME weigert?", answer: "Een duidelijk rapport helpt om beslissingen te nemen." },
    { question: "Moet ik de kosten voorschieten?", answer: "Hangt af van regels/afspraken. Facturatie is transparant." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Ontstopping in appartementen of gedeelde riolering: wie betaalt?
      </h1>
      <p className="mt-3 text-slate-700">
        Door eigendomsgrenzen (privé vs. collectief) te begrijpen, bepaal je correct de kostverdeling.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Eigendomsgrens begrijpen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Privé: van toestel tot aansluitpunt</li>
        <li>Collectief: stijgleidingen, hoofdafvoer</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Praktische aanpak</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>Test: hebben meerdere appartementen last?</li>
        <li>Syndicus verwittigen met bevindingen</li>
        <li>Rapport (foto/video) voor kostenverdeling</li>
      </ol>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="underline">
          camera-inspectie
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
