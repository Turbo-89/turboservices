import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";

export const metadata: Metadata = {
  title: "Noodherstellingen in Ruppelstreek",
  description: "Noodherstellingen aan afvoer en riolering, inclusief lekken, verzakkingen en acute schade. Snelle interventie bij dringende problemen.",
};

export default function Page() {
  const municipalities = REGION_CITIES["ruppelstreek"] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const intro =
    "Lek, verzakking of acute schade aan afvoer of riolering in Ruppelstreek? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
    {
      title: "Noodherstellingen",
      body:
        "Lek, verzakking of acute schade aan afvoer of riolering in Ruppelstreek? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken.",
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
        "Prijzen variëren volgens het type probleem en de nodige interventie:\n\n- Diagnose en interventie starten vanaf €160 exclusief btw\n- Camera-inspectie kan als supplement toegevoegd worden\n- Bijkomende herstellingen of structurele werken steeds na duidelijke bespreking",
    },
    {
      title: "Waarom snel ingrijpen?",
      body:
        "Lekkages, breuken en verzakkingen kunnen snel grotere schade veroorzaken. Snelle noodherstelling helpt om gevolgschade, vochtproblemen en verdere uitval te beperken.",
    },
  ].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + `\n\nActief in Ruppelstreek: ${muniText} en omgeving.`,
      };
    }
    return s;
  });

  const ctaBody =
    "Neem contact op voor een snelle inschatting en noodherstelling in Ruppelstreek." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const props = {
    brand: "Turbo Services",
    regionLabel: "Ruppelstreek",
    serviceName: "Noodherstellingen",
    heroTitle: "Noodherstellingen",
    intro,
    sections,
    ctaTitle: "Dringende herstelling nodig?",
    ctaBody,
    ctaButton: "Vraag noodherstelling aan →",
    serviceKey: "noodherstellingen",
    heroImagePath: "",
    municipalities,
  } as const;

  return <DienstPageLayout {...props} />;
}

