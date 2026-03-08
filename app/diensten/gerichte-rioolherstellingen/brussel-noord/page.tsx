import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";

export const metadata: Metadata = {
  title: "Gerichte rioolherstellingen in Brussel Noord | Turbo Services",
  description:
    "Gerichte rioolherstellingen aan afvoer en riolering in Brussel Noord, inclusief breuken, verzakkingen en lokale schade. Diagnose vooraf en doelgerichte herstelling.",
};

export default function Page() {
  const regionKey = "brussel-noord" as const;
  const regionLabel = "Brussel Noord";
  const municipalities = REGION_CITIES[regionKey] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const intro =
    "Lekkage, verzakking of lokale schade aan de riolering in Brussel Noord? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
    {
      title: "Gerichte rioolherstellingen",
      body:
        "Lekkage, verzakking of lokale schade aan de riolering in Brussel Noord? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak.",
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
        "Prijzen variëren volgens de aard van de schade en de nodige interventie:\n\n- Diagnose en interventie starten vanaf €160 exclusief btw\n- Camera-inspectie kan als supplement toegevoegd worden\n- Grotere of bijkomende herstellingen steeds na duidelijke bespreking",
    },
    {
      title: "Waarom gericht herstellen?",
      body:
        "Door eerst correct te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat vermijdt onnodige werken, beperkt kosten en maakt een technisch gerichte oplossing mogelijk.",
    },
  ].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + `\n\nActief in Brussel Noord: ${muniText} en omgeving.`,
      };
    }
    return s;
  });

  const ctaBody =
    "Neem contact op voor een snelle diagnose en gerichte rioolherstelling in Brussel Noord." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  return (
    <DienstPageLayout
      serviceKey="gerichte-rioolherstellingen"
      serviceName="Gerichte rioolherstellingen"
      regionKey={regionKey}
      regionLabel={regionLabel}
      municipalities={municipalities}
      intro={intro}
      sections={sections}
      ctaTitle="Gerichte rioolherstelling nodig?"
      ctaBody={ctaBody}
      ctaButton="Vraag rioolherstelling aan"
      heroImageOverride="/assets/base/rioolherstelling.png"
    />
  );
}