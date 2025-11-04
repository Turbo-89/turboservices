import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Riool verstopt: eerste signalen en wat te doen | Turbo Services – RioolExpert",
  description:
    "Herken vroegtijdig de signalen van een verstopt riool: gorgelen, stank of terugslag. Zo beperk je schade en voorkom je structurele problemen.",
};

const faqs = [
  {
    question: "Verergert regen het probleem?",
    answer:
      "Ja. Bij gecombineerde afvoersystemen (regen- en afvalwater samen) kan hevige regen het systeem snel overbelasten, waardoor water terugstroomt via de laagste afvoerpunten.",
  },
  {
    question: "Is een terugslagklep verplicht?",
    answer:
      "Dat hangt af van het type aansluiting en de hoogte van het gebouw. We adviseren ter plaatse of dit nuttig of verplicht is volgens de plaatselijke normen.",
  },
  {
    question: "Moet er altijd gebroken worden?",
    answer:
      "Nee. In de meeste gevallen volstaat reinigen en camera-inspectie om het probleem te lokaliseren zonder breekwerk.",
  },
];

export default function RioolVerstoptSignalenPage() {
  return (
    <ArticleShell
      title="Riool verstopt: eerste signalen en wat te doen"
      subtitle="Herken de vroege waarschuwingssignalen om schade en geurproblemen te voorkomen."
      intro="Een verstopt riool ontwikkelt zich meestal geleidelijk. Door tijdig te reageren op kleine veranderingen – borrelen, geur, traag aflopen – voorkom je terugslag en waterschade. Dit zijn de meest herkenbare signalen en de juiste stappen om snel te handelen."
      logoVariant="ontstopping"
    >
      <h2>Vroege waarschuwingen</h2>
      <p className="mt-3 text-slate-700">
        Deze signalen wijzen erop dat het water niet meer vlot weg kan en dat een
        gedeeltelijke verstopping of ontluchtingsprobleem aanwezig is:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Gorgelen of borrelen</b> in wc, douche of bad tijdens het doorspoelen.
        </li>
        <li>
          <b>Langzaam weglopend water</b> in meerdere toestellen tegelijk (keuken, wc,
          douche).
        </li>
        <li>
          <b>Stank uit afvoer of kelder</b>, vooral bij wind of regen.
        </li>
        <li>
          <b>Terugslagklep</b> die hoorbaar sluit of water dat in putjes omhoogkomt.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Snel en correct handelen</h2>
      <p className="mt-3 text-slate-700">
        Zodra meerdere toestellen tegelijk traag aflopen of borrelen, is het belangrijk
        om meteen te reageren:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Niet blijven doorspoelen</b> of bijkomend water gebruiken; dit vergroot het
          risico op overloop.
        </li>
        <li>
          <b>Waterverbruik beperken</b> tot de inspectie of interventie voltooid is.
        </li>
        <li>
          <b>Contact opnemen</b> bij gelijktijdige hinder in meerdere afvoeren of
          verdiepingen.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Hoe Turbo Services het aanpakt</h2>
      <p className="mt-3 text-slate-700">
        We voeren eerst een{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camera-inspectie
        </Link>{" "}
        uit om te bepalen waar de blokkade zich bevindt. Vervolgens reinigen we
        mechanisch of met hogedruk, afhankelijk van het type leiding en de ernst van de
        verstopping.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Inspectie zonder onnodig breekwerk.</li>
        <li>Gerichte reiniging met professionele apparatuur.</li>
        <li>Advies om herhaling te vermijden (onderhoud of structurele aanpassing).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Preventie en onderhoud</h2>
      <p className="mt-3 text-slate-700">
        Regelmatig onderhoud en controle beperken het risico op overstroming of geur.
        Vooral oudere leidingen en woningen met bomen in de buurt zijn gevoelig voor
        aanslag en wortelgroei.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>1× per 1-2 jaar reinigen van keuken- en hoofdrioolleidingen.</li>
        <li>Na hevige regen of verbouwingen extra controle uitvoeren.</li>
        <li>Gebruik van chemische ontstoppers vermijden; die lossen de oorzaak niet op.</li>
      </ul>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">
          afvoer borrelt
        </Link>{" "}
        •{" "}
        <Link
          href="/kennisbank/ontstopping/terugstromend-toilet-douche"
          className="underline"
        >
          terugstromend toilet of douche
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
