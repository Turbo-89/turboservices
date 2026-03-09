[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

Set-Location "C:\Projects\GitHub\turboservices"

$services = @(
  @{
    Key = "ontstoppingen"
    Name = "Ontstoppingen"
    Hero = "/assets/base/ontstoppingen.png"
    Intro = "Verstopte wc, lavabo, douche of hoofdriolering in {CITY}? Turbo Services lost het op met professionele machines, ook 's avonds en in het weekend aan hetzelfde tarief."
    CtaTitle = "Hulp nodig bij een verstopping?"
    CtaBody = "Beschrijf kort het probleem en voeg indien mogelijk een foto toe. Wij koppelen snel terug met een concreet tijdsblok in {CITY}."
    CtaButton = "Vraag ontstopping aan →"
    Sections = @(
      @{ Title = "Ontstoppingen"; Body = "Verstopte wc, lavabo, douche of hoofdriolering in {CITY}? Turbo Services lost het op met professionele machines, ook 's avonds en in het weekend aan hetzelfde tarief." }
      @{ Title = "Wat we doen"; Body = "- Verstopte wc, douche, bad en lavabo`n- Keukenafvoer en vetleidingen`n- Hoofdriolering binnen en buiten de woning`n- Water dat terugkomt via vloerputjes of kelderafvoeren`n- Rioolgeur, borrelende geluiden en terugslagproblemen" }
      @{ Title = "Werkwijze"; Body = "1. Korte bevraging van het probleem`n2. Inspectie van de betrokken afvoeren`n3. Mechanische ontstopping met professionele apparatuur`n4. Indien nodig: camera-inspectie voor diagnose`n5. Controle en advies om herhaling te vermijden" }
      @{ Title = "Tarieven"; Body = "Wij werken met vaste en transparante prijzen, ook 's avonds en in het weekend:`n`n- Interventie ontstopping: €160`n- Camera-inspectie: €90`n- Totaalpakket (ontstopping + camera): €250" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Hoe sneller je ingrijpt, hoe kleiner de kans op bijkomende schade zoals geurhinder, overstroming of lekkages. Een korte interventie voorkomt vaak duurdere herstellingen." }
    )
  }
  @{
    Key = "camera-inspectie"
    Name = "Camera-inspectie"
    Hero = "/assets/base/camera-inspectie.png"
    Intro = "Nood aan een professionele camera-inspectie in {CITY}? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk."
    CtaTitle = "Camera-inspectie aanvragen?"
    CtaBody = "Wij brengen uw riolering in {CITY} exact in beeld en geven een duidelijk advies voor de juiste oplossing."
    CtaButton = "Vraag inspectie aan"
    Sections = @(
      @{ Title = "Camera-inspectie"; Body = "Nood aan een professionele camera-inspectie in {CITY}? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk." }
      @{ Title = "Wat we doen"; Body = "- Inspectie van hoofdriolering en binnenleidingen`n- Detectie van scheuren, verzakkingen en wortelgroei`n- Opmeting van leidingverloop`n- Digitale rapportage mogelijk`n- Snelle diagnose zonder hak- of breekwerk" }
      @{ Title = "Werkwijze"; Body = "1. Vooranalyse van het probleem`n2. Toegang creëren tot de betrokken leiding`n3. Camera-inspectie met hoge resolutie`n4. Analyse van beelden en vaststellen van oorzaak`n5. Advies voor oplossing of herstelling" }
      @{ Title = "Tarieven"; Body = "Camera-inspectie gebeurt als supplement bovenop de standaard interventiekost:`n`n- Standaard interventiekost: €160`n- Camera-inspectie supplement: €90`n- Bij combinatie geldt: €250" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Camera-inspectie is aangewezen bij terugkerende problemen, geurhinder, verzakkingen of onverklaarbare verstoppingen." }
    )
  }
  @{
    Key = "noodherstellingen"
    Name = "Noodherstellingen"
    Hero = "/assets/base/noodherstellingen.png"
    Intro = "Lek, verzakking of acute schade aan afvoer of riolering in {CITY}? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken."
    CtaTitle = "Dringende herstelling nodig?"
    CtaBody = "Neem contact op voor een snelle inschatting en noodherstelling in {CITY}."
    CtaButton = "Vraag noodherstelling aan →"
    Sections = @(
      @{ Title = "Noodherstellingen"; Body = "Lek, verzakking of acute schade aan afvoer of riolering in {CITY}? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken." }
      @{ Title = "Wat we doen"; Body = "- Dringende herstellingen aan afvoer en riolering`n- Aanpak van lekken, breuken en verzakkingen`n- Vervanging van beschadigde delen waar nodig`n- Gerichte lokalisatie van het probleem`n- Snelle tussenkomst bij acute schade" }
      @{ Title = "Werkwijze"; Body = "1. Snelle inschatting van de urgentie`n2. Lokalisatie van het probleem`n3. Indien nodig eerst diagnose via camera-inspectie of andere controle`n4. Uitvoeren van een technisch verantwoorde noodherstelling`n5. Advies over verdere of definitieve aanpak" }
      @{ Title = "Tarieven"; Body = "Prijzen variëren volgens het type probleem en de nodige interventie:`n`n- Diagnose en interventie starten vanaf €160 exclusief btw`n- Camera-inspectie kan als supplement toegevoegd worden`n- Bijkomende herstellingen of structurele werken steeds na duidelijke bespreking" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Lekkages, breuken en verzakkingen kunnen snel grotere schade veroorzaken. Snelle noodherstelling helpt om gevolgschade, vochtproblemen en verdere uitval te beperken." }
    )
  }
  @{
    Key = "geurdetectie"
    Name = "Geurdetectie"
    Hero = "/assets/base/geurdetectie.png"
    Intro = "Last van rioolgeur in {CITY}? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder blind breekwerk."
    CtaTitle = "Geurdetectie nodig?"
    CtaBody = "Wij sporen geurproblemen in {CITY} snel en zonder onnodig breekwerk op."
    CtaButton = "Vraag geurdetectie aan"
    Sections = @(
      @{ Title = "Geurdetectie"; Body = "Last van rioolgeur in {CITY}? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder blind breekwerk." }
      @{ Title = "Wat we doen"; Body = "- Detectie van geurproblemen`n- Opsporen van foutieve aansluitingen`n- Onderzoek van sifons, ontluchting en verbindingen`n- Snelle diagnose zonder blind breekwerk`n- Gericht advies voor herstelling" }
      @{ Title = "Werkwijze"; Body = "1. Vooranalyse op locatie`n2. Controle van sifons, aansluitingen en ontluchting`n3. Gericht onderzoek van afvoer en riolering`n4. Lokalisatie van de waarschijnlijke oorzaak`n5. Advies voor herstelling of vervolgstap" }
      @{ Title = "Tarieven"; Body = "Geurdetectie is vaak de snelste manier om geurproblemen te lokaliseren:`n`n- Basisinterventie: €160`n- Combinatie met camera-inspectie mogelijk`n- Herstellingen steeds na diagnose en bespreking" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Geurhinder wijst vaak op een technisch defect in afvoer of riolering. Een gerichte diagnose voorkomt nodeloos breekwerk en blijvende overlast." }
    )
  }
  @{
    Key = "gerichte-rioolherstellingen"
    Name = "Gerichte rioolherstellingen"
    Hero = "/assets/base/gerichte-rioolherstellingen.png"
    Intro = "Lekkage, verzakking of lokale schade aan de riolering in {CITY}? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak."
    CtaTitle = "Gerichte rioolherstelling nodig?"
    CtaBody = "Neem contact op voor een snelle diagnose en gerichte rioolherstelling in {CITY}."
    CtaButton = "Vraag rioolherstelling aan"
    Sections = @(
      @{ Title = "Gerichte rioolherstellingen"; Body = "Lekkage, verzakking of lokale schade aan de riolering in {CITY}? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak." }
      @{ Title = "Wat we doen"; Body = "- Herstelling van lokale breuken of verzakkingen`n- Vervanging van beschadigde delen van afvoer of riolering`n- Gerichte openbraak waar technisch nodig`n- Lokalisatie van leidingen en schadezones`n- Herstellingen op basis van duidelijke diagnose" }
      @{ Title = "Werkwijze"; Body = "1. Lokalisatie van het probleem`n2. Indien nodig diagnose via camera-inspectie of andere controle`n3. Gericht openmaken van de probleemzone`n4. Herstelling of vervanging van het beschadigde deel`n5. Controle en advies voor verdere opvolging" }
      @{ Title = "Tarieven"; Body = "Prijzen variëren volgens de aard van de schade en de nodige interventie:`n`n- Diagnose en interventie starten vanaf €160 exclusief btw`n- Camera-inspectie kan als supplement toegevoegd worden`n- Grotere of bijkomende herstellingen steeds na duidelijke bespreking" }
      @{ Title = "Waarom gericht herstellen?"; Body = "Door eerst correct te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat vermijdt onnodige werken, beperkt kosten en maakt een technisch gerichte oplossing mogelijk." }
    )
  }
  @{
    Key = "vervangen-van-deksels"
    Name = "Vervangen van deksels"
    Hero = "/assets/base/vervangen-van-deksels.png"
    Intro = "Beschadigd, verzakt of losliggend putdeksel in {CITY}? Turbo Services vervangt en corrigeert dit gericht en veilig."
    CtaTitle = "Deksel laten vervangen?"
    CtaBody = "Turbo Services beoordeelt de bestaande situatie in {CITY} en zorgt voor een correcte, veilige en duurzame vervanging."
    CtaButton = "Vraag vervanging aan"
    Sections = @(
      @{ Title = "Vervangen van deksels"; Body = "Beschadigd, verzakt of losliggend putdeksel in {CITY}? Turbo Services vervangt en corrigeert dit gericht en veilig." }
      @{ Title = "Wat we doen"; Body = "- Vervanging van beschadigde of losliggende putdeksels`n- Correctie van slecht aansluitende afdekkingen`n- Herstel van onveilige of verzakte situaties`n- Advies over juiste afwerking en belasting`n- Combinatie mogelijk met andere gerichte ingrepen" }
      @{ Title = "Werkwijze"; Body = "1. Beoordeling van de bestaande situatie`n2. Keuze van geschikt type deksel of afwerking`n3. Verwijderen of corrigeren van het oude onderdeel`n4. Nieuwe plaatsing met aandacht voor aansluiting en stabiliteit`n5. Controle op veilige en duurzame afwerking" }
      @{ Title = "Tarieven"; Body = "De prijs hangt af van het type deksel, de staat van de bestaande situatie en de nodige aanpassing ter plaatse. Indien nodig combineren we dit met diagnose of bijkomende herstelling." }
      @{ Title = "Waarom tijdig vervangen?"; Body = "Een slecht passend of beschadigd deksel kan geurhinder, waterinsijpeling en onveilige situaties veroorzaken. Tijdige vervanging voorkomt bijkomende schade." }
    )
  }
)

function Slugify([string]$s) {
  $s = $s.ToLower().Trim()
  $s = $s -replace '[^\p{L}\p{Nd}\s-]', ''
  $s = $s -replace '\s+', '-'
  $s = $s -replace '-+', '-'
  return $s
}

function Escape-TS([string]$text) {
  if ($null -eq $text) { return "" }
  $t = $text
  $t = $t.Replace('\', '\\')
  $t = $t.Replace('"', '\"')
  $t = $t.Replace("`r`n", '\n')
  $t = $t.Replace("`n", '\n')
  $t = $t.Replace("`r", '\n')
  return $t
}

$contentRegions = Get-Content ".\content\regions.ts" -Raw

$regionKeys = @(
  "antwerpen-noordrand","antwerpen-stad","antwerpen-zuidrand",
  "brussel-centrum","brussel-noord","brussel-zuid",
  "denderstreek","druivenstreek","durmestreek-lokeren",
  "hageland","kempen-noord","kempen-zuid","klein-brabant",
  "leuven-dijleland","lier-neteland","mechelen-rivierenland",
  "noordrand-brussel","pajottenland","ruppelstreek","scheldeland",
  "sint-niklaas-regio","temse-omgeving","waasland"
)

$allCities = [regex]::Matches($contentRegions, '"([^"]+)"') |
  ForEach-Object { $_.Groups[1].Value } |
  Where-Object { $_ -notin $regionKeys } |
  Sort-Object -Unique

$relatedRegionLinksCode = @'
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
    { slug: "ruppelstreek", label: "Ruppelstreek" },
    { slug: "scheldeland", label: "Scheldeland" },
    { slug: "sint-niklaas-regio", label: "Sint-Niklaas regio" },
    { slug: "temse-omgeving", label: "Temse & omstreken" },
    { slug: "waasland", label: "Waasland" },
  ];
'@

foreach ($service in $services) {
  foreach ($city in $allCities) {
    $citySlug = Slugify $city
    $targetDir = Join-Path "app\diensten\$($service.Key)" $citySlug
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    $introEsc = Escape-TS(($service.Intro -replace '\{CITY\}', [System.Text.RegularExpressions.Regex]::Escape($city)).Replace('\{CITY\}', $city))
    $ctaBodyEsc = Escape-TS(($service.CtaBody -replace '\{CITY\}', [System.Text.RegularExpressions.Regex]::Escape($city)).Replace('\{CITY\}', $city))
    $ctaTitleEsc = Escape-TS($service.CtaTitle)
    $ctaButtonEsc = Escape-TS($service.CtaButton)
    $nameEsc = Escape-TS($service.Name)
    $heroEsc = Escape-TS($service.Hero)

    $sectionsCode = ($service.Sections | ForEach-Object {
      $titleEsc = Escape-TS($_.Title)
      $bodyText = $_.Body.Replace('{CITY}', $city)
      $bodyEsc = Escape-TS($bodyText)
@"
    {
      title: "$titleEsc",
      body:
        "$bodyEsc",
    }
"@
    }) -join ",`r`n"

$content = @"
import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { getServiceByKey } from "@/content/services";

export const metadata: Metadata = {
  title: "$nameEsc in $(Escape-TS $city) | Turbo Services",
  description:
    "$introEsc",
};

export default function Page() {
  const city = "$(Escape-TS $city)";
  const service = getServiceByKey("$($service.Key)");

  const intro =
    "$introEsc";

  const sections = [
$sectionsCode
  ];

$relatedRegionLinksCode

  const ctaBody =
    "$ctaBodyEsc";

  return (
    <DienstPageLayout
      serviceKey="$($service.Key)"
      serviceName="$nameEsc"
      regionLabel={city}
      municipalities={[city]}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="$ctaTitleEsc"
      ctaBody={ctaBody}
      ctaButton="$ctaButtonEsc"
      heroImageOverride="$heroEsc"
      relatedRegionLinks={relatedRegionLinks}
    />
  );
}
"@

    [System.IO.File]::WriteAllText(
      (Join-Path $targetDir "page.tsx"),
      $content,
      (New-Object System.Text.UTF8Encoding($false))
    )

    Write-Host "CITY OK: $($service.Key) / $citySlug"
  }
}