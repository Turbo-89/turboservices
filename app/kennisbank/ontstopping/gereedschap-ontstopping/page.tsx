import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/kb/ArticleShell";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Welk gereedschap werkt écht: plopper, veer of hogedruk? | Turbo Services – RioolExpert",
  description:
    "Overzicht van plopper, veer en hogedruk per type verstopping. Wanneer kun je zelf veilig iets proberen en wanneer schakel je beter Turbo Services in om schade te vermijden.",
};

const faqs = [
  {
    question: "Kan ik zelf hogedruk gebruiken?",
    answer:
      "We raden dit af door risico op schade, terugslag en overstroom. Professioneel materiaal en ervaring zijn cruciaal.",
  },
  {
    question: "Welke veer kies ik?",
    answer:
      "Gebruik een korte, flexibele veer en werk met beleid. Vermijd brute kracht in pvc-leidingen en scherpe bochten.",
  },
  {
    question: "Werkt dit voor elke wc?",
    answer:
      "Niet elke wc reageert hetzelfde. Ter plaatse testen we welke methode veilig is voor het type toestel en leiding.",
  },
];

export default function GereedschapOntstoppingPage() {
  return (
    <ArticleShell
      title="Welk gereedschap werkt écht: plopper, veer of hogedruk?"
      subtitle="Het juiste hulpmiddel per probleem – zonder onnodige schade."
      intro="Niet elk ontstoppingsprobleem vraagt hetzelfde gereedschap. Een plopper, veer of hogedrukinstallatie hebben elk hun plaats, maar verkeerd gebruik kan meer schade dan oplossing geven. Dit overzicht helpt je inschatten wat je zelf veilig kan doen en wanneer je beter Turbo Services inschakelt."
      logoVariant="ontstopping"
    >
      <h2>Plopper: eerste stap bij lokale verstoppingen</h2>
      <p className="mt-3 text-slate-700">
        De plopper is vaak de beste eerste stap bij verstopte wc&apos;s, spoelbakken en lavabo&apos;s:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li><b>Voordelen:</b> snel, goedkoop en veilig voor de meeste toestellen.</li>
        <li>
          <b>Werking:</b> door drukgolven in het water wordt een lokale prop in beweging gezet en losgetrokken.
        </li>
        <li>
          <b>Belangrijk:</b> zorg dat de plopper volledig onder water staat en gebruik 10–15 gecontroleerde bewegingen,
          niet wild rammen.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Veer: gericht bij hardnekkige proppen</h2>
      <p className="mt-3 text-slate-700">
        Een ontstoppingsveer is nuttig bij proppen die iets dieper in de leiding zitten, maar vraagt voorzichtigheid:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Toepassing:</b> korte trajecten, bochten en lokale verstoppingen in afvoerleidingen.
        </li>
        <li>
          <b>Risico&apos;s:</b> krassen of beschadiging van pvc, vastlopen in bochten, afgebroken stukken veer in de leiding.
        </li>
        <li>
          <b>Gebruikstips:</b> werk met <b>gevoel</b>, niet met brute kracht. Stop wanneer de veer blokkeert en forceer niet.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Hogedruk: voor aanslag en langere trajecten</h2>
      <p className="mt-3 text-slate-700">
        Hogedrukreiniging is zeer effectief bij langere leidingtrajecten en zware aanslag, maar hoort in professionele handen:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <b>Ideaal voor:</b> hoofdleidingen, vetafzetting, oudere aanslag, wortelgroei (in combinatie met andere technieken).
        </li>
        <li>
          <b>Risico&apos;s bij doe-het-zelf:</b> terugslag van water, overstroom in het gebouw, beschadiging van koppelingen
          en zwakke delen in de leiding.
        </li>
        <li>
          <b>Aanpak Turbo Services:</b> hogedruk wordt gecombineerd met diagnose en, indien nodig,{" "}
          <Link
            href="/kennisbank/ontstopping/camera-inspectie"
            className="underline text-slate-900"
          >
            camera-inspectie
          </Link>{" "}
          om gericht en gecontroleerd te werken.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Beslisboom: zelf proberen of professional?</h2>
      <p className="mt-3 text-slate-700">
        In de praktijk kun je deze eenvoudige beslislogica volgen:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li>
          <b>Eén toestel loopt traag of staat vol:</b> begin met plopper, sifon reinigen en eventueel een korte veer.
        </li>
        <li>
          <b>Meerdere toestellen hebben last</b> (wc, douche, gootsteen, vloerput): dit wijst op een dieperliggende
          verstopping of rioolprobleem – <b>professional bellen</b>.
        </li>
        <li>
          <b>Probleem keert terug</b>, of er is geurhinder: professionele reiniging en mogelijk camera-inspectie om
          de oorzaak definitief in kaart te brengen.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Wanneer Turbo Services inschakelen?</h2>
      <p className="mt-3 text-slate-700">
        Als eenvoudige middelen (plopper, sifon reinigen) geen blijvend resultaat geven, is verder forceren met veer of
        hogedruk vaak geen goed idee. Dan is een professionele diagnose met de juiste machines meestal goedkoper dan
        achteraf herstellingen aan leidingen of afwerking.
      </p>
      <p className="mt-3 text-slate-700">
        Ik werk met één duidelijke prijsstructuur: <b>€160</b> voor de interventie, <b>€90</b> voor camera-inspectie,
        <b> €250</b> voor het totaalpakket (exclusief btw), ook <b>’s avonds en in het weekend</b> zonder toeslag.
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
          href="/kennisbank/ontstopping/chemische-ontstoppers"
          className="underline"
        >
          chemische ontstoppers
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </ArticleShell>
  );
}
