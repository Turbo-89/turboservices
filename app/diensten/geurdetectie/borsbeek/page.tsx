import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

export const metadata: Metadata = {
  title: "Geurdetectie in Borsbeek | Turbo Services",
  description:
    "Last van rioolgeur in Borsbeek? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder blind breekwerk.",
};

export default function Page() {
  const city = "Borsbeek";
  const service = getServiceByKey("geurdetectie");

  const intro =
    "Last van rioolgeur in Borsbeek? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder blind breekwerk.";

  const sections = [
    {
      title: "Geurdetectie",
      body:
        "Last van rioolgeur in Borsbeek? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder blind breekwerk.",
    },
    {
      title: "Wat we doen",
      body:
        "- Detectie van geurproblemen\n- Opsporen van foutieve aansluitingen\n- Onderzoek van sifons, ontluchting en verbindingen\n- Snelle diagnose zonder blind breekwerk\n- Gericht advies voor herstelling",
    },
    {
      title: "Werkwijze",
      body:
        "1. Vooranalyse op locatie\n2. Controle van sifons, aansluitingen en ontluchting\n3. Gericht onderzoek van afvoer en riolering\n4. Lokalisatie van de waarschijnlijke oorzaak\n5. Advies voor herstelling of vervolgstap",
    },
    {
      title: "Tarieven",
      body:
        "Geurdetectie is vaak de snelste manier om geurproblemen te lokaliseren:\n\n- Basisinterventie: Ã¢â€šÂ¬160\n- Combinatie met camera-inspectie mogelijk\n- Herstellingen steeds na diagnose en bespreking",
    },
    {
      title: "Waarom snel ingrijpen?",
      body:
        "Geurhinder wijst vaak op een technisch defect in afvoer of riolering. Een gerichte diagnose voorkomt nodeloos breekwerk en blijvende overlast.",
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
    "Wij sporen geurproblemen in Borsbeek snel en zonder onnodig breekwerk op.";

  return (
    <DienstPageLayout
      serviceKey="geurdetectie"
      serviceName="Geurdetectie"
      regionLabel={city}
      municipalities={[city]}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Geurdetectie nodig?"
      ctaBody={ctaBody}
      ctaButton="Vraag geurdetectie aan"
      heroImageOverride="/assets/base/geurdetectie.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
