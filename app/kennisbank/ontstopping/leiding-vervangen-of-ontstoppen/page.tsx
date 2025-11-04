import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Leiding vervangen of ontstoppen? Zo maak je de juiste keuze | Turbo Services – RioolExpert",
  description:
    "Blijvende verstoppingen of terugkerende problemen? Lees wanneer ontstoppen volstaat en wanneer een leiding beter structureel vervangen wordt, op basis van camera-inspectie en objectieve diagnose.",
};

const faqs = [
  {
    question: "Wanneer is vervangen onvermijdelijk?",
    answer:
      "Bij breuk, doorhang, structurele fout of zware wortelinslag die blijft terugkeren. Dat tonen we objectief aan via camera-inspectie en testen.",
  },
  {
    question: "Kan herhaald ontstoppen kwaad?",
    answer:
      "Correct uitgevoerd niet. Als de oorzaak structureel is (breuk, doorhang, foutieve aanleg), wordt vervangen op termijn goedkoper en betrouwbaarder.",
  },
  {
    question: "Moet er altijd gebroken worden?",
    answer:
      "Niet altijd. Soms volstaat een lokale herstelling of relining. Op basis van de inspectie adviseren we de meest rendabele optie.",
  },
];

export default function LeidingVervangenOfOntstoppenPage() {
  return (
    <ArticleShell
      title="Leiding vervangen of ontstoppen? Zo maak je de juiste keuze"
      subtitle="Wanneer een grondige reiniging volstaat en wanneer een structurele herstelling of vervanging technisch en financieel de betere optie is."
      intro="Soms is een verstopping het gevolg van aanslag of een lokale prop, soms wijst ze op een dieperliggend probleem zoals breuk, doorhang of foutieve aanleg. Met een correcte diagnose vermijd je dat je blijft betalen voor herhaalde ontstoppingen zonder de oorzaak weg te nemen."
      logoVariant="ontstopping"
    >
      <h2>Wanneer ontstoppen volstaat</h2>
      <p className="mt-3 text-slate-700">
        Een professionele ontstopping is in veel gevallen voldoende, zeker wanneer:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Er sprake is van <b>lichte tot middelzware aanslag</b> (vet, zeep, haren) in keuken
          of badkamerafvoer.
        </li>
        <li>
          De verstopping zich bevindt in een <b>sifon of bocht</b> die mechanisch bereikbaar
          en reinigbaar is.
        </li>
        <li>
          Er geen signalen zijn van <b>doorhang</b>, <b>verzakking</b> of <b>breuk</b>.
        </li>
        <li>
          De problemen na een correcte reiniging langere tijd wegblijven en niet systematisch
          terugkeren.
        </li>
      </ul>

      <p className="mt-4 text-slate-700">
        Bij twijfel voeren we vaak eerst een{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camera-inspectie
        </Link>{" "}
        uit. Zo zien we of de leiding structureel in orde is en volstaat een grondige
        reiniging.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Signalen dat vervanging of herstelling beter is
      </h2>
      <p className="mt-3 text-slate-700">
        Volgende situaties wijzen erop dat een leiding structureel niet meer voldoet:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Terugkerende verstopping</b> kort na een correcte reiniging.
        </li>
        <li>
          Camera-inspectie toont <b>doorhang</b>, <b>breuk</b>, <b>verzakking</b> of{" "}
          <b>wortelinslag</b>.
        </li>
        <li>
          Foutieve diameter of helling, waardoor water en vuil niet correct worden
          afgevoerd.
        </li>
        <li>
          Verouderd materiaal (bijvoorbeeld gres) met zichtbare scheuren of afbrokkeling.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Kosten- en breekwerkafweging</h2>
      <p className="mt-3 text-slate-700">
        Ontstoppen is doorgaans sneller en goedkoper op korte termijn. Bij structurele
        schade wordt dat echter een terugkerende kost, terwijl:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Een <b>gerichte vervanging</b> of herstelling het probleem definitief oplost.
        </li>
        <li>
          De kans op <b>water- en geurproblemen</b> aanzienlijk vermindert.
        </li>
        <li>
          De installatie weer aan de huidige normen en verwachtingen voldoet.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Vandaar dat we altijd vertrekken van een <b>objectieve diagnose</b> (camera,
        doorstromingstest, visuele controle) en pas daarna adviseren: nog een keer reinigen,
        lokaal herstellen of een groter traject vervangen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Hoe Turbo Services adviseert</h2>
      <p className="mt-3 text-slate-700">
        Onze werkwijze is transparant en dossierwaardig:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Eerst de <b>verstopping veilig opheffen</b>, zodat de situatie onder controle is.
        </li>
        <li>
          Daarna <b>inspectie</b> met camera waar zinvol, inclusief lokalisatie van
          probleemzones.
        </li>
        <li>
          <b>Verslag en beeldmateriaal</b> dat bruikbaar is richting aannemer, verzekering of
          syndicus.
        </li>
        <li>
          Een duidelijk voorstel: enkel onderhoud, lokale herstelling of (gedeeltelijke)
          vervanging.
        </li>
      </ul>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/ontstopping-kost"
          className="underline"
        >
          kost ontstopping
        </Link>{" "}
        •{" "}
        <Link
          href="/kennisbank/ontstopping/riool-verstopt-signalen"
          className="underline"
        >
          signalen verstopt riool
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
