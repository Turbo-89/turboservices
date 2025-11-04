import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Ontstopping in appartementen of gedeelde riolering: wie betaalt? | Turbo Services – RioolExpert",
  description:
    "Hoe bepaal je bij een verstopping in een appartement of gedeelde riolering of de kosten privaat of collectief zijn, en welke rol diagnose en rapport van Turbo Services daarbij spelen.",
};

const faqs = [
  {
    question: "Wat als enkel mijn appartement last heeft?",
    answer:
      "Dan gaat het vaak om een privaat probleem tussen je eigen toestellen en het aansluitpunt. Ter plaatse testen we dit en rapporteren we de bevindingen.",
  },
  {
    question: "Wat als de VME of syndicus weigert om te handelen?",
    answer:
      "Een duidelijk technisch rapport (met foto’s of video) helpt om beslissingen te nemen en discussies te beperken. De uiteindelijke beslissing ligt bij de mede-eigenaars/VME.",
  },
  {
    question: "Moet ik de kosten voorschieten?",
    answer:
      "Dit hangt af van de afspraken, het reglement van mede-eigendom en de concrete situatie. Facturatie gebeurt transparant, eventueel gesplitst per deel (privaat/collectief) als de diagnose dat toelaat.",
  },
];

export default function AppartementGedeeldeRioleringPage() {
  return (
    <ArticleShell
      title="Ontstopping in appartementen of gedeelde riolering: wie betaalt?"
      subtitle="Hoe je privaat en collectief gebruik scheidt en waarom een correcte diagnose cruciaal is."
      intro="Bij verstoppingen in appartementen is de vraag 'wie betaalt?' bijna even belangrijk als 'waar zit de verstopping?'. Door de eigendomsgrens (privé versus collectief) technisch juist te bepalen, vermijd je discussies en foutieve facturatie."
      logoVariant="ontstopping"
    >
      <h2>Eigendomsgrens: privé versus collectief</h2>
      <p className="mt-3 text-slate-700">
        In een appartementsgebouw wordt meestal onderscheid gemaakt tussen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Privé-gedeelte</b>: de leidingen van je toestellen (wc, lavabo, douche, keuken)
          tot aan het eerste aansluitpunt op de collectieve leiding. Problemen hier worden
          meestal toegewezen aan de individuele eigenaar.
        </li>
        <li>
          <b>Collectieve leidingen</b>: stijgleidingen, hoofdafvoer en gemeenschappelijke
          aansluitingen. Problemen hier vallen doorgaans onder de verantwoordelijkheid van de
          mede-eigenaars (via VME/syndicus).
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Het exacte juridische kader hangt af van de statuten en het reglement van mede-eigendom.
        Mijn rol is de <b>technische grens</b> zo duidelijk mogelijk in kaart te brengen
        (waar zit de verstopping, in welke leiding, op welke hoogte/afstand).
      </p>

      <h2 className="mt-8 text-xl font-semibold">Praktische aanpak ter plaatse</h2>
      <p className="mt-3 text-slate-700">
        Om een eerlijke kostenverdeling mogelijk te maken, start ik altijd met een praktische en
        objectieve diagnose:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Testen wie last heeft</b>: alleen jouw appartement, meerdere appartementen op
          dezelfde stijgleiding, of het hele gebouw? Dit geeft meteen een eerste indicatie
          van privaat of collectief.
        </li>
        <li>
          <b>Toegangspunten bepalen</b>: via wc, inspectieputjes of andere toegangen wordt
          bekeken waar de leiding stopt/overgaat in een collectief deel.
        </li>
        <li>
          <b>Ontstopping en spoeling</b>: de leiding wordt mechanisch gereinigd. Indien nodig
          ook met hogedruk, zodat de doorstroming volledig hersteld is.
        </li>
        <li>
          <b>Camera-inspectie</b>: bij twijfel over breuk, doorhang of foutieve aansluiting
          wordt{" "}
          <Link
            href="/kennisbank/ontstopping/camera-inspectie"
            className="underline text-slate-900"
          >
            camera-inspectie
          </Link>{" "}
          ingezet om exact te lokaliseren waar het probleem zich bevindt.
        </li>
        <li>
          <b>Rapport voor kostenverdeling</b>: op basis van de bevindingen kan een kort
          verslag (met foto’s/video) worden opgesteld dat syndicus, VME of verzekering kan
          gebruiken in hun besluitvorming.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Wie betaalt de ontstopping?</h2>
      <p className="mt-3 text-slate-700">
        In de praktijk wordt vaak deze lijn gevolgd (zonder dat dit een juridisch advies is):
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Bevindt de verstopping zich <b>volledig in je privatieve leiding</b> (tussen je toestel
          en het eerste collectieve punt), dan rekent men de kosten doorgaans toe aan de
          eigenaar van het betreffende appartement.
        </li>
        <li>
          Zit de verstopping in de <b>collectieve stijgleiding of hoofdafvoer</b>, dan wordt dit
          meestal als gemeenschappelijke kost gezien (afhankelijk van de verdeelsleutel in de
          statuten).
        </li>
        <li>
          Bevindt de oorzaak zich op de grens, of is de situatie gemengd, dan is een <b>duidelijk
          technisch rapport</b> cruciaal om een redelijke verdeling af te spreken.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Ik bepaal dus niet wie juridisch moet betalen, maar lever de <b>technische onderbouw</b>{" "}
        die syndicus, VME en eigenaars nodig hebben om tot een beslissing te komen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Tarieven en facturatie</h2>
      <p className="mt-3 text-slate-700">
        Voor interventies in appartementen gebruik ik dezelfde transparante prijsstructuur:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Interventie ontstopping / diagnose:</b> €160</li>
        <li><b>Camera-inspectie (indien nodig):</b> €90</li>
        <li><b>Totaalpakket (interventie + camera):</b> €250</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Deze tarieven gelden ook <b>’s avonds en in het weekend</b>, zonder toeslag, en zijn
        <b> exclusief btw</b>. Voor particuliere woningen ouder dan 10 jaar geldt doorgaans 6% btw,
        in andere privé-situaties 21%. Voor zakelijke klanten en VME&apos;s kan bij
        medecontractantregeling een btw-verlegging (0%) van toepassing zijn. Indien gewenst kan
        facturatie opgesplitst worden (bijvoorbeeld privaat deel vs. collectief deel), op basis
        van de vaststellingen.
      </p>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline"
        >
          camera-inspectie
        </Link>{" "}
        •{" "}
        <Link
          href="/kennisbank/ontstopping/ontstopping-kost"
          className="underline"
        >
          kost ontstopping
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
