import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title:
    "Hoe vaak moet je leidingen laten reinigen? | Turbo Services – RioolExpert",
  description:
    "De ideale onderhoudsfrequentie hangt af van gebruik, ouderdom en leidingmateriaal. Richtlijnen en schema’s voor preventief onderhoud aan keuken, badkamer en hoofdriolering.",
};

const faqs = [
  {
    question: "Is vaak reinigen schadelijk?",
    answer:
      "Nee, zolang het correct gebeurt met aangepaste apparatuur en druk. Professionele reiniging tast leidingen niet aan.",
  },
  {
    question: "Vervangt warm water regelmatig onderhoud?",
    answer:
      "Nee, het helpt bij lichte aanslag maar voorkomt geen vet- of zeepophoping verder in de leiding.",
  },
  {
    question: "Wat bij wortelgroei in leidingen?",
    answer:
      "Dan is specifiek frezen en hersteladvies nodig om herhaling te vermijden. Wortelgroei duidt bijna altijd op structurele schade.",
  },
];

export default function LeidingReinigingFrequentiePage() {
  return (
    <ArticleShell
      title="Hoe vaak moet je leidingen laten reinigen?"
      subtitle="De ideale onderhoudsfrequentie hangt af van gebruik, materiaal en ouderdom van het leidingennet."
      intro="Preventieve reiniging voorkomt de meeste verstoppingen, geurproblemen en lekkages. De frequentie varieert volgens het type leiding en het gebruikspatroon. Met periodiek onderhoud blijven leidingen vrij en verleng je hun levensduur."
      logoVariant="ontstopping"
    >
      <h2>Gemiddelde richtlijnen per type afvoer</h2>
      <p className="mt-3 text-slate-700">
        De onderstaande schema’s geven een realistisch beeld van hoe vaak je best een leiding
        laat reinigen of controleren. Let wel: dit blijft afhankelijk van gebruik en ouderdom.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Keukenafvoer:</b> 1× per 12–24 maanden bij intensief gebruik (veel vet of olie).
        </li>
        <li>
          <b>Badkamerafvoer:</b> 1× per 24 maanden bij ophoping van zeep- of haarresten.
        </li>
        <li>
          <b>Hoofdriolering:</b> na grote verbouwingen of zodra terugkerende signalen optreden
          (geur, borrelen, traag wegstromend water).
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">
        Signalen dat onderhoud dringend is
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Water loopt merkbaar trager weg, vooral in combinatie met borrelgeluiden.
        </li>
        <li>
          Terugkerende geurproblemen ondanks gereinigde sifons.
        </li>
        <li>
          Regelmatige herhaling van verstoppingen op dezelfde plaats.
        </li>
        <li>
          Eerdere chemische ontstoppers gebruikt of oude pvc-leidingen met aanslag.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Aanpak van Turbo Services</h2>
      <p className="mt-3 text-slate-700">
        We starten steeds met een{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="underline text-slate-900"
        >
          camera-inspectie
        </Link>{" "}
        of visuele controle om te bepalen waar reiniging nodig is. Vervolgens reinigen we
        mechanisch of met hogedruk, afhankelijk van de toestand en het materiaal van de leiding.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Inspectie en gericht reinigen van probleemzones.</li>
        <li>Preventietips op maat om terugkerende aanslag te vermijden.</li>
        <li>Optioneel jaarlijks serviceplan met herinnering per e-mail of sms.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Voordelen van regelmatig onderhoud</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Minder risico op geur, overstroming of noodinterventies.</li>
        <li>Langere levensduur van leidingen en sifons.</li>
        <li>Lagere totale onderhoudskost over meerdere jaren.</li>
      </ul>

      <p className="mt-4 text-slate-700">
        Afhankelijk van het gebouwtype kan onderhoud zelfs worden opgenomen in een
        gemeenschappelijk beheerplan of verzekeringsovereenkomst.
      </p>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/keukenafvoer-voorkomen"
          className="underline"
        >
          keukenafvoer voorkomen
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
