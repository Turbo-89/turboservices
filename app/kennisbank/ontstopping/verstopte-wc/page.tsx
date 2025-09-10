import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Wat te doen bij een verstopte wc?",
  description:
    "Wc verstopt? Zo los je het veilig zelf op en wanneer bel je Turbo Services. 24/7 hulp in Antwerpen en Vlaanderen.",
};

export default function Page() {
  const faqs = [
    {
      question: "Mag ik bleekmiddel gebruiken?",
      answer:
        "Liever niet. Het maskeert geuren maar lost de prop niet op en kan materialen aantasten.",
    },
    {
      question: "Werkt cola?",
      answer:
        "Nee, niet betrouwbaar en plakkerig. Kies voor water + plopper of bel ons.",
    },
    {
      question: "Wat als er een object vast zit (speelgoedje)?",
      answer:
        "Niet forceren. Met professioneel gereedschap halen we dit meestal snel en schadevrij weg.",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Wat te doen bij een verstopte wc?
      </h1>
      <p className="mt-3 text-slate-700">
        Een verstopte wc is vervelend en kan snel overlopen. Volg deze volgorde om schade te vermijden.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Eerste hulp in 5 stappen</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li><b>Niet opnieuw doorspoelen.</b> Zo voorkom je overlopen.</li>
        <li><b>Warm (niet kokend) water</b> in de pot en 10 minuten inwerken.</li>
        <li><b>Plopper</b>: onder water zetten en 10–15 stevige bewegingen.</li>
        <li><b>Soda + azijn</b>: 1 kop soda + 1 kop azijn, 20–30 min wachten, dan warm water.</li>
        <li><b>Ontstoppingsveer</b>: kort en voorzichtig bij lokale proppen.</li>
      </ol>

      <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-900">
        <b>Niet doen:</b> agressieve chemische ontstoppers, doorduwen met metalen stangen, herhaald spoelen.
      </div>

      <h2 className="mt-8 text-xl font-semibold">Wanneer een professional bellen?</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Water stijgt of loopt terug in <b>meerdere</b> toestellen (wc, douche, gootsteen).</li>
        <li><b>Terugkerende</b> verstoppingen of <b>stank</b> uit de afvoer.</li>
        <li>Oude leidingen of recent <b>verbouwingen</b>.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Hoe Turbo Services het oplost</h2>
      <p className="mt-3 text-slate-700">
        We testen de doorstroming, reinigen mechanisch (en met hogedruk waar nodig) en doen een 
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="text-slate-900 underline"> camera-inspectie</Link> bij twijfel op breuk of doorhang.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Kost en doorlooptijd</h2>
      <p className="mt-3 text-slate-700">
        Veelvoorkomend: 30–90 min. Kost hangt af van bereikbaarheid en ernst. We geven <b>transparante prijs</b> vóór start.
      </p>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/gootsteen-ontstoppen" className="underline">
          gootsteen ontstoppen
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/ontstopping-kost" className="underline">
          kost ontstopping
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
