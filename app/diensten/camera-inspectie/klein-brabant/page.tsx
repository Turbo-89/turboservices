import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";

export const metadata: Metadata = {
  title: "Camera-inspectie in Klein-Brabant",
  description: "Camera-inspectie van afvoer en riolering met professionele apparatuur. Ideaal om scheuren, verzakkingen of verstoppingen in detail te lokaliseren.",
};

export default function Page() {
  const municipalities = REGION_CITIES["klein-brabant"] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const intro =
    "Nood aan een professionele camera-inspectie in Klein-Brabant? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
  {
    "title": "Camera-inspectie",
    "body": "Nood aan een professionele camera-inspectie in Klein-Brabant? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk."
  },
  {
    "title": "Wat we doen",
    "body": "- Inspectie van hoofdriolering en binnenleidingen\n- Detectie van scheuren, verzakkingen en wortelgroei\n- Opmeting van leidingverloop\n- Digitale rapportage mogelijk\n- Snelle diagnose zonder hak- of breekwerk"
  },
  {
    "title": "Werkwijze",
    "body": "1. Vooranalyse van het probleem\n2. Toegang creëren tot de betrokken leiding\n3. Camera-inspectie met hoge resolutie\n4. Analyse van beelden en vaststellen van oorzaak\n5. Advies voor oplossing of herstelling"
  },
  {
    "title": "Tarieven",
    "body": "Camera-inspectie is aanvullend op ontstopping of afzonderlijk mogelijk:\n\n- Camera-inspectie: €90\n- Combinatie met ontstopping: €250 totaalpakket"
  },
  {
    "title": "Waarom snel ingrijpen?",
    "body": "Camera-inspectie is aangewezen bij terugkerende problemen, geurhinder, verzakkingen of onverklaarbare verstoppingen."
  }
].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + `\n\nActief in Klein-Brabant: ${muniText} en omgeving.`
      };
    }
    return s;
  });

  const ctaBody =
    "Wij brengen uw riolering in Klein-Brabant exact in beeld en geven een duidelijk advies voor de juiste oplossing." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const props = {
    brand: "Turbo Services",
    regionLabel: "Klein-Brabant",
    serviceName: "Camera-inspectie",
    heroTitle: "Camera-inspectie",
    intro,
    sections,
    ctaTitle: "Camera-inspectie aanvragen?",
    ctaBody,
    ctaButton: "Vraag inspectie aan →",
    serviceKey: "camera-inspectie",
    heroImagePath: "",
    municipalities,
  } as const;

  return <DienstPageLayout {...props} />;
}
