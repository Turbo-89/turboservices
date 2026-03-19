import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

export const metadata: Metadata = {
  title: "Noodherstellingen in Huldenberg | Turbo Services",
  description:
    "Lek, verzakking of acute schade aan afvoer of riolering in Huldenberg? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken.",
};

export default function Page() {
  const city = "Huldenberg";
  const service = getServiceByKey("noodherstellingen");

  const intro =
    "Lek, verzakking of acute schade aan afvoer of riolering in Huldenberg? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken.";

  const sections = [
    {
      title: "Noodherstellingen",
      body:
        "Lek, verzakking of acute schade aan afvoer of riolering in Huldenberg? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken.",
    },
    {
      title: "Wat we doen",
      body:
        "- Dringende herstellingen aan afvoer en riolering\n- Aanpak van lekken, breuken en verzakkingen\n- Vervanging van beschadigde delen waar nodig\n- Gerichte lokalisatie van het probleem\n- Snelle tussenkomst bij acute schade",
    },
    {
      title: "Werkwijze",
      body:
        "1. Snelle inschatting van de urgentie\n2. Lokalisatie van het probleem\n3. Indien nodig eerst diagnose via camera-inspectie of andere controle\n4. Uitvoeren van een technisch verantwoorde noodherstelling\n5. Advies over verdere of definitieve aanpak",
    },
    {
      title: "Tarieven",
      body:
        "Prijzen variÃƒÂ«ren volgens het type probleem en de nodige interventie:\n\n- Diagnose en interventie starten vanaf Ã¢â€šÂ¬160 exclusief btw\n- Camera-inspectie kan als supplement toegevoegd worden\n- Bijkomende herstellingen of structurele werken steeds na duidelijke bespreking",
    },
    {
      title: "Waarom snel ingrijpen?",
      body:
        "Lekkages, breuken en verzakkingen kunnen snel grotere schade veroorzaken. Snelle noodherstelling helpt om gevolgschade, vochtproblemen en verdere uitval te beperken.",
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
    "Neem contact op voor een snelle inschatting en noodherstelling in Huldenberg.";

  return (
    <DienstPageLayout
      serviceKey="noodherstellingen"
      serviceName="Noodherstellingen"
      regionLabel={city}
      municipalities={[city]}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Dringende herstelling nodig?"
      ctaBody={ctaBody}
      ctaButton="Vraag noodherstelling aan Ã¢â€ â€™"
      heroImageOverride="/assets/base/noodherstellingen.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
