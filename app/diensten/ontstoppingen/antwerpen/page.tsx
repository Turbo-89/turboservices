import type { Metadata } from "next";
import { DienstPageLayout } from "@/components/diensten/DienstPage";
// Pas het importpad hierboven aan als jouw project geen "@" alias gebruikt.

export const metadata: Metadata = {
  title: "Ontstoppingsdienst Antwerpen | Turbo Services - binnen 1u ter plaatse",
  description: "Professionele ontstopping in Antwerpen. Turbo Services is binnen 1 uur ter plaatse en verhelpt snel al uw verstoppingen. Bel nu voor een efficiënte service.",
};

export default function OntstoppingenAntwerpenPage() {
  const props = {
    brand: "Turbo Services",
    regionLabel: "Antwerpen",
    serviceName: "Ontstoppingsdienst",
    h1: "Snelle en betrouwbare ontstopping in Antwerpen",
    intro: "Turbo Services staat klaar voor professionele ontstoppingsdiensten in Antwerpen. Wij lossen verstoppingen vakkundig op, zodat uw sanitair weer vlot functioneert. Binnen het uur ter plaatse en doeltreffend aan het werk.",
    cta: "Bel nu – binnen 1u ter plaatse",
    sections: [{"heading": "Onze ontstoppingsdiensten", "body": "Of het nu gaat om een verstopte gootsteen, lavabo, wc of afvoer, onze ervaren technici gebruiken de juiste technieken om het probleem grondig op te lossen. Wij werken met moderne apparatuur en zorgen steeds voor een nette afwerking."}, {"heading": "Waarom kiezen voor Turbo Services?", "body": "Wij combineren snelheid, ervaring en klantgerichtheid. Bij een melding in Antwerpen zijn we binnen het uur ter plaatse om uw verstopping snel te verhelpen. Wij geven helder advies en garanderen een duurzame oplossing."}, {"heading": "Preventief onderhoud en advies", "body": "Naast het oplossen van acute problemen, bieden wij ook preventieve controles aan. Zo voorkomt u onaangename verrassingen. Wij geven ook praktische tips om verstopping in de toekomst te vermijden."}],
    heroImageSrc: "/heroes/ontstoppingen-antwerpen.png",
  };

  return <DienstPageLayout {...props} />;
}
