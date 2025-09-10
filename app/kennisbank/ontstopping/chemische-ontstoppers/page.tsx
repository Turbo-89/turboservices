import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Chemische ontstoppers: gebruiken of vermijden?",
  description:
    "Zijn chemische ontstoppers een goed idee? Weeg de risico’s af en ontdek veilige alternatieven.",
};

export default function Page() {
  const faqs = [
    { question: "Mag ik één keer proberen?", answer: "We raden af. Als je toch deed, meld het—combinaties kunnen gevaarlijk zijn." },
    { question: "Is schade direct zichtbaar?", answer: "Niet altijd. Afdichtingen kunnen later lekken." },
    { question: "Wat is het milieuvriendelijke alternatief?", answer: "Mechanische reiniging en preventie." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Chemische ontstoppers: gebruiken of vermijden?
      </h1>
      <p className="mt-3 text-slate-700">
        Ze lijken snel, maar kennen risico’s: schade aan leidingen/afdichtingen, giftige dampen en milieu-impact.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Wanneer zeker níet gebruiken</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Oudere leidingen of rubberen afdichtingen</li>
        <li>Septische putten</li>
        <li>Na eerdere mislukte pogingen (gevaarlijke reacties)</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Veilige alternatieven</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Plopper, sifon reinigen, warm water</li>
        <li>Soda + azijn als milde ondersteuning</li>
        <li>Professionele mechanische reiniging</li>
      </ul>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/gootsteen-ontstoppen" className="underline">
          gootsteen ontstoppen
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/gereedschap-ontstopping" className="underline">
          gereedschap dat werkt
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
