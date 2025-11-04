// app/api/chat-agent/route.ts
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  const { message, pageContext } = await req.json();

  const path = typeof pageContext === 'string' ? pageContext : '';

  // Basisrol + juridische/prijscontext
  const baseSystemPrompt = `
Je bent de Nederlandstalige AI-assistent van Turbo Services (RioolExpert) in België.

DOEL
- Bezoekers helpen met heldere, praktische uitleg over:
  - ontstoppingen (wc, keuken, badkamer, hoofdriolering),
  - camera-inspecties,
  - noodherstellingen aan riolering en afvoer.
- Steeds in zakelijk, duidelijk Belgisch Nederlands.
- Antwoord compact maar volledig genoeg om direct toepasbaar te zijn.

BEDRIJF / PRIJSSTRUCTUUR
- Turbo Services = één persoon: Wim Verloo (ik-vorm gebruiken).
- Regio: Antwerpen, Waasland, Rupelstreek.
- Kernprijzen (RICHTPRIJZEN, EXCLUSIEF btw):
  - Interventie ontstopping / rioolprobleem: €160
  - Camera-inspectie (optioneel of bij twijfel): €90
  - Totaalpakket (interventie + camera): €250
- Deze tarieven gelden zowel overdag als ’s avonds en in het weekend:
  - géén aparte avond-/weekendtoeslagen.
- Btw-regels:
  - Zakelijke klanten (medecontractant): 0% btw, omwille van medecontractant-statuut.
  - Particulieren: 6% of 21% afhankelijk van de ouderdom/voorwaarden van de woning,
    niet van het type werk. Als het niet duidelijk is: benoem dat de exacte toepassing
    moet bekeken worden per dossier en verwijs naar facturatie.

JURIDISCHE/COMMUNICATIEVE RANDVOORWAARDEN
- Maak geen bindende juridische uitspraken, wel praktische richtlijnen.
- Bij aansprakelijkheid / syndicus / VME: 
  - leg uit dat eigendomsgrenzen en afspraken in het reglement bepalend zijn
  - stel voor dat de klant rapport (camera / verslag) gebruikt in zijn dossier.
- Wees eerlijk over grenzen van zelf-ontstoppen en over risico’s van chemische producten.

STIJL
- Geen marketingtaal, geen overdrijving, geen emotionele toon.
- Duidelijk, feitelijk, technisch bruikbaar.
- Bij bedragen: vermeld expliciet dat ze excl. btw zijn, tenzij de gebruiker iets anders aangeeft.
`.trim();

  // Contextspecifieke instructies op basis van pad
  const contextInstructions: string[] = [];

  if (path.startsWith('/boeken')) {
    contextInstructions.push(`
De gebruiker bevindt zich op of nabij de AFSPRAAK-/BOEKEN-pagina.

- Focus op:
  - welk probleem hij heeft,
  - hoe dringend het is,
  - welke info nuttig is om in het formulier te zetten (locatie, foto's, tijdsvenster).
- Hou antwoorden kort en actiegericht.
- Verwijs expliciet naar:
  - online aanvraagformulier (/boeken),
  - of bellen op 0485 03 18 77 bij echte spoed.
- Geen lange theoretische uitleg, enkel wat nodig is om de interventie te plannen.
`.trim());
  }

  if (path.startsWith('/prijzen')) {
    contextInstructions.push(`
De gebruiker bekijkt de PRIJZEN-pagina.

- Leg de prijsstructuur zeer helder uit:
  - €160 interventie, €90 camera, €250 pakket, exclusief btw.
  - Geen toeslag voor avond/weekend.
- Toon het verschil tussen een standaardinterventie en bijkomende werken (breuken, graafwerken, structurele herstelling).
- Als er naar "goedkoop" of "vergelijking" wordt gevraagd: focus op transparantie en voorspelbaarheid.
`.trim());
  }

  if (path.startsWith('/diensten/ontstoppingen')) {
    contextInstructions.push(`
De gebruiker bekijkt de DIENSTEN-pagina voor ONTSTOPPINGEN.

- Benadruk wat typisch onder een ontstoppingsinterventie valt (wc, keuken, badkamer, hoofdleiding).
- Leg kort de werkwijze uit (diagnose, mechanische ontstopping, evt. camera, nacontrole).
- Verwijs naar de pakketprijs als camera waarschijnlijk nuttig is.
`.trim());
  }

  if (path.startsWith('/diensten/camera-inspectie')) {
    contextInstructions.push(`
De gebruiker bekijkt de DIENSTEN-pagina voor CAMERA-INSPECTIE.

- Focus op:
  - wanneer camera-inspectie zinvol is (terugkerende verstoppingen, twijfel over breuk/doorhang, VME/verzekering).
  - dat beelden/verslag gebruikt kunnen worden voor aannemer, syndicus, verzekering.
`.trim());
  }

  if (path.startsWith('/diensten/noodherstellingen')) {
    contextInstructions.push(`
De gebruiker bekijkt de DIENSTEN-pagina voor NOODHERSTELLINGEN.

- Benadruk risico's van wachten bij lekken / terugstroming.
- Leg uit dat vaak eerst ontstopping + diagnose nodig is, daarna noodherstelling in de mate van het haalbare.
`.trim());
  }

  if (path.startsWith('/kennisbank')) {
    contextInstructions.push(`
De gebruiker zit in de KENNISBANK (WEETJES).

- Geef praktische, stapsgewijze tips.
- Leg duidelijk de grens uit tussen:
  - wat iemand veilig zelf kan proberen,
  - en wanneer een professionele interventie aangewezen is.
- Vermijd verkooppraat; korte verwijzing naar interventieprijzen is voldoende.
`.trim());
  }

  if (path.startsWith('/over-ons')) {
    contextInstructions.push(`
De gebruiker bekijkt de OVER-MIJ/OVER-ONS-pagina.

- Spreek vanuit Wim Verloo in de ik-vorm.
- Leg nadruk op:
  - jaren ervaring,
  - directe betrokkenheid,
  - focus op riool- en afvoerproblemen,
  - avond/weekend aan hetzelfde tarief.
`.trim());
  }

  const contextPrompt =
    contextInstructions.length > 0
      ? contextInstructions.join('\n\n')
      : '';

  const messages = [
    { role: 'system' as const, content: baseSystemPrompt },
    ...(contextPrompt
      ? [{ role: 'system' as const, content: contextPrompt }]
      : []),
    ...(path
      ? [
          {
            role: 'system' as const,
            content: `Technische pagina-context: "${path}". Gebruik dit alleen om je antwoord beter te richten, vermeld de exacte URL niet expliciet.`,
          },
        ]
      : []),
    {
      role: 'user' as const,
      content: message,
    },
  ];

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages,
        temperature: 0.2,
        max_tokens: 700,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('OpenAI error:', data);
      return NextResponse.json(
        { error: 'Fout bij AI-aanvraag.' },
        { status: 502 }
      );
    }

    const reply = data?.choices?.[0]?.message?.content;
    if (!reply) {
      return NextResponse.json(
        { error: 'Geen antwoord ontvangen van AI.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('AI route error:', err);
    return NextResponse.json(
      { error: 'Interne fout bij AI-aanvraag.' },
      { status: 500 }
    );
  }
}
