export type LocationContext = {
  type: "urban" | "suburban" | "rural";
  buildingType: "appartement" | "huizen" | "mix";
  tone: "urgent" | "practical" | "preventive";
  commonIssues: string[];
  serviceNuances?: Partial<
    Record<
      | "ontstoppingen"
      | "camera-inspectie"
      | "noodherstellingen"
      | "geurdetectie"
      | "gerichte-rioolherstellingen"
      | "vervangen-van-deksels",
      string[]
    >
  >;
};

export const DEFAULT_LOCATION_CONTEXT: LocationContext = {
  type: "suburban",
  buildingType: "mix",
  tone: "practical",
  commonIssues: [
    "terugkerende verstoppingen",
    "problemen met keukenafvoer of toilet",
    "verborgen schade of geurhinder in de afvoer",
  ],
};

export const LOCATION_CONTEXT: Record<string, LocationContext> = {
  aartselaar: {
    type: "suburban",
    buildingType: "mix",
    tone: "urgent",
    commonIssues: [
      "terugkerende verstoppingen in keuken- en sanitaire afvoer",
      "vet- en vuilophoping in leidingen",
      "problemen met afvoer in woningen en kleine appartementsgebouwen",
    ],
  },
  antwerpen: {
    type: "urban",
    buildingType: "appartement",
    tone: "urgent",
    commonIssues: [
      "verstoppingen in gedeelde of verticale afvoerleidingen",
      "snelle geurhinder in compacte gebouwen",
      "problemen in oudere stedelijke rioleringsaansluitingen",
    ],
    serviceNuances: {
      ontstoppingen: [
        "In stedelijke gebouwen draait ontstopping vaak rond gedeelde leidingen, intensiever gebruik en beperkte toegang tot technische zones.",
      ],
      geurdetectie: [
        "In appartementsomgevingen moet geurdetectie rekening houden met gedeelde standleidingen, sifons en ontluchtingsproblemen.",
      ],
    },
  },
  boom: {
    type: "suburban",
    buildingType: "mix",
    tone: "urgent",
    commonIssues: [
      "verstoppingen in woningen en gemengde bebouwing",
      "terugslag of borrelende afvoer in keuken en toilet",
      "geurhinder door slechte aansluiting of vervuilde leidingen",
    ],
  },
  brasschaat: {
    type: "suburban",
    buildingType: "huizen",
    tone: "practical",
    commonIssues: [
      "langere afvoertrajecten in vrijstaande woningen",
      "wortelgroei of vervuiling in buitenleidingen",
      "lokale schade aan aansluitingen en putdeksels",
    ],
  },
  beveren: {
    type: "suburban",
    buildingType: "mix",
    tone: "practical",
    commonIssues: [
      "verstoppingen in gezinswoningen en rijwoningen",
      "problemen met afvoer in oudere aansluitingen",
      "geurhinder door sifon- of aansluitingsproblemen",
    ],
  },
  lier: {
    type: "suburban",
    buildingType: "mix",
    tone: "urgent",
    commonIssues: [
      "verstoppingen in gemengde woonomgevingen",
      "problemen in afvoer met intensief dagelijks gebruik",
      "terugkerende geur- en afvoerproblemen in oudere woningen",
    ],
  },
  mechelen: {
    type: "urban",
    buildingType: "appartement",
    tone: "urgent",
    commonIssues: [
      "verstoppingen in appartementen en stedelijke woningen",
      "problemen in gedeelde afvoerleidingen",
      "geurhinder en terugkerende afvoerproblemen in compacte bebouwing",
    ],
  },
  niel: {
    type: "suburban",
    buildingType: "mix",
    tone: "urgent",
    commonIssues: [
      "verstoppingen in residentiële afvoerleidingen",
      "problemen met toilet, douche en keukenafvoer",
      "plaatselijke schade aan rioolaansluitingen",
    ],
  },
  schelle: {
    type: "suburban",
    buildingType: "mix",
    tone: "urgent",
    commonIssues: [
      "verstoppingen in gemengde woonomgevingen",
      "afvoerproblemen bij renovatie of oudere leidingen",
      "geur- en aansluitingsproblemen in sanitaire afvoer",
    ],
  },
  rumst: {
    type: "suburban",
    buildingType: "huizen",
    tone: "practical",
    commonIssues: [
      "verstoppingen in huishoudelijke afvoer",
      "problemen in buitenleidingen en aansluitingen",
      "schade of verzakking ter hoogte van lokale probleemzones",
    ],
  },
  willebroek: {
    type: "suburban",
    buildingType: "mix",
    tone: "urgent",
    commonIssues: [
      "verstoppingen in huishoudelijke en gemengde afvoer",
      "snelle geurhinder door afvoerproblemen",
      "terugkerende rioolproblemen in residentiële buurten",
    ],
  },
};

export function getLocationContext(locationLabel: string): LocationContext {
  const key = locationLabel.trim().toLowerCase();
  return LOCATION_CONTEXT[key] ?? DEFAULT_LOCATION_CONTEXT;
}