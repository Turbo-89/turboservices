import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Chemische ontstoppers: gebruiken of vermijden? | Turbo Services – RioolExpert",
  description:
    "Zijn chemische ontstoppers een goed idee? Overzicht van risico’s voor leidingen, afdichtingen, gezondheid en milieu, met veilige alternatieven en professionele opties.",
};

const faqs = [
  {
    question: "Mag ik één keer proberen?",
    answer:
      "Het wordt afgeraden. Als je het toch hebt gebruikt, meld dit altijd aan de technieker: combinaties met andere producten of methodes kunnen gevaarlijk zijn.",
  },
  {
    question: "Is schade direct zichtbaar?",
    answer:
      "Niet altijd. Afdichtingen of verbindingen kunnen pas later gaan lekken na herhaalde blootstelling aan agressieve producten.",
  },
  {
    question: "Wat is het milieuvriendelijke alternatief?",
    answer:
      "Mechanische reiniging (plopper, veer, professionele machines) en preventie door goed gebruik en periodisch onderhoud.",
  },
];

export default function ChemischeOntstoppersPage() {
  return (
    <ArticleShell
      title="Chemische ontstoppers: gebruiken of vermijden?"
      subtitle="Waarom ze zelden de beste oplossing zijn bij verstopte leidingen."
      intro="Chemische ontstoppers lijken een snelle oplossing, maar brengen risico’s mee voor leidingen, afdichtingen, gezondheid en milieu. Hier lees je wanneer je ze zeker moet vermijden en welke veilige alternatieven er zijn."
      logoVariant="ontstopping"
    >
      <h2>Waarom chemische ontstoppers problematisch zijn</h2>
      <p className="mt-3 text-slate-700">
        De meeste chemische ontstoppers werken op basis van sterke zuren of basen. Ze lossen organisch materiaal
        gedeeltelijk op, maar:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          kunnen <b>leidingen en rubberen afdichtingen aantasten</b>, zeker bij herhaald gebruik;
        </li>
        <li>
          veroorzaken <b>giftige dampen</b>, vooral in kleine, slecht verluchte ruimtes zoals toiletten en kelders;
        </li>
        <li>
          zijn <b>belastend voor het milieu</b> wanneer ze in grotere hoeveelheden in de riolering terechtkomen;
        </li>
        <li>
          lossen een <b>dieperliggend rioolprobleem</b> (doorhang, breuk, wortelgroei) niet op.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Wanneer zeker níet gebruiken</h2>
      <p className="mt-3 text-slate-700">
        In een aantal situaties zijn chemische ontstoppers ronduit af te raden:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Bij <b>oudere leidingen</b> of waar veel rubberen afdichtingen en koppelingen aanwezig zijn. Dit verhoogt
          de kans op latere lekkages.
        </li>
        <li>
          In combinatie met een <b>septische put</b>: de bacteriecultuur die voor afbraak zorgt, kan verstoord of
          vernietigd worden.
        </li>
        <li>
          Wanneer er al <b>meerdere producten</b> in de leiding zijn gegoten (verschillende merken/soorten): dit kan
          onvoorspelbare en gevaarlijke reacties geven.
        </li>
        <li>
          Als er al <b>zichtbare schade</b> is (scheuren, vervorming, lekkage): extra chemie verergert dit meestal.
        </li>
      </ul>

      <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-900">
        <b>Belangrijk:</b> heb je chemische ontstoppers gebruikt en beslis je daarna om een professional te bellen?
        Meld dit altijd vooraf. De technieker moet weten welke producten in de leiding zitten om veilig te kunnen werken.
      </div>

      <h2 className="mt-8 text-xl font-semibold">Veilige alternatieven</h2>
      <p className="mt-3 text-slate-700">
        In veel gevallen zijn mechanische en milde methodes efficiënter én veiliger:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Plopper, sifon reinigen, warm water</b> – voor lokale verstoppingen aan lavabo, gootsteen of douche.
        </li>
        <li>
          <b>Soda + azijn</b> – kan lichte aanslag helpen losmaken, maar is geen oplossing voor ernstige of structurele
          verstoppingen.
        </li>
        <li>
          <b>Professionele mechanische reiniging</b> – met veermachines en hogedruk kan een leiding grondig en gecontroleerd
          gereinigd worden, zonder chemie.
        </li>
      </ul>

      <p className="mt-3 text-slate-700">
        Bij terugkerende problemen of twijfel aan de staat van de leiding is{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camera-inspectie
        </Link>{" "}
        vaak aangewezen om breuk, doorhang of wortelgroei uit te sluiten.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Wanneer Turbo Services inschakelen?</h2>
      <p className="mt-3 text-slate-700">
        Het is zinvol om een professional in te schakelen wanneer:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>verstopping terugkomt na korte tijd;</li>
        <li>meerdere toestellen tegelijk problemen geven (wc, douche, gootsteen, vloerput);</li>
        <li>er <b>geurhinder</b> of <b>vochtproblemen</b> zijn langs muren of vloeren;</li>
        <li>je al chemische ontstoppers hebt geprobeerd zonder blijvend resultaat.</li>
      </ul>
      <p className="mt-3 text-slate-700">
        In plaats van nog meer producten toe te voegen, is een mechanische reiniging meestal veiliger en uiteindelijk
        goedkoper. Tijdens de interventie wordt ook beoordeeld of bijkomend onderzoek (zoals camera-inspectie) nuttig is.
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
          href="/kennisbank/ontstopping/gereedschap-ontstopping"
          className="underline"
        >
          gereedschap dat werkt
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
