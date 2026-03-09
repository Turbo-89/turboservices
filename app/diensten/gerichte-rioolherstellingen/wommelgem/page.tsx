import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

export const metadata: Metadata = {
  title: "Gerichte rioolherstellingen in Wommelgem | Turbo Services",
  description:
    "Lekkage, verzakking of lokale schade aan de riolering in Wommelgem? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak.",
};

export default function Page() {
  const city = "Wommelgem";
  const service = getServiceByKey("gerichte-rioolherstellingen");

  const intro =
    "Lekkage, verzakking of lokale schade aan de riolering in Wommelgem? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak.";

  const sections = [
    {
      title: "Gerichte rioolherstellingen",
      body:
        "Lekkage, verzakking of lokale schade aan de riolering in Wommelgem? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak.",
    },
    {
      title: "Wat we doen",
      body:
        "- Herstelling van lokale breuken of verzakkingen\n- Vervanging van beschadigde delen van afvoer of riolering\n- Gerichte openbraak waar technisch nodig\n- Lokalisatie van leidingen en schadezones\n- Herstellingen op basis van duidelijke diagnose",
    },
    {
      title: "Werkwijze",
      body:
        "1. Lokalisatie van het probleem\n2. Indien nodig diagnose via camera-inspectie of andere controle\n3. Gericht openmaken van de probleemzone\n4. Herstelling of vervanging van het beschadigde deel\n5. Controle en advies voor verdere opvolging",
    },
    {
      title: "Tarieven",
      body:
        "Prijzen variÃ«ren volgens de aard van de schade en de nodige interventie:\n\n- Diagnose en interventie starten vanaf â‚¬160 exclusief btw\n- Camera-inspectie kan als supplement toegevoegd worden\n- Grotere of bijkomende herstellingen steeds na duidelijke bespreking",
    },
    {
      title: "Waarom gericht herstellen?",
      body:
        "Door eerst correct te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat vermijdt onnodige werken, beperkt kosten en maakt een technisch gerichte oplossing mogelijk.",
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
    { slug: "ruppelstreek", label: "Ruppelstreek" },
    { slug: "scheldeland", label: "Scheldeland" },
    { slug: "sint-niklaas-regio", label: "Sint-Niklaas regio" },
    { slug: "temse-omgeving", label: "Temse & omstreken" },
    { slug: "waasland", label: "Waasland" },
  ];

  const ctaBody =
    "Neem contact op voor een snelle diagnose en gerichte rioolherstelling in Wommelgem.";

  return (
    <DienstPageLayout
      serviceKey="gerichte-rioolherstellingen"
      serviceName="Gerichte rioolherstellingen"
      regionLabel={city}
      municipalities={[city]}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Gerichte rioolherstelling nodig?"
      ctaBody={ctaBody}
      ctaButton="Vraag rioolherstelling aan"
      heroImageOverride="/assets/base/gerichte-rioolherstellingen.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}