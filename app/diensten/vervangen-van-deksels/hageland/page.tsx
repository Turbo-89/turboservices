import DienstPageLayout from "@/components/diensten/DienstPage";

export default function Page() {
  return (
    <DienstPageLayout
      serviceKey="vervangen-van-deksels"
      serviceName="Vervangen van deksels"
      regionKey="hageland"
      regionLabel="Hageland"
      municipalities={[
  "Aarschot",
  "Diest",
  "Tienen",
  "Scherpenheuvel-Zichem",
  "Bekkevoort",
  "Geetbets",
  "Kortenaken",
  "Linter"
]}
      municipalityLinks={[
  {
    "slug": "aarschot",
    "label": "Aarschot"
  },
  {
    "slug": "diest",
    "label": "Diest"
  },
  {
    "slug": "tienen",
    "label": "Tienen"
  },
  {
    "slug": "scherpenheuvel-zichem",
    "label": "Scherpenheuvel-Zichem"
  },
  {
    "slug": "bekkevoort",
    "label": "Bekkevoort"
  },
  {
    "slug": "geetbets",
    "label": "Geetbets"
  },
  {
    "slug": "kortenaken",
    "label": "Kortenaken"
  },
  {
    "slug": "linter",
    "label": "Linter"
  }
]}
      intro={"Vervangen van deksels in Hageland nodig? In Aarschot, Diest, Tienen, Scherpenheuvel-Zichem, Bekkevoort, Geetbets, Kortenaken, Linter zien we regelmatig beschadigde, verzakte of versleten putdeksels en inspectiedeksels. Turbo Services vervangt deksels veilig en correct, met aandacht voor bereikbaarheid, belasting en de bestaande situatie ter plaatse."}
      sections={[
  {
    "title": "Wanneer is vervangen van deksels nodig in Hageland?",
    "body": "In Aarschot, Diest, Tienen, Scherpenheuvel-Zichem, Bekkevoort, Geetbets, Kortenaken, Linter komen beschadigde, losliggende of verzakte deksels regelmatig voor. Dat kan zorgen voor geurhinder, onveilige situaties, waterinsijpeling of bijkomende schade aan de put of aansluiting. Tijdig vervangen voorkomt verdere problemen en maakt de situatie opnieuw veilig en bruikbaar."
  },
  {
    "title": "Onze aanpak in Hageland",
    "body": "We bekijken eerst het type deksel, de maat, de belasting en de toestand van de bestaande putrand. Daarna vervangen we het beschadigde of foutieve deksel door een geschikte oplossing. Waar nodig stemmen we de uitvoering af op de omliggende verharding en de praktische toegankelijkheid ter plaatse."
  },
  {
    "title": "Actief in Hageland",
    "body": "Turbo Services werkt actief in Hageland, onder meer in Aarschot, Diest, Tienen, Scherpenheuvel-Zichem, Bekkevoort, Geetbets, Kortenaken, Linter. We zorgen voor een duidelijke aanpak, correcte uitvoering en snelle opvolging zonder onnodige omwegen."
  }
]}
      faqs={[
  {
    "q": "Doen jullie vervanging van deksels in Hageland?",
    "a": "Ja. We zijn actief in Hageland, onder meer in Aarschot, Diest, Tienen, Scherpenheuvel-Zichem, Bekkevoort, Geetbets, Kortenaken, Linter, en vervangen beschadigde, verzakte of versleten deksels afhankelijk van de situatie ter plaatse."
  },
  {
    "q": "Wanneer moet een putdeksel vervangen worden?",
    "a": "Wanneer een deksel scheurt, verzakt, los ligt, niet meer correct afsluit of onveilig wordt om te belasten, is vervanging meestal de juiste oplossing."
  },
  {
    "q": "Bekijken jullie eerst welke oplossing technisch past?",
    "a": "Ja. We bekijken eerst het type put, de maat, de belasting en de plaatsingssituatie zodat het juiste deksel en de juiste uitvoering gekozen worden."
  }
]}
    />
  );
}
