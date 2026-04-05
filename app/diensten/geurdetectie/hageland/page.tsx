import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";


export const metadata: Metadata = {
  title: `Geurdetectie in Hageland | Turbo Services`,
  description: `Geurdetectie in Hageland bij aanhoudende rioolgeur in badkamer, toilet, keuken of technische ruimte. Turbo Services zoekt gericht naar de bron van de stank zonder blind breekwerk.`,
};

export default function Page() {
  const serviceKey = "geurdetectie";
  const municipalities = [
  "Aarschot",
  "Diest",
  "Tienen",
  "Scherpenheuvel-Zichem",
  "Bekkevoort",
  "Geetbets",
  "Kortenaken",
  "Linter"
];
  const relatedRegionLinks = [];
  const sections = [
  {
    "title": "Wanneer geurdetectie zinvol is in Hageland",
    "body": "Geurdetectie is aangewezen bij aanhoudende rioolgeur, terugkerende stank zonder zichtbare verstopping of wanneer verschillende mogelijke oorzaken in aanmerking komen. Dat gebeurt bijvoorbeeld bij defecte sifons, lekkende verbindingen, foutieve aansluitingen of problemen met ontluchting."
  },
  {
    "title": "Waar rioolgeur meestal vandaan komt",
    "body": "De oorzaak ligt vaak bij defecte sifons, losse aansluitingen, lekkende afvoerverbindingen, gebrekkige ontluchting of verborgen schade in het rioleringssysteem. Een verstopping kan geur veroorzaken, maar geurdetectie focust op het achterhalen van de exacte bron."
  },
  {
    "title": "Werkwijze",
    "body": "De situatie wordt stap voor stap nagekeken, met focus op sifons, aansluitingen, ontluchting, lekken en defecten in de afvoer of riolering. Het doel is gericht te lokaliseren waar het probleem zit, zodat onnodig breekwerk wordt vermeden."
  },
  {
    "title": "Prijzen",
    "body": "Geurdetectie gebeurt binnen de basisstructuur van een interventie. De basisinterventie bedraagt €160 exclusief btw. Indien camera-inspectie nodig is als aanvulling, geldt een supplement van €90."
  },
  {
    "title": "Waarom gericht opsporen belangrijk is",
    "body": "Geurhinder is vaak hardnekkig en moeilijk correct in te schatten zonder gerichte controle. Door eerst de bron te lokaliseren, vermijd je nutteloze werken en wordt de oplossing veel preciezer en efficiënter."
  }
];
  const faqs = [
  {
    "q": "Waar komt rioolgeur meestal vandaan?",
    "a": "Vaak ligt de oorzaak bij defecte sifons, losse aansluitingen, lekkende afvoerverbindingen, gebrekkige ontluchting of verborgen schade in het rioleringssysteem."
  },
  {
    "q": "Is geurdetectie hetzelfde als ontstopping?",
    "a": "Nee. Een verstopping kan geur veroorzaken, maar geurdetectie focust op het achterhalen van de exacte bron van de stank."
  },
  {
    "q": "Moet er altijd gebroken worden?",
    "a": "Nee. Het doel is juist om eerst gericht te lokaliseren waar het probleem zit, zodat onnodig breekwerk vermeden wordt."
  }
];

  return (
    <DienstPageLayout
      serviceKey="geurdetectie"
      serviceName="Geurdetectie"
      regionKey="hageland"
      regionLabel="Hageland"
      municipalities={municipalities}
      intro={`Geurdetectie in Hageland is aangewezen wanneer rioolgeur blijft terugkomen zonder dat de oorzaak duidelijk zichtbaar is. Turbo Services onderzoekt gericht waar de geur ontstaat, zodat niet op goed geluk moet worden opengebroken of hersteld. Doel is de bron van het probleem technisch correct te lokaliseren.`}
      sections={sections}
      faqs={faqs}
      ctaTitle="Rioolgeur laten opsporen?"
      ctaBody={`Beschrijf kort waar de geurhinder optreedt in Hageland en hoe lang het probleem al aanwezig is. Turbo Services koppelt snel terug met een gerichte aanpak voor opsporing en advies.`}
      ctaButton="Vraag geurdetectie aan"
      heroImageOverride="/assets/base/geurdetectie.png"
      municipalityLinks={municipalities.map((name) => ({ slug: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, " en ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), label: name }))}
    />
  );
}
