import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";

export const metadata: Metadata = {
  title: "Vervangen van deksels | Turbo Services",
  description:
    "Vervangen of aanpassen van beschadigde, losse of verzakte putdeksels en afdekkingselementen. Turbo Services is actief in heel Vlaanderen.",
};

export default function VervangenVanDekselsPage() {
  return (
    <DienstPageLayout
      serviceKey="vervangen-van-deksels"
      serviceName="Vervangen van deksels"
      intro="Turbo Services vervangt beschadigde, losse of verzakte deksels en afdekkingselementen op een veilige en duurzame manier. We bekijken ter plaatse welke oplossing technisch het meest geschikt is."
      sections={[
        {
          title: "Wanneer vervangen van deksels nodig is",
          body:
            "Een deksel dat verzakt, loszit of beschadigd is, kan geurhinder, waterinsijpeling, onveilige situaties of verdere schade veroorzaken. Tijdige vervanging voorkomt bijkomende problemen en zorgt voor een nette, veilige afwerking.",
        },
        {
          title: "Wat wij doen",
          body:
            "Wij beoordelen de bestaande situatie ter plaatse en vervangen of passen het deksel aan waar nodig. Daarbij houden we rekening met stabiliteit, toegankelijkheid, belasting en correcte aansluiting op de bestaande put of opening.",
        },
        {
          title: "Prijs en aanpak",
          body:
            "De prijs hangt af van het type deksel, de staat van de bestaande situatie en de nodige aanpassing ter plaatse. Indien nodig combineren we dit met diagnose of bijkomende herstelling.",
        },
      ]}
      faqs={[
        {
          q: "Wanneer moet een putdeksel vervangen worden?",
          a: "Wanneer het deksel beschadigd, los, verzakt of onveilig is, of wanneer geur- of waterproblemen ontstaan rond de bestaande opening.",
        },
        {
          q: "Kan dit gecombineerd worden met andere werken?",
          a: "Ja. Vervangen van deksels kan gecombineerd worden met rioolherstellingen, geurdetectie of andere gerichte ingrepen wanneer dat technisch nodig is.",
        },
        {
          q: "Wordt de prijs vooraf bekeken?",
          a: "Ja. De situatie wordt eerst beoordeeld zodat duidelijk is welke oplossing nodig is en welke kost daarbij hoort.",
        },
      ]}
    />
  );
}

