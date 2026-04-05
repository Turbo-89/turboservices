import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getCommercialLinksForServiceAndCity, getRelatedServiceLinksForCity } from "@/lib/internal-links";
import { filterKnowledgeByService } from "@/lib/knowledge-links";

export const metadata: Metadata = {
  title: `Gerichte rioolherstellingen in Schoten | Turbo Services`,
  description: `Gerichte rioolherstellingen in Schoten bij breuken, verzakkingen, lekkages en lokale schade aan afvoer of riolering. Turbo Services herstelt gericht op basis van duidelijke vaststellingen en zonder onnodige uitbreidingen.`,
};

export default function Page() {
  const serviceKey = "gerichte-rioolherstellingen";
  const municipalities = [
  "Schoten"
];
  const relatedRegionLinks = [
  {
    "slug": "antwerpen-noordrand",
    "label": "Antwerpen Noordrand"
  }
];
  const sections = [
  {
    "title": "Wanneer een gerichte rioolherstelling nodig is in Schoten",
    "body": "Een gerichte rioolherstelling is aangewezen bij breuk, verzakking, lekkage, schade aan aansluiting of terugkerende problemen die via inspectie exact gelokaliseerd werden. Niet elke situatie vraagt een volledige vervanging van een leiding; vaak volstaat een herstelling van de juiste zone."
  },
  {
    "title": "Waarom gericht herstellen beter is",
    "body": "Door eerst juist te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat bespaart onnodige werken, tijd en bijkomende kosten. Het maakt de uitvoering ook technischer en beter verdedigbaar wanneer er meerdere partijen of discussies betrokken zijn."
  },
  {
    "title": "Werkwijze",
    "body": "Na lokalisatie van het probleem wordt bepaald welke gerichte ingreep technisch aangewezen is. Dat kan gaan om herstel van een lokale breuk, vervanging van een beschadigd deel of correctie van een aansluiting. Waar nodig wordt eerst camera-inspectie gebruikt om de schade exact in kaart te brengen."
  },
  {
    "title": "Prijzen",
    "body": "Prijzen variëren volgens de aard van de schade en de nodige interventie. Diagnose en interventie starten vanaf €160 exclusief btw. Camera-inspectie kan als supplement toegevoegd worden wanneer bijkomende lokalisatie nodig is."
  },
  {
    "title": "Waarom diagnose vooraf belangrijk is",
    "body": "Een juiste lokalisatie voorkomt dat er te ruim of op de verkeerde plaats wordt gewerkt. Dat beperkt risico, houdt de kost onder controle en maakt een technisch doelgerichte oplossing mogelijk."
  }
];
  const faqs = [
  {
    "q": "Moet een rioolherstelling altijd vooraf onderzocht worden?",
    "a": "Ja, in de meeste gevallen is een juiste lokalisatie nodig om gericht en efficiënt te herstellen."
  },
  {
    "q": "Wordt altijd de volledige leiding vervangen?",
    "a": "Nee. Wanneer de schade lokaal zit, kan een gerichte herstelling volstaan."
  },
  {
    "q": "Kan dit na camera-inspectie ingepland worden?",
    "a": "Ja. Camera-inspectie is vaak de logische eerste stap om het defect correct in kaart te brengen."
  }
];
  const commercialLinks = [];

  const relatedServiceLinks = getRelatedServiceLinksForCity(
    serviceKey,
    "Schoten",
    4
  );

  const knowledgeLinks = filterKnowledgeByService(serviceKey, 4);

  return (
    <DienstPageLayout
      serviceKey="gerichte-rioolherstellingen"
      serviceName="Gerichte rioolherstellingen"
      
      regionLabel="Schoten"
      municipalities={municipalities}
      intro={`Gerichte rioolherstellingen in Schoten zijn bedoeld voor situaties waarin schade of defecten in de leiding al gelokaliseerd zijn of via inspectie duidelijk kunnen worden vastgesteld. Turbo Services focust op de echte probleemzone, zodat de herstelling technisch gericht en beheersbaar blijft.`}
      sections={sections}
      faqs={faqs}
      ctaTitle="Gerichte rioolherstelling nodig?"
      ctaBody={`Beschrijf kort welk defect of welke schade zich voordoet in Schoten. Turbo Services koppelt snel terug met een voorstel voor diagnose, herstelling en praktische aanpak.`}
      ctaButton="Vraag rioolherstelling aan"
      heroImageOverride="/assets/base/gerichte-rioolherstellingen.png"
      relatedRegionLinks={relatedRegionLinks}
      commercialLinks={commercialLinks}
      relatedServiceLinks={relatedServiceLinks}
      knowledgeLinks={knowledgeLinks}
    />
  );
}
