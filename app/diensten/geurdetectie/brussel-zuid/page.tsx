import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";

export const metadata: Metadata = {
  title: "Rook- en geurdetectie in Brussel Zuid",
  description: "Geurdetectie en geuronderzoek om lekken, scheuren of foutieve aansluitingen in de riolering vast te stellen.",
};

export default function Page() {
  const municipalities = REGION_CITIES["brussel-zuid"] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const intro =
    "Last van rioolgeur in Brussel Zuid? Via rook- en geurdetectie sporen wij exact op waar de oorzaak zich bevindt." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
  {
    "title": "Rook- en geurdetectie",
    "body": "Last van rioolgeur in Brussel Zuid? Via rook- en geurdetectie sporen wij exact op waar de oorzaak zich bevindt."
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
    "body": "Geurdetectie is vaak de snelste manier om geurproblemen te lokaliseren:\n\n- Geurdetectie basis: â‚¬160\n- Combinatie met camera-inspectie mogelijk\n- Herstellingen offerte na diagnose"
  },
  {
    "title": "Waarom snel ingrijpen?",
    "body": "Geurhinder wijst bijna altijd op lekkage of foutieve aansluiting. Geurdetectie maakt het probleem zichtbaar zonder breekwerk."
  }
].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + `\n\nActief in Brussel Zuid: ${muniText} en omgeving.`
      };
    }
    return s;
  });

  const ctaBody =
    "Wij sporen geurproblemen in Brussel Zuid snel en zonder breekwerk op." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const props = {
    brand: "Turbo Services",
    regionLabel: "Brussel Zuid",
    serviceName: "Rook- en geurdetectie",
    heroTitle: "Geurdetectie",
    intro,
    sections,
    ctaTitle: "Geur- of Geurdetectie nodig?",
    ctaBody,
    ctaButton: "Vraag rooktest aan â†’",
    serviceKey: "Geurdetectie",
    heroImagePath: "",
    municipalities,
  } as const;

  return <DienstPageLayout {...props} />;
}

