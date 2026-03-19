import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

export const metadata: Metadata = {
  title: "Camera-inspectie in Hoeilaart | Turbo Services",
  description:
    "Nood aan een professionele camera-inspectie in Hoeilaart? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk.",
};

export default function Page() {
  const city = "Hoeilaart";
  const service = getServiceByKey("camera-inspectie");

  const intro =
    "Nood aan een professionele camera-inspectie in Hoeilaart? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk.";

  const sections = [
    {
      title: "Camera-inspectie",
      body:
        "Nood aan een professionele camera-inspectie in Hoeilaart? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk.",
    },
    {
      title: "Wat we doen",
      body:
        "- Inspectie van hoofdriolering en binnenleidingen\n- Detectie van scheuren, verzakkingen en wortelgroei\n- Opmeting van leidingverloop\n- Digitale rapportage mogelijk\n- Snelle diagnose zonder hak- of breekwerk",
    },
    {
      title: "Werkwijze",
      body:
        "1. Vooranalyse van het probleem\n2. Toegang creÃƒÂ«ren tot de betrokken leiding\n3. Camera-inspectie met hoge resolutie\n4. Analyse van beelden en vaststellen van oorzaak\n5. Advies voor oplossing of herstelling",
    },
    {
      title: "Tarieven",
      body:
        "Camera-inspectie gebeurt als supplement bovenop de standaard interventiekost:\n\n- Standaard interventiekost: Ã¢â€šÂ¬160\n- Camera-inspectie supplement: Ã¢â€šÂ¬90\n- Bij combinatie geldt: Ã¢â€šÂ¬250",
    },
    {
      title: "Waarom snel ingrijpen?",
      body:
        "Camera-inspectie is aangewezen bij terugkerende problemen, geurhinder, verzakkingen of onverklaarbare verstoppingen.",
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
    "Wij brengen uw riolering in Hoeilaart exact in beeld en geven een duidelijk advies voor de juiste oplossing.";

  return (
    <DienstPageLayout
      serviceKey="camera-inspectie"
      serviceName="Camera-inspectie"
      regionLabel={city}
      municipalities={[city]}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="Camera-inspectie aanvragen?"
      ctaBody={ctaBody}
      ctaButton="Vraag inspectie aan"
      heroImageOverride="/assets/base/camera-inspectie.png"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
