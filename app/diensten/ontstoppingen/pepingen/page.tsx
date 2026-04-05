import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getCommercialLinksForServiceAndCity, getRelatedServiceLinksForCity } from "@/lib/internal-links";
import { filterKnowledgeByService } from "@/lib/knowledge-links";

export const metadata: Metadata = {
  title: `Ontstoppingen in Pepingen | Turbo Services`,
  description: `Ontstoppingen in Pepingen voor verstopte wc's, lavabo's, douches, baden, keukenafvoeren en hoofdrioleringen. Turbo Services werkt snel, gericht en ook 's avonds en in het weekend aan hetzelfde tarief.`,
};

export default function Page() {
  const serviceKey = "ontstoppingen";
  const municipalities = [
  "Pepingen"
];
  const relatedRegionLinks = [
  {
    "slug": "pajottenland",
    "label": "Pajottenland"
  }
];
  const sections = [
  {
    "title": "Waarmee ik help in Pepingen",
    "body": "Ik help in Pepingen bij verstopte wc's, lavabo's, douches, baden, keukenafvoeren en hoofdrioleringen. Ook borrelende leidingen, terugkerend water, geurhinder of afvoeren die traag weglopen wijzen vaak op een onderliggende verstopping die gericht moet worden aangepakt."
  },
  {
    "title": "Wanneer een ontstopping nodig is",
    "body": "Een ontstopping is aangewezen wanneer water niet meer normaal wegloopt, terugkomt via een ander afvoerpunt of wanneer dezelfde verstopping blijft terugkomen. In die gevallen is het belangrijk om niet alleen de hinder tijdelijk weg te nemen, maar ook de oorzaak correct te beoordelen."
  },
  {
    "title": "Werkwijze",
    "body": "Na een korte analyse van het probleem wordt de betrokken leiding gecontroleerd en mechanisch ontstopt met professioneel materiaal. Indien nodig volgt een camera-inspectie om de oorzaak exact vast te stellen, bijvoorbeeld bij schade, verzakking, wortelgroei of hardnekkige vervuiling."
  },
  {
    "title": "Prijzen",
    "body": "De basisprijs voor een ontstopping bedraagt €160 exclusief btw. Een camera-inspectie is een supplement van €90. Wanneer beide samen nodig zijn, geldt het totaalpakket van €250 exclusief btw."
  },
  {
    "title": "Waarom snel ingrijpen",
    "body": "Hoe sneller een verstopping wordt aangepakt, hoe kleiner de kans op bijkomende schade zoals wateroverlast, geurhinder, vervuiling of druk op andere afvoeren. Een gerichte interventie voorkomt vaak duurdere vervolgproblemen."
  }
];
  const faqs = [
  {
    "q": "Wat kost een ontstopping?",
    "a": "De basisprijs voor een ontstopping bedraagt €160 exclusief btw. Indien camera-inspectie nodig is, komt daar €90 bij."
  },
  {
    "q": "Hoe snel kan een verstopping opgelost worden?",
    "a": "In veel gevallen kan een ontstopping meteen uitgevoerd worden. Turbo Services werkt ook 's avonds en in het weekend aan hetzelfde tarief."
  },
  {
    "q": "Wanneer is camera-inspectie nodig?",
    "a": "Bij terugkerende verstoppingen of wanneer de oorzaak niet duidelijk is, helpt camera-inspectie om breuken, verzakkingen of wortelgroei vast te stellen."
  },
  {
    "q": "Kan een verstopping terugkomen?",
    "a": "Ja. Als de oorzaak structureel is, zoals vetophoping, verzakking of schade aan de leiding, kan het probleem terugkeren zonder bijkomende diagnose of herstelling."
  },
  {
    "q": "Wanneer moet ik dringend een ontstopping laten uitvoeren?",
    "a": "Wanneer water terugkomt via toilet, douche of vloerputjes is snel ingrijpen belangrijk om bijkomende schade en geurhinder te vermijden."
  }
];
  const commercialLinks = getCommercialLinksForServiceAndCity(serviceKey, "Pepingen", 4);

  const relatedServiceLinks = getRelatedServiceLinksForCity(
    serviceKey,
    "Pepingen",
    4
  );

  const knowledgeLinks = filterKnowledgeByService(serviceKey, 4);

  return (
    <DienstPageLayout
      serviceKey="ontstoppingen"
      serviceName="Ontstoppingen"
      
      regionLabel="Pepingen"
      municipalities={municipalities}
      intro={`Problemen met een verstopte wc, lavabo, douche, bad of hoofdriolering in Pepingen? Turbo Services voert ontstoppingen uit met professionele apparatuur en een gerichte aanpak. Ook bij terugkerende verstoppingen, borrelende afvoeren of water dat terugkomt via toilet, douche of vloerputjes is snelle tussenkomst belangrijk om bijkomende schade en geurhinder te vermijden.`}
      sections={sections}
      faqs={faqs}
      ctaTitle="Direct hulp nodig bij een verstopping?"
      ctaBody={`Beschrijf kort het probleem en de locatie in Pepingen. Turbo Services koppelt snel terug met een concreet tijdsvenster en een gerichte aanpak voor de situatie ter plaatse.`}
      ctaButton="Vraag ontstopping aan"
      heroImageOverride="/assets/base/ontstoppingen.png"
      relatedRegionLinks={relatedRegionLinks}
      commercialLinks={commercialLinks}
      relatedServiceLinks={relatedServiceLinks}
      knowledgeLinks={knowledgeLinks}
    />
  );
}
