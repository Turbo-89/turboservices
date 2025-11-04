import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Camera-inspectie: hoe werkt dat en wanneer heb je het nodig? | Turbo Services – RioolExpert",
  description:
    "Met een rioolcamera zie je exact waar het probleem zit: breuk, doorhang of prop. Zo voorkom je nodeloos breekwerk en krijg je een gericht hersteladvies.",
};

const faqs = [
  {
    question: "Krijg ik de beelden mee?",
    answer: "Ja. Beelden en/of een kort verslag kunnen worden gedeeld voor je eigen dossier of voor verzekering/aannemer.",
  },
  {
    question: "Helpt camera bij geurklachten?",
    answer: "Ja. We kunnen lekken, open verbindingen of foutieve aansluitingen opsporen die geurproblemen veroorzaken.",
  },
  {
    question: "Kan het altijd?",
    answer: "Niet altijd. Bij zware aanslag of volledige verstopping reinigen we eerst zodat de camera zicht heeft.",
  },
];

export default function CameraInspectieWeetjePage() {
  return (
    <ArticleShell
      title="Camera-inspectie: hoe werkt dat en wanneer heb je het nodig?"
      subtitle="Exact zien waar het probleem zit, zonder nodeloos breekwerk."
      intro="Met een flexibele rioolcamera brengen we de binnenkant van je leidingen in beeld. Zo zie je of er sprake is van breuk, doorhang, wortelgroei of hardnekkige aanslag, en vermijden we onnodige graaf- of kapwerken."
      logoVariant="camera"
    >
      <h2>Hoe werkt een camera-inspectie?</h2>
      <p className="mt-3 text-slate-700">
        Voor een betrouwbare inspectie moet de leiding voldoende doorgankelijk zijn. In de praktijk verloopt dit meestal als volgt:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>1. Toegang en eventuele ontstopping</b> – via wc, inspectieput of andere toegang brengen we de camera in de leiding. Bij zware verstopping wordt eerst mechanisch gereinigd.
        </li>
        <li>
          <b>2. Camera-traject aflopen</b> – de camera wordt traag door de leiding gevoerd, waarbij bochten, aftakkingen en diameterwissels in beeld komen.
        </li>
        <li>
          <b>3. Probleemzones vastleggen</b> – breuk, doorhang, wortelgroei, vreemde voorwerpen of aanslag worden duidelijk in beeld gebracht.
        </li>
        <li>
          <b>4. Lokaliseren bovengronds</b> – indien relevant gebruiken we een zender/ontvanger om de exacte positie bovengronds te markeren (voor gericht breekwerk).
        </li>
        <li>
          <b>5. Uitleg en rapport</b> – ter plaatse krijg je een heldere toelichting. Beelden en/of een kort verslag kunnen worden gedeeld voor verzekering, aannemer of syndicus.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Wanneer is camera-inspectie zinvol?</h2>
      <p className="mt-3 text-slate-700">
        Camera-inspectie is vooral nuttig wanneer er meer speelt dan een eenmalige verstopping:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Terugkerende verstoppingen</b> op hetzelfde punt of in dezelfde zone.</li>
        <li><b>Geurproblemen</b> waarbij de oorzaak niet duidelijk is (lek, open verbinding, foutieve aansluiting).</li>
        <li><b>Verbouwingen of renovaties</b>, om het traject en de staat van bestaande leidingen in kaart te brengen.</li>
        <li><b>Vermoeden van breuk of doorhang</b> na verzakking, zware belasting of veroudering van de leiding.</li>
        <li><b>Discussies over aansprakelijkheid</b> tussen eigenaar, VME, aannemer of verzekering.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Voordelen van camera-inspectie</h2>
      <p className="mt-3 text-slate-700">
        Door eerst te kijken en pas daarna te breken, vermijd je onnodige kosten:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Gericht breekwerk</b> – alleen openbreken waar daadwerkelijk een probleem is vastgesteld.</li>
        <li><b>Objectief bewijs</b> – beeldmateriaal dat je kan gebruiken richting verzekeraar, aannemer of syndicus.</li>
        <li><b>Duidelijke beslissingen</b> – plaatselijke herstelling volstaat of is een grotere vernieuwing nodig?</li>
        <li><b>Videorapport mogelijk</b> – indien gewenst kunnen beelden en een korte samenvatting worden aangeleverd.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Tarieven en combinatie met ontstopping</h2>
      <p className="mt-3 text-slate-700">
        In de meeste dossiers wordt camera-inspectie gecombineerd met een ontstoppingsinterventie. De basisstructuur blijft:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Interventie ontstopping / diagnose:</b> €160</li>
        <li><b>Camera-inspectie:</b> €90</li>
        <li><b>Totaalpakket (ontstopping + camera):</b> €250</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Deze tarieven gelden ook <b>’s avonds en in het weekend</b>, zonder toeslag, en zijn
        <b> exclusief btw</b>. Voor particuliere woningen ouder dan 10 jaar geldt doorgaans 6% btw, in andere privé-situaties 21%. Voor zakelijke klanten kan bij medecontractantregeling een btw-verlegging (0%) van toepassing zijn. Afwijkingen of bijkomende werken worden altijd vooraf besproken.
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
          eerste signalen verstopt riool
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
