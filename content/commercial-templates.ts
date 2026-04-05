export type CommercialTemplate = {
  sections: {
    title: string;
    body: string;
  }[];
  ctaBodyTemplate: string;
};

export const COMMERCIAL_TEMPLATES: Record<string, CommercialTemplate> = {
  "ontstoppingsdienst": {
    sections: [
      {
        title: "Wanneer een ontstoppingsdienst nodig is in {CITY}",
        body:
          "Een ontstoppingsdienst is aangewezen wanneer wc, lavabo, douche, bad, keukenafvoer of riool verstopt zit en snelle hulp nodig is. In {CITY} is het belangrijk om niet te blijven experimenteren met tijdelijke oplossingen wanneer water terugkomt, afvoeren traag weglopen of geurhinder ontstaat.",
      },
      {
        title: "Waarmee Turbo Services helpt in {CITY}",
        body:
          "Turbo Services helpt in {CITY} bij verstoppingen in toilet, lavabo, douche, bad, keukenafvoer en hoofdriolering. Ook terugkerende verstoppingen, borrelende leidingen en afvoeren die slecht doorlopen worden gericht aangepakt.",
      },
      {
        title: "Gerichte aanpak in plaats van proberen op goed geluk",
        body:
          "Bij een verstopping telt vooral een snelle en technische aanpak. Turbo Services beoordeelt het probleem, ontstopt gericht met professioneel materiaal en kijkt indien nodig verder naar de oorzaak, bijvoorbeeld bij hardnekkige vervuiling, schade of terugkerende hinder.",
      },
    ],
    ctaBodyTemplate:
      "Beschrijf kort welk type verstopping zich voordoet in {CITY}. Turbo Services koppelt snel terug met een concreet tijdsvenster en een gerichte aanpak voor de situatie ter plaatse.",
  },
  "wc-verstopt": {
    sections: [
      {
        title: "WC verstopt in {CITY}: wanneer snel ingrijpen nodig is",
        body:
          "Een verstopte wc in {CITY} moet snel worden aangepakt wanneer water niet meer wegloopt, terug omhoog komt of het toilet opnieuw verstopt raakt. Dat voorkomt geurhinder, overlast en bijkomende problemen op andere afvoerpunten.",
      },
      {
        title: "Wat vaak achter een toiletverstopping zit",
        body:
          "Een toiletverstopping ontstaat vaak door ophoping van papier, vuil, slechte doorstroming of een dieper probleem in de afvoer. Wanneer het probleem terugkeert, is het belangrijk om niet alleen het symptoom weg te nemen, maar ook de oorzaak correct te beoordelen.",
      },
      {
        title: "Gerichte hulp zonder onnodig tijdverlies",
        body:
          "Turbo Services helpt in {CITY} met een gerichte interventie bij verstopte toiletten. Indien nodig wordt verder gekeken dan de wc zelf, bijvoorbeeld naar de afvoerleiding of een dieper liggende verstopping.",
      },
    ],
    ctaBodyTemplate:
      "Geef kort door wat je merkt aan de wc in {CITY}, zoals teruglopend water of slechte doorstroming. Turbo Services koppelt snel terug met een gerichte oplossing.",
  },
  "riool-ontstoppen": {
    sections: [
      {
        title: "Riool ontstoppen in {CITY}",
        body:
          "Een riool ontstoppen in {CITY} is nodig wanneer water terugkomt via toilet, douche of vloerputjes, of wanneer meerdere afvoeren tegelijk slecht beginnen lopen. Dat wijst vaak op een dieper probleem in de leiding of riolering.",
      },
      {
        title: "Typische signalen van een rioolprobleem",
        body:
          "Borrelende afvoeren, terugslag, geurhinder en traag wegstromend water zijn typische signalen dat een riool verstopt zit. In zulke gevallen is een gerichte aanpak nodig om de verstopping niet alleen tijdelijk, maar technisch correct aan te pakken.",
      },
      {
        title: "Waarom gerichte diagnose belangrijk is",
        body:
          "Bij rioolproblemen is het belangrijk om snel te weten waar de blokkade zit en hoe ernstig het probleem is. Turbo Services pakt dit in {CITY} gericht aan en kan indien nodig bijkomende diagnose inzetten.",
      },
    ],
    ctaBodyTemplate:
      "Beschrijf kort de signalen van het rioolprobleem in {CITY}. Turbo Services koppelt snel terug met een voorstel voor gerichte tussenkomst.",
  },
  "afvoer-ontstoppen": {
    sections: [
      {
        title: "Afvoer ontstoppen in {CITY}",
        body:
          "Een afvoer ontstoppen in {CITY} is nodig zodra water traag wegloopt, blijft staan of gepaard gaat met borrelende geluiden en geurhinder. Dat geldt voor keukenafvoer, douche, lavabo en bad.",
      },
      {
        title: "Waarom een lokale verstopping vaak erger wordt",
        body:
          "Een lokale verstopping in een afvoer wordt zelden vanzelf beter. Vet, zeepresten, vuil en andere ophoping zorgen ervoor dat de doorstroming verder achteruitgaat en het probleem uiteindelijk groter wordt.",
      },
      {
        title: "Snelle en gerichte tussenkomst",
        body:
          "Turbo Services helpt in {CITY} met een gerichte aanpak voor verstoppingen in huishoudelijke afvoeren. Het doel is de verstopping snel en technisch correct op te lossen, zonder onnodige omwegen.",
      },
    ],
    ctaBodyTemplate:
      "Beschrijf kort welke afvoer verstopt zit in {CITY}. Turbo Services koppelt snel terug met een concreet tijdsvenster en een gerichte aanpak.",
  },
};

export function getCommercialTemplate(key: string) {
  return COMMERCIAL_TEMPLATES[key];
}