import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

const service = getServiceByKey("vervangen-van-deksels");

export const metadata: Metadata = {
  title: service ? `${service.name} | Turbo Services` : "Turbo Services",
  description: service?.intro ?? "Turbo Services",
};

export default function Page() {
  if (!service) return null;

  return (
    <DienstPageLayout
      serviceKey={service.key}
      serviceName={service.name}
      intro={service.intro}
      sections={service.sections ?? []}
      faqs={service.faqs ?? []}
      ctaTitle={service.ctaTitle}
      ctaBody={service.ctaBody}
      ctaButton={service.ctaButton}
      heroImageOverride="/assets/base/vervangen-van-deksels.png"
    />
  );
}