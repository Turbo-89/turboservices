import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Zelf je gootsteen ontstoppen of loodgieter bellen? | Turbo Services – RioolExpert",
  description:
    "Keukenafvoer verstopt? Overzicht van veilige doe-het-zelf stappen, signalen dat er een dieperliggend rioolprobleem is en wanneer Turbo Services best wordt ingeschakeld.",
};

const faqs = [
  {
    question: "Helpt soda echt?",
    answer:
      "Bij lichte aanslag kan het ondersteunen, maar het vervangt geen mechanische reiniging bij echte proppen.",
  },
  {
    question: "Chemische middelen gebruiken?",
    answer:
      "Af te raden door risico op schade, giftige dampen en milieu-impact. Mechanische reiniging verdient de voorkeur.",
  },
  {
    question: "Mag ik een veer gebruiken?",
    answer:
      "Enkel voorzichtig en kort. Bochten en pvc kunnen beschadigd raken bij te hard forceren.",
  },
];

export default function GootsteenOntstoppenPage() {
  return (
    <ArticleShell
      title="Zelf je gootsteen ontstoppen of loodgieter bellen?"
      subtitle="Veilige doe-het-zelf stappen en duidelijke drempel wanneer je een rioolexpert nodig hebt."
      intro="Keukenverstoppingen ontstaan meestal door vet, zeep en etensresten. Met een paar gerichte stappen kun je zelf veel oplossen, maar bij terugkerende of gecombineerde problemen is er vaak meer aan de hand dan een simpele prop."
      logoVariant="ontstopping"
    >
      <h2>Zelf doen: veilige volgorde</h2>
      <p className="mt-3 text-slate-700">
        Door in de juiste volgorde te werken, beperk je de kans op schade en onnodig werk:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Warm water</b>: giet een ruime hoeveelheid warm (niet kokend) water in de spoelbak
          en laat dit 10 minuten inwerken.
        </li>
        <li>
          <b>Plopper</b>: sluit de overloop af (met tape of je hand) en gebruik een plopper met
          10–15 stevige, gecontroleerde bewegingen.
        </li>
        <li>
          <b>Sifon reinigen</b>: plaats een emmer, demonteer de sifon, maak die volledig schoon
          en monteer hem terug met de rubbers correct op hun plaats.
        </li>
        <li>
          <b>Soda + azijn (optioneel)</b>: als nabehandeling kun je 1 kop soda en 1 kop azijn
          gebruiken, 20–30 minuten laten inwerken en opnieuw warm water volgen.
        </li>
      </ol>

      <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-900">
        Vermijd chemische ontstoppers: ze kunnen leidingen en afdichtingen aantasten en lossen
        een structureel probleem (doorhang, breuk, vetprop verderop) niet op.
      </div>

      <h2 className="mt-8 text-xl font-semibold">Wanneer beter bellen?</h2>
      <p className="mt-3 text-slate-700">
        In deze situaties is professionele hulp aangewezen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Het water komt <b>terug</b> in andere toestellen (vaatwasser, andere spoelbak, vloerput).
        </li>
        <li>
          De verstopping komt <b>binnen enkele weken terug</b>, ondanks herhaald reinigen van de sifon.
        </li>
        <li>
          Er is <b>duidelijke geur</b> of gorgelend geluid in andere afvoeren: mogelijk een
          riool- of ontluchtingsprobleem.
        </li>
        <li>
          Eerdere chemische ontstoppers gaven geen blijvend resultaat of zijn al gebruikt.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Aanpak van Turbo Services</h2>
      <p className="mt-3 text-slate-700">
        Ter plaatse wordt eerst de sifon gecontroleerd en gereinigd. Daarna wordt de leiding
        mechanisch gereinigd met professionele apparatuur; bij langere trajecten of zware aanslag
        kan hogedruk ingezet worden. Bij terugkerende klachten of twijfel over de staat van de
        leiding is{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camera-inspectie
        </Link>{" "}
        vaak aangewezen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Tarieven en inschatting</h2>
      <p className="mt-3 text-slate-700">
        Een typische keukenafvoer-interventie blijft meestal tussen <b>30 en 90 minuten</b>,
        afhankelijk van bereikbaarheid en ernst. Ik werk met één duidelijk model:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Interventie ontstopping / diagnose:</b> €160</li>
        <li><b>Camera-inspectie (indien nodig):</b> €90</li>
        <li><b>Totaalpakket (ontstopping + camera):</b> €250</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Deze tarieven gelden ook <b>’s avonds en in het weekend</b>, zonder toeslag, en zijn
        <b> exclusief btw</b>. Voor particuliere woningen ouder dan 10 jaar geldt doorgaans 6% btw,
        in andere privé-situaties 21%. Voor zakelijke klanten kan bij medecontractantregeling een
        btw-verlegging (0%) van toepassing zijn.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Preventie: minder kans op toekomstige verstoppingen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Vet nooit in de gootsteen</b>, maar in een aparte container laten afkoelen en weggooien.</li>
        <li><b>Gebruik een zeefje</b> om etensresten op te vangen.</li>
        <li>
          Geef de leiding af en toe een <b>warmwater-flush</b> (bijvoorbeeld 1× per maand) om lichte aanslag te beperken.
        </li>
      </ul>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/keukenafvoer-voorkomen"
          className="underline"
        >
          verstopte keukenafvoer voorkomen
        </Link>{" "}
        •{" "}
        <Link
          href="/kennisbank/ontstopping/chemische-ontstoppers"
          className="underline"
        >
          chemische ontstoppers?
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
