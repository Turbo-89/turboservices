import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";
import { getServiceByKey } from "@/content/services";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Rook- en geurdetectie in Denderstreek",
  description: "Geurdetectie en geuronderzoek om lekken, scheuren of foutieve aansluitingen in de riolering vast te stellen.",
};

export default function Page() {
  const municipalities = REGION_CITIES["denderstreek"] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const service = getServiceByKey("Geurdetectie");

  const intro =
    "Last van rioolgeur in Denderstreek? Via rook- en geurdetectie sporen wij exact op waar de oorzaak zich bevindt." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
  {
    "title": "Rook- en geurdetectie",
    "body": "Last van rioolgeur in Denderstreek? Via rook- en geurdetectie sporen wij exact op waar de oorzaak zich bevindt."
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
        body: s.body + `\n\nActief in Denderstreek: ${muniText} en omgeving.`
      };
    }
    return s;
  });

  const ctaBody =
    "Wij sporen geurproblemen in Denderstreek snel en zonder breekwerk op." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const props = {
    brand: "Turbo Services",
    regionLabel: "Denderstreek",
    serviceName: "Rook- en geurdetectie",
    heroTitle: "Geurdetectie",
    intro,
    sections,
    
    faqs: service?.faqs ?? [],
    ctaTitle: "Geur- of Geurdetectie nodig?",
    ctaBody,
    ctaButton: "Vraag rooktest aan â†’",
    serviceKey: "Geurdetectie",
    heroImagePath: "",
    municipalities,
    municipalityLinks: municipalities.map((city) => ({ slug: slugify(city), label: city })),
  } as const;

  return <DienstPageLayout {...props} />;
}






