import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Septische put: problemen, onderhoud en wanneer (niet) ruimen | Turbo Services – RioolExpert",
  description:
    "Geur, borrelen of traag weglopen bij septische put? Uitleg over diagnose, onderhoud en wanneer ruimen echt nodig is, vaak na eerst ontstoppen en testen.",
};

const faqs = [
  {
    question: "Moet ik altijd ruimen bij geur of verstopping?",
    answer:
      "Nee. Vaak kunnen we eerst de leidingen ontstoppen en de doorstroming herstellen zonder te ruimen. Na inspectie en testen bepalen we objectief of ruimen echt nodig is.",
  },
  {
    question: "Hoe vaak moet ik een septische put laten ruimen?",
    answer:
      "Dat hangt af van volume, gebruik en aantal bewoners. Gemiddeld om de 2–4 jaar, maar alleen wanneer het slibniveau effectief te hoog is.",
  },
  {
    question: "Is een additief nuttig?",
    answer:
      "Bij correct gebruik is een additief meestal niet nodig. Additieven lossen structurele problemen, breuken of vaste proppen niet op.",
  },
];

export default function SeptischePutPage() {
  return (
    <ArticleShell
      title="Septische put: problemen, onderhoud en wanneer (niet) ruimen"
      subtitle="Wat je zelf kunt controleren, welke volgorde technisch correct is en wanneer ruimen echt aangewezen is."
      intro="Geur, borrelen of traag weglopen kan te maken hebben met je septische put, maar even goed met de leidingen vóór of na de put. In de meeste gevallen starten we met een ontstoppings- en controle-interventie. Pas daarna beslissen we objectief of ruimen nodig is."
      logoVariant="ontstopping"
    >
      <h2>Typische symptomen bij septische put of leidingen</h2>
      <p className="mt-3 text-slate-700">
        Volgende signalen komen vaak voor bij een combinatie van leiding- en putproblemen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Gorgelen, stank of terugslag</b> bij wc, douche of andere afvoeren.
        </li>
        <li>
          Put die <b>hoog staat</b> of zichtbaar overloopt bij regen.
        </li>
        <li>
          <b>Periodieke verstopping</b> ondanks eerdere reiniging of tijdelijke oplossingen.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Belangrijk is om eerst te bepalen of het probleem in de <b>aanvoerleidingen</b>, in de{" "}
        <b>septische put zelf</b> of in de <b>afvoer na de put</b> zit. Dat bepaalt of ontstoppen,
        ruimen of structurele herstelling nodig is.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Onze diagnose en juiste volgorde</h2>
      <p className="mt-3 text-slate-700">
        Om onnodige ruimkosten te vermijden, hanteren we een vaste volgorde:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Leidingen ontstoppen</b> vóór en na de put en de doorstroming testen. Zo sluiten we
          een klassieke verstopping uit.
        </li>
        <li>
          <b>Camera-inspectie</b> waar mogelijk, om breuk, doorhang of wortelinslag in kaart te
          brengen en het niveau in de put visueel te beoordelen.
        </li>
        <li>
          <b>Objectief advies</b>: enkel ruimen als het slibniveau of de inhoud daar effectief
          aanleiding toe geeft.
        </li>
      </ol>
      <p className="mt-3 text-slate-700">
        Op basis van de beelden en testen volgen duidelijke aanbevelingen: alleen ruimen, eerst
        structureel herstellen, of periodiek onderhoud inplannen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Wanneer ruimen wel aangewezen is</h2>
      <p className="mt-3 text-slate-700">
        Ruimen is zinvol zodra de put zijn functie niet meer correct kan vervullen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Het <b>slibniveau staat te hoog</b> ten opzichte van de uitlaat, waardoor doorstroming
          beperkt raakt.
        </li>
        <li>
          Er is sprake van <b>regelmatige overloop</b> of opstuwing bij hogere belasting.
        </li>
        <li>
          De put werd jarenlang niet gecontroleerd en er zijn duidelijke geur- en
          doorstroomproblemen.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Ruimen zonder eerst de leidingen en het traject te controleren kan ertoe leiden dat
        problemen slechts tijdelijk verdwijnen of zelfs verergeren als er elders een blokkade
        aanwezig blijft.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Preventie en correct gebruik</h2>
      <p className="mt-3 text-slate-700">
        Met een aantal eenvoudige regels beperk je de kans op problemen aanzienlijk:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Geen <b>vet, olie, doekjes</b>, vochtige doekjes of maandverband in het systeem.
        </li>
        <li>
          <b>Agressieve chemicaliën vermijden</b>: ze verstoren het biologische proces en lossen
          structurele proppen niet op.
        </li>
        <li>
          Laat geen <b>stankafsluiters</b> (vloerputjes) droogvallen: vul ze af en toe met water.
        </li>
        <li>
          Plan een controle bij terugkerende <b>borrelgeluiden, stank of traag weglopen</b>.
        </li>
      </ul>

      <p className="mt-4 text-slate-700">
        Bij twijfel is een gecombineerde interventie (ontstopping +{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camera-inspectie
        </Link>
        ) meestal de meest efficiënte en juridisch goed te onderbouwen aanpak.
      </p>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/terugstromend-toilet-douche"
          className="underline"
        >
          terugstromend toilet/douche
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">
          afvoer borrelt
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
