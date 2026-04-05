export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceDef = {
  key: string;
  name: string;
  intro: string;
  category?: "core" | "secondary" | "supporting" | "deprecated";
  isPrimary?: boolean;
  hasRegionalPages?: boolean;
  hasMunicipalPages?: boolean;
  heroImage?: string;
  sections?: {
    title: string;
    body: string;
  }[];
  faqs?: ServiceFaq[];
  ctaTitle?: string;
  ctaBody?: string;
  ctaButton?: string;
};

export const SERVICES: ServiceDef[] = [
  {
    key: "ontstoppingen",
    name: "Ontstoppingen",
    category: "core",
    isPrimary: true,
    hasRegionalPages: true,
    hasMunicipalPages: true,
    heroImage: "/assets/base/ontstoppingen.png",
    intro:
      "Verstopte wc, lavabo, douche of hoofdriolering? Turbo Services voert ontstoppingen uit met professionele apparatuur en een gerichte aanpak, ook buiten de kantooruren.",
    sections: [
      {
        title: "Waarmee ik help",
        body:
          "Ik help bij verstopte wc's, lavabo's, douches, baden, keukenafvoeren en hoofdrioleringen. Ook borrelende leidingen, terugkerend water of geurproblemen wijzen vaak op een onderliggende verstopping.",
      },
      {
        title: "Werkwijze",
        body:
          "Na een korte analyse van het probleem wordt de betrokken leiding gecontroleerd en mechanisch ontstopt met professioneel materiaal. Indien nodig volgt een camera-inspectie om de oorzaak exact vast te stellen.",
      },
      {
        title: "Prijzen",
        body:
          "De basisprijs voor een ontstopping bedraagt €160 exclusief btw. Een camera-inspectie is een supplement van €90. Wanneer beide samen nodig zijn, geldt het totaalpakket van €250 exclusief btw.",
      },
    ],
    faqs: [
      {
        q: "Wat kost een ontstopping?",
        a: "De basisprijs voor een ontstopping bedraagt €160 exclusief btw. Indien camera-inspectie nodig is, komt daar €90 bij.",
      },
      {
        q: "Hoe snel kan een verstopping opgelost worden?",
        a: "In veel gevallen kan een ontstopping meteen uitgevoerd worden. Turbo Services werkt ook 's avonds en in het weekend aan hetzelfde tarief.",
      },
      {
        q: "Wanneer is camera-inspectie nodig?",
        a: "Bij terugkerende verstoppingen of wanneer de oorzaak niet duidelijk is, helpt camera-inspectie om breuken, verzakkingen of wortelgroei vast te stellen.",
      },
      {
        q: "Kan een verstopping terugkomen?",
        a: "Ja. Als de oorzaak structureel is, zoals vetophoping, verzakking of schade aan de leiding, kan het probleem terugkeren zonder bijkomende diagnose of herstelling.",
      },
      {
        q: "Wanneer moet ik dringend een ontstopping laten uitvoeren?",
        a: "Wanneer water terugkomt via toilet, douche of vloerputjes is snel ingrijpen belangrijk om bijkomende schade en geurhinder te vermijden.",
      },
    ],
    ctaTitle: "Direct hulp nodig bij een verstopping?",
    ctaBody:
      "Beschrijf kort het probleem en de locatie. Turbo Services koppelt snel terug met een concreet tijdsvenster, ook buiten de kantooruren.",
    ctaButton: "Vraag ontstopping aan",
  },
  {
    key: "camera-inspectie",
    name: "Camera-inspectie",
    category: "core",
    isPrimary: true,
    hasRegionalPages: true,
    hasMunicipalPages: true,
    heroImage: "/assets/base/camera-inspectie.png",
    intro:
      "Met camera-inspectie zie je exact wat er in je leidingen gebeurt: breuken, verzakkingen, wortelgroei of hardnekkige verstoppingen. Ideaal bij terugkerende problemen of twijfel over de oorzaak.",
    sections: [
      {
        title: "Wanneer is camera-inspectie zinvol?",
        body:
          "Camera-inspectie is nuttig bij terugkerende verstoppingen, geurproblemen, vermoeden van breuk of verzakking, vochtproblemen langs leidingen en discussies met aannemer, syndicus of verzekering.",
      },
      {
        title: "Werkwijze",
        body:
          "Indien nodig wordt de leiding eerst vrijgemaakt. Daarna wordt de camera systematisch ingebracht om probleemzones exact in beeld te brengen. Op basis daarvan volgt gerichte uitleg en advies.",
      },
      {
        title: "Prijzen",
        body:
          "Een camera-inspectie is geen aparte interventie van €90 op zich, maar een supplement van €90 boven op de basisinterventie van €160 exclusief btw. Samen geldt dus €250 exclusief btw.",
      },
    ],
    faqs: [
      {
        q: "Wat kost een camera-inspectie?",
        a: "Camera-inspectie is een supplement van €90 boven op de basisinterventie van €160 exclusief btw. Samen bedraagt dit €250 exclusief btw.",
      },
      {
        q: "Wanneer is camera-inspectie nodig?",
        a: "Bij terugkerende verstoppingen, geurhinder, vermoeden van schade aan de leiding of wanneer de exacte oorzaak van het probleem niet zichtbaar is.",
      },
      {
        q: "Kan ik beelden of verslag krijgen?",
        a: "Ja. De vaststellingen kunnen gebruikt worden voor verdere bespreking met aannemer, syndicus of verzekering, afhankelijk van de situatie.",
      },
      {
        q: "Moet een leiding eerst ontstopt worden voor camera-inspectie?",
        a: "Vaak wel. Wanneer de leiding niet toegankelijk is door vuil of blokkage, moet ze eerst vrijgemaakt worden om een correcte inspectie mogelijk te maken.",
      },
    ],
    ctaTitle: "Camera-inspectie nodig?",
    ctaBody:
      "Turbo Services brengt je leidingen exact in beeld en geeft duidelijk advies over oorzaak, risico en mogelijke vervolgstappen.",
    ctaButton: "Vraag camera-inspectie aan",
  },
  {
    key: "noodherstellingen",
    name: "Noodherstellingen",
    category: "core",
    isPrimary: true,
    hasRegionalPages: true,
    hasMunicipalPages: true,
    heroImage: "/assets/base/noodherstellingen.png",
    intro:
      "Bij lekken, breuken of acute schade aan afvoer of riolering voert Turbo Services gerichte noodherstellingen uit om verdere schade en uitval te beperken.",
    sections: [
      {
        title: "Wanneer is een noodherstelling nodig?",
        body:
          "Noodherstellingen zijn nodig bij acute lekken, gebroken leidingen, waterinfiltratie, losgekomen aansluitingen of situaties waar snel ingrijpen verdere schade voorkomt.",
      },
      {
        title: "Werkwijze",
        body:
          "Eerst wordt de acute situatie gestabiliseerd. Daarna volgt een gerichte beoordeling van de schade en een praktische oplossing om het probleem veilig en werkbaar op te lossen.",
      },
    ],
    faqs: [
      {
        q: "Wat valt onder noodherstellingen?",
        a: "Dat zijn dringende herstellingen aan afvoer, riolering of aansluitingen wanneer verdere schade, wateroverlast of uitval dreigt.",
      },
      {
        q: "Kan een noodherstelling ook buiten de kantooruren?",
        a: "Ja. Turbo Services werkt ook 's avonds en in het weekend. Na 22u geldt een supplement.",
      },
      {
        q: "Is eerst diagnose nodig?",
        a: "Bij sommige situaties wel. Wanneer de oorzaak niet onmiddellijk zichtbaar is, kan bijkomende inspectie nodig zijn om gericht te herstellen.",
      },
      {
        q: "Wordt alles meteen definitief hersteld?",
        a: "Dat hangt af van de aard van de schade. Soms gebeurt eerst een veilige noodoplossing, gevolgd door een definitieve herstelling.",
      },
    ],
    ctaTitle: "Dringende herstelling nodig?",
    ctaBody:
      "Geef kort door wat er aan de hand is. Turbo Services beoordeelt snel de ernst van het probleem en koppelt terug met een concrete aanpak.",
    ctaButton: "Vraag noodherstelling aan",
  },
  {
    key: "geurdetectie",
    name: "Geurdetectie",
    category: "core",
    isPrimary: true,
    hasRegionalPages: true,
    hasMunicipalPages: true,
    heroImage: "/assets/base/geurdetectie.png",
    intro:
      "Rioolgeur in badkamer, toilet, keuken of technische ruimte vraagt een gerichte analyse. Turbo Services lokaliseert de oorzaak van geurproblemen zonder blind breekwerk.",
    sections: [
      {
        title: "Wanneer is geurdetectie zinvol?",
        body:
          "Geurdetectie is aangewezen bij aanhoudende rioolgeur, terugkerende stank zonder zichtbare verstopping of wanneer verschillende mogelijke oorzaken in aanmerking komen.",
      },
      {
        title: "Werkwijze",
        body:
          "De situatie wordt stap voor stap nagekeken, met focus op sifons, aansluitingen, ontluchting, lekken en defecten in de afvoer of riolering.",
      },
    ],
    faqs: [
      {
        q: "Waar komt rioolgeur meestal vandaan?",
        a: "Vaak ligt de oorzaak bij defecte sifons, losse aansluitingen, lekkende afvoerverbindingen, gebrekkige ontluchting of verborgen schade in het rioleringssysteem.",
      },
      {
        q: "Is geurdetectie hetzelfde als ontstopping?",
        a: "Nee. Een verstopping kan geur veroorzaken, maar geurdetectie focust op het achterhalen van de exacte bron van de stank.",
      },
      {
        q: "Moet er altijd gebroken worden?",
        a: "Nee. Het doel is juist om eerst gericht te lokaliseren waar het probleem zit, zodat onnodig breekwerk vermeden wordt.",
      },
    ],
    ctaTitle: "Rioolgeur laten opsporen?",
    ctaBody:
      "Turbo Services zoekt gericht naar de bron van geurproblemen en geeft duidelijk advies over de juiste oplossing.",
    ctaButton: "Vraag geurdetectie aan",
  },
  {
    key: "gerichte-rioolherstellingen",
    name: "Gerichte rioolherstellingen",
    category: "secondary",
    isPrimary: false,
    hasRegionalPages: true,
    hasMunicipalPages: true,
    heroImage: "/assets/base/gerichte-rioolherstellingen.png",
    intro:
      "Wanneer schade of defecten in de leiding exact gelokaliseerd zijn, voert Turbo Services gerichte rioolherstellingen uit met focus op de echte probleemzone.",
    sections: [
      {
        title: "Wanneer is een gerichte rioolherstelling nodig?",
        body:
          "Bij breuk, verzakking, lekkage, schade aan aansluiting of terugkerende problemen die via inspectie exact gelokaliseerd werden.",
      },
      {
        title: "Voordeel van gericht herstellen",
        body:
          "Door eerst juist te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat bespaart onnodige werken, tijd en bijkomende kosten.",
      },
    ],
    faqs: [
      {
        q: "Moet een rioolherstelling altijd vooraf onderzocht worden?",
        a: "Ja, in de meeste gevallen is een juiste lokalisatie nodig om gericht en efficiënt te herstellen.",
      },
      {
        q: "Wordt altijd de volledige leiding vervangen?",
        a: "Nee. Wanneer de schade lokaal zit, kan een gerichte herstelling volstaan.",
      },
      {
        q: "Kan dit na camera-inspectie ingepland worden?",
        a: "Ja. Camera-inspectie is vaak de logische eerste stap om het defect correct in kaart te brengen.",
      },
    ],
    ctaTitle: "Gerichte rioolherstelling nodig?",
    ctaBody:
      "Turbo Services herstelt gericht waar het probleem effectief zit, op basis van duidelijke vaststellingen en zonder onnodige uitbreidingen.",
    ctaButton: "Vraag rioolherstelling aan",
  },
  {
    key: "vervangen-van-deksels",
    name: "Vervangen van deksels",
    category: "secondary",
    isPrimary: false,
    hasRegionalPages: true,
    hasMunicipalPages: true,
    heroImage: "/assets/base/vervangen-van-deksels.png",
    intro:
      "Beschadigde, verzakte of losliggende putdeksels zorgen voor risico, geurhinder en een onveilige afwerking. Turbo Services vervangt en corrigeert deze gericht.",
    sections: [
      {
        title: "Wanneer een deksel vervangen?",
        body:
          "Bij breuk, verzakking, losliggend deksel, slechte afsluiting of wanneer geur of waterinsijpeling ontstaat rond de put of inspectieopening.",
      },
      {
        title: "Werkwijze",
        body:
          "De bestaande situatie wordt beoordeeld, het juiste type deksel gekozen en de plaatsing of correctie gebeurt met aandacht voor stevigheid, aansluiting en duurzaamheid.",
      },
    ],
    faqs: [
      {
        q: "Wanneer moet een putdeksel vervangen worden?",
        a: "Wanneer het beschadigd, verzakt, losliggend of slecht afsluitend is, of wanneer geur- en veiligheidsproblemen ontstaan.",
      },
      {
        q: "Kan enkel het deksel vervangen worden?",
        a: "Ja, als de omliggende structuur nog in goede staat is. Wanneer ook de rand of aansluiting beschadigd is, kan bijkomende correctie nodig zijn.",
      },
      {
        q: "Is dit enkel esthetisch of ook technisch belangrijk?",
        a: "Het is technisch belangrijk. Een slecht passend of beschadigd deksel kan geurhinder, waterinsijpeling en onveilige situaties veroorzaken.",
      },
    ],
    ctaTitle: "Deksel laten vervangen?",
    ctaBody:
      "Turbo Services beoordeelt de bestaande situatie en zorgt voor een correcte, veilige en duurzame vervanging.",
    ctaButton: "Vraag vervanging aan",
  },
];

export function getServiceByKey(key: string) {
  return SERVICES.find((service) => service.key === key);
}
