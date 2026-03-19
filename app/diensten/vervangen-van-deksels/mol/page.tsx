import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

export const metadata: Metadata = {
  title: "Vervangen van deksels in Mol | Turbo Services",
  description:
    "Beschadigd, verzakt of losliggend putdeksel in Mol? Turbo Services vervangt en corrigeert dit gericht en veilig.",
};

export default function Page() {
  const city = "Mol";
  const service = getServiceByKey("vervangen-van-deksels");

  const intro =
    "Beschadigd, verzakt of losliggend putdeksel in Mol? Turbo Services vervangt en corrigeert dit gericht en veilig.";

  const sections = [
    {
      title: "Vervangen van deksels",
      body:
        "Beschadigd, verzakt of losliggend putdeksel in Mol? Turbo Services vervangt en corrigeert dit gericht en veilig.",
    },
    {
      title: "Wat we doen",
      body:
        "- Vervanging van beschadigde of losliggende putdeksels\n- Correctie van slecht aansluitende afdekkingen\n- Herstel van onveilige of verzakte situaties\n- Advies over juiste afwerking en belasting\n- Combinatie mogelijk met andere gerichte ingrepen",
    },
    {
      title: "Werkwijze",
      body:
        "1. Beoordeling van de bestaande situatie\n2. Keuze van geschikt type deksel of afwerking\n3. Verwijderen of corrigeren van het oude onderdeel\n4. Nieuwe plaatsing met aandacht voor aansluiting en stabiliteit\n5. Controle op veilige en duurzame afwerking",
    },
    {
      title: "Tarieven",
      body:
        "De prijs hangt af van het type deksel, de staat van de bestaande situatie en de nodige aanpassing ter plaatse. Indien nodig combineren we dit met diagnose of bijkomende herstelling.",
    },
    {
      title: "Waarom tijdig vervangen?",
      body:
        "Een slecht passend of beschadigd deksel kan geurhinder, waterinsijpeling en onveilige situaties veroorzaken. Tijdige vervanging voorkomt bijkomende schade.",
    }
  ];

  const relatedRegionLinks = [
    { slug: "antwerpen-noordrand", label: "Antwerpen Noordrand" },
    { slug: "antwerpen-stad", label: "Antwerpen Stad" },
    { slug: "antwerpen-zuidrand", label: "Antwerpen Zuidrand" },
    { slug: "brussel-centrum", label: "Brussel Centrum" },
    { slug: "brussel-noord", label: "Brussel Noord" },
    { slug: "brussel-zuid", label: "Brussel Zuid" },
    { slug: "denderstreek", label: "Denderstreek" },
    { slug: "druivenstreek", label: "Druivenstreek" },
    { slug: "durmestreek-lokeren", label: "Durmestreek" },
    { slug: "hageland", label: "Hageland" },
    { slug: "kempen-noord", label: "Kempen Noord" },
    { slug: "kempen-zuid", label: "Kempen Zuid" },
    { slug: "klein-brabant", label: "Klein-Brabant" },
    { slug: "leuven-dijleland", label: "Leuven & Dijleland" },
    { slug: "lier-neteland", label: "Lier & Neteland" },
    { slug: "mechelen-rivierenland", label: "Mechelen & Rivierenland" },
    { slug: "noordrand-brussel", label: "Noordrand Brussel" },
    { slug: "pajottenland", label: "Pajottenland" },
    { slug: "rupelstreek", label: "Rupelstreek" },
    { slug: "scheldeland", label: "Scheldeland" },
    { slug: "sint-niklaas-regio", label: "Sint-Niklaas regio" },
    { slug: "temse-omgeving", label: "Temse & omstreken" },
    { slug: "waasland", label: "Waasland" },
  ];

  const ctaBody =
    "Turbo Services beoordeelt de bestaande situatie in Mol en zorgt voor een correcte, veilige en duurzame vervanging.";

  return (
    <DienstPageLayout
      serviceKey="vervangen-van-deksels"
      serviceName="Vervangen van deksels"
      regionLabel={city}
      municipalities={[city]}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Deksel laten vervangen?"
      ctaBody={ctaBody}
      ctaButton="Vraag vervanging aan"
      heroImageOverride="/assets/base/vervangen-van-deksels.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
