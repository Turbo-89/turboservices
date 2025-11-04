import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Hoe voorkom je een verstopte afvoer in de keuken? | Turbo Services – RioolExpert",
  description:
    "Met enkele eenvoudige gewoonten en een maandelijkse routine hou je je keukenafvoer vrij, zonder chemische ontstoppers.",
};

const faqs = [
  {
    question: "Helpt azijn?",
    answer:
      "Als nabehandeling kan het lichte aanslag helpen beperken, maar het lost geen harde proppen of structurele verstoppingen op.",
  },
  {
    question: "Veroorzaakt de vaatwasser verstopping?",
    answer:
      "Indirect wel: vet, zeep en etensresten kunnen neerslaan in de buis, zeker bij onvoldoende helling of oudere leidingen.",
  },
  {
    question: "Maakt materiaal uit (pvc/koper)?",
    answer:
      "Beide materialen kunnen dichtslibben. Pvc is gevoeliger voor krassen door veren of agressieve middelen.",
  },
];

export default function KeukenafvoerVoorkomenPage() {
  return (
    <ArticleShell
      title="Hoe voorkom je een verstopte afvoer in de keuken?"
      subtitle="Dagelijkse gewoonten en eenvoudige routine om problemen op lange termijn te vermijden."
      intro="Keukenleidingen hebben het zwaar te verduren: vet, zeep, etensresten en vaatwasserwater stapelen zich op. Met enkele bewuste gewoonten en een korte maandelijkse controle verklein je de kans op verstoppingen drastisch."
      logoVariant="ontstopping"
    >
      <h2>Dagelijkse gewoonten die echt verschil maken</h2>
      <p className="mt-3 text-slate-700">
        De meeste keukenverstoppingen ontstaan langzaam. Met deze basisgewoonten vermijd je dat
        vet en resten zich kunnen opbouwen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Vet nooit in de gootsteen</b> – laat frituur- of bakvet afkoelen in een pot en gooi
          het bij het restafval.
        </li>
        <li>
          <b>Gebruik een zeefje</b> in de spoelbak en gooi etensresten in de vuilbak, niet in de afvoer.
        </li>
        <li>
          <b>Warmwater-flush</b> na vettige afwas: laat kort warm water lopen om vetresten weg te spoelen.
        </li>
        <li>
          Vermijd overmatig gebruik van <b>agressieve middelen</b> (ontvetters/chemische ontstoppers) in de afvoer.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Maandelijkse routine (±10 minuten)</h2>
      <p className="mt-3 text-slate-700">
        Een korte maandelijkse controle voorkomt dat lichte aanslag uitgroeit tot een echte verstopping:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Sifon losmaken en reinigen</b> – emmer eronder, sifon voorzichtig losdraaien, volledig reinigen en terugplaatsen
          met de rubbers correct op hun plaats.
        </li>
        <li>
          <b>Warm water met wat soda</b> – na montage een hoeveelheid warm (niet kokend) water met een beetje soda door de
          leiding laten lopen.
        </li>
        <li>
          <b>Visuele check</b> – controleer op lekken, sporen van vocht en speling op koppelingen.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Wanneer extra onderhoud aangewezen is</h2>
      <p className="mt-3 text-slate-700">
        In sommige situaties is frequenter onderhoud of professionele controle verstandig:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Huishoudens waar <b>veel gebakken of gefrituurd</b> wordt en regelmatig vet in de buurt van de spoelbak komt.
        </li>
        <li>
          <b>Oudere leidingen</b> of twijfelachtige hellingen, waar water minder vlot wegloopt.
        </li>
        <li>
          Merkbare <b>borrelgeluiden</b>, terugkerende <b>geur</b> of trage afvoer ondanks goed gebruik.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        In die gevallen kan een <b>preventieve reiniging</b> of een{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camera-inspectie
        </Link>{" "}
        zinvol zijn om de staat van de leidingen in kaart te brengen en latere schade te vermijden.
      </p>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/gootsteen-ontstoppen"
          className="underline"
        >
          gootsteen ontstoppen
        </Link>{" "}
        •{" "}
        <Link
          href="/kennisbank/ontstopping/afvoer-borrelt"
          className="underline"
        >
          afvoer borrelt
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
