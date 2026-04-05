import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";

export const metadata: Metadata = {
  title: `Noodherstellingen in Scherpenheuvel-Zichem | Turbo Services`,
  description: `Noodherstellingen in Scherpenheuvel-Zichem bij lekken, breuken, verzakkingen en andere acute schade aan afvoer of riolering. Turbo Services grijpt snel in om verdere schade en uitval te beperken.`,
};

export default function Page() {
  const municipalities = [
  "Scherpenheuvel-Zichem"
];
  const relatedRegionLinks = [
  {
    "slug": "hageland",
    "label": "Hageland"
  }
];
  const sections = [
  {
    "title": "Wanneer een noodherstelling nodig is in Scherpenheuvel-Zichem",
    "body": "Noodherstellingen zijn aangewezen bij acute lekken, gebroken leidingen, waterinfiltratie, losgekomen aansluitingen of situaties waar snel ingrijpen verdere schade voorkomt. Niet elk probleem vraagt meteen een volledige herstelling, maar stabiliseren en technisch veilig ingrijpen is vaak wel noodzakelijk."
  },
  {
    "title": "Wat onder noodherstellingen valt",
    "body": "Het gaat om dringende herstellingen aan afvoer, riolering of aansluitingen wanneer verdere schade, wateroverlast of uitval dreigt. Afhankelijk van de situatie kan eerst een noodoplossing nodig zijn, gevolgd door een definitieve herstelling."
  },
  {
    "title": "Werkwijze",
    "body": "Eerst wordt de acute situatie gestabiliseerd. Daarna volgt een gerichte beoordeling van de schade en een praktische oplossing om het probleem veilig en werkbaar op te lossen. Wanneer de oorzaak niet meteen zichtbaar is, kan bijkomende diagnose nodig zijn om gericht te herstellen."
  },
  {
    "title": "Prijzen",
    "body": "Prijzen variëren volgens het type probleem en de nodige interventie. Diagnose en interventie starten vanaf €160 exclusief btw. Camera-inspectie kan als supplement toegevoegd worden wanneer bijkomende lokalisatie nodig is."
  },
  {
    "title": "Waarom snel ingrijpen",
    "body": "Lekkages, breuken en verzakkingen kunnen snel grotere schade veroorzaken aan gebouw, afwerking of omliggende leidingen. Een snelle technische tussenkomst helpt om gevolgschade en verdere uitval te beperken."
  }
];
  const faqs = [
  {
    "q": "Wat valt onder noodherstellingen?",
    "a": "Dat zijn dringende herstellingen aan afvoer, riolering of aansluitingen wanneer verdere schade, wateroverlast of uitval dreigt."
  },
  {
    "q": "Kan een noodherstelling ook buiten de kantooruren?",
    "a": "Ja. Turbo Services werkt ook 's avonds en in het weekend. Na 22u geldt een supplement."
  },
  {
    "q": "Is eerst diagnose nodig?",
    "a": "Bij sommige situaties wel. Wanneer de oorzaak niet onmiddellijk zichtbaar is, kan bijkomende inspectie nodig zijn om gericht te herstellen."
  },
  {
    "q": "Wordt alles meteen definitief hersteld?",
    "a": "Dat hangt af van de aard van de schade. Soms gebeurt eerst een veilige noodoplossing, gevolgd door een definitieve herstelling."
  }
];

  return (
    <DienstPageLayout
      serviceKey="noodherstellingen"
      serviceName="Noodherstellingen"
      
      regionLabel="Scherpenheuvel-Zichem"
      municipalities={municipalities}
      intro={`Noodherstellingen in Scherpenheuvel-Zichem zijn nodig wanneer een afvoer of riolering acuut problemen veroorzaakt, zoals een lek, breuk, verzakking of losgekomen aansluiting. Turbo Services beoordeelt snel de situatie en voert een gerichte tussenkomst uit om verdere schade, wateroverlast en bijkomende uitval te beperken.`}
      sections={sections}
      faqs={faqs}
      ctaTitle="Dringende herstelling nodig?"
      ctaBody={`Geef kort door wat er dringend aan de hand is in Scherpenheuvel-Zichem. Turbo Services schat de ernst van het probleem snel in en koppelt terug met een concrete aanpak.`}
      ctaButton="Vraag noodherstelling aan"
      heroImageOverride="/assets/base/noodherstellingen.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
