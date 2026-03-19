import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

export const metadata: Metadata = {
  title: "Ontstoppingen in Jette | Turbo Services",
  description:
    "Verstopte wc, lavabo, douche of hoofdriolering in Jette? Turbo Services lost het op met professionele machines, ook 's avonds en in het weekend aan hetzelfde tarief.",
};

export default function Page() {
  const city = "Jette";
  const service = getServiceByKey("ontstoppingen");

  const intro =
    "Verstopte wc, lavabo, douche of hoofdriolering in Jette? Turbo Services lost het op met professionele machines, ook 's avonds en in het weekend aan hetzelfde tarief.";

  const sections = [
    {
      title: "Ontstoppingen",
      body:
        "Verstopte wc, lavabo, douche of hoofdriolering in Jette? Turbo Services lost het op met professionele machines, ook 's avonds en in het weekend aan hetzelfde tarief.",
    },
    {
      title: "Wat we doen",
      body:
        "- Verstopte wc, douche, bad en lavabo\n- Keukenafvoer en vetleidingen\n- Hoofdriolering binnen en buiten de woning\n- Water dat terugkomt via vloerputjes of kelderafvoeren\n- Rioolgeur, borrelende geluiden en terugslagproblemen",
    },
    {
      title: "Werkwijze",
      body:
        "1. Korte bevraging van het probleem\n2. Inspectie van de betrokken afvoeren\n3. Mechanische ontstopping met professionele apparatuur\n4. Indien nodig: camera-inspectie voor diagnose\n5. Controle en advies om herhaling te vermijden",
    },
    {
      title: "Tarieven",
      body:
        "Wij werken met vaste en transparante prijzen, ook 's avonds en in het weekend:\n\n- Interventie ontstopping: Ã¢â€šÂ¬160\n- Camera-inspectie: Ã¢â€šÂ¬90\n- Totaalpakket (ontstopping + camera): Ã¢â€šÂ¬250",
    },
    {
      title: "Waarom snel ingrijpen?",
      body:
        "Hoe sneller je ingrijpt, hoe kleiner de kans op bijkomende schade zoals geurhinder, overstroming of lekkages. Een korte interventie voorkomt vaak duurdere herstellingen.",
    }
  ];

  const relatedRegionLinks = [
    { slug: "antwerpen-noordrand", label: "Antwerpen Noordrand" },
    { slug: "antwerpen-stad", label: "Antwerpen Stad" },
    { slug: "antwerpen-zuidrand", label: "Antwerpen Zuidrand" },
    { slug: "brussel-centrum", label: "Brussel Centrum" },
    { slug: "brussel-noord", label: "Brussel Noord" },
    { slug: "brussel-zuid", label: "Brussel Zuid" },
    { slug: "denderstreek", label: "Denderstreek" },
    { slug: "druivenstreek", label: "Druivenstreek" },
    { slug: "durmestreek-lokeren", label: "Durmestreek" },
    { slug: "hageland", label: "Hageland" },
    { slug: "kempen-noord", label: "Kempen Noord" },
    { slug: "kempen-zuid", label: "Kempen Zuid" },
    { slug: "klein-brabant", label: "Klein-Brabant" },
    { slug: "leuven-dijleland", label: "Leuven & Dijleland" },
    { slug: "lier-neteland", label: "Lier & Neteland" },
    { slug: "mechelen-rivierenland", label: "Mechelen & Rivierenland" },
    { slug: "noordrand-brussel", label: "Noordrand Brussel" },
    { slug: "pajottenland", label: "Pajottenland" },
    { slug: "rupelstreek", label: "Rupelstreek" },
    { slug: "scheldeland", label: "Scheldeland" },
    { slug: "sint-niklaas-regio", label: "Sint-Niklaas regio" },
    { slug: "temse-omgeving", label: "Temse & omstreken" },
    { slug: "waasland", label: "Waasland" },
  ];

  const ctaBody =
    "Beschrijf kort het probleem en voeg indien mogelijk een foto toe. Wij koppelen snel terug met een concreet tijdsblok in Jette.";

  return (
    <DienstPageLayout
      serviceKey="ontstoppingen"
      serviceName="Ontstoppingen"
      regionLabel={city}
      municipalities={[city]}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Hulp nodig bij een verstopping?"
      ctaBody={ctaBody}
      ctaButton="Vraag ontstopping aan Ã¢â€ â€™"
      heroImageOverride="/assets/base/ontstoppingen.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
