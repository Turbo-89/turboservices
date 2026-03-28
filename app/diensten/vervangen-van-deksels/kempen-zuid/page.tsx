import DienstPageLayout from "@/components/diensten/DienstPage";

export default function Page() {
  return (
    <DienstPageLayout
      serviceKey="vervangen-van-deksels"
      serviceName="Vervangen van deksels"
      regionKey="kempen-zuid"
      regionLabel="Kempen Zuid"
      municipalities={[
  "Herentals",
  "Herenthout",
  "Grobbendonk",
  "Olen",
  "Geel",
  "Mol",
  "Westerlo",
  "Lille",
  "Kasterlee",
  "Retie"
]}
      municipalityLinks={[
  {
    "slug": "herentals",
    "label": "Herentals"
  },
  {
    "slug": "herenthout",
    "label": "Herenthout"
  },
  {
    "slug": "grobbendonk",
    "label": "Grobbendonk"
  },
  {
    "slug": "olen",
    "label": "Olen"
  },
  {
    "slug": "geel",
    "label": "Geel"
  },
  {
    "slug": "mol",
    "label": "Mol"
  },
  {
    "slug": "westerlo",
    "label": "Westerlo"
  },
  {
    "slug": "lille",
    "label": "Lille"
  },
  {
    "slug": "kasterlee",
    "label": "Kasterlee"
  },
  {
    "slug": "retie",
    "label": "Retie"
  }
]}
      intro={"Vervangen van deksels in Kempen Zuid nodig? In Herentals, Herenthout, Grobbendonk, Olen, Geel, Mol, Westerlo, Lille, Kasterlee, Retie zien we regelmatig beschadigde, verzakte of versleten putdeksels en inspectiedeksels. Turbo Services vervangt deksels veilig en correct, met aandacht voor bereikbaarheid, belasting en de bestaande situatie ter plaatse."}
      sections={[
  {
    "title": "Wanneer is vervangen van deksels nodig in Kempen Zuid?",
    "body": "In Herentals, Herenthout, Grobbendonk, Olen, Geel, Mol, Westerlo, Lille, Kasterlee, Retie komen beschadigde, losliggende of verzakte deksels regelmatig voor. Dat kan zorgen voor geurhinder, onveilige situaties, waterinsijpeling of bijkomende schade aan de put of aansluiting. Tijdig vervangen voorkomt verdere problemen en maakt de situatie opnieuw veilig en bruikbaar."
  },
  {
    "title": "Onze aanpak in Kempen Zuid",
    "body": "We bekijken eerst het type deksel, de maat, de belasting en de toestand van de bestaande putrand. Daarna vervangen we het beschadigde of foutieve deksel door een geschikte oplossing. Waar nodig stemmen we de uitvoering af op de omliggende verharding en de praktische toegankelijkheid ter plaatse."
  },
  {
    "title": "Actief in Kempen Zuid",
    "body": "Turbo Services werkt actief in Kempen Zuid, onder meer in Herentals, Herenthout, Grobbendonk, Olen, Geel, Mol, Westerlo, Lille, Kasterlee, Retie. We zorgen voor een duidelijke aanpak, correcte uitvoering en snelle opvolging zonder onnodige omwegen."
  }
]}
      faqs={[
  {
    "q": "Doen jullie vervanging van deksels in Kempen Zuid?",
    "a": "Ja. We zijn actief in Kempen Zuid, onder meer in Herentals, Herenthout, Grobbendonk, Olen, Geel, Mol, Westerlo, Lille, Kasterlee, Retie, en vervangen beschadigde, verzakte of versleten deksels afhankelijk van de situatie ter plaatse."
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
