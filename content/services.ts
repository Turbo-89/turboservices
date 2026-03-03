export type ServiceDef = {
  key: string;        // "ontstoppingen"
  name: string;       // "Ontstoppingen"
  slug?: string;      // optioneel als afwijkend
};

export const SERVICES: ServiceDef[] = [
  { key: "ontstoppingen", name: "Ontstoppingen" },
  { key: "camera-inspectie", name: "Camera-inspectie" },
  { key: "noodherstellingen", name: "Noodherstellingen" },
  { key: "geurdetectie", name: "Geurdetectie" },
];