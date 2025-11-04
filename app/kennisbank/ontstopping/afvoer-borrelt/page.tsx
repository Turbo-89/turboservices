import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Waarom borrelt mijn afvoer? Oorzaken en oplossingen | Turbo Services – RioolExpert",
  description:
    "Borrelt of gorgelt je afvoer? Overzicht van de typische oorzaken – deelverstopping, ontluchting, doorhang – en wat je zelf kunt doen voordat je Turbo Services inschakelt.",
};

const faqs = [
  {
    question: "Is borrelen gevaarlijk?",
    answer:
      "Op zich niet, maar het is vaak een vroeg signaal van verstopping, overlopen of geurproblemen.",
  },
  {
    question: "Komt dit door de buren (appartement)?",
    answer:
      "Ja, in gedeelde stijgleidingen beïnvloeden toestellen van buren elkaar. De oorzaak kan hoger of lager in de leiding zitten.",
  },
  {
    question: "Helpt een ontluchtingsventiel?",
    answer:
      "Soms. Maar alleen als de echte oorzaak correct is vastgesteld. Bij doorhang, breuk of aanslag lost een ventiel het probleem niet op.",
  },
];

export default function AfvoerBorreltPage() {
  return (
    <ArticleShell
      title="Waarom borrelt mijn afvoer?"
      subtitle="Oorzaken, eerste checks en wanneer je beter een rioolexpert inschakelt."
      intro="Borrelen of gorgelen in wc, douche of gootsteen wijst vaak op luchtproblemen of een (gedeeltelijke) verstopping. Dit zijn de typische oorzaken en wat je zelf veilig kunt controleren, vóór je een interventie aanvraagt."
      logoVariant="ontstopping"
    >
      <h2>Typische oorzaken van een borrelende afvoer</h2>
      <p className="mt-3 text-slate-700">
        In de praktijk zie ik vooral deze oorzaken terug:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Deelverstopping</b>: vet, zeep en haren bouwen zich op in de buis. De leiding is niet
          volledig dicht, maar de doormeter is kleiner geworden. Water en lucht moeten zich
          erdoor wringen, wat borrelgeluiden geeft.
        </li>
        <li>
          <b>Ontluchtingsprobleem</b>: ontbrekende of verstopte ontluchting zorgt ervoor dat
          leidingen “vacuüm trekken”. Lucht wordt via sifons aangezogen en je hoort gorgelen.
        </li>
        <li>
          <b>Foutieve helling of doorhang</b>: leidingen die te weinig hellen of doorhangen,
          houden water vast. Bij elke lozing duwt de waterkolom tegen een stilstaande plug en
          verplaatst lucht zich schoksgewijs.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Wat kun je zelf controleren?</h2>
      <p className="mt-3 text-slate-700">
        Zonder breekwerk kun je een aantal zaken zelf nakijken:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Sifons schoonmaken</b>: haal sifons onder lavabo en gootsteen los, reinig ze en
          monteer ze terug. Let op dat de rubbers netjes terug zitten.
        </li>
        <li>
          <b>Plopper gebruiken</b>: kort en gecontroleerd ploppen kan een lokale prop losmaken.
          Niet overdreven hard; doel is beweging in het water, niet het slopen van de leiding.
        </li>
        <li>
          <b>Stankval droog?</b>: bij weinig gebruik kan een sifon leeglopen en borrelen. Laat
          even water lopen om de stankafsluiter opnieuw te vullen.
        </li>
        <li>
          <b>Ontluchting visueel nakijken</b>: op dak of buitengevel kan een ontluchtingspijp
          verstopt raken (bladeren, vogelnest, mos). Zichtbare blokkades voorzichtig wegnemen.
        </li>
      </ul>

      <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-900">
        <b>Let op:</b> vermijd agressieve chemische ontstoppers als standaardoplossing. Ze kunnen
        leidingen en rubbers aantasten en maken professioneel reinigen later moeilijker.
      </div>

      <h2 className="mt-8 text-xl font-semibold">Wanneer Turbo Services inschakelen?</h2>
      <p className="mt-3 text-slate-700">
        Borrelgeluiden zijn vaak een vroeg signaal. Professionele tussenkomst is aangewezen wanneer:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Meerdere toestellen tegelijk tekenen geven: wc, douche, gootsteen,{" "}
          <b>of water komt terug</b> in een lager gelegen afvoer (vloerput, kelder).
        </li>
        <li>
          Er al <b>eerder verstoppingen</b> of <b>geurproblemen</b> waren op hetzelfde punt.
        </li>
        <li>
          Je in een <b>appartementsgebouw</b> zit met gedeelde stijgleidingen en het geluid lijkt
          “van elders” te komen.
        </li>
        <li>
          Je borrelen hoort <b>na verbouwingen</b> of na het aanpassen van de afvoerstructuur.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Professionele diagnose en aanpak</h2>
      <p className="mt-3 text-slate-700">
        Op locatie bekijk ik eerst welke toestellen reageren en in welke volgorde. Daarna kan een
        combinatie nodig zijn van:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Mechanische reiniging</b> van de afvoer met professionele machines, om aanslag en
          deelverstoppingen weg te nemen.
        </li>
        <li>
          <b>Hogedrukreiniging</b> bij langere trajecten of zware aanslag in hoofdleidingen.
        </li>
        <li>
          <b>
            <Link
              href="/kennisbank/ontstopping/camera-inspectie"
              className="underline text-slate-900"
            >
              Camera-inspectie
            </Link>
          </b>{" "}
          om doorhang, breuk of foutieve aansluitingen exact in beeld te brengen.
        </li>
        <li>
          Eventueel bijkomend advies rond ontluchting en de noodzaak van structurele aanpassingen.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Tarieven voor interventie</h2>
      <p className="mt-3 text-slate-700">
        Voor deze diagnoses en ingrepen hanteer ik dezelfde vaste prijsstructuur als bij andere
        rioolproblemen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Interventie ontstopping / diagnose:</b> €160</li>
        <li><b>Camera-inspectie (indien nodig):</b> €90</li>
        <li><b>Totaalpakket (interventie + camera):</b> €250</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Deze tarieven gelden ook <b>’s avonds en in het weekend</b>, zonder toeslag, en zijn
        <b> exclusief btw</b>. Voor particuliere woningen ouder dan 10 jaar geldt doorgaans 6% btw,
        in andere privé-situaties 21%. Voor zakelijke klanten kan bij medecontractantregeling een
        btw-verlegging (0%) van toepassing zijn. Afwijkingen of bijkomende werken worden steeds
        vooraf besproken.
      </p>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/riool-verstopt-signalen"
          className="underline"
        >
          eerste signalen verstopt riool
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
