import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Terugstromend toilet of douche: oorzaken en aanpak",
  description:
    "Water dat terugkomt via wc of douche wijst op een dieper probleem. Zo los je het blijvend op.",
};

export default function Page() {
  const faqs = [
    { question: "Is terugstroming gevaarlijk?", answer: "Ja, risico op vervuild water in huis. Snel handelen." },
    { question: "Helpt een dompelpomp?", answer: "Tijdelijk wel, maar de oorzaak moet worden opgelost." },
    { question: "Komt dit terug bij regen?", answer: "Vaak wel. Dan is een terugslagklep en correcte aanleg cruciaal." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Terugstromend toilet of douche: oorzaken en aanpak
      </h1>
      <p className="mt-3 text-slate-700">
        Terugstroming wijst vaak op een bijna dichte hoofdleiding of ontbrekende/defecte terugslagklep.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Eerste stappen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Waterverbruik beperken</li>
        <li>Controleer kelder/put</li>
        <li>Niet doorduwen—risico op overstroom</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Definitieve oplossing</h2>
      <p className="mt-3 text-slate-700">
        Reinigen + camera, correcte terugslagklep, en indien nodig aanpassing van hellingen.
      </p>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/riool-verstopt-signalen" className="underline">
          eerste signalen verstopt riool
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
