import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Wat kost een professionele ontstopping in Vlaanderen? | Turbo Services – RioolExpert",
  description:
    "Uitleg hoe de prijs van een ontstopping wordt opgebouwd in Vlaanderen, met een transparant model: interventie, camera-inspectie en totaalpakket zonder avond- of weekendtoeslag.",
};

const faqs = [
  {
    question: "Kan ik vooraf een richtprijs krijgen?",
    answer:
      "Ja. Als je het probleem kort omschrijft en foto’s of een filmpje meestuurt, kan ik meestal vooraf een duidelijke richtprijs geven binnen mijn vaste model.",
  },
  {
    question: "Is camera altijd nodig?",
    answer:
      "Nee. De camera wordt vooral ingezet bij twijfel over breuk, doorhang of bij terugkerende klachten. In andere gevallen volstaat vaak een standaardontstopping.",
  },
  {
    question: "Hoe lang duurt een ontstopping?",
    answer:
      "Vaak tussen 30 en 90 minuten, afhankelijk van bereikbaarheid, ernst en of er bijkomende problemen worden ontdekt.",
  },
];

export default function OntstoppingKostPage() {
  return (
    <ArticleShell
      title="Wat kost een professionele ontstopping in Vlaanderen?"
      subtitle="Zo wordt de prijs opgebouwd – en hoe je onaangename verrassingen vermijdt."
      intro="De kostprijs van een ontstopping hangt af van bereikbaarheid, ernst van de verstopping, gebruikte apparatuur (bijvoorbeeld hogedruk of camera) en de tijd ter plaatse. Turbo Services werkt met een duidelijk en eenvoudig model, zodat je vooraf weet in welke grootteorde je mag rekenen."
      logoVariant="ontstopping"
    >
      <h2>Vaste prijsstructuur van Turbo Services</h2>
      <p className="mt-3 text-slate-700">
        In plaats van ondoorzichtige posten of aparte avond-/weekendtarieven hanteer ik één
        duidelijke basisstructuur:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Interventie ontstopping / diagnose:</b> €160
        </li>
        <li>
          <b>Camera-inspectie (indien nodig of gevraagd):</b> €90
        </li>
        <li>
          <b>Totaalpakket (ontstopping + camera):</b> €250
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Deze tarieven gelden zowel overdag als <b>’s avonds en in het weekend</b>, zonder
        bijkomende toeslag. Bedragen zijn <b>exclusief btw</b>. Voor particuliere woningen ouder
        dan 10 jaar geldt doorgaans 6% btw, in andere privé-situaties 21%. Voor zakelijke
        klanten kan bij medecontractantregeling een btw-verlegging (0%) van toepassing zijn.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Waar let je op bij offertes?</h2>
      <p className="mt-3 text-slate-700">
        Bij het vergelijken van ontstoppingsbedrijven is het zinvol om volgende zaken expliciet
        te controleren:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Of <b>voorrij- en uurkost</b> duidelijk gescheiden of juist all-in zijn.
        </li>
        <li>
          Of gebruik van <b>camera</b>, <b>hogedruk</b> en extra spoelbeurten inbegrepen is of
          apart wordt afgerekend.
        </li>
        <li>
          Hoe <b>avond-, weekend- en nachttarieven</b> worden toegepast en of er minimumuren
          worden aangerekend.
        </li>
        <li>
          Of er <b>verborgen toeslagen</b> zijn (bijvoorbeeld voor “moeilijk bereikbare” leidingen
          zonder duidelijke definitie).
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Hoe verrassingen vermijden?</h2>
      <p className="mt-3 text-slate-700">
        Een goede voorbereiding helpt om de kost zo nauwkeurig mogelijk vooraf in te schatten:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Probleem kort beschrijven</b>: wat loopt niet weg, sinds wanneer, al eerder
          voorgevallen?
        </li>
        <li>
          <b>Foto’s of een kort filmpje</b> meesturen van de betrokken toestellen en eventuele
          overstroom.
        </li>
        <li>
          Vragen naar een <b>all-in richtprijs</b> voor het typische geval (ontstopping, met of
          zonder camera).
        </li>
        <li>
          Vermelden of er <b>chemische ontstoppers</b> gebruikt zijn: dit is belangrijk voor een
          veilige aanpak.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Wanneer wordt het duurder?</h2>
      <p className="mt-3 text-slate-700">
        In de meeste dossiers volstaat het standaardmodel. De kost kan hoger liggen wanneer:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Er <b>structurele schade</b> wordt vastgesteld (breuk, doorhang, wortelinslag) die
          herstelling of vernieuwing vraagt.
        </li>
        <li>
          Er <b>uitgebreid breekwerk</b> of graafwerk nodig is om bij de leiding te komen.
        </li>
        <li>
          Het probleem zich buiten de normale regio bevindt of in zeer uitzonderlijke
          bereikbaarheidssituaties.
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Dergelijke bijkomende werken worden altijd <b>vooraf besproken</b>, waarbij je op basis
        van{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camerabeelden
        </Link>{" "}
        en uitleg kunt beslissen of en hoe ver je gaat in herstelling.
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
