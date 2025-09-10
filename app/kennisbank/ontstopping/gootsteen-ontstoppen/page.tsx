import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Zelf je gootsteen ontstoppen of loodgieter bellen?",
  description:
    "Gootsteen verstopt? Dit kun je zelf doen—en dit beter overlaten aan een professional. Turbo Services helpt in Antwerpen en Vlaanderen.",
};

export default function Page() {
  const faqs = [
    { question: "Helpt soda echt?", answer: "Ja, bij lichte aanslag. Niet voor harde proppen." },
    { question: "Chemische middelen gebruiken?", answer: "Afraden—risico op schade, dampen en milieu." },
    { question: "Mag ik een veer gebruiken?", answer: "Voorzichtig en kort; bochten en pvc kunnen beschadigen." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Zelf je gootsteen ontstoppen of loodgieter bellen?
      </h1>
      <p className="mt-3 text-slate-700">
        Keukenverstoppingen ontstaan vaak door vet, zeep en etensresten. Zo pak je het doordacht aan.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Zelf doen: veilige volgorde</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>Warm water en 10 minuten inwerken.</li>
        <li>Plopper (overloop afsluiten met tape/hand).</li>
        <li>Sifon reinigen: emmer eronder, losmaken, schoonmaken, terugplaatsen.</li>
        <li>Soda + azijn als nabehandeling.</li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Wanneer bellen?</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Water komt <b>terug</b> in andere toestellen (vaatwasser, spoelbak).</li>
        <li><b>Herhaalde</b> verstopping binnen enkele weken.</li>
        <li><b>Geur</b> of gorgelend geluid (mogelijke rioolissue).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Turbo Services aanpak</h2>
      <p className="mt-3 text-slate-700">
        Sifon + leiding mechanisch reinigen, waar nodig hogedruk. Bij terugkerende klacht:{" "}
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="underline">camera-inspectie</Link>.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Preventie</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Vet nooit in de gootsteen.</li>
        <li>Gebruik een zeefje.</li>
        <li>1×/maand warm waterflush.</li>
      </ul>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/keukenafvoer-voorkomen" className="underline">
          verstopte keukenafvoer voorkomen
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/chemische-ontstoppers" className="underline">
          chemische ontstoppers?
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
