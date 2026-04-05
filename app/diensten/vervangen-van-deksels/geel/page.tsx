import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";

export const metadata: Metadata = {
  title: `Vervangen van deksels in Geel | Turbo Services`,
  description: `Vervangen van deksels in Geel voor beschadigde, verzakte of losliggende putdeksels en inspectiedeksels. Turbo Services vervangt en corrigeert deksels gericht, veilig en technisch passend.`,
};

export default function Page() {
  const municipalities = [
  "Geel"
];
  const relatedRegionLinks = [
  {
    "slug": "kempen-zuid",
    "label": "Kempen Zuid"
  }
];
  const sections = [
  {
    "title": "Wanneer een deksel vervangen moet worden in Geel",
    "body": "Een putdeksel of inspectiedeksel moet worden vervangen wanneer het beschadigd, verzakt, losliggend of slecht afsluitend is, of wanneer geur- en veiligheidsproblemen ontstaan. Ook waterinsijpeling en onveilige belasting kunnen wijzen op een technisch probleem met de huidige afdekking."
  },
  {
    "title": "Waarom dit technisch belangrijk is",
    "body": "Een slecht passend of beschadigd deksel is niet alleen een esthetisch probleem. Het kan geurhinder, waterinsijpeling, instabiliteit en bijkomende schade veroorzaken. Tijdige vervanging voorkomt dat de situatie verder verslechtert."
  },
  {
    "title": "Werkwijze",
    "body": "De bestaande situatie wordt beoordeeld, het juiste type deksel gekozen en de plaatsing of correctie gebeurt met aandacht voor stevigheid, aansluiting en duurzaamheid. Indien nodig wordt ook bekeken of de rand, ondersteuning of omliggende situatie bijkomende aanpassing vraagt."
  },
  {
    "title": "Prijs en beoordeling",
    "body": "De prijs hangt af van het type deksel, de staat van de bestaande situatie en de nodige aanpassing ter plaatse. Waar nodig gebeurt eerst een beoordeling om technisch de juiste oplossing te bepalen."
  },
  {
    "title": "Waarom correcte vervanging telt",
    "body": "Een correcte vervanging voorkomt geurproblemen, waterinsijpeling en risico's door instabiliteit of foutieve belasting. Dat is belangrijk zowel voor gebruikscomfort als voor technische duurzaamheid."
  }
];
  const faqs = [
  {
    "q": "Wanneer moet een putdeksel vervangen worden?",
    "a": "Wanneer het beschadigd, verzakt, losliggend of slecht afsluitend is, of wanneer geur- en veiligheidsproblemen ontstaan."
  },
  {
    "q": "Kan enkel het deksel vervangen worden?",
    "a": "Ja, als de omliggende structuur nog in goede staat is. Wanneer ook de rand of aansluiting beschadigd is, kan bijkomende correctie nodig zijn."
  },
  {
    "q": "Is dit enkel esthetisch of ook technisch belangrijk?",
    "a": "Het is technisch belangrijk. Een slecht passend of beschadigd deksel kan geurhinder, waterinsijpeling en onveilige situaties veroorzaken."
  }
];

  return (
    <DienstPageLayout
      serviceKey="vervangen-van-deksels"
      serviceName="Vervangen van deksels"
      
      regionLabel="Geel"
      municipalities={municipalities}
      intro={`Vervangen van deksels in Geel is aangewezen wanneer een putdeksel of inspectiedeksel beschadigd, verzakt, losliggend of slecht afsluitend is. Turbo Services beoordeelt de bestaande situatie en zorgt voor een correcte, veilige en duurzame vervanging afgestemd op belasting, aansluiting en praktische omstandigheden ter plaatse.`}
      sections={sections}
      faqs={faqs}
      ctaTitle="Deksel laten vervangen?"
      ctaBody={`Beschrijf kort welk type deksel of putprobleem zich voordoet in Geel. Turbo Services koppelt snel terug met een voorstel voor beoordeling en vervanging.`}
      ctaButton="Vraag vervanging aan"
      heroImageOverride="/assets/base/vervangen-van-deksels.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
