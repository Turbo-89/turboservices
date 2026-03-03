// app/sitemap.ts
import type { MetadataRoute } from "next";

// Snelle start: maak dit later dynamisch via jouw content/registries
const SERVICES = ["ontstoppingen", "camera-inspectie", "noodherstellingen", "geurdetectie"];
const REGIONS = ["scheldeland", "waasland", "antwerpen", "vlaams-brabant", "oost-vlaanderen"]; // voorbeeld

export default function sitemap(): MetadataRoute.Sitemap {
  const site = "https://www.turboservices.be";
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${site}/`, lastModified: now },
    { url: `${site}/diensten`, lastModified: now },
    { url: `${site}/prijzen`, lastModified: now },
    { url: `${site}/over-ons`, lastModified: now },
    { url: `${site}/boeken`, lastModified: now },
    { url: `${site}/kennisbank`, lastModified: now },
  ];

  const serviceBase = SERVICES.map((s) => ({
    url: `${site}/diensten/${s}`,
    lastModified: now,
  }));

  const serviceRegion = SERVICES.flatMap((s) =>
    REGIONS.map((r) => ({
      url: `${site}/diensten/${s}/${r}`,
      lastModified: now,
    }))
  );

  return [...staticUrls, ...serviceBase, ...serviceRegion];
}