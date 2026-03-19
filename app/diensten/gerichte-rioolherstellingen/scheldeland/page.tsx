
import DienstPageLayout from "@/components/diensten/DienstPage";

export default function Page() {
  return (
    <DienstPageLayout
      serviceKey="gerichte-rioolherstellingen"
      serviceName="Gerichte Rioolherstellingen"
      regionKey="scheldeland"
      regionLabel="Scheldeland"
      municipalities={["Boom","Niel","Rumst"]}
      intro={`Gerichte Rioolherstellingen in Scheldeland nodig? In Boom, Niel, Rumst komen verstoppingen, geurhinder en afvoerproblemen frequent voor door oudere rioleringen en intensief gebruik. Turbo Services zorgt voor snelle en gerichte interventies zonder onnodige kosten.`}
      sections={[{"title":"Veelvoorkomende problemen in Scheldeland","body":"In Boom, Niel, Rumst zien we vaak verstoppingen door vetophoping, wortelgroei en verzakkingen. Vooral in oudere woningen komen terugkerende problemen voor die een gerichte aanpak vereisen."},{"title":"Onze aanpak","body":"Wij starten met een gerichte analyse van het probleem. Indien nodig voeren we een camera-inspectie uit om exact de oorzaak te bepalen. Daarna lossen we het probleem efficiënt op zonder onnodige breekwerken."},{"title":"Waarom Turbo Services","body":"Snelle interventie, duidelijke communicatie en correcte prijzen. Actief in Scheldeland en directe omgeving, met kennis van lokale situaties en typische problemen."}]}
      faqs={[{"q":"Hoe snel kunnen jullie ter plaatse zijn in Scheldeland?","a":"In de meeste gevallen zijn we dezelfde dag nog ter plaatse in Scheldeland en omliggende gemeenten zoals Boom, Niel, Rumst."},{"q":"Wat kost een gerichte rioolherstellingen?","a":"Je krijgt altijd vooraf een duidelijke prijs. Geen verrassingen achteraf."}]}
    />
  );
}
