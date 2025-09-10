import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Stank uit afvoer: oorzaken en oplossingen",
  description:
    "Ruikt je afvoer onaangenaam? Dit zijn de meest voorkomende oorzaken en de stappen om het snel en veilig te verhelpen.",
};

export default function Page() {
  const faqs = [
    {
      question: "Helpt een geurslotreiniger of ‘freshener’?",
      answer:
        "Tijdelijk kan de geur maskeren, maar de oorzaak los je er niet mee op. Beter is de sifon en leidingen reinigen.",
    },
    {
      question: "Kan een droge sifon stank veroorzaken?",
      answer:
        "Ja. Als een stankafsluiter uitdroogt (bij weinig gebruik of onderdruk) komt rioollucht binnen. Vul met water of laat het nakijken.",
    },
    {
      question: "Wat als de geur uit de kelder komt?",
      answer:
        "Dan is er mogelijk een lek, open verbinding of probleem aan de hoofdriolering. Laat dit professioneel inspecteren (camera/rooktest).",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Stank uit afvoer: oorzaken en oplossingen</h1>
      <p className="mt-3 text-slate-700">
        Onaangename geuren wijzen vaak op een droog stankafsluiter, aanslag in de leiding, foutieve ontluchting of een lek/open verbinding.
        Met de juiste volgorde verhelp je het meestal snel.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Meest voorkomende oorzaken</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Droge sifon</b> (stankafsluiter): bij zelden gebruikte toestellen of door onderdruk.</li>
        <li><b>Vet/zeep-aanslag</b>: bacteriële geur in sifon en afvoer.</li>
        <li><b>Ontluchtingsprobleem</b>: vacuüm trekt stankafsluiters leeg.</li>
        <li><b>Open/losse verbinding</b> of <b>lek</b> in leiding.</li>
        <li><b>Terugslag</b> bij regen of bijna dichte hoofdleiding.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Zelf eerst proberen</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>Vul alle sifons met water (ook vloerputjes) en controleer op lekkage.</li>
        <li>Reinig de sifon en spoel na met warm water; verwijder aanslag.</li>
        <li>Controleer ontluchting (borrelen? zie {" "}
          <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">afvoer borrelt</Link> ).</li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Professionele oplossing</h2>
      <p className="mt-3 text-slate-700">
        Bij aanhoudende geur voeren we een <b>gerichte reiniging</b> uit en con
