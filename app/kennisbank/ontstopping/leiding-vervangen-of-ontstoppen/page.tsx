import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Leiding vervangen of ontstoppen? Zo maak je de juiste keuze | Turbo Services – RioolExpert",
  description:
    "Blijvende verstopping of terugkerende problemen? Overzicht wanneer ontstoppen volstaat en wanneer vervangen of herstelling technisch en financieel de betere keuze is.",
};

const faqs = [
  {
    question: "Wanneer is vervangen onvermijdelijk?",
    answer:
      "Bij breuk, doorhang, structurele fout of zware wortelinslag die blijft terugkeren. Dat wordt objectief vastgesteld via camera-inspectie.",
  },
  {
    question: "Kan herhaald ontstoppen kwaad?",
    answer:
      "Correct uitgevoerd niet. Maar als de oorzaak structureel is, wordt op termijn vervangen of herstelling meestal goedkoper en betrouwbaarder.",
  },
  {
    question: "Moet er altijd gebroken worden?",
    answer:
      "Niet altijd. Soms volstaat een lokale herstelling of relining. De juiste aanpak hangt af van de camerabeelden en de bereikbaarheid.",
  },
];

export default function LeidingVervangenOfOntstoppenPage() {
  return (
    <ArticleShell
      title="Leiding vervangen of ontstoppen? Zo maak je de juiste keuze"
      subtitle="Wanneer een grondige reiniging volstaat en wanneer structurele herstelling noodzakelijk is."
      intro={
        <>
          Soms is een verstopping het gevolg van aanslag of een lokale prop, soms duidt ze op
          een dieper liggend probleem zoals breuk, doorhang of foutieve aanleg. Met een
          combinatie van mechanische reiniging en{" "}
          <Link
            href="/kennisbank/ontstopping/camera-inspectie"
            className="underline text-slate-900"
          >
            camera-inspectie
          </Link>{" "}
          wordt objectief bepaald welke aanpak technisch en financieel het meest rendabel is.
        </>
      }
      logoVariant="ontstopping"
    >
      <h2>Wanneer ontstoppen volstaat</h2>
      <p className="mt-3 text-slate-700">
        In deze situaties is een grondige reiniging doorgaans voldoende en is vervangen niet
        meteen aan de orde:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Lichte tot middelzware aanslag</b> (vet, zeep, haren) in verder gezonde leidingen.
        </li>
        <li>
          <b>Lokale prop</b> in sifon of eerste bocht, bijvoorbeeld door etensresten of
          vreemde voorwerpen.
        </li>
        <li>
          Geen aanwijzingen van <b>doorhang, verzakking, breuk</b> of wortelinslag op basis van
          gebruiksgeschiedenis en eventuele vorige inspecties.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        In zulke gevallen kan een professionele mechanische reiniging (en indien nodig
        hogedrukreiniging) de leiding weer op normale doorstroming brengen, zonder structurele
        ingrepen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Signalen dat vervanging of structurele herstelling beter is
      </h2>
      <p className="mt-3 text-slate-700">
        Volgende signalen wijzen op een onderliggend probleem waar enkel ontstoppen geen
        duurzame oplossing meer is:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Terugkerende verstoppingen</b> kort na een correcte reiniging, telkens in dezelfde
          zone.
        </li>
        <li>
          Camera-inspectie toont duidelijke <b>doorhang</b>, <b>breuk</b>, <b>vervorming</b> of{" "}
          <b>wortelinslag</b>.
        </li>
        <li>
          <b>Foutieve aanleg</b>: verkeerde helling, te kleine diameter of onlogische route met
          te veel bochten.
        </li>
        <li>
          <b>Verouderd materiaal</b> zoals gres met scheuren, of sterk aangetaste verbindingen.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        In zulke dossiers is een eenmalige vernieuwing of gerichte herstelling vaak goedkoper
        dan steeds opnieuw laten ontstoppen met korte tussenperiodes.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Kosten, breekwerk en dossieropbouw</h2>
      <p className="mt-3 text-slate-700">
        Ontstoppen is relatief snel en budgetvriendelijk. Bij structurele schade verschuift de
        afweging naar <b>totale kost op langere termijn</b> en naar de impact van breekwerk:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Een of enkele gerichte{" "}
          <b>ontstoppingsinterventies met camera-inspectie</b> geven een objectief beeld van de
          staat van de leiding.
        </li>
        <li>
          Met <b>nauwkeurige lokalisatie</b> kan breekwerk beperkt worden tot de echte
          probleemzone in plaats van volledige trajecten open te breken.
        </li>
        <li>
          Beelden en verslag zijn bruikbaar richting <b>verzekering, aannemer of syndicus</b>.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Ik werk met één duidelijke prijsstructuur voor dit soort dossiers:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Interventie ontstopping / diagnose:</b> €160</li>
        <li><b>Camera-inspectie:</b> €90</li>
        <li><b>Totaalpakket (ontstopping + camera):</b> €250</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Deze tarieven gelden ook <b>’s avonds en in het weekend</b>, zonder toeslag, en zijn
        <b> exclusief btw</b>. Voor particuliere woningen ouder dan 10 jaar geldt doorgaans 6%
        btw, in andere privé-situaties 21%. Voor zakelijke klanten kan bij medecontractantregeling
        een btw-verlegging (0%) van toepassing zijn.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Advies op maat na inspectie</h2>
      <p className="mt-3 text-slate-700">
        De keuze tussen opnieuw ontstoppen, lokaal herstellen of volledig vervangen wordt best
        gemaakt op basis van <b>objectieve vaststellingen</b> op camera. Op die manier kun je
        met cijfers en beelden afwegen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Wat kost een nieuwe ontstopping vergeleken met een herstelling/vernieuwing?</li>
        <li>In welke mate is er risico op <b>geur, lekkage of schade</b> bij verder uitstel?</li>
        <li>Wie is mogelijk <b>aansprakelijk</b> (privaat/collectief, aannemer, beheerder)?</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Op basis van de inspectie volgt een helder advies: verder reinigen waar nuttig, of
        gericht vernieuwen waar nodig.
      </p>

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
