import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";

export const metadata: Metadata = {
  title: "Ontstoppingen in Antwerpen Stad",
  description: "Ontstopping van wc, lavabo, douche en hoofdriolering. Turbo Services lost verstoppingen snel en professioneel op, ook ’s avonds en in het weekend aan hetzelfde tarief.",
};

export default function Page() {
  const props = {
    brand: "Turbo Services",
    regionLabel: "Antwerpen Stad",
    serviceName: "Ontstoppingen",
    heroTitle: "Ontstoppingen",
    intro: "Verstopte wc, lavabo, douche of hoofdriolering in Antwerpen Stad? Turbo Services lost het op met professionele machines, ook ’s avonds en in het weekend aan hetzelfde tarief.",
    sections: [
  {
    "title": "Ontstoppingen",
    "body": "Verstopte wc, lavabo, douche of hoofdriolering in Antwerpen Stad? Turbo Services lost het op met professionele machines, ook ’s avonds en in het weekend aan hetzelfde tarief."
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
    "body": "Wij werken met vaste en transparante prijzen, ook ’s avonds en in het weekend:\n\n- Interventie ontstopping: €160\n- Camera-inspectie: €90\n- Totaalpakket (ontstopping + camera): €250"
  },
  {
    "title": "Waarom snel ingrijpen?",
    "body": "Hoe sneller je ingrijpt, hoe kleiner de kans op bijkomende schade zoals geurhinder, overstroming of lekkages. Een korte interventie voorkomt vaak duurdere herstellingen."
  }
],
    ctaTitle: "Hulp nodig bij een verstopping?",
    ctaBody: "Beschrijf kort het probleem en voeg indien mogelijk een foto toe. Wij koppelen snel terug met een concreet tijdsblok in Antwerpen Stad.",
    ctaButton: "Vraag ontstopping aan →",
    serviceKey: "ontstoppingen",
    heroImageKey: "ontstoppingen-antwerpen-stad",
    heroImagePath: "/generated/assets/ontstoppingen-antwerpen-stad.webp",
  } as const;

  return <DienstPageLayout {...props} />;
}
