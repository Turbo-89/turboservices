
import DienstPageLayout from "@/components/diensten/DienstPage";

export default function Page() {
  return (
    <DienstPageLayout
      serviceKey="ontstoppingen"
      serviceName="Ontstoppingen"
      regionKey="rupelstreek"
      regionLabel="Rupelstreek"
      municipalities={["Boom","Rumst","Niel"]}
      intro={`Ontstoppingen in Rupelstreek nodig? In Boom, Rumst, Niel komen verstoppingen, geurhinder en afvoerproblemen frequent voor door oudere rioleringen en intensief gebruik. Turbo Services zorgt voor snelle en gerichte interventies zonder onnodige kosten.`}
      sections={[{"title":"Veelvoorkomende problemen in Rupelstreek","body":"In Boom, Rumst, Niel zien we vaak verstoppingen door vetophoping, wortelgroei en verzakkingen. Vooral in oudere woningen komen terugkerende problemen voor die een gerichte aanpak vereisen."},{"title":"Onze aanpak","body":"Wij starten met een gerichte analyse van het probleem. Indien nodig voeren we een camera-inspectie uit om exact de oorzaak te bepalen. Daarna lossen we het probleem efficiënt op zonder onnodige breekwerken."},{"title":"Waarom Turbo Services","body":"Snelle interventie, duidelijke communicatie en correcte prijzen. Actief in Rupelstreek en directe omgeving, met kennis van lokale situaties en typische problemen."}]}
      faqs={[{"q":"Hoe snel kunnen jullie ter plaatse zijn in Rupelstreek?","a":"In de meeste gevallen zijn we dezelfde dag nog ter plaatse in Rupelstreek en omliggende gemeenten zoals Boom, Rumst, Niel."},{"q":"Wat kost een ontstoppingen?","a":"Je krijgt altijd vooraf een duidelijke prijs. Geen verrassingen achteraf."}]}
    />
  );
}
