export type LocationSectionTemplate = {
  title: string;
  body: string;
};

export type ServiceLocationTemplate = {
  serviceKey: string;

  regionalTitleTemplate: string;
  regionalDescriptionTemplate: string;
  regionalIntroTemplate: string;
  regionalCtaBodyTemplate: string;
  regionalSections: LocationSectionTemplate[];

  municipalTitleTemplate: string;
  municipalDescriptionTemplate: string;
  municipalIntroTemplate: string;
  municipalCtaBodyTemplate: string;
  municipalSections: LocationSectionTemplate[];
};

export const SERVICE_LOCATION_TEMPLATES: ServiceLocationTemplate[] = [
  {
    serviceKey: "ontstoppingen",

    regionalTitleTemplate: "{SERVICE_NAME} in {REGION}",
    regionalDescriptionTemplate:
      "{SERVICE_NAME} in {REGION} voor verstopte wc's, lavabo's, douches, baden, keukenafvoeren en hoofdrioleringen. Turbo Services werkt snel, gericht en ook 's avonds en in het weekend aan hetzelfde tarief.",
    regionalIntroTemplate:
      "Problemen met een verstopte wc, lavabo, douche, bad of hoofdriolering in {REGION}? Turbo Services voert ontstoppingen uit met professionele apparatuur en een gerichte aanpak. Ook bij terugkerende verstoppingen, borrelende afvoeren of water dat terugkomt via toilet, douche of vloerputjes is snelle tussenkomst belangrijk om bijkomende schade en geurhinder te vermijden.",
    regionalCtaBodyTemplate:
      "Beschrijf kort het probleem en de locatie in {REGION}. Turbo Services koppelt snel terug met een concreet tijdsvenster en een gerichte aanpak voor de situatie ter plaatse.",
    regionalSections: [
      {
        title: "Waarmee ik help in {REGION}",
        body:
          "Ik help in {REGION} bij verstopte wc's, lavabo's, douches, baden, keukenafvoeren en hoofdrioleringen. Ook borrelende leidingen, terugkerend water, geurhinder of afvoeren die traag weglopen wijzen vaak op een onderliggende verstopping die gericht moet worden aangepakt."
      },
      {
        title: "Wanneer een ontstopping nodig is",
        body:
          "Een ontstopping is aangewezen wanneer water niet meer normaal wegloopt, terugkomt via een ander afvoerpunt of wanneer dezelfde verstopping blijft terugkomen. In die gevallen is het belangrijk om niet alleen de hinder tijdelijk weg te nemen, maar ook de oorzaak correct te beoordelen."
      },
      {
        title: "Werkwijze",
        body:
          "Na een korte analyse van het probleem wordt de betrokken leiding gecontroleerd en mechanisch ontstopt met professioneel materiaal. Indien nodig volgt een camera-inspectie om de oorzaak exact vast te stellen, bijvoorbeeld bij schade, verzakking, wortelgroei of hardnekkige vervuiling."
      },
      {
        title: "Prijzen",
        body:
          "De basisprijs voor een ontstopping bedraagt €160 exclusief btw. Een camera-inspectie is een supplement van €90. Wanneer beide samen nodig zijn, geldt het totaalpakket van €250 exclusief btw."
      },
      {
        title: "Waarom snel ingrijpen",
        body:
          "Hoe sneller een verstopping wordt aangepakt, hoe kleiner de kans op bijkomende schade zoals wateroverlast, geurhinder, vervuiling of druk op andere afvoeren. Een gerichte interventie voorkomt vaak duurdere vervolgproblemen."
      }
    ],

    municipalTitleTemplate: "{SERVICE_NAME} in {CITY}",
    municipalDescriptionTemplate:
      "{SERVICE_NAME} in {CITY} voor verstopte wc's, lavabo's, douches, baden, keukenafvoeren en hoofdrioleringen. Turbo Services werkt snel, gericht en ook 's avonds en in het weekend aan hetzelfde tarief.",
    municipalIntroTemplate:
      "Problemen met een verstopte wc, lavabo, douche, bad of hoofdriolering in {CITY}? Turbo Services voert ontstoppingen uit met professionele apparatuur en een gerichte aanpak. Ook bij terugkerende verstoppingen, borrelende afvoeren of water dat terugkomt via toilet, douche of vloerputjes is snelle tussenkomst belangrijk om bijkomende schade en geurhinder te vermijden.",
    municipalCtaBodyTemplate:
      "Beschrijf kort het probleem en de locatie in {CITY}. Turbo Services koppelt snel terug met een concreet tijdsvenster en een gerichte aanpak voor de situatie ter plaatse.",
    municipalSections: [
      {
        title: "Waarmee ik help in {CITY}",
        body:
          "Ik help in {CITY} bij verstopte wc's, lavabo's, douches, baden, keukenafvoeren en hoofdrioleringen. Ook borrelende leidingen, terugkerend water, geurhinder of afvoeren die traag weglopen wijzen vaak op een onderliggende verstopping die gericht moet worden aangepakt."
      },
      {
        title: "Wanneer een ontstopping nodig is",
        body:
          "Een ontstopping is aangewezen wanneer water niet meer normaal wegloopt, terugkomt via een ander afvoerpunt of wanneer dezelfde verstopping blijft terugkomen. In die gevallen is het belangrijk om niet alleen de hinder tijdelijk weg te nemen, maar ook de oorzaak correct te beoordelen."
      },
      {
        title: "Werkwijze",
        body:
          "Na een korte analyse van het probleem wordt de betrokken leiding gecontroleerd en mechanisch ontstopt met professioneel materiaal. Indien nodig volgt een camera-inspectie om de oorzaak exact vast te stellen, bijvoorbeeld bij schade, verzakking, wortelgroei of hardnekkige vervuiling."
      },
      {
        title: "Prijzen",
        body:
          "De basisprijs voor een ontstopping bedraagt €160 exclusief btw. Een camera-inspectie is een supplement van €90. Wanneer beide samen nodig zijn, geldt het totaalpakket van €250 exclusief btw."
      },
      {
        title: "Waarom snel ingrijpen",
        body:
          "Hoe sneller een verstopping wordt aangepakt, hoe kleiner de kans op bijkomende schade zoals wateroverlast, geurhinder, vervuiling of druk op andere afvoeren. Een gerichte interventie voorkomt vaak duurdere vervolgproblemen."
      }
    ]
  },

  {
    serviceKey: "camera-inspectie",

    regionalTitleTemplate: "{SERVICE_NAME} in {REGION}",
    regionalDescriptionTemplate:
      "{SERVICE_NAME} in {REGION} om breuken, verzakkingen, wortelgroei en hardnekkige verstoppingen exact in beeld te brengen. Turbo Services lokaliseert de oorzaak gericht en zonder onnodig breekwerk.",
    regionalIntroTemplate:
      "Camera-inspectie in {REGION} is aangewezen wanneer de oorzaak van een riool- of afvoerprobleem niet duidelijk is of wanneer verstoppingen en geurhinder blijven terugkomen. Turbo Services brengt met camera-inspectie exact in beeld wat er in de leiding gebeurt, zodat verdere stappen technisch onderbouwd kunnen worden genomen.",
    regionalCtaBodyTemplate:
      "Geef kort door welk probleem zich voordoet in {REGION}. Turbo Services bekijkt of camera-inspectie de juiste stap is en koppelt terug met een concreet voorstel voor diagnose en aanpak.",
    regionalSections: [
      {
        title: "Wanneer camera-inspectie zinvol is in {REGION}",
        body:
          "Camera-inspectie is nuttig bij terugkerende verstoppingen, geurproblemen, vermoeden van breuk of verzakking, vochtproblemen langs leidingen en discussies met aannemer, syndicus of verzekering. Het doel is de oorzaak visueel vast te stellen in plaats van te werken op vermoedens."
      },
      {
        title: "Wat een camera-inspectie zichtbaar maakt",
        body:
          "Met een leidingcamera kunnen onder meer breuken, scheuren, verzakkingen, wortelgroei, vervuiling, slecht uitgevoerde aansluitingen en andere obstructies zichtbaar worden gemaakt. Dat is vooral belangrijk wanneer een leiding herhaaldelijk problemen geeft zonder duidelijke externe oorzaak."
      },
      {
        title: "Werkwijze",
        body:
          "Indien nodig wordt de leiding eerst vrijgemaakt. Daarna wordt de camera systematisch ingebracht om probleemzones exact in beeld te brengen. Op basis daarvan volgt gerichte uitleg en advies over de juiste vervolgstap, zoals reinigen, herstellen of verder technisch onderzoek."
      },
      {
        title: "Prijzen",
        body:
          "Een camera-inspectie is geen aparte interventie van €90 op zich, maar een supplement van €90 boven op de basisinterventie van €160 exclusief btw. Samen geldt dus €250 exclusief btw."
      },
      {
        title: "Waarom dit vaak de juiste diagnose is",
        body:
          "Camera-inspectie voorkomt onnodig giswerk en maakt duidelijk waar het probleem effectief zit. Dat beperkt overbodige werken, verhoogt de technische zekerheid en maakt het gemakkelijker om gerichte beslissingen te nemen."
      }
    ],

    municipalTitleTemplate: "{SERVICE_NAME} in {CITY}",
    municipalDescriptionTemplate:
      "{SERVICE_NAME} in {CITY} om breuken, verzakkingen, wortelgroei en hardnekkige verstoppingen exact in beeld te brengen. Turbo Services lokaliseert de oorzaak gericht en zonder onnodig breekwerk.",
    municipalIntroTemplate:
      "Camera-inspectie in {CITY} is aangewezen wanneer de oorzaak van een riool- of afvoerprobleem niet duidelijk is of wanneer verstoppingen en geurhinder blijven terugkomen. Turbo Services brengt met camera-inspectie exact in beeld wat er in de leiding gebeurt, zodat verdere stappen technisch onderbouwd kunnen worden genomen.",
    municipalCtaBodyTemplate:
      "Geef kort door welk probleem zich voordoet in {CITY}. Turbo Services bekijkt of camera-inspectie de juiste stap is en koppelt terug met een concreet voorstel voor diagnose en aanpak.",
    municipalSections: [
      {
        title: "Wanneer camera-inspectie zinvol is in {CITY}",
        body:
          "Camera-inspectie is nuttig bij terugkerende verstoppingen, geurproblemen, vermoeden van breuk of verzakking, vochtproblemen langs leidingen en discussies met aannemer, syndicus of verzekering. Het doel is de oorzaak visueel vast te stellen in plaats van te werken op vermoedens."
      },
      {
        title: "Wat een camera-inspectie zichtbaar maakt",
        body:
          "Met een leidingcamera kunnen onder meer breuken, scheuren, verzakkingen, wortelgroei, vervuiling, slecht uitgevoerde aansluitingen en andere obstructies zichtbaar worden gemaakt. Dat is vooral belangrijk wanneer een leiding herhaaldelijk problemen geeft zonder duidelijke externe oorzaak."
      },
      {
        title: "Werkwijze",
        body:
          "Indien nodig wordt de leiding eerst vrijgemaakt. Daarna wordt de camera systematisch ingebracht om probleemzones exact in beeld te brengen. Op basis daarvan volgt gerichte uitleg en advies over de juiste vervolgstap, zoals reinigen, herstellen of verder technisch onderzoek."
      },
      {
        title: "Prijzen",
        body:
          "Een camera-inspectie is geen aparte interventie van €90 op zich, maar een supplement van €90 boven op de basisinterventie van €160 exclusief btw. Samen geldt dus €250 exclusief btw."
      },
      {
        title: "Waarom dit vaak de juiste diagnose is",
        body:
          "Camera-inspectie voorkomt onnodig giswerk en maakt duidelijk waar het probleem effectief zit. Dat beperkt overbodige werken, verhoogt de technische zekerheid en maakt het gemakkelijker om gerichte beslissingen te nemen."
      }
    ]
  },

  {
    serviceKey: "noodherstellingen",

    regionalTitleTemplate: "{SERVICE_NAME} in {REGION}",
    regionalDescriptionTemplate:
      "{SERVICE_NAME} in {REGION} bij lekken, breuken, verzakkingen en andere acute schade aan afvoer of riolering. Turbo Services grijpt snel in om verdere schade en uitval te beperken.",
    regionalIntroTemplate:
      "Noodherstellingen in {REGION} zijn nodig wanneer een afvoer of riolering acuut problemen veroorzaakt, zoals een lek, breuk, verzakking of losgekomen aansluiting. Turbo Services beoordeelt snel de situatie en voert een gerichte tussenkomst uit om verdere schade, wateroverlast en bijkomende uitval te beperken.",
    regionalCtaBodyTemplate:
      "Geef kort door wat er dringend aan de hand is in {REGION}. Turbo Services schat de ernst van het probleem snel in en koppelt terug met een concrete aanpak.",
    regionalSections: [
      {
        title: "Wanneer een noodherstelling nodig is in {REGION}",
        body:
          "Noodherstellingen zijn aangewezen bij acute lekken, gebroken leidingen, waterinfiltratie, losgekomen aansluitingen of situaties waar snel ingrijpen verdere schade voorkomt. Niet elk probleem vraagt meteen een volledige herstelling, maar stabiliseren en technisch veilig ingrijpen is vaak wel noodzakelijk."
      },
      {
        title: "Wat onder noodherstellingen valt",
        body:
          "Het gaat om dringende herstellingen aan afvoer, riolering of aansluitingen wanneer verdere schade, wateroverlast of uitval dreigt. Afhankelijk van de situatie kan eerst een noodoplossing nodig zijn, gevolgd door een definitieve herstelling."
      },
      {
        title: "Werkwijze",
        body:
          "Eerst wordt de acute situatie gestabiliseerd. Daarna volgt een gerichte beoordeling van de schade en een praktische oplossing om het probleem veilig en werkbaar op te lossen. Wanneer de oorzaak niet meteen zichtbaar is, kan bijkomende diagnose nodig zijn om gericht te herstellen."
      },
      {
        title: "Prijzen",
        body:
          "Prijzen variëren volgens het type probleem en de nodige interventie. Diagnose en interventie starten vanaf €160 exclusief btw. Camera-inspectie kan als supplement toegevoegd worden wanneer bijkomende lokalisatie nodig is."
      },
      {
        title: "Waarom snel ingrijpen",
        body:
          "Lekkages, breuken en verzakkingen kunnen snel grotere schade veroorzaken aan gebouw, afwerking of omliggende leidingen. Een snelle technische tussenkomst helpt om gevolgschade en verdere uitval te beperken."
      }
    ],

    municipalTitleTemplate: "{SERVICE_NAME} in {CITY}",
    municipalDescriptionTemplate:
      "{SERVICE_NAME} in {CITY} bij lekken, breuken, verzakkingen en andere acute schade aan afvoer of riolering. Turbo Services grijpt snel in om verdere schade en uitval te beperken.",
    municipalIntroTemplate:
      "Noodherstellingen in {CITY} zijn nodig wanneer een afvoer of riolering acuut problemen veroorzaakt, zoals een lek, breuk, verzakking of losgekomen aansluiting. Turbo Services beoordeelt snel de situatie en voert een gerichte tussenkomst uit om verdere schade, wateroverlast en bijkomende uitval te beperken.",
    municipalCtaBodyTemplate:
      "Geef kort door wat er dringend aan de hand is in {CITY}. Turbo Services schat de ernst van het probleem snel in en koppelt terug met een concrete aanpak.",
    municipalSections: [
      {
        title: "Wanneer een noodherstelling nodig is in {CITY}",
        body:
          "Noodherstellingen zijn aangewezen bij acute lekken, gebroken leidingen, waterinfiltratie, losgekomen aansluitingen of situaties waar snel ingrijpen verdere schade voorkomt. Niet elk probleem vraagt meteen een volledige herstelling, maar stabiliseren en technisch veilig ingrijpen is vaak wel noodzakelijk."
      },
      {
        title: "Wat onder noodherstellingen valt",
        body:
          "Het gaat om dringende herstellingen aan afvoer, riolering of aansluitingen wanneer verdere schade, wateroverlast of uitval dreigt. Afhankelijk van de situatie kan eerst een noodoplossing nodig zijn, gevolgd door een definitieve herstelling."
      },
      {
        title: "Werkwijze",
        body:
          "Eerst wordt de acute situatie gestabiliseerd. Daarna volgt een gerichte beoordeling van de schade en een praktische oplossing om het probleem veilig en werkbaar op te lossen. Wanneer de oorzaak niet meteen zichtbaar is, kan bijkomende diagnose nodig zijn om gericht te herstellen."
      },
      {
        title: "Prijzen",
        body:
          "Prijzen variëren volgens het type probleem en de nodige interventie. Diagnose en interventie starten vanaf €160 exclusief btw. Camera-inspectie kan als supplement toegevoegd worden wanneer bijkomende lokalisatie nodig is."
      },
      {
        title: "Waarom snel ingrijpen",
        body:
          "Lekkages, breuken en verzakkingen kunnen snel grotere schade veroorzaken aan gebouw, afwerking of omliggende leidingen. Een snelle technische tussenkomst helpt om gevolgschade en verdere uitval te beperken."
      }
    ]
  },

  {
    serviceKey: "geurdetectie",

    regionalTitleTemplate: "{SERVICE_NAME} in {REGION}",
    regionalDescriptionTemplate:
      "{SERVICE_NAME} in {REGION} bij aanhoudende rioolgeur in badkamer, toilet, keuken of technische ruimte. Turbo Services zoekt gericht naar de bron van de stank zonder blind breekwerk.",
    regionalIntroTemplate:
      "Geurdetectie in {REGION} is aangewezen wanneer rioolgeur blijft terugkomen zonder dat de oorzaak duidelijk zichtbaar is. Turbo Services onderzoekt gericht waar de geur ontstaat, zodat niet op goed geluk moet worden opengebroken of hersteld. Doel is de bron van het probleem technisch correct te lokaliseren.",
    regionalCtaBodyTemplate:
      "Beschrijf kort waar de geurhinder optreedt in {REGION} en hoe lang het probleem al aanwezig is. Turbo Services koppelt snel terug met een gerichte aanpak voor opsporing en advies.",
    regionalSections: [
      {
        title: "Wanneer geurdetectie zinvol is in {REGION}",
        body:
          "Geurdetectie is aangewezen bij aanhoudende rioolgeur, terugkerende stank zonder zichtbare verstopping of wanneer verschillende mogelijke oorzaken in aanmerking komen. Dat gebeurt bijvoorbeeld bij defecte sifons, lekkende verbindingen, foutieve aansluitingen of problemen met ontluchting."
      },
      {
        title: "Waar rioolgeur meestal vandaan komt",
        body:
          "De oorzaak ligt vaak bij defecte sifons, losse aansluitingen, lekkende afvoerverbindingen, gebrekkige ontluchting of verborgen schade in het rioleringssysteem. Een verstopping kan geur veroorzaken, maar geurdetectie focust op het achterhalen van de exacte bron."
      },
      {
        title: "Werkwijze",
        body:
          "De situatie wordt stap voor stap nagekeken, met focus op sifons, aansluitingen, ontluchting, lekken en defecten in de afvoer of riolering. Het doel is gericht te lokaliseren waar het probleem zit, zodat onnodig breekwerk wordt vermeden."
      },
      {
        title: "Prijzen",
        body:
          "Geurdetectie gebeurt binnen de basisstructuur van een interventie. De basisinterventie bedraagt €160 exclusief btw. Indien camera-inspectie nodig is als aanvulling, geldt een supplement van €90."
      },
      {
        title: "Waarom gericht opsporen belangrijk is",
        body:
          "Geurhinder is vaak hardnekkig en moeilijk correct in te schatten zonder gerichte controle. Door eerst de bron te lokaliseren, vermijd je nutteloze werken en wordt de oplossing veel preciezer en efficiënter."
      }
    ],

    municipalTitleTemplate: "{SERVICE_NAME} in {CITY}",
    municipalDescriptionTemplate:
      "{SERVICE_NAME} in {CITY} bij aanhoudende rioolgeur in badkamer, toilet, keuken of technische ruimte. Turbo Services zoekt gericht naar de bron van de stank zonder blind breekwerk.",
    municipalIntroTemplate:
      "Geurdetectie in {CITY} is aangewezen wanneer rioolgeur blijft terugkomen zonder dat de oorzaak duidelijk zichtbaar is. Turbo Services onderzoekt gericht waar de geur ontstaat, zodat niet op goed geluk moet worden opengebroken of hersteld. Doel is de bron van het probleem technisch correct te lokaliseren.",
    municipalCtaBodyTemplate:
      "Beschrijf kort waar de geurhinder optreedt in {CITY} en hoe lang het probleem al aanwezig is. Turbo Services koppelt snel terug met een gerichte aanpak voor opsporing en advies.",
    municipalSections: [
      {
        title: "Wanneer geurdetectie zinvol is in {CITY}",
        body:
          "Geurdetectie is aangewezen bij aanhoudende rioolgeur, terugkerende stank zonder zichtbare verstopping of wanneer verschillende mogelijke oorzaken in aanmerking komen. Dat gebeurt bijvoorbeeld bij defecte sifons, lekkende verbindingen, foutieve aansluitingen of problemen met ontluchting."
      },
      {
        title: "Waar rioolgeur meestal vandaan komt",
        body:
          "De oorzaak ligt vaak bij defecte sifons, losse aansluitingen, lekkende afvoerverbindingen, gebrekkige ontluchting of verborgen schade in het rioleringssysteem. Een verstopping kan geur veroorzaken, maar geurdetectie focust op het achterhalen van de exacte bron."
      },
      {
        title: "Werkwijze",
        body:
          "De situatie wordt stap voor stap nagekeken, met focus op sifons, aansluitingen, ontluchting, lekken en defecten in de afvoer of riolering. Het doel is gericht te lokaliseren waar het probleem zit, zodat onnodig breekwerk wordt vermeden."
      },
      {
        title: "Prijzen",
        body:
          "Geurdetectie gebeurt binnen de basisstructuur van een interventie. De basisinterventie bedraagt €160 exclusief btw. Indien camera-inspectie nodig is als aanvulling, geldt een supplement van €90."
      },
      {
        title: "Waarom gericht opsporen belangrijk is",
        body:
          "Geurhinder is vaak hardnekkig en moeilijk correct in te schatten zonder gerichte controle. Door eerst de bron te lokaliseren, vermijd je nutteloze werken en wordt de oplossing veel preciezer en efficiënter."
      }
    ]
  },

  {
    serviceKey: "gerichte-rioolherstellingen",

    regionalTitleTemplate: "{SERVICE_NAME} in {REGION}",
    regionalDescriptionTemplate:
      "{SERVICE_NAME} in {REGION} bij breuken, verzakkingen, lekkages en lokale schade aan afvoer of riolering. Turbo Services herstelt gericht op basis van duidelijke vaststellingen en zonder onnodige uitbreidingen.",
    regionalIntroTemplate:
      "Gerichte rioolherstellingen in {REGION} zijn bedoeld voor situaties waarin schade of defecten in de leiding al gelokaliseerd zijn of via inspectie duidelijk kunnen worden vastgesteld. Turbo Services focust op de echte probleemzone, zodat de herstelling technisch gericht en beheersbaar blijft.",
    regionalCtaBodyTemplate:
      "Beschrijf kort welk defect of welke schade zich voordoet in {REGION}. Turbo Services koppelt snel terug met een voorstel voor diagnose, herstelling en praktische aanpak.",
    regionalSections: [
      {
        title: "Wanneer een gerichte rioolherstelling nodig is in {REGION}",
        body:
          "Een gerichte rioolherstelling is aangewezen bij breuk, verzakking, lekkage, schade aan aansluiting of terugkerende problemen die via inspectie exact gelokaliseerd werden. Niet elke situatie vraagt een volledige vervanging van een leiding; vaak volstaat een herstelling van de juiste zone."
      },
      {
        title: "Waarom gericht herstellen beter is",
        body:
          "Door eerst juist te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat bespaart onnodige werken, tijd en bijkomende kosten. Het maakt de uitvoering ook technischer en beter verdedigbaar wanneer er meerdere partijen of discussies betrokken zijn."
      },
      {
        title: "Werkwijze",
        body:
          "Na lokalisatie van het probleem wordt bepaald welke gerichte ingreep technisch aangewezen is. Dat kan gaan om herstel van een lokale breuk, vervanging van een beschadigd deel of correctie van een aansluiting. Waar nodig wordt eerst camera-inspectie gebruikt om de schade exact in kaart te brengen."
      },
      {
        title: "Prijzen",
        body:
          "Prijzen variëren volgens de aard van de schade en de nodige interventie. Diagnose en interventie starten vanaf €160 exclusief btw. Camera-inspectie kan als supplement toegevoegd worden wanneer bijkomende lokalisatie nodig is."
      },
      {
        title: "Waarom diagnose vooraf belangrijk is",
        body:
          "Een juiste lokalisatie voorkomt dat er te ruim of op de verkeerde plaats wordt gewerkt. Dat beperkt risico, houdt de kost onder controle en maakt een technisch doelgerichte oplossing mogelijk."
      }
    ],

    municipalTitleTemplate: "{SERVICE_NAME} in {CITY}",
    municipalDescriptionTemplate:
      "{SERVICE_NAME} in {CITY} bij breuken, verzakkingen, lekkages en lokale schade aan afvoer of riolering. Turbo Services herstelt gericht op basis van duidelijke vaststellingen en zonder onnodige uitbreidingen.",
    municipalIntroTemplate:
      "Gerichte rioolherstellingen in {CITY} zijn bedoeld voor situaties waarin schade of defecten in de leiding al gelokaliseerd zijn of via inspectie duidelijk kunnen worden vastgesteld. Turbo Services focust op de echte probleemzone, zodat de herstelling technisch gericht en beheersbaar blijft.",
    municipalCtaBodyTemplate:
      "Beschrijf kort welk defect of welke schade zich voordoet in {CITY}. Turbo Services koppelt snel terug met een voorstel voor diagnose, herstelling en praktische aanpak.",
    municipalSections: [
      {
        title: "Wanneer een gerichte rioolherstelling nodig is in {CITY}",
        body:
          "Een gerichte rioolherstelling is aangewezen bij breuk, verzakking, lekkage, schade aan aansluiting of terugkerende problemen die via inspectie exact gelokaliseerd werden. Niet elke situatie vraagt een volledige vervanging van een leiding; vaak volstaat een herstelling van de juiste zone."
      },
      {
        title: "Waarom gericht herstellen beter is",
        body:
          "Door eerst juist te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat bespaart onnodige werken, tijd en bijkomende kosten. Het maakt de uitvoering ook technischer en beter verdedigbaar wanneer er meerdere partijen of discussies betrokken zijn."
      },
      {
        title: "Werkwijze",
        body:
          "Na lokalisatie van het probleem wordt bepaald welke gerichte ingreep technisch aangewezen is. Dat kan gaan om herstel van een lokale breuk, vervanging van een beschadigd deel of correctie van een aansluiting. Waar nodig wordt eerst camera-inspectie gebruikt om de schade exact in kaart te brengen."
      },
      {
        title: "Prijzen",
        body:
          "Prijzen variëren volgens de aard van de schade en de nodige interventie. Diagnose en interventie starten vanaf €160 exclusief btw. Camera-inspectie kan als supplement toegevoegd worden wanneer bijkomende lokalisatie nodig is."
      },
      {
        title: "Waarom diagnose vooraf belangrijk is",
        body:
          "Een juiste lokalisatie voorkomt dat er te ruim of op de verkeerde plaats wordt gewerkt. Dat beperkt risico, houdt de kost onder controle en maakt een technisch doelgerichte oplossing mogelijk."
      }
    ]
  },

  {
    serviceKey: "vervangen-van-deksels",

    regionalTitleTemplate: "{SERVICE_NAME} in {REGION}",
    regionalDescriptionTemplate:
      "{SERVICE_NAME} in {REGION} voor beschadigde, verzakte of losliggende putdeksels en inspectiedeksels. Turbo Services vervangt en corrigeert deksels gericht, veilig en technisch passend.",
    regionalIntroTemplate:
      "Vervangen van deksels in {REGION} is aangewezen wanneer een putdeksel of inspectiedeksel beschadigd, verzakt, losliggend of slecht afsluitend is. Turbo Services beoordeelt de bestaande situatie en zorgt voor een correcte, veilige en duurzame vervanging afgestemd op belasting, aansluiting en praktische omstandigheden ter plaatse.",
    regionalCtaBodyTemplate:
      "Beschrijf kort welk type deksel of putprobleem zich voordoet in {REGION}. Turbo Services koppelt snel terug met een voorstel voor beoordeling en vervanging.",
    regionalSections: [
      {
        title: "Wanneer een deksel vervangen moet worden in {REGION}",
        body:
          "Een putdeksel of inspectiedeksel moet worden vervangen wanneer het beschadigd, verzakt, losliggend of slecht afsluitend is, of wanneer geur- en veiligheidsproblemen ontstaan. Ook waterinsijpeling en onveilige belasting kunnen wijzen op een technisch probleem met de huidige afdekking."
      },
      {
        title: "Waarom dit technisch belangrijk is",
        body:
          "Een slecht passend of beschadigd deksel is niet alleen een esthetisch probleem. Het kan geurhinder, waterinsijpeling, instabiliteit en bijkomende schade veroorzaken. Tijdige vervanging voorkomt dat de situatie verder verslechtert."
      },
      {
        title: "Werkwijze",
        body:
          "De bestaande situatie wordt beoordeeld, het juiste type deksel gekozen en de plaatsing of correctie gebeurt met aandacht voor stevigheid, aansluiting en duurzaamheid. Indien nodig wordt ook bekeken of de rand, ondersteuning of omliggende situatie bijkomende aanpassing vraagt."
      },
      {
        title: "Prijs en beoordeling",
        body:
          "De prijs hangt af van het type deksel, de staat van de bestaande situatie en de nodige aanpassing ter plaatse. Waar nodig gebeurt eerst een beoordeling om technisch de juiste oplossing te bepalen."
      },
      {
        title: "Waarom correcte vervanging telt",
        body:
          "Een correcte vervanging voorkomt geurproblemen, waterinsijpeling en risico's door instabiliteit of foutieve belasting. Dat is belangrijk zowel voor gebruikscomfort als voor technische duurzaamheid."
      }
    ],

    municipalTitleTemplate: "{SERVICE_NAME} in {CITY}",
    municipalDescriptionTemplate:
      "{SERVICE_NAME} in {CITY} voor beschadigde, verzakte of losliggende putdeksels en inspectiedeksels. Turbo Services vervangt en corrigeert deksels gericht, veilig en technisch passend.",
    municipalIntroTemplate:
      "Vervangen van deksels in {CITY} is aangewezen wanneer een putdeksel of inspectiedeksel beschadigd, verzakt, losliggend of slecht afsluitend is. Turbo Services beoordeelt de bestaande situatie en zorgt voor een correcte, veilige en duurzame vervanging afgestemd op belasting, aansluiting en praktische omstandigheden ter plaatse.",
    municipalCtaBodyTemplate:
      "Beschrijf kort welk type deksel of putprobleem zich voordoet in {CITY}. Turbo Services koppelt snel terug met een voorstel voor beoordeling en vervanging.",
    municipalSections: [
      {
        title: "Wanneer een deksel vervangen moet worden in {CITY}",
        body:
          "Een putdeksel of inspectiedeksel moet worden vervangen wanneer het beschadigd, verzakt, losliggend of slecht afsluitend is, of wanneer geur- en veiligheidsproblemen ontstaan. Ook waterinsijpeling en onveilige belasting kunnen wijzen op een technisch probleem met de huidige afdekking."
      },
      {
        title: "Waarom dit technisch belangrijk is",
        body:
          "Een slecht passend of beschadigd deksel is niet alleen een esthetisch probleem. Het kan geurhinder, waterinsijpeling, instabiliteit en bijkomende schade veroorzaken. Tijdige vervanging voorkomt dat de situatie verder verslechtert."
      },
      {
        title: "Werkwijze",
        body:
          "De bestaande situatie wordt beoordeeld, het juiste type deksel gekozen en de plaatsing of correctie gebeurt met aandacht voor stevigheid, aansluiting en duurzaamheid. Indien nodig wordt ook bekeken of de rand, ondersteuning of omliggende situatie bijkomende aanpassing vraagt."
      },
      {
        title: "Prijs en beoordeling",
        body:
          "De prijs hangt af van het type deksel, de staat van de bestaande situatie en de nodige aanpassing ter plaatse. Waar nodig gebeurt eerst een beoordeling om technisch de juiste oplossing te bepalen."
      },
      {
        title: "Waarom correcte vervanging telt",
        body:
          "Een correcte vervanging voorkomt geurproblemen, waterinsijpeling en risico's door instabiliteit of foutieve belasting. Dat is belangrijk zowel voor gebruikscomfort als voor technische duurzaamheid."
      }
    ]
  }
];

export function getServiceLocationTemplate(serviceKey: string) {
  return SERVICE_LOCATION_TEMPLATES.find(
    (template) => template.serviceKey === serviceKey
  );
}