import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";
import { getServiceByKey } from "@/content/services";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Camera-inspectie in Brussel Noord",
  description: "Camera-inspectie van afvoer en riolering in Brussel Noord met professionele apparatuur. Ideaal om scheuren, verzakkingen of verstoppingen in detail te lokaliseren.",
};

export default function Page() {
  const regionKey = "brussel-noord" as const;
  const regionLabel = "Brussel Noord";
  const municipalities = REGION_CITIES[regionKey] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");
  const service = getServiceByKey("camera-inspectie");

  const intro =
    "Nood aan een professionele camera-inspectie in Brussel Noord? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk." +
    (muniText ? "\n\nWerkgebied: " + muniText + " en omgeving." : "");

  const sections = [
    {
      title: "Camera-inspectie",
      body:
        "Nood aan een professionele camera-inspectie in Brussel Noord? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk.",
    },
    {
      title: "Wat we doen",
      body:
        "- Inspectie van hoofdriolering en binnenleidingen\n- Detectie van scheuren, verzakkingen en wortelgroei\n- Opmeting van leidingverloop\n- Digitale rapportage mogelijk\n- Snelle diagnose zonder hak- of breekwerk",
    },
    {
      title: "Werkwijze",
      body:
        "1. Vooranalyse van het probleem\n2. Toegang creÃ«ren tot de betrokken leiding\n3. Camera-inspectie met hoge resolutie\n4. Analyse van beelden en vaststellen van oorzaak\n5. Advies voor oplossing of herstelling",
    },
    {
      title: "Tarieven",
      body:
        "Camera-inspectie gebeurt als supplement bovenop de standaard interventiekost:\n\n- Standaard interventiekost: â‚¬160\n- Camera-inspectie supplement: â‚¬90\n- Bij combinatie geldt: â‚¬250",
    },
    {
      title: "Waarom snel ingrijpen?",
      body:
        "Camera-inspectie is aangewezen bij terugkerende problemen, geurhinder, verzakkingen of onverklaarbare verstoppingen.",
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
    "Wij brengen uw riolering in Brussel Noord exact in beeld en geven een duidelijk advies voor de juiste oplossing." +
    (muniText ? "\n\nWerkgebied: " + muniText + " en omgeving." : "");

  return (
    <DienstPageLayout
      serviceKey="camera-inspectie"
      serviceName="Camera-inspectie"
      regionKey={regionKey}
      regionLabel={regionLabel}
      municipalities={municipalities}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Camera-inspectie aanvragen?"
      ctaBody={ctaBody}
      ctaButton="Vraag inspectie aan"
      heroImageOverride="/assets/base/camera-inspectie.png"
      municipalityLinks={municipalities.map((city) => ({
        slug: slugify(city),
        label: city,
      }))}
    />
  );
}