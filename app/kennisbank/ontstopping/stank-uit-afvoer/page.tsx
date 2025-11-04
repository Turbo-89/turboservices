import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Stank uit afvoer: oorzaken en oplossingen | Turbo Services – RioolExpert",
  description:
    "Onaangename geur uit afvoer of kelder? Overzicht van de meest voorkomende oorzaken (droge sifon, aanslag, ontluchting, lek) en de stappen om het structureel op te lossen.",
};

const faqs = [
  {
    question: "Helpt een geurslotreiniger of ‘freshener’?",
    answer:
      "Die kan de geur tijdelijk maskeren, maar pakt de oorzaak niet aan. Beter is de sifon reinigen en de leidingen controleren op aanslag en ontluchtingsproblemen.",
  },
  {
    question: "Kan een droge sifon stank veroorzaken?",
    answer:
      "Ja. Als een stankafsluiter uitdroogt (bij weinig gebruik of onderdruk) is er geen waterstop meer en komt rioollucht rechtstreeks binnen. Bijvullen met water of het systeem laten nakijken is noodzakelijk.",
  },
  {
    question: "Wat als de geur uit de kelder komt?",
    answer:
      "Dan is er mogelijk een lek, open verbinding of probleem aan de hoofdriolering. In dat geval is een professionele inspectie met camera of rooktest aangewezen.",
  },
];

export default function StankUitAfvoerPage() {
  return (
    <ArticleShell
      title="Stank uit afvoer: oorzaken en oplossingen"
      subtitle="Hoe je een rioolgeur correct lokaliseert en structureel oplost, zonder eindeloos te maskeren."
      intro="Onaangename geuren uit afvoeren of kelder wijzen meestal op een droog stankafsluiter, aanslag in de leiding, foutieve ontluchting of een lek/open verbinding. Door volgens de juiste volgorde te werken, wordt snel duidelijk of het gaat om een eenvoudig oplosbaar probleem of een structurele rioolkwestie."
      logoVariant="ontstopping"
    >
      <h2>Meest voorkomende oorzaken van rioolgeur</h2>
      <p className="mt-3 text-slate-700">
        De bron van de geur ligt niet altijd op de plaats waar je ze ruikt. Dit zijn de
        oorzaken die in de praktijk het vaakst voorkomen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Droge sifon (stankafsluiter)</b>: bij zelden gebruikte toestellen of onderdruk
          verdampt het water in de sifon en is er geen geurstop meer.
        </li>
        <li>
          <b>Vet- en zeepaanslag</b>: bacteriegroei in sifons en leidingen veroorzaakt een
          typische riool- of rottingsgeur.
        </li>
        <li>
          <b>Ontluchtingsprobleem</b>: bij onvoldoende of foutieve ontluchting ontstaat
          vacuüm dat stankafsluiters leegzuigt.
        </li>
        <li>
          <b>Open of losse verbinding</b> of een <b>lek</b> in een leiding, vaak merkbaar in
          kelders of kruipruimtes.
        </li>
        <li>
          <b>Terugslag</b> bij regen of bijna dichte hoofdleiding, waardoor rioollucht via
          laagste punten naar binnen komt.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Wat je zelf eerst kunt controleren</h2>
      <p className="mt-3 text-slate-700">
        Voor je een interventie aanvraagt, kun je een aantal basiscontroles veilig zelf
        uitvoeren:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Vul alle sifons met water</b> (ook vloerputjes) en kijk of de geur tijdelijk
          verdwijnt. Blijft de geur, dan is er mogelijk meer aan de hand.
        </li>
        <li>
          <b>Reinig de sifon</b> van lavabo, douche, bad of keukenafvoer en spoel na met warm
          water om aanslag te verwijderen.
        </li>
        <li>
          Controleer op <b>borrelgeluiden</b> bij het spoelen of aflopen. Zie ook{" "}
          <Link
            href="/kennisbank/ontstopping/afvoer-borrelt"
            className="underline"
          >
            afvoer borrelt
          </Link>
          ; dit kan wijzen op een ontluchtingsprobleem of (deel)verstopping.
        </li>
        <li>
          Controleer zichtbaar bereikbare verbindingen op <b>vochtplekken</b> of{" "}
          <b>lekranden</b>.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Wanneer professionele hulp nodig is</h2>
      <p className="mt-3 text-slate-700">
        Blijft de geur aanwezig na de basiscontroles, of komt de geur duidelijk uit de
        kelder, kruipruimte of vloerputten, dan is verdere diagnose zinvol:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Gerichte <b>reiniging</b> van leidingen om aanslag en slib te verwijderen.
        </li>
        <li>
          <Link
            href="/kennisbank/ontstopping/camera-inspectie"
            className="underline text-slate-900"
          >
            Camera-inspectie
          </Link>{" "}
          om lekken, open verbindingen of doorhang op te sporen.
        </li>
        <li>
          Indien nodig een <b>rooktest</b> om exact te zien waar rook (en dus geur) ontsnapt.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Op basis van die bevindingen volgt een concreet advies: enkel reinigen, verbinding
        herstellen, extra ontluchting voorzien of een deel van de leiding vernieuwen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Chemische middelen en geurtjesmaskers</h2>
      <p className="mt-3 text-slate-700">
        Geurblokjes, “fresheners” of geurslotreinigers lijken een snelle oplossing, maar
        lossen de oorzaak niet op. In sommige gevallen verergeren ze zelfs de aanslag in
        leidingen.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Ze maskeren geur maar pakken <b>lekken, open verbindingen of ontluchting</b> niet aan.
        </li>
        <li>
          Agressieve chemicaliën kunnen <b>afdichtingen aantasten</b> en leiden tot echte lekken.
        </li>
        <li>
          Structurele problemen worden zo vaak te laat aangepakt, met meer schade tot gevolg.
        </li>
      </ul>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/afvoer-borrelt"
          className="underline"
        >
          afvoer borrelt
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
