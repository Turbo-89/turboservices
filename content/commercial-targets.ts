export type CommercialTarget = {
  service: "ontstoppingen";
  keyword: "ontstoppingsdienst" | "wc-verstopt" | "riool-ontstoppen" | "afvoer-ontstoppen";
  city: string;
  score: number;
  source: "manual-phase1" | "ads" | "ads+analytics";
};

export const COMMERCIAL_TARGETS: CommercialTarget[] = [
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Aartselaar", score: 90, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Antwerpen", score: 95, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Beveren", score: 82, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Boom", score: 94, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Lier", score: 84, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Mechelen", score: 93, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Niel", score: 88, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Rumst", score: 86, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Schelle", score: 87, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "ontstoppingsdienst", city: "Willebroek", score: 89, source: "manual-phase1" },

  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Aartselaar", score: 78, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Antwerpen", score: 91, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Boom", score: 85, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Mechelen", score: 89, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Niel", score: 80, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Rumst", score: 79, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Schelle", score: 79, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "wc-verstopt", city: "Willebroek", score: 81, source: "manual-phase1" },

  { service: "ontstoppingen", keyword: "riool-ontstoppen", city: "Antwerpen", score: 88, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "riool-ontstoppen", city: "Boom", score: 83, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "riool-ontstoppen", city: "Mechelen", score: 87, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "riool-ontstoppen", city: "Willebroek", score: 80, source: "manual-phase1" },

  { service: "ontstoppingen", keyword: "afvoer-ontstoppen", city: "Antwerpen", score: 84, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "afvoer-ontstoppen", city: "Boom", score: 81, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "afvoer-ontstoppen", city: "Mechelen", score: 85, source: "manual-phase1" },
  { service: "ontstoppingen", keyword: "afvoer-ontstoppen", city: "Niel", score: 76, source: "manual-phase1" },
];