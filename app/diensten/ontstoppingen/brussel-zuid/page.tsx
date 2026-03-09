import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";
import { getServiceByKey } from "@/content/services";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Ontstoppingen in Brussel Zuid",
  description: "Ontstopping van wc, lavabo, douche en hoofdriolering. Turbo Services lost verstoppingen snel en professioneel op, ook â€™s avonds en in het weekend aan hetzelfde tarief.",
};

export default function Page() {
  const municipalities = REGION_CITIES["brussel-zuid"] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const service = getServiceByKey("ontstoppingen");

  const intro =
    "Verstopte wc, lavabo, douche of hoofdriolering in Brussel Zuid? Turbo Services lost het op met professionele machines, ook â€™s avonds en in het weekend aan hetzelfde tarief." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
  {
    "title": "Ontstoppingen",
    "body": "Verstopte wc, lavabo, douche of hoofdriolering in Brussel Zuid? Turbo Services lost het op met professionele machines, ook â€™s avonds en in het weekend aan hetzelfde tarief."
  },
  {
    "title": "Wat we doen",
    "body": "- Verstopte wc, douche, bad en lavabo\n- Keukenafvoer en vetleidingen\n- Hoofdriolering binnen en buiten de woning\n- Water dat terugkomt via vloerputjes of kelderafvoeren\n- Rioolgeur, borrelende geluiden en terugslagproblemen"
  },
  {
    "title": "Werkwijze",
    "body": "1. Korte bevraging van het probleem\n2. Inspectie van de betrokken afvoeren\n3. Mechanische ontstopping met professionele apparatuur\n4. Indien nodig: camera-inspectie voor diagnose\n5. Controle en advies om herhaling te vermijden"
  },
  {
    "title": "Tarieven",
    "body": "Wij werken met vaste en transparante prijzen, ook â€™s avonds en in het weekend:\n\n- Interventie ontstopping: â‚¬160\n- Camera-inspectie: â‚¬90\n- Totaalpakket (ontstopping + camera): â‚¬250"
  },
  {
    "title": "Waarom snel ingrijpen?",
    "body": "Hoe sneller je ingrijpt, hoe kleiner de kans op bijkomende schade zoals geurhinder, overstroming of lekkages. Een korte interventie voorkomt vaak duurdere herstellingen."
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
    "Beschrijf kort het probleem en voeg indien mogelijk een foto toe. Wij koppelen snel terug met een concreet tijdsblok in Brussel Zuid." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const props = {
    brand: "Turbo Services",
    regionLabel: "Brussel Zuid",
    serviceName: "Ontstoppingen",
    heroTitle: "Ontstoppingen",
    intro,
    sections,
    
    faqs: service?.faqs ?? [],
    ctaTitle: "Hulp nodig bij een verstopping?",
    ctaBody,
    ctaButton: "Vraag ontstopping aan â†’",
    serviceKey: "ontstoppingen",
    heroImagePath: "",
    municipalities,
    municipalityLinks: municipalities.map((city) => ({ slug: slugify(city), label: city })),
  } as const;

  return <DienstPageLayout {...props} />;
}





