import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";

export const metadata: Metadata = {
  title: "Rook- en geurdetectie in Sint-Niklaas regio",
  description: "Rookdetectie en geuronderzoek om lekken, scheuren of foutieve aansluitingen in de riolering vast te stellen.",
};

export default function Page() {
  const municipalities = REGION_CITIES["sint-niklaas-regio"] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const intro =
    "Last van rioolgeur in Sint-Niklaas regio? Via rook- en geurdetectie sporen wij exact op waar de oorzaak zich bevindt." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
  {
    "title": "Rook- en geurdetectie",
    "body": "Last van rioolgeur in Sint-Niklaas regio? Via rook- en geurdetectie sporen wij exact op waar de oorzaak zich bevindt."
  },
  {
    "title": "Wat we doen",
    "body": "- Detectie van geurproblemen\n- Opsporen van foutieve aansluitingen\n- Rooktest van volledige rioleringsstelsels\n- Snelle diagnose zonder breekwerk\n- Ideaal voor terugkerende geurhinder"
  },
  {
    "title": "Werkwijze",
    "body": "1. Vooranalyse op locatie\n2. Afsluiten en opdrukken van het systeem\n3. Rookinjectie in het stelsel\n4. Opsporen van lekken of foutieve aansluitingen\n5. Advies voor herstelling"
  },
  {
    "title": "Tarieven",
    "body": "Rookdetectie is vaak de snelste manier om geurproblemen te lokaliseren:\n\n- Rookdetectie basis: €160\n- Combinatie met camera-inspectie mogelijk\n- Herstellingen offerte na diagnose"
  },
  {
    "title": "Waarom snel ingrijpen?",
    "body": "Geurhinder wijst bijna altijd op lekkage of foutieve aansluiting. Rookdetectie maakt het probleem zichtbaar zonder breekwerk."
  }
].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + `\n\nActief in Sint-Niklaas regio: ${muniText} en omgeving.`
      };
    }
    return s;
  });

  const ctaBody =
    "Wij sporen geurproblemen in Sint-Niklaas regio snel en zonder breekwerk op." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const props = {
    brand: "Turbo Services",
    regionLabel: "Sint-Niklaas regio",
    serviceName: "Rook- en geurdetectie",
    heroTitle: "Rookdetectie",
    intro,
    sections,
    ctaTitle: "Geur- of rookdetectie nodig?",
    ctaBody,
    ctaButton: "Vraag rooktest aan →",
    serviceKey: "rookdetectie",
    heroImagePath: "",
    municipalities,
  } as const;

  return <DienstPageLayout {...props} />;
}
