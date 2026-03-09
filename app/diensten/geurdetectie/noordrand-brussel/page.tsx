import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";
import { getServiceByKey } from "@/content/services";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Geurdetectie in Noordrand Brussel",
  description: "Geurdetectie en onderzoek van rioolgeur in Noordrand Brussel om lekken, foutieve aansluitingen of verborgen defecten in afvoer en riolering vast te stellen.",
};

export default function Page() {
  const regionKey = "noordrand-brussel" as const;
  const regionLabel = "Noordrand Brussel";
  const municipalities = REGION_CITIES[regionKey] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");
  const service = getServiceByKey("geurdetectie");

  const intro =
    "Last van rioolgeur in Noordrand Brussel? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder onnodig breekwerk." +
    (muniText ? "\n\nWerkgebied: " + muniText + " en omgeving." : "");

  const sections = [
    {
      title: "Geurdetectie",
      body:
        "Last van rioolgeur in Noordrand Brussel? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder onnodig breekwerk.",
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
        "Geurdetectie is vaak de snelste manier om geurproblemen te lokaliseren:\n\n- Basisinterventie: â‚¬160\n- Combinatie met camera-inspectie mogelijk\n- Herstellingen steeds na diagnose en bespreking",
    },
    {
      title: "Waarom snel ingrijpen?",
      body:
        "Geurhinder wijst vaak op lekkage, defecte aansluiting of een probleem in het rioleringssysteem. Gericht onderzoek vermijdt onnodig breekwerk.",
    }
  ].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + "\n\nActief in " + regionLabel + ": " + muniText + " en omgeving.",
      };
    }
    return s;
  });

  const ctaBody =
    "Wij sporen geurproblemen in Noordrand Brussel snel en gericht op en geven duidelijk advies voor de juiste oplossing." +
    (muniText ? "\n\nWerkgebied: " + muniText + " en omgeving." : "");

  return (
    <DienstPageLayout
      serviceKey="geurdetectie"
      serviceName="Geurdetectie"
      regionKey={regionKey}
      regionLabel={regionLabel}
      municipalities={municipalities}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Rioolgeur laten opsporen?"
      ctaBody={ctaBody}
      ctaButton="Vraag geurdetectie aan"
      heroImageOverride="/assets/base/geurdetectie.png"
      municipalityLinks={municipalities.map((city) => ({
        slug: slugify(city),
        label: city,
      }))}
    />
  );
}