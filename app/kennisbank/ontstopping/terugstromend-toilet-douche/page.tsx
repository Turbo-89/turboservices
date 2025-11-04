import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Terugstromend toilet of douche: oorzaken en aanpak | Turbo Services – RioolExpert",
  description:
    "Water dat terugkomt via wc of douche wijst op een probleem in de hoofdriolering of terugslagklep. Lees hoe je dit herkent en blijvend oplost.",
};

const faqs = [
  {
    question: "Is terugstroming gevaarlijk?",
    answer:
      "Ja. Er is risico op verontreinigd water dat via afvoeren in huis terechtkomt. Snel handelen voorkomt schade en gezondheidsrisico’s.",
  },
  {
    question: "Helpt een dompelpomp?",
    answer:
      "Een dompelpomp kan tijdelijk helpen bij nood, maar het onderliggende probleem blijft bestaan. De leiding moet structureel worden vrijgemaakt en beveiligd.",
  },
  {
    question: "Komt dit terug bij regen?",
    answer:
      "Ja, vaak wel. Bij regenwater dat samen met afvalwater wordt afgevoerd is een correcte terugslagklep en juiste helling van de leidingen essentieel.",
  },
];

export default function TerugstromendToiletPage() {
  return (
    <ArticleShell
      title="Terugstromend toilet of douche: oorzaken en aanpak"
      subtitle="Waarom water terugkomt via wc of douche, en hoe een juiste diagnose en terugslagklep het probleem definitief oplossen."
      intro="Water dat via wc, douche of kelderput terugkomt, duidt meestal op een opstopping in de hoofdriolering of een defecte of ontbrekende terugslagklep. Tijdig ingrijpen voorkomt schade en geurproblemen. Hier lees je hoe je het herkent en structureel aanpakt."
      logoVariant="ontstopping"
    >
      <h2>Hoe herken je terugstroming</h2>
      <p className="mt-3 text-slate-700">
        De eerste tekenen lijken onschuldig, maar wijzen vaak op een dieperliggend probleem in
        de riolering of de waterafvoer. Typische signalen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Water borrelt of stijgt bij het doorspoelen van de wc.</li>
        <li>Douche of bad loopt vol bij gebruik van andere afvoeren.</li>
        <li>Putjes in kelder of wasplaats waar water uit omhoogkomt.</li>
        <li>Geur of klokkend geluid bij hevige regen.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Eerste stappen bij terugstroming</h2>
      <p className="mt-3 text-slate-700">
        Zodra water via een toilet, douche of vloerput terugkomt, onderneem je best direct
        deze acties:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Stop onmiddellijk met waterverbruik in keuken, badkamer en wasplaats.</li>
        <li>Controleer de <b>terugslagklep</b> of <b>put in de kelder</b> op waterstand.</li>
        <li>
          Vermijd doorduwen of herhaald doorspoelen – dit verhoogt het risico op overstroming.
        </li>
        <li>
          Bel een professional zodra meerdere toestellen tegelijk terugslag vertonen.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Technische oorzaken</h2>
      <p className="mt-3 text-slate-700">
        Terugstroming is meestal het gevolg van een fout in de afvoerstructuur of een
        geblokkeerde hoofdleiding:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Vernauwde of verstopte hoofdleiding</b> – veroorzaakt terugduwen van water bij
          gebruik van andere afvoeren.
        </li>
        <li>
          <b>Ontbrekende of defecte terugslagklep</b> – laat water vanuit het riool terug
          stromen bij hoge belasting of regenval.
        </li>
        <li>
          <b>Verkeerde helling of verzakking</b> – water stroomt niet volledig weg en duwt bij
          drukverschillen terug naar boven.
        </li>
        <li>
          <b>Combinatie met regenwaterafvoer</b> – bij hevige regen overbelast het systeem
          sneller.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Definitieve oplossing</h2>
      <p className="mt-3 text-slate-700">
        De structurele oplossing bestaat uit diagnose, gerichte reiniging en preventieve
        aanpassing:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Camera-inspectie</b> om blokkades, breuken of doorhang te lokaliseren.
        </li>
        <li>
          <b>Mechanische of hogedrukreiniging</b> van de hoofdleiding.
        </li>
        <li>
          <b>Installatie of vervanging van terugslagklep</b> met juiste plaatsing volgens
          norm.
        </li>
        <li>
          Eventuele <b>aanpassing van helling of aansluiting</b> om waterafvoer te
          optimaliseren.
        </li>
      </ol>
      <p className="mt-3 text-slate-700">
        Na uitvoering volgt steeds een test van de volledige afvoer. Waar nodig adviseren we
        bijkomende maatregelen om herhaling te voorkomen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Preventie op lange termijn</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Laat leidingen periodiek reinigen en controleren met camera.</li>
        <li>Controleer werking van terugslagklep minstens jaarlijks.</li>
        <li>Houd vloerputten gevuld en goed bereikbaar voor controle.</li>
        <li>
          Vermijd het lozen van vet of doekjes, die de doorstroming snel beperken.
        </li>
      </ul>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/riool-verstopt-signalen"
          className="underline"
        >
          eerste signalen verstopt riool
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
