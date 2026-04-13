export type CommercialTemplate = {
  introVariants: string[];
  urgencyVariants: string[];
  symptomVariants: string[];
  causeVariants: string[];
  approachVariants: string[];
  ctaVariants: string[];
  sectionTitles: {
    urgency: string;
    symptoms: string;
    causes: string;
    approach: string;
  };
};

export const COMMERCIAL_TEMPLATES: Record<string, CommercialTemplate> = {
  "ontstoppingsdienst": {
    introVariants: [
      "Zoek je een ontstoppingsdienst in {CITY} voor een verstopte wc, lavabo, douche, keukenafvoer of riool? Turbo Services staat klaar voor snelle en gerichte hulp.",
      "Een ontstoppingsdienst in {CITY} is nodig wanneer water niet meer wegloopt, terugkomt of wanneer verstoppingen blijven terugkeren. Turbo Services helpt snel en technisch correct.",
      "Turbo Services helpt in {CITY} bij acute en terugkerende verstoppingen in afvoer, toilet, douche, lavabo en riolering."
    ],
    urgencyVariants: [
      "Een ontstoppingsdienst is in {CITY} vooral nodig wanneer meerdere afvoeren tegelijk slecht doorlopen, water terugkomt of geurhinder ontstaat. In die situaties is snel handelen belangrijk om verdere overlast te beperken.",
      "Wanneer een verstopping in {CITY} niet meer reageert op eenvoudige middelen of telkens terugkeert, is een professionele ontstoppingsdienst nodig om de oorzaak gericht aan te pakken.",
      "Bij acute verstoppingen in {CITY} is het belangrijk om niet te blijven experimenteren. Een gerichte tussenkomst voorkomt vaak bijkomende schade of grotere hinder."
    ],
    symptomVariants: [
      "Typische signalen zijn water dat niet wegloopt, borrelende leidingen, geur uit afvoeren, terugslag in toilet of douche en verstoppingen die telkens opnieuw opduiken.",
      "Een ontstoppingsdienst wordt vaak ingeschakeld bij trage afvoer, terugkerende verstoppingen, water in lavabo of douche dat blijft staan en problemen op meerdere afvoerpunten tegelijk.",
      "Veelvoorkomende klachten zijn een verstopte wc, keukenafvoer die slecht loopt, douchewater dat blijft staan of rioolproblemen die geurhinder veroorzaken."
    ],
    causeVariants: [
      "Oorzaken kunnen liggen in vuilophoping, vet, haren, papier, zeepresten of een dieper probleem in de afvoerleiding of riolering.",
      "Sommige verstoppingen ontstaan lokaal, maar vaak zit de echte oorzaak dieper in de afvoer of in een hoofdleiding. Daarom is een snelle technische beoordeling belangrijk.",
      "Terugkerende verstoppingen wijzen vaak op meer dan alleen een tijdelijke blokkade, bijvoorbeeld vervuiling, slechte doorstroming of een structureel probleem."
    ],
    approachVariants: [
      "Turbo Services pakt verstoppingen in {CITY} gericht aan met professioneel materiaal en kijkt indien nodig verder dan het directe symptoom, bijvoorbeeld naar afvoerleiding of riolering.",
      "De aanpak in {CITY} bestaat uit gerichte diagnose, professionele ontstopping en bijkomende controle wanneer de hinder terugkeert of meerdere afvoeren betrokken zijn.",
      "Wij werken in {CITY} met een praktische en technische aanpak: snel ingrijpen, oorzaak inschatten en indien nodig bijkomende diagnose of reiniging inzetten."
    ],
    ctaVariants: [
      "Beschrijf kort welk type verstopping zich voordoet in {CITY}. Turbo Services koppelt snel terug met een concreet tijdsvenster en een gerichte aanpak.",
      "Geef door welke afvoer of sanitaire aansluiting problemen geeft in {CITY}. Turbo Services reageert snel met een voorstel voor gerichte tussenkomst.",
      "Laat weten waar de verstopping zich voordoet in {CITY} en of het probleem terugkeert. Turbo Services koppelt snel terug."
    ],
    sectionTitles: {
      urgency: "Wanneer een ontstoppingsdienst nodig is in {CITY}",
      symptoms: "Welke signalen wijzen op een hardnekkig verstoppingsprobleem?",
      causes: "Wat vaak achter terugkerende verstoppingen zit",
      approach: "Gerichte aanpak in plaats van proberen op goed geluk",
    },
  },

  "wc-verstopt": {
    introVariants: [
      "Is je wc verstopt in {CITY} en loopt het water niet meer weg? Turbo Services helpt snel bij toiletverstoppingen en kijkt indien nodig ook verder naar de afvoerleiding.",
      "Een verstopte wc in {CITY} zorgt snel voor overlast. Turbo Services helpt met een gerichte interventie bij een toilet dat slecht doorloopt of volledig geblokkeerd is.",
      "Turbo Services helpt in {CITY} wanneer een wc verstopt zit, water terugloopt of het toilet telkens opnieuw slecht begint door te spoelen."
    ],
    urgencyVariants: [
      "Een verstopte wc in {CITY} moet snel worden aangepakt wanneer water stijgt, niet meer wegloopt of opnieuw terugkomt na doorspoelen.",
      "Bij een wc die verstopt zit in {CITY} is snel handelen belangrijk om geurhinder, overstroming en bijkomende problemen op andere afvoerpunten te vermijden.",
      "Wanneer een toilet in {CITY} volledig blokkeert of telkens opnieuw verstopt raakt, is een gerichte technische tussenkomst nodig."
    ],
    symptomVariants: [
      "Typische signalen zijn water dat hoog blijft staan, slecht doorspoelen, borrelende geluiden of een wc die na korte tijd opnieuw verstopt raakt.",
      "Een wc-verstopping merk je vaak aan water dat terugkomt, een toilet dat traag leegloopt of bijkomende hinder aan lavabo, douche of afvoer.",
      "Slechte doorstroming, teruglopend water en herhaalde verstoppingen zijn duidelijke aanwijzingen dat het probleem verder kan zitten dan de toiletpot zelf."
    ],
    causeVariants: [
      "Een verstopte wc ontstaat vaak door papierophoping, vuil, slechte doorstroming of een dieper probleem in de afvoerleiding.",
      "Soms zit de blokkade lokaal in het toilet, maar bij terugkerende hinder is er vaak een ruimer afvoerprobleem dat verder onderzocht moet worden.",
      "Wanneer een wc in {CITY} telkens opnieuw verstopt raakt, is het belangrijk om niet alleen het symptoom weg te nemen maar ook de oorzaak te beoordelen."
    ],
    approachVariants: [
      "Turbo Services helpt in {CITY} met een gerichte wc-ontstopping en kijkt indien nodig verder naar de leiding of een dieperliggende verstopping.",
      "De aanpak in {CITY} is gericht: snelle interventie, professionele ontstopping en bijkomende controle wanneer het probleem terugkeert.",
      "Bij een verstopte wc in {CITY} beoordelen wij niet alleen de toiletverstopping zelf, maar ook of de oorzaak dieper in de afvoer zit."
    ],
    ctaVariants: [
      "Geef kort door wat je merkt aan de wc in {CITY}, zoals teruglopend water of slechte doorstroming. Turbo Services koppelt snel terug.",
      "Beschrijf kort of het toilet in {CITY} volledig geblokkeerd is of telkens opnieuw verstopt raakt. Turbo Services reageert snel.",
      "Laat weten wat er precies gebeurt met de wc in {CITY}. Turbo Services stelt snel een gerichte tussenkomst voor."
    ],
    sectionTitles: {
      urgency: "WC verstopt in {CITY}: wanneer snel ingrijpen nodig is",
      symptoms: "Welke signalen wijzen op een toiletverstopping?",
      causes: "Wat vaak achter een verstopte wc zit",
      approach: "Gerichte hulp zonder onnodig tijdverlies",
    },
  },

  "riool-ontstoppen": {
    introVariants: [
      "Een riool ontstoppen in {CITY} is nodig wanneer water terugkomt via toilet, douche of vloerputjes. Turbo Services helpt snel met een gerichte aanpak.",
      "Turbo Services helpt in {CITY} wanneer het riool verstopt zit en meerdere afvoeren tegelijk hinder beginnen geven.",
      "Bij een verstopt riool in {CITY} is een snelle en technische aanpak nodig om terugslag, geurhinder en bijkomende problemen te beperken."
    ],
    urgencyVariants: [
      "Een rioolprobleem in {CITY} vraagt snelle aandacht wanneer meerdere afvoeren tegelijk slecht beginnen lopen of wanneer water terugkomt op onverwachte plaatsen.",
      "Bij een rioolverstopping in {CITY} is snel ingrijpen belangrijk om terugslag, geurhinder en verdere vervuiling te voorkomen.",
      "Wanneer het riool in {CITY} verstopt zit, volstaat een tijdelijke oplossing meestal niet. Een gerichte tussenkomst is dan nodig."
    ],
    symptomVariants: [
      "Typische signalen zijn borrelende afvoeren, geurhinder, traag wegstromend water en terugslag via wc, douche of vloerput.",
      "Een verstopt riool in {CITY} merk je vaak aan meerdere afvoerpunten die tegelijk problemen geven, water dat terugkomt of slechte doorstroming in huis of gebouw.",
      "Geurhinder, terugstromend water en gelijktijdige verstoppingen op meerdere punten zijn duidelijke aanwijzingen van een rioolprobleem."
    ],
    causeVariants: [
      "Een riool kan verstopt raken door vuilophoping, vet, bezinking, wortelgroei of een dieper technisch probleem in de leiding.",
      "Terugkerende rioolproblemen wijzen vaak op meer dan alleen een tijdelijke blokkade. Daarom is een gerichte beoordeling belangrijk.",
      "Bij rioolhinder in {CITY} ligt de oorzaak vaak dieper dan een gewone huishoudelijke afvoer, wat een andere aanpak vraagt."
    ],
    approachVariants: [
      "Turbo Services pakt rioolproblemen in {CITY} gericht aan en kan indien nodig bijkomende diagnose inzetten om de oorzaak correct te bepalen.",
      "De aanpak in {CITY} bestaat uit gerichte ontstopping, technische inschatting van het probleem en verdere diagnose wanneer terugkerende hinder optreedt.",
      "Bij een verstopt riool in {CITY} werken wij niet op goed geluk, maar met een technische aanpak die gericht is op oorzaak en ernst."
    ],
    ctaVariants: [
      "Beschrijf kort de signalen van het rioolprobleem in {CITY}. Turbo Services koppelt snel terug met een voorstel voor gerichte tussenkomst.",
      "Laat weten of meerdere afvoeren tegelijk problemen geven in {CITY}. Turbo Services reageert snel met een concrete aanpak.",
      "Geef kort door wat je merkt aan het riool in {CITY}. Turbo Services koppelt snel terug."
    ],
    sectionTitles: {
      urgency: "Riool ontstoppen in {CITY}: wanneer het dringend wordt",
      symptoms: "Typische signalen van een rioolprobleem",
      causes: "Wat vaak achter een verstopt riool zit",
      approach: "Waarom gerichte diagnose belangrijk is",
    },
  },

  "afvoer-ontstoppen": {
    introVariants: [
      "Een afvoer ontstoppen in {CITY} is nodig zodra water traag wegloopt, blijft staan of gepaard gaat met geurhinder. Turbo Services helpt snel en gericht.",
      "Heb je in {CITY} een afvoer die slecht doorloopt of verstopt zit? Turbo Services helpt bij afvoeren in keuken, douche, lavabo of bad.",
      "Turbo Services helpt in {CITY} bij een verstopte afvoer wanneer water blijft staan, borrelt of opnieuw terugkomt."
    ],
    urgencyVariants: [
      "Een afvoer in {CITY} moet snel worden aangepakt wanneer water blijft staan, slecht wegloopt of terug opkomt in keuken, douche of lavabo.",
      "Bij een verstopte afvoer in {CITY} is snel ingrijpen belangrijk om te vermijden dat het probleem erger wordt of andere aansluitingen begint te beïnvloeden.",
      "Wanneer een afvoer in {CITY} telkens opnieuw slecht doorloopt, wijst dat vaak op meer dan een klein lokaal probleem."
    ],
    symptomVariants: [
      "Typische signalen zijn traag wegstromend water, borrelende geluiden, geurhinder en water dat terug omhoog komt in de afvoer.",
      "Een afvoerprobleem in {CITY} merk je vaak aan stilstaand water, terugkerende kleine verstoppingen of geur uit douche, lavabo, bad of keukenafvoer.",
      "Slechte doorstroming, borrelen en terugkomend water zijn duidelijke tekenen dat een afvoer in {CITY} professioneel moet worden aangepakt."
    ],
    causeVariants: [
      "Veelvoorkomende oorzaken zijn vet, zeepresten, haren, vuilophoping of een probleem dieper in de afvoerleiding.",
      "Een verstopping in een afvoer wordt zelden vanzelf beter. Ophoping in de leiding zorgt meestal voor steeds slechtere doorstroming.",
      "Wanneer een afvoer in {CITY} terugkerend problemen geeft, is het belangrijk om ook structurele oorzaken of diepere vervuiling te overwegen."
    ],
    approachVariants: [
      "Turbo Services helpt in {CITY} met een gerichte aanpak voor verstopte afvoeren en kijkt indien nodig verder naar afvoerleiding of bredere verstoppingsproblemen.",
      "De aanpak in {CITY} bestaat uit professionele ontstopping en bijkomende controle wanneer de hinder blijft terugkomen.",
      "Bij een verstopte afvoer in {CITY} werken wij met een technische en gerichte aanpak om de doorstroming correct te herstellen."
    ],
    ctaVariants: [
      "Beschrijf kort welke afvoer verstopt zit in {CITY}. Turbo Services koppelt snel terug met een concreet tijdsvenster.",
      "Laat weten of het om een keukenafvoer, douche, lavabo of bad gaat in {CITY}. Turbo Services reageert snel.",
      "Geef kort door welke hinder je merkt aan de afvoer in {CITY}. Turbo Services koppelt snel terug."
    ],
    sectionTitles: {
      urgency: "Afvoer ontstoppen in {CITY}: wanneer snel handelen nodig is",
      symptoms: "Welke signalen wijzen op een verstopte afvoer?",
      causes: "Wat vaak achter afvoerproblemen zit",
      approach: "Snelle en gerichte tussenkomst",
    },
  },
};

export function getCommercialTemplate(key: string) {
  return COMMERCIAL_TEMPLATES[key];
}