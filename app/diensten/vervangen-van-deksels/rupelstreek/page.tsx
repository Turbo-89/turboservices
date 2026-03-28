import DienstPageLayout from "@/components/diensten/DienstPage";

export default function Page() {
  return (
    <DienstPageLayout
      serviceKey="vervangen-van-deksels"
      serviceName="Vervangen van deksels"
      regionKey="rupelstreek"
      regionLabel="Rupelstreek"
      municipalities={[
  "Boom",
  "Hemiksem",
  "Niel",
  "Rumst",
  "Schelle"
]}
      municipalityLinks={[
  {
    "slug": "boom",
    "label": "Boom"
  },
  {
    "slug": "hemiksem",
    "label": "Hemiksem"
  },
  {
    "slug": "niel",
    "label": "Niel"
  },
  {
    "slug": "rumst",
    "label": "Rumst"
  },
  {
    "slug": "schelle",
    "label": "Schelle"
  }
]}
      intro={"Vervangen van deksels in Rupelstreek nodig? In Boom, Hemiksem, Niel, Rumst, Schelle zien we regelmatig beschadigde, verzakte of versleten putdeksels en inspectiedeksels. Turbo Services vervangt deksels veilig en correct, met aandacht voor bereikbaarheid, belasting en de bestaande situatie ter plaatse."}
      sections={[
  {
    "title": "Wanneer is vervangen van deksels nodig in Rupelstreek?",
    "body": "In Boom, Hemiksem, Niel, Rumst, Schelle komen beschadigde, losliggende of verzakte deksels regelmatig voor. Dat kan zorgen voor geurhinder, onveilige situaties, waterinsijpeling of bijkomende schade aan de put of aansluiting. Tijdig vervangen voorkomt verdere problemen en maakt de situatie opnieuw veilig en bruikbaar."
  },
  {
    "title": "Onze aanpak in Rupelstreek",
    "body": "We bekijken eerst het type deksel, de maat, de belasting en de toestand van de bestaande putrand. Daarna vervangen we het beschadigde of foutieve deksel door een geschikte oplossing. Waar nodig stemmen we de uitvoering af op de omliggende verharding en de praktische toegankelijkheid ter plaatse."
  },
  {
    "title": "Actief in Rupelstreek",
    "body": "Turbo Services werkt actief in Rupelstreek, onder meer in Boom, Hemiksem, Niel, Rumst, Schelle. We zorgen voor een duidelijke aanpak, correcte uitvoering en snelle opvolging zonder onnodige omwegen."
  }
]}
      faqs={[
  {
    "q": "Doen jullie vervanging van deksels in Rupelstreek?",
    "a": "Ja. We zijn actief in Rupelstreek, onder meer in Boom, Hemiksem, Niel, Rumst, Schelle, en vervangen beschadigde, verzakte of versleten deksels afhankelijk van de situatie ter plaatse."
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
