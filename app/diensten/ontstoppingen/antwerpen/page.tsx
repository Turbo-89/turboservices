import type { Metadata } from "next";
import { DienstPageLayout } from "@/components/diensten/DienstPage";
// Pas het importpad hierboven aan als jouw project geen "@" alias gebruikt.

export const metadata: Metadata = {
  title: "Ontstopping Antwerpen | Turbo Services - Snelle ontstoppingsdienst",
  description: "Professionele ontstoppingsdienst in Antwerpen. Turbo Services is binnen 1 uur ter plaatse voor een snelle en efficiënte ontstopping. Bel nu.",
};

export default function OntstoppingenAntwerpenPage() {
  const props = {
    brand: "Turbo Services",
    regionLabel: "Antwerpen",
    serviceName: "Ontstoppingsdienst",
    h1: "Betrouwbare ontstopping in Antwerpen door Turbo Services",
    intro: "Heeft u problemen met een verstopte afvoer of riool in Antwerpen? Turbo Services biedt een snelle en professionele dienst voor ontstopping, met een service die binnen het uur ter plaatse is. Wij helpen u vakkundig en efficiënt van rioolverstoppingen af.",
    cta: "Bel nu – binnen 1u ter plaatse",
    sections: [{"heading": "Onze ontstoppingsdienst in Antwerpen", "body": "Turbo Services levert een complete ontstoppingsdienst voor zowel particulieren als bedrijven in de regio Antwerpen. Wij lossen verstoppingen in afvoeren, gootstenen, toiletten en rioleringen snel en duurzaam op. Dankzij onze moderne technieken kunnen we de oorzaak van het probleem nauwkeurig vaststellen en aanpakken."}, {"heading": "Snelle interventie binnen 1 uur", "body": "Bij een verstopping is snelheid essentieel om verdere schade en ongemak te voorkomen. Daarom garanderen wij dat onze vakmannen binnen één uur ter plaatse zijn in Antwerpen. Zo kunt u rekenen op een vlotte en effectieve service, precies wanneer u die nodig hebt."}, {"heading": "Waarom kiezen voor Turbo Services?", "body": "Naast onze snelle reacties zorgen we voor een professionele aanpak zonder poetswerken achteraf. Onze technici zijn goed opgeleid en beschikken over het juiste materiaal voor elke ontstoppingsklus. Wij bieden een transparante service zonder verrassingen."}],
  };

  return <DienstPageLayout {...props} />;
}
