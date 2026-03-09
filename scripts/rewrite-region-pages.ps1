Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Set-Location "C:\Projects\GitHub\turboservices"

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Slugify([string]$s) {
  if ([string]::IsNullOrWhiteSpace($s)) { return "" }
  $s = $s.ToLowerInvariant().Trim()
  $s = $s -replace '[^\p{L}\p{Nd}\s-]', ''
  $s = $s -replace '\s+', '-'
  $s = $s -replace '-+', '-'
  return $s
}

function Escape-TS([string]$s) {
  if ($null -eq $s) { return "" }
  return $s.Replace('\', '\\').Replace('"', '\"')
}

function Escape-TSMultiline([string]$s) {
  if ($null -eq $s) { return "" }
  return (Escape-TS $s).Replace("`r`n", '\n').Replace("`n", '\n').Replace("`r", '\n')
}

function Write-Utf8NoBom([string]$Path, [string]$Content) {
  [System.IO.File]::WriteAllText($Path, $Content, $utf8NoBom)
}

function Get-RegionLabel([string]$regionKey) {
  switch ($regionKey) {
    "antwerpen-stad"        { return "Antwerpen Stad" }
    "antwerpen-noordrand"   { return "Antwerpen Noordrand" }
    "antwerpen-zuidrand"    { return "Antwerpen Zuidrand" }
    "brussel-centrum"       { return "Brussel Centrum" }
    "brussel-noord"         { return "Brussel Noord" }
    "brussel-zuid"          { return "Brussel Zuid" }
    "denderstreek"          { return "Denderstreek" }
    "druivenstreek"         { return "Druivenstreek" }
    "durmestreek-lokeren"   { return "Durmestreek" }
    "hageland"              { return "Hageland" }
    "kempen-noord"          { return "Kempen Noord" }
    "kempen-zuid"           { return "Kempen Zuid" }
    "klein-brabant"         { return "Klein-Brabant" }
    "leuven-dijleland"      { return "Leuven & Dijleland" }
    "lier-neteland"         { return "Lier & Neteland" }
    "mechelen-rivierenland" { return "Mechelen & Rivierenland" }
    "noordrand-brussel"     { return "Noordrand Brussel" }
    "pajottenland"          { return "Pajottenland" }
    "ruppelstreek"          { return "Ruppelstreek" }
    "scheldeland"           { return "Scheldeland" }
    "sint-niklaas-regio"    { return "Sint-Niklaas regio" }
    "temse-omgeving"        { return "Temse & omstreken" }
    "waasland"              { return "Waasland" }
    default                 { return $regionKey }
  }
}

$services = @(
  @{
    Key = "ontstoppingen"
    Name = "Ontstoppingen"
    Hero = "/assets/base/ontstoppingen.png"
    TitleTemplate = "Ontstoppingen in {0}"
    DescriptionTemplate = "Ontstopping van wc, lavabo, douche en hoofdriolering in {0}. Turbo Services lost verstoppingen snel en professioneel op, ook 's avonds en in het weekend aan hetzelfde tarief."
    IntroTemplate = "Verstopte wc, lavabo, douche of hoofdriolering in {0}? Turbo Services lost het op met professionele machines, ook 's avonds en in het weekend aan hetzelfde tarief."
    CtaTitle = "Hulp nodig bij een verstopping?"
    CtaBodyTemplate = "Beschrijf kort het probleem en voeg indien mogelijk een foto toe. Wij koppelen snel terug met een concreet tijdsblok in {0}."
    CtaButton = "Vraag ontstopping aan"
    Sections = @(
      @{ Title = "Ontstoppingen"; Body = "Verstopte wc, lavabo, douche of hoofdriolering in {0}? Turbo Services lost het op met professionele machines, ook 's avonds en in het weekend aan hetzelfde tarief." }
      @{ Title = "Wat we doen"; Body = "- Verstopte wc, douche, bad en lavabo`n- Keukenafvoer en vetleidingen`n- Hoofdriolering binnen en buiten de woning`n- Water dat terugkomt via vloerputjes of kelderafvoeren`n- Rioolgeur, borrelende geluiden en terugslagproblemen" }
      @{ Title = "Werkwijze"; Body = "1. Korte bevraging van het probleem`n2. Inspectie van de betrokken afvoeren`n3. Mechanische ontstopping met professionele apparatuur`n4. Indien nodig: camera-inspectie voor diagnose`n5. Controle en advies om herhaling te vermijden" }
      @{ Title = "Tarieven"; Body = "Wij werken met vaste en transparante prijzen, ook 's avonds en in het weekend:`n`n- Interventie ontstopping: €160`n- Camera-inspectie: €90`n- Totaalpakket (ontstopping + camera): €250" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Hoe sneller je ingrijpt, hoe kleiner de kans op bijkomende schade zoals geurhinder, overstroming of lekkages. Een korte interventie voorkomt vaak duurdere herstellingen." }
    )
  },
  @{
    Key = "camera-inspectie"
    Name = "Camera-inspectie"
    Hero = "/assets/base/camera-inspectie.png"
    TitleTemplate = "Camera-inspectie in {0}"
    DescriptionTemplate = "Camera-inspectie van afvoer en riolering in {0} met professionele apparatuur. Ideaal om scheuren, verzakkingen of verstoppingen in detail te lokaliseren."
    IntroTemplate = "Nood aan een professionele camera-inspectie in {0}? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk."
    CtaTitle = "Camera-inspectie aanvragen?"
    CtaBodyTemplate = "Wij brengen uw riolering in {0} exact in beeld en geven een duidelijk advies voor de juiste oplossing."
    CtaButton = "Vraag inspectie aan"
    Sections = @(
      @{ Title = "Camera-inspectie"; Body = "Nood aan een professionele camera-inspectie in {0}? Wij brengen exact in beeld waar het probleem zit, zonder hak- of breekwerk." }
      @{ Title = "Wat we doen"; Body = "- Inspectie van hoofdriolering en binnenleidingen`n- Detectie van scheuren, verzakkingen en wortelgroei`n- Opmeting van leidingverloop`n- Digitale rapportage mogelijk`n- Snelle diagnose zonder hak- of breekwerk" }
      @{ Title = "Werkwijze"; Body = "1. Vooranalyse van het probleem`n2. Toegang creëren tot de betrokken leiding`n3. Camera-inspectie met hoge resolutie`n4. Analyse van beelden en vaststellen van oorzaak`n5. Advies voor oplossing of herstelling" }
      @{ Title = "Tarieven"; Body = "Camera-inspectie gebeurt als supplement bovenop de standaard interventiekost:`n`n- Standaard interventiekost: €160`n- Camera-inspectie supplement: €90`n- Bij combinatie geldt: €250" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Camera-inspectie is aangewezen bij terugkerende problemen, geurhinder, verzakkingen of onverklaarbare verstoppingen." }
    )
  },
  @{
    Key = "noodherstellingen"
    Name = "Noodherstellingen"
    Hero = "/assets/base/noodherstellingen.png"
    TitleTemplate = "Noodherstellingen in {0}"
    DescriptionTemplate = "Noodherstellingen aan afvoer en riolering in {0}, inclusief lekken, verzakkingen en acute schade. Snelle interventie bij dringende problemen."
    IntroTemplate = "Lek, verzakking of acute schade aan afvoer of riolering in {0}? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken."
    CtaTitle = "Dringende herstelling nodig?"
    CtaBodyTemplate = "Neem contact op voor een snelle inschatting en noodherstelling in {0}."
    CtaButton = "Vraag noodherstelling aan"
    Sections = @(
      @{ Title = "Noodherstellingen"; Body = "Lek, verzakking of acute schade aan afvoer of riolering in {0}? Turbo Services voert snelle en gerichte noodherstellingen uit om verdere schade en overlast te beperken." }
      @{ Title = "Wat we doen"; Body = "- Dringende herstellingen aan afvoer en riolering`n- Aanpak van lekken, breuken en verzakkingen`n- Vervanging van beschadigde delen waar nodig`n- Gerichte lokalisatie van het probleem`n- Snelle tussenkomst bij acute schade" }
      @{ Title = "Werkwijze"; Body = "1. Snelle inschatting van de urgentie`n2. Lokalisatie van het probleem`n3. Indien nodig eerst diagnose via camera-inspectie of andere controle`n4. Uitvoeren van een technisch verantwoorde noodherstelling`n5. Advies over verdere of definitieve aanpak" }
      @{ Title = "Tarieven"; Body = "Prijzen variëren volgens het type probleem en de nodige interventie:`n`n- Diagnose en interventie starten vanaf €160 exclusief btw`n- Camera-inspectie kan als supplement toegevoegd worden`n- Bijkomende herstellingen of structurele werken steeds na duidelijke bespreking" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Lekkages, breuken en verzakkingen kunnen snel grotere schade veroorzaken. Snelle noodherstelling helpt om gevolgschade, vochtproblemen en verdere uitval te beperken." }
    )
  },
  @{
    Key = "geurdetectie"
    Name = "Geurdetectie"
    Hero = "/assets/base/geurdetectie.png"
    TitleTemplate = "Geurdetectie in {0}"
    DescriptionTemplate = "Geurdetectie en onderzoek van rioolgeur in {0} om lekken, foutieve aansluitingen of verborgen defecten in afvoer en riolering vast te stellen."
    IntroTemplate = "Last van rioolgeur in {0}? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder onnodig breekwerk."
    CtaTitle = "Rioolgeur laten opsporen?"
    CtaBodyTemplate = "Wij sporen geurproblemen in {0} snel en gericht op en geven duidelijk advies voor de juiste oplossing."
    CtaButton = "Vraag geurdetectie aan"
    Sections = @(
      @{ Title = "Geurdetectie"; Body = "Last van rioolgeur in {0}? Turbo Services spoort gericht op waar de oorzaak zich bevindt, zonder onnodig breekwerk." }
      @{ Title = "Wat we doen"; Body = "- Detectie van geurproblemen`n- Opsporen van foutieve aansluitingen`n- Onderzoek van sifons, ontluchting en verbindingen`n- Snelle diagnose zonder blind breekwerk`n- Gericht advies voor herstelling" }
      @{ Title = "Werkwijze"; Body = "1. Vooranalyse op locatie`n2. Controle van sifons, aansluitingen en ontluchting`n3. Gericht onderzoek van afvoer en riolering`n4. Lokalisatie van de waarschijnlijke oorzaak`n5. Advies voor herstelling of vervolgstap" }
      @{ Title = "Tarieven"; Body = "Geurdetectie is vaak de snelste manier om geurproblemen te lokaliseren:`n`n- Basisinterventie: €160`n- Combinatie met camera-inspectie mogelijk`n- Herstellingen steeds na diagnose en bespreking" }
      @{ Title = "Waarom snel ingrijpen?"; Body = "Geurhinder wijst vaak op lekkage, defecte aansluiting of een probleem in het rioleringssysteem. Gericht onderzoek vermijdt onnodig breekwerk." }
    )
  },
  @{
    Key = "gerichte-rioolherstellingen"
    Name = "Gerichte rioolherstellingen"
    Hero = "/assets/base/gerichte-rioolherstellingen.png"
    TitleTemplate = "Gerichte rioolherstellingen in {0}"
    DescriptionTemplate = "Gerichte rioolherstellingen aan afvoer en riolering in {0}, inclusief breuken, verzakkingen en lokale schade. Diagnose vooraf en doelgerichte herstelling."
    IntroTemplate = "Lekkage, verzakking of lokale schade aan de riolering in {0}? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak."
    CtaTitle = "Gerichte rioolherstelling nodig?"
    CtaBodyTemplate = "Neem contact op voor een snelle diagnose en gerichte rioolherstelling in {0}."
    CtaButton = "Vraag rioolherstelling aan"
    Sections = @(
      @{ Title = "Gerichte rioolherstellingen"; Body = "Lekkage, verzakking of lokale schade aan de riolering in {0}? Turbo Services voert gerichte rioolherstellingen uit met diagnose vooraf en een doelgerichte aanpak." }
      @{ Title = "Wat we doen"; Body = "- Herstelling van lokale breuken of verzakkingen`n- Vervanging van beschadigde delen van afvoer of riolering`n- Gerichte openbraak waar technisch nodig`n- Lokalisatie van leidingen en schadezones`n- Herstellingen op basis van duidelijke diagnose" }
      @{ Title = "Werkwijze"; Body = "1. Lokalisatie van het probleem`n2. Indien nodig diagnose via camera-inspectie of andere controle`n3. Gericht openmaken van de probleemzone`n4. Herstelling of vervanging van het beschadigde deel`n5. Controle en advies voor verdere opvolging" }
      @{ Title = "Tarieven"; Body = "Prijzen variëren volgens de aard van de schade en de nodige interventie:`n`n- Diagnose en interventie starten vanaf €160 exclusief btw`n- Camera-inspectie kan als supplement toegevoegd worden`n- Grotere of bijkomende herstellingen steeds na duidelijke bespreking" }
      @{ Title = "Waarom gericht herstellen?"; Body = "Door eerst correct te lokaliseren, blijft de herstelling beperkt tot de relevante zone. Dat vermijdt onnodige werken, beperkt kosten en maakt een technisch gerichte oplossing mogelijk." }
    )
  }
)

$regionsPath = "content\regions.ts"
$regionsRaw = Get-Content $regionsPath -Raw

$regionMatches = [regex]::Matches(
  $regionsRaw,
  '"([^"]+)":\s*\[(.*?)\]',
  [System.Text.RegularExpressions.RegexOptions]::Singleline
)

foreach ($service in $services) {
  foreach ($match in $regionMatches) {
    $regionKey = $match.Groups[1].Value
    $arrayBody = $match.Groups[2].Value
    $cityMatches = [regex]::Matches($arrayBody, '"([^"]+)"')
    $municipalities = @($cityMatches | ForEach-Object { $_.Groups[1].Value })

    $regionLabel = Get-RegionLabel $regionKey
    $targetDir = Join-Path "app\diensten\$($service.Key)" $regionKey
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    $title = Escape-TS ([string]::Format($service.TitleTemplate, $regionLabel))
    $description = Escape-TS ([string]::Format($service.DescriptionTemplate, $regionLabel))
    $intro = Escape-TS ([string]::Format($service.IntroTemplate, $regionLabel))
    $ctaBody = Escape-TS ([string]::Format($service.CtaBodyTemplate, $regionLabel))
    $ctaTitle = Escape-TS $service.CtaTitle
    $ctaButton = Escape-TS $service.CtaButton
    $hero = Escape-TS $service.Hero
    $serviceKey = Escape-TS $service.Key
    $serviceName = Escape-TS $service.Name
    $regionLabelEscaped = Escape-TS $regionLabel

    $sectionsCode = (
      $service.Sections | ForEach-Object {
        $sectionTitle = Escape-TS $_.Title
        $sectionBody = Escape-TSMultiline ([string]::Format($_.Body, $regionLabel))
@"
    {
      title: "$sectionTitle",
      body:
        "$sectionBody",
    }
"@
      }
    ) -join ",`r`n"

    $content = @"
import type { Metadata } from "next";
import DienstPageLayout from "@/components/diensten/DienstPage";
import { REGION_CITIES } from "@/content/regions";
import { getServiceByKey } from "@/content/services";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "$title",
  description: "$description",
};

export default function Page() {
  const regionKey = "$regionKey" as const;
  const regionLabel = "$regionLabelEscaped";
  const municipalities = REGION_CITIES[regionKey] ?? [];
  const muniText = municipalities.slice(0, 12).join(", ");
  const service = getServiceByKey("$serviceKey");

  const intro =
    "$intro" +
    (muniText ? "\n\nWerkgebied: " + muniText + " en omgeving." : "");

  const sections = [
$sectionsCode
  ].map((s, idx) => {
    if (!muniText) return s;
    if (idx === 0) {
      return {
        ...s,
        body: s.body + "\n\nActief in " + regionLabel + ": " + muniText + " en omgeving.",
      };
    }
    return s;
  });

  const ctaBody =
    "$ctaBody" +
    (muniText ? "\n\nWerkgebied: " + muniText + " en omgeving." : "");

  return (
    <DienstPageLayout
      serviceKey="$serviceKey"
      serviceName="$serviceName"
      regionKey={regionKey}
      regionLabel={regionLabel}
      municipalities={municipalities}
      intro={intro}
      sections={sections}
      faqs={service?.faqs ?? []}
      ctaTitle="$ctaTitle"
      ctaBody={ctaBody}
      ctaButton="$ctaButton"
      heroImageOverride="$hero"
      municipalityLinks={municipalities.map((city) => ({
        slug: slugify(city),
        label: city,
      }))}
    />
  );
}
"@

    $targetFile = Join-Path $targetDir "page.tsx"
    Write-Utf8NoBom -Path $targetFile -Content $content
    Write-Host "REGIO OK: $($service.Key) / $regionKey"
  }
}