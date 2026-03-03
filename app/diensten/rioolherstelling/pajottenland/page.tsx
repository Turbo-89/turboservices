import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";

export const metadata: Metadata = {
  title: "Noodherstellingen in Pajottenland",
  description: "Herstellingen van riolering en afvoer, inclusief lekkages, verzakkingen en kapotte leidingen. Snelle interventie bij dringende problemen.",
};

export default function Page() {
  const municipalities = REGION_CITIES["pajottenland"] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");

  const intro =
    "Lekkage, verzakking of defecte riolering in Pajottenland? Turbo Services voert snelle en professionele rioolherstellingen uit." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const sections = [
  {
    "title": "Noodherstellingen",
    "body": "Lekkage, verzakking of defecte riolering in Pajottenland? Turbo Services voert snelle en professionele rioolherstellingen uit."
  },
  {
    "title": "Wat we doen",
    "body": "- Herstelling van gebroken of verzakte rioleringen\n- Vervanging van afvoerbuizen binnen en buiten\n- Herstelling van scheuren en lekkages\n- Lokalisatie van leidingen en problemen\n- Snelle noodinterventies"
  },
  {
    "title": "Werkwijze",
    "body": "1. Lokalisatie van het probleem (camera of rooktest)\n2. Vrijleggen van de leiding indien nodig\n3. Herstelling of vervanging van het beschadigde stuk\n4. Controle van doorstroming\n5. Advies voor preventie"
  },
  {
    "title": "Tarieven",
    "body": "Prijzen variëren per type herstelling. Diagnostiek gebeurt vooraf:\n\n- Totaalpakket diagnose (camera of rooktest): €160–€250\n- Herstellingen op maat (steeds offerte vooraf)\n- Noodinterventies mogelijk buiten kantooruren"
  },
  {
    "title": "Waarom snel ingrijpen?",
    "body": "Lekkages en verzakkingen kunnen snel grotere schade veroorzaken. Vroegtijdige herstelling voorkomt vochtproblemen en structurele schade."
  }
].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + `\n\nActief in Pajottenland: ${muniText} en omgeving.`
      };
    }
    return s;
  });

  const ctaBody =
    "Neem contact op voor een snelle diagnose en herstelling in Pajottenland." +
    (muniText ? `\n\nWerkgebied: ${muniText} en omgeving.` : "");

  const props = {
    brand: "Turbo Services",
    regionLabel: "Pajottenland",
    serviceName: "Noodherstellingen",
    heroTitle: "Noodherstellingen",
    intro,
    sections,
    ctaTitle: "Dringende herstelling nodig?",
    ctaBody,
    ctaButton: "Vraag herstelling aan →",
    serviceKey: "rioolherstelling",
    heroImagePath: "",
    municipalities,
  } as const;

  return <DienstPageLayout {...props} />;
}
