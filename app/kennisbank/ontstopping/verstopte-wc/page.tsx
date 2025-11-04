import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Wat te doen bij een verstopte wc? | Turbo Services – RioolExpert",
  description:
    "Wc verstopt? Zo los je het veilig zelf op en wanneer bel je Turbo Services. 24/7 hulp in Antwerpen, Waasland en Rupelstreek.",
};

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

export default function VerstopteWcPage() {
  return (
    <ArticleShell
      title="Wat te doen bij een verstopte wc?"
      subtitle="Stappen om schade te beperken en nodeloze kosten te vermijden."
      intro="Een verstopte wc is vervelend en kan snel overlopen. Hieronder lees je wat je zelf veilig kan proberen – en wanneer je beter meteen Turbo Services inschakelt voor een professionele ontstopping."
      logoVariant="ontstopping"
    >
      <h2>Eerste hulp in 5 stappen</h2>
      <p>
        Volg deze volgorde om extra schade (overlopen, lekken, geuroverlast) te vermijden.
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Niet opnieuw doorspoelen.</b> Zo voorkom je dat de wc of badkamer
          overstroomt.
        </li>
        <li>
          <b>Warm (niet kokend) water</b> in de pot en 10 minuten laten inwerken.
        </li>
        <li>
          <b>Plopper</b>: zorg dat de plopper volledig onder water staat en maak 10–15
          stevige bewegingen.
        </li>
        <li>
          <b>Soda + azijn</b>: 1 kop soda + 1 kop azijn, 20–30 minuten wachten en daarna
          warm water toevoegen.
        </li>
        <li>
          <b>Ontstoppingsveer</b>: alleen kort en voorzichtig gebruiken bij een lokale prop.
        </li>
      </ol>

      <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-900">
        <b>Niet doen:</b> agressieve chemische ontstoppers, hard duwen met metalen stangen of
        herhaald blijven doorspoelen. Dat kan leidingen beschadigen of een lekkage veroorzaken.
      </div>

      <h2 className="mt-8 text-xl font-semibold">Wanneer een professional bellen?</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Het water stijgt of loopt terug in <b>meerdere</b> toestellen (wc, douche,
          gootsteen, vloerput).
        </li>
        <li>
          <b>Terugkerende</b> verstoppingen of blijvende <b>stank</b> uit de afvoer.
        </li>
        <li>Oude leidingen, verzakkingen of recente verbouwingen aan de afvoer.</li>
        <li>
          Je moet extreem hard ploppen of veertrekken om tijdelijk resultaat te hebben: dit wijst
          vaak op een dieperliggende rioolproblematiek.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Hoe Turbo Services het oplost</h2>
      <p className="mt-3 text-slate-700">
        Ter plaatse test ik eerst de doorstroming en bepaal ik waar de blokkade zich
        waarschijnlijk bevindt. Daarna wordt de leiding mechanisch gereinigd met professionele
        apparatuur (en waar nodig hogedruk). Bij twijfel over breuk, doorhang of verzakking kan ik
        een{" "}
        <Link
          href="/kennisbank/ontstopping/camera-inspectie"
          className="text-slate-900 underline"
        >
          camera-inspectie
        </Link>{" "}
        uitvoeren om de oorzaak exact in beeld te brengen.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Kost en doorlooptijd</h2>
      <p className="mt-3 text-slate-700">
        De meeste wc-ontstoppingen duren tussen <b>30 en 90 minuten</b>, afhankelijk van
        bereikbaarheid en de staat van de leidingen. Ik werk met één duidelijk prijsmodel:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Interventie ontstopping:</b> €160</li>
        <li><b>Camera-inspectie (indien nodig):</b> €90</li>
        <li><b>Totaalpakket (ontstopping + camera):</b> €250</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Deze tarieven gelden ook <b>’s avonds en in het weekend</b>, zonder toeslag, en zijn
        <b> exclusief btw</b>. Voor particuliere woningen ouder dan 10 jaar geldt doorgaans 6% btw,
        in andere privé-situaties 21%. Voor zakelijke klanten kan bij medecontractantregeling een
        btw-verlegging (0%) van toepassing zijn. Afwijkingen worden steeds vooraf besproken.
      </p>

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link
          href="/kennisbank/ontstopping/gootsteen-ontstoppen"
          className="underline"
        >
          gootsteen ontstoppen
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
