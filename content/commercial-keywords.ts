export type CommercialKeywordDef = {
  key: string;
  keyword: string;
  serviceKey: "ontstoppingen";
  intent: "high";
  titleTemplate: string;
  descriptionTemplate: string;
  h1Template: string;
  introTemplate: string;
  ctaTitle: string;
  ctaButton: string;
  benefits: string[];
};

export const COMMERCIAL_KEYWORDS: CommercialKeywordDef[] = [
  {
    key: "ontstoppingsdienst",
    keyword: "ontstoppingsdienst",
    serviceKey: "ontstoppingen",
    intent: "high",
    titleTemplate: "Ontstoppingsdienst in {CITY}",
    descriptionTemplate:
      "Ontstoppingsdienst in {CITY} voor verstopte wc, afvoer, douche, lavabo of riool. Turbo Services werkt snel, gericht en ook 's avonds en in het weekend aan hetzelfde tarief.",
    h1Template: "Ontstoppingsdienst in {CITY}",
    introTemplate:
      "Een ontstoppingsdienst in {CITY} is nodig wanneer wc, lavabo, douche, bad, keukenafvoer of riool verstopt zit en snelle tussenkomst nodig is. Turbo Services pakt verstoppingen gericht aan met professioneel materiaal en zonder onnodig tijdverlies.",
    ctaTitle: "Snel een ontstoppingsdienst nodig?",
    ctaButton: "Vraag ontstoppingsdienst aan",
    benefits: [
      "Snelle en gerichte tussenkomst",
      "Voor wc, douche, lavabo, keukenafvoer en riool",
      "Ook 's avonds en in het weekend aan hetzelfde tarief",
    ],
  },
  {
    key: "wc-verstopt",
    keyword: "wc verstopt",
    serviceKey: "ontstoppingen",
    intent: "high",
    titleTemplate: "WC verstopt in {CITY}",
    descriptionTemplate:
      "WC verstopt in {CITY}? Turbo Services helpt snel bij een toilet dat niet doorspoelt, terugloopt of opnieuw verstopt raakt.",
    h1Template: "WC verstopt in {CITY}",
    introTemplate:
      "Is je wc verstopt in {CITY} en loopt het water niet meer goed weg of komt het zelfs terug? Turbo Services helpt gericht bij toiletverstoppingen en kijkt ook naar de onderliggende oorzaak wanneer het probleem blijft terugkomen.",
    ctaTitle: "Hulp nodig bij een verstopte wc?",
    ctaButton: "Vraag hulp bij verstopte wc",
    benefits: [
      "Snelle hulp bij toiletverstopping",
      "Gerichte aanpak zonder giswerk",
      "Ook bij terugkerende problemen",
    ],
  },
  {
    key: "riool-ontstoppen",
    keyword: "riool ontstoppen",
    serviceKey: "ontstoppingen",
    intent: "high",
    titleTemplate: "Riool ontstoppen in {CITY}",
    descriptionTemplate:
      "Riool ontstoppen in {CITY} bij terugslag, borrelende afvoeren, geurhinder of water dat niet wegloopt. Turbo Services werkt snel en gericht.",
    h1Template: "Riool ontstoppen in {CITY}",
    introTemplate:
      "Een riool ontstoppen in {CITY} vraagt een gerichte aanpak wanneer water terugkomt, afvoeren borrelen of geurhinder ontstaat. Turbo Services lokaliseert en verhelpt het probleem met professioneel materiaal en duidelijke diagnose.",
    ctaTitle: "Riool laten ontstoppen?",
    ctaButton: "Vraag rioolontstopping aan",
    benefits: [
      "Gerichte aanpak bij rioolproblemen",
      "Snelle diagnose bij terugslag of geurhinder",
      "Professioneel materiaal voor hardnekkige verstoppingen",
    ],
  },
  {
    key: "afvoer-ontstoppen",
    keyword: "afvoer ontstoppen",
    serviceKey: "ontstoppingen",
    intent: "high",
    titleTemplate: "Afvoer ontstoppen in {CITY}",
    descriptionTemplate:
      "Afvoer ontstoppen in {CITY} voor keuken, douche, lavabo of bad. Turbo Services werkt snel en voorkomt dat een lokale verstopping erger wordt.",
    h1Template: "Afvoer ontstoppen in {CITY}",
    introTemplate:
      "Een afvoer ontstoppen in {CITY} is nodig zodra water traag wegloopt, borrelt of helemaal blijft staan. Turbo Services helpt bij verstoppingen in keukenafvoer, douche, lavabo en bad met een gerichte en technische aanpak.",
    ctaTitle: "Afvoer laten ontstoppen?",
    ctaButton: "Vraag afvoerontstopping aan",
    benefits: [
      "Voor keuken, douche, lavabo en bad",
      "Snelle en gerichte interventie",
      "Voorkomt erger wordende verstoppingen",
    ],
  },
];

export function getCommercialKeywordByKey(key: string) {
  return COMMERCIAL_KEYWORDS.find((item) => item.key === key);
}