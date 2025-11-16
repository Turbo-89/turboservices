import type { Metadata } from "next";
import { DienstPageLayout } from "@/components/diensten/DienstPage";
// Pas het importpad hierboven aan als jouw project geen "@" alias gebruikt.

export const metadata: Metadata = {
  title: "Ontstoppingsdienst Antwerpen - Snel en betrouwbaar | Turbo Services",
  description: "Snelle en professionele ontstopping in Antwerpen. Turbo Services is binnen 1 uur ter plaatse voor al uw riool- en afvoerverstoppingen.",
};

export default function OntstoppingenAntwerpenPage() {
  const props = {
    brand: "Turbo Services",
    regionLabel: "Antwerpen",
    serviceName: "Ontstoppingsdienst",
    h1: "Snel en professioneel ontstopping in Antwerpen",
    intro: "Heeft u een verstopte afvoer of riool in Antwerpen? Turbo Services staat klaar voor een efficiënte en betrouwbare ontstoppingsdienst. Bel ons en wij zijn binnen een uur ter plaatse.",
    sections: [{"heading": "Onze ontstoppingsdienst in Antwerpen", "body": "Turbo Services biedt een complete oplossing voor alle soorten verstoppingen. Van lavabo’s en toiletten tot rioleringen en regenpijpen, onze ervaren technici gebruiken professionele technieken om het probleem grondig aan te pakken."}, {"heading": "Waarom kiezen voor Turbo Services?", "body": "Wij garanderen een snelle interventie, heldere communicatie en duurzame resultaten. Met onze lokale kennis van Antwerpen kunnen we snel ter plaatse zijn en de juiste aanpak kiezen voor uw situatie."}, {"heading": "Preventief onderhoud en advies", "body": "Naast directe ontstopping geven we ook advies om toekomstige verstoppingen te voorkomen. Regelmatig onderhoud en tijdige controle houden uw leidingen vrij en zorgen voor een goede werking."}],
    cta: "Bel nu – binnen 1u ter plaatse",
    serviceKey: "ontstopping",
  };

  return <DienstPageLayout {...props} />;
}
