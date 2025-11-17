import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ontstoppingen in antwerpen-stad | Turbo Services</title>
        <meta name="description" content="Ontstopping van wc, lavabo, douche en hoofdriolering. Turbo Services lost verstoppingen snel en professioneel op, ook ’s avonds en in het weekend aan hetzelfde tarief." />
      </Head>

      <Hero
        title="Ontstoppingen"
        image="/assets/generated/ontstoppingen-antwerpen-stad.webp"
      />

      <Intro>
        Verstopte wc, lavabo, douche of hoofdriolering in antwerpen-stad? Turbo Services lost het op met professionele machines, ook ’s avonds en in het weekend aan hetzelfde tarief.
      </Intro>

      <List title="Wat we doen" items=["Verstopte wc, douche, bad en lavabo", "Keukenafvoer en vetleidingen", "Hoofdriolering binnen en buiten de woning", "Water dat terugkomt via vloerputjes of kelderafvoeren", "Rioolgeur, borrelende geluiden en terugslagproblemen"] />
      <List title="Aanpak" items=["Korte bevraging van het probleem", "Inspectie van de betrokken afvoeren", "Mechanische ontstopping met professionele apparatuur", "Indien nodig: camera-inspectie voor diagnose", "Controle en advies om herhaling te vermijden"] />

      <Pricing title="Prijzen" intro="Wij werken met vaste en transparante prijzen, ook ’s avonds en in het weekend:" items=["Interventie ontstopping: €160", "Camera-inspectie: €90", "Totaalpakket (ontstopping + camera): €250"] />

      <Callout
        title="Waarom snel reageren?"
        body="Hoe sneller je ingrijpt, hoe kleiner de kans op bijkomende schade zoals geurhinder, overstroming of lekkages. Een korte interventie voorkomt vaak duurdere herstellingen."
      />

      <CallToAction
        title="Hulp nodig bij een verstopping?"
        body="Beschrijf kort het probleem en voeg indien mogelijk een foto toe. Wij koppelen snel terug met een concreet tijdsblok in antwerpen-stad."
        button="Vraag ontstopping aan →"
      />
    </>
  );
}
