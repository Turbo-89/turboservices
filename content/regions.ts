// content/regions.ts
export type RegionKey =
  | "antwerpen-noordrand"
  | "antwerpen-stad"
  | "antwerpen-zuidrand"
  | "brussel-centrum"
  | "brussel-noord"
  | "brussel-zuid"
  | "denderstreek"
  | "druivenstreek"
  | "durmestreek-lokeren"
  | "hageland"
  | "kempen-noord"
  | "kempen-zuid"
  | "klein-brabant"
  | "leuven-dijleland"
  | "lier-neteland"
  | "mechelen-rivierenland"
  | "noordrand-brussel"
  | "pajottenland"
  | "rupelstreek"
  | "scheldeland"
  | "sint-niklaas-regio"
  | "temse-omgeving"
  | "waasland";

export const REGION_CITIES: Record<RegionKey, string[]> = {
  "antwerpen-stad": [
    "Antwerpen"
  ],
  "antwerpen-noordrand": [
    "Brasschaat",
    "Schoten",
    "Wijnegem",
    "Wommelgem",
    "Ranst",
    "Schilde",
    "Zoersel",
    "Kapellen",
    "Stabroek"
  ],
  "antwerpen-zuidrand": [
    "Aartselaar",
    "Boechout",
    "Borsbeek",
    "Edegem",
    "Hove",
    "Kontich",
    "Lint",
    "Mortsel"
  ],
  "brussel-centrum": [
    "Brussel",
    "Elsene",
    "Sint-Gillis",
    "Etterbeek",
    "Sint-Joost-ten-Node"
  ],
  "brussel-noord": [
    "Schaarbeek",
    "Evere",
    "Jette",
    "Ganshoren",
    "Koekelberg",
    "Sint-Jans-Molenbeek"
  ],
  "brussel-zuid": [
    "Anderlecht",
    "Vorst",
    "Ukkel",
    "Watermaal-Bosvoorde",
    "Oudergem"
  ],
  "denderstreek": [
    "Aalst",
    "Denderleeuw",
    "Erpe-Mere",
    "Haaltert",
    "Lede",
    "Ninove",
    "Geraardsbergen",
    "Berlare"
  ],
  "druivenstreek": [
    "Overijse",
    "Hoeilaart",
    "Tervuren",
    "Huldenberg"
  ],
  "durmestreek-lokeren": [
    "Lokeren",
    "Waasmunster",
    "Zele",
    "Hamme"
  ],
  "hageland": [
    "Aarschot",
    "Diest",
    "Tienen",
    "Scherpenheuvel-Zichem",
    "Bekkevoort",
    "Geetbets",
    "Kortenaken",
    "Linter"
  ],
  "kempen-noord": [
    "Turnhout",
    "Oud-Turnhout",
    "Beerse",
    "Vosselaar",
    "Merksplas",
    "Rijkevorsel",
    "Hoogstraten",
    "Arendonk",
    "Ravels",
    "Baarle-Hertog"
  ],
  "kempen-zuid": [
    "Herentals",
    "Herenthout",
    "Grobbendonk",
    "Olen",
    "Geel",
    "Mol",
    "Westerlo",
    "Lille",
    "Kasterlee",
    "Retie"
  ],
  "klein-brabant": [
    "Bornem",
    "Puurs-Sint-Amands",
    "Willebroek"
  ],
  "leuven-dijleland": [
    "Leuven",
    "Herent",
    "Bertem",
    "Oud-Heverlee",
    "Bierbeek",
    "Holsbeek",
    "Rotselaar",
    "Haacht"
  ],
  "lier-neteland": [
    "Berlaar",
    "Heist-op-den-Berg",
    "Lier",
    "Nijlen"
  ],
  "mechelen-rivierenland": [
    "Aartselaar",
    "Boechout",
    "Borsbeek",
    "Edegem",
    "Hove",
    "Kontich",
    "Lint",
    "Mortsel",
    "Berlaar",
    "Heist-op-den-Berg",
    "Lier",
    "Nijlen",
    "Bonheiden",
    "Duffel",
    "Mechelen",
    "Putte",
    "Sint-Katelijne-Waver",
    "Willebroek",
    "Boom",
    "Hemiksem",
    "Niel",
    "Rumst",
    "Schelle"
  ],
  "noordrand-brussel": [
    "Vilvoorde",
    "Machelen",
    "Zaventem",
    "Grimbergen",
    "Meise",
    "Wemmel",
    "Kraainem",
    "Wezembeek-Oppem"
  ],
  "pajottenland": [
    "Pajottegem",
    "Pepingen",
    "Lennik",
    "Roosdaal",
    "Bever"
  ],
  "rupelstreek": [
    "Boom",
    "Hemiksem",
    "Niel",
    "Rumst",
    "Schelle"
  ],
  "scheldeland": [
    "Dendermonde",
    "Wetteren",
    "Wichelen",
    "Berlare",
    "Zele",
    "Hamme"
  ],
  "sint-niklaas-regio": [
    "Sint-Niklaas",
    "Waasmunster",
    "Stekene",
    "Temse"
  ],
  "temse-omgeving": [
    "Temse",
    "Sint-Niklaas",
    "Beveren-Kruibeke-Zwijndrecht",
    "Bornem"
  ],
  "waasland": [
    "Sint-Niklaas",
    "Beveren-Kruibeke-Zwijndrecht",
    "Temse",
    "Stekene",
    "Lokeren",
    "Waasmunster"
  ]
};
