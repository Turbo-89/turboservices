import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getCommercialLinksForServiceAndCity, getRelatedServiceLinksForCity } from "@/lib/internal-links";
import { filterKnowledgeByService } from "@/lib/knowledge-links";

export const metadata: Metadata = {
  title: `Camera-inspectie in Heist-op-den-Berg | Turbo Services`,
  description: `Camera-inspectie in Heist-op-den-Berg om breuken, verzakkingen, wortelgroei en hardnekkige verstoppingen exact in beeld te brengen. Turbo Services lokaliseert de oorzaak gericht en zonder onnodig breekwerk.`,
};

export default function Page() {
  const serviceKey = "camera-inspectie";
  const municipalities = [
  "Heist-op-den-Berg"
];
  const relatedRegionLinks = [
  {
    "slug": "lier-neteland",
    "label": "Lier & Neteland"
  },
  {
    "slug": "mechelen-rivierenland",
    "label": "Mechelen & Rivierenland"
  }
];
  const sections = [
  {
    "title": "Wanneer camera-inspectie zinvol is in Heist-op-den-Berg",
    "body": "Camera-inspectie is nuttig bij terugkerende verstoppingen, geurproblemen, vermoeden van breuk of verzakking, vochtproblemen langs leidingen en discussies met aannemer, syndicus of verzekering. Het doel is de oorzaak visueel vast te stellen in plaats van te werken op vermoedens."
  },
  {
    "title": "Wat een camera-inspectie zichtbaar maakt",
    "body": "Met een leidingcamera kunnen onder meer breuken, scheuren, verzakkingen, wortelgroei, vervuiling, slecht uitgevoerde aansluitingen en andere obstructies zichtbaar worden gemaakt. Dat is vooral belangrijk wanneer een leiding herhaaldelijk problemen geeft zonder duidelijke externe oorzaak."
  },
  {
    "title": "Werkwijze",
    "body": "Indien nodig wordt de leiding eerst vrijgemaakt. Daarna wordt de camera systematisch ingebracht om probleemzones exact in beeld te brengen. Op basis daarvan volgt gerichte uitleg en advies over de juiste vervolgstap, zoals reinigen, herstellen of verder technisch onderzoek."
  },
  {
    "title": "Prijzen",
    "body": "Een camera-inspectie is geen aparte interventie van €90 op zich, maar een supplement van €90 boven op de basisinterventie van €160 exclusief btw. Samen geldt dus €250 exclusief btw."
  },
  {
    "title": "Waarom dit vaak de juiste diagnose is",
    "body": "Camera-inspectie voorkomt onnodig giswerk en maakt duidelijk waar het probleem effectief zit. Dat beperkt overbodige werken, verhoogt de technische zekerheid en maakt het gemakkelijker om gerichte beslissingen te nemen."
  }
];
  const faqs = [
  {
    "q": "Wat kost een camera-inspectie?",
    "a": "Camera-inspectie is een supplement van €90 boven op de basisinterventie van €160 exclusief btw. Samen bedraagt dit €250 exclusief btw."
  },
  {
    "q": "Wanneer is camera-inspectie nodig?",
    "a": "Bij terugkerende verstoppingen, geurhinder, vermoeden van schade aan de leiding of wanneer de exacte oorzaak van het probleem niet zichtbaar is."
  },
  {
    "q": "Kan ik beelden of verslag krijgen?",
    "a": "Ja. De vaststellingen kunnen gebruikt worden voor verdere bespreking met aannemer, syndicus of verzekering, afhankelijk van de situatie."
  },
  {
    "q": "Moet een leiding eerst ontstopt worden voor camera-inspectie?",
    "a": "Vaak wel. Wanneer de leiding niet toegankelijk is door vuil of blokkage, moet ze eerst vrijgemaakt worden om een correcte inspectie mogelijk te maken."
  }
];
  const commercialLinks = [];

  const relatedServiceLinks = getRelatedServiceLinksForCity(
    serviceKey,
    "Heist-op-den-Berg",
    4
  );

  const knowledgeLinks = filterKnowledgeByService(serviceKey, 4);

  return (
    <DienstPageLayout
      serviceKey="camera-inspectie"
      serviceName="Camera-inspectie"
      
      regionLabel="Heist-op-den-Berg"
      municipalities={municipalities}
      intro={`Camera-inspectie in Heist-op-den-Berg is aangewezen wanneer de oorzaak van een riool- of afvoerprobleem niet duidelijk is of wanneer verstoppingen en geurhinder blijven terugkomen. Turbo Services brengt met camera-inspectie exact in beeld wat er in de leiding gebeurt, zodat verdere stappen technisch onderbouwd kunnen worden genomen.`}
      sections={sections}
      faqs={faqs}
      ctaTitle="Camera-inspectie nodig?"
      ctaBody={`Geef kort door welk probleem zich voordoet in Heist-op-den-Berg. Turbo Services bekijkt of camera-inspectie de juiste stap is en koppelt terug met een concreet voorstel voor diagnose en aanpak.`}
      ctaButton="Vraag camera-inspectie aan"
      heroImageOverride="/assets/base/camera-inspectie.png"
      relatedRegionLinks={relatedRegionLinks}
      commercialLinks={commercialLinks}
      relatedServiceLinks={relatedServiceLinks}
      knowledgeLinks={knowledgeLinks}
    />
  );
}
