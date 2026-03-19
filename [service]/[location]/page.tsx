import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DienstPageLayout from "@/components/diensten/DienstPage";
import {
  REGION_CITIES,
  type RegionKey,
} from "@/content/regions";
import { getServiceByKey } from "@/content/services";
import {
  getMunicipalityBySlug,
  isRegionSlug,
  MUNICIPALITIES,
  REGION_KEYS,
} from "@/content/locations";
import { slugify } from "@/lib/slugify";

type Params = {
  service: string;
  location: string;
};

function labelFromRegionKey(regionKey: RegionKey): string {
  switch (regionKey) {
    case "antwerpen-noordrand":
      return "Antwerpen Noordrand";
    case "antwerpen-stad":
      return "Antwerpen Stad";
    case "antwerpen-zuidrand":
      return "Antwerpen Zuidrand";
    case "brussel-centrum":
      return "Brussel Centrum";
    case "brussel-noord":
      return "Brussel Noord";
    case "brussel-zuid":
      return "Brussel Zuid";
    case "denderstreek":
      return "Denderstreek";
    case "druivenstreek":
      return "Druivenstreek";
    case "durmestreek-lokeren":
      return "Durmestreek";
    case "hageland":
      return "Hageland";
    case "kempen-noord":
      return "Kempen Noord";
    case "kempen-zuid":
      return "Kempen Zuid";
    case "klein-brabant":
      return "Klein-Brabant";
    case "leuven-dijleland":
      return "Leuven & Dijleland";
    case "lier-neteland":
      return "Lier & Neteland";
    case "mechelen-rivierenland":
      return "Mechelen & Rivierenland";
    case "noordrand-brussel":
      return "Noordrand Brussel";
    case "pajottenland":
      return "Pajottenland";
    case "rupelstreek":
      return "Rupelstreek";
    case "scheldeland":
      return "Scheldeland";
    case "sint-niklaas-regio":
      return "Sint-Niklaas regio";
    case "temse-omgeving":
      return "Temse & omstreken";
    case "waasland":
      return "Waasland";
    default:
      return regionKey;
  }
}

export async function generateStaticParams() {
  const services = [
    "ontstoppingen",
    "camera-inspectie",
    "noodherstellingen",
    "geurdetectie",
    "gerichte-rioolherstellingen",
    "vervangen-van-deksels",
  ];

  return services.flatMap((service) =>
    MUNICIPALITIES.map((m) => ({
      service,
      location: m.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const service = getServiceByKey(params.service);
  const municipality = getMunicipalityBySlug(params.location);

  if (!service || !municipality) {
    return {};
  }

  return {
    title: `${service.name} in ${municipality.name} | Turbo Services`,
    description: `${service.name} in ${municipality.name}. Turbo Services werkt gericht, snel en professioneel met duidelijke diagnose en opvolging.`,
  };
}

export default function ServiceMunicipalityPage({
  params,
}: {
  params: Params;
}) {
  const service = getServiceByKey(params.service);
  const municipality = getMunicipalityBySlug(params.location);

  if (!service || !municipality) {
    notFound();
  }

  if (isRegionSlug(params.location)) {
    notFound();
  }

  const regionLinks = municipality.regions.map((regionKey) => ({
    slug: regionKey,
    label: labelFromRegionKey(regionKey),
  }));

  const intro =
    `${service.name} in ${municipality.name}? Turbo Services werkt in ${municipality.name} met een gerichte aanpak, duidelijke diagnose en snelle opvolging.` +
    `\n\nDeze gemeente valt binnen: ${regionLinks.map((r) => r.label).join(", ")}.`;

  const sections =
    service.sections?.map((section) => ({
      title: section.title,
      body: `${section.body}\n\nActief in ${municipality.name}.`,
    })) ?? [];

  const ctaBody =
    `${service.ctaBody ?? ""}\n\nLocatie: ${municipality.name}.`;

  return (
    <DienstPageLayout
      serviceKey={service.key}
      serviceName={service.name}
      regionLabel={municipality.name}
      municipalities={[municipality.name]}
      intro={intro}
      sections={sections}
      faqs={service.faqs ?? []}
      ctaTitle={service.ctaTitle}
      ctaBody={ctaBody}
      ctaButton={service.ctaButton}
      heroImageOverride={`/assets/base/${slugify(service.key)}.png`}
      relatedRegionLinks={regionLinks}
    />
  );
}