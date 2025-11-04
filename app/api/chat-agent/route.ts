import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message, pageContext } = await req.json();

  const systemPrompt = `
Je bent een AI-assistent van Turbo Services, een gespecialiseerd Belgisch bedrijf dat spoedinterventies uitvoert voor:
- sanitair en verwarmingsproblemen
- rioolverstoppingen
- geurhinder en terugstroming
- camera-inspecties
- cv-ketels en drukverlies
- lekkages en waterproblemen

Je taken:
- Geef duidelijke en transparante informatie in vlot Belgisch Nederlands
- Vermeld richtprijzen waar mogelijk (bv. €160 eerste uur incl. btw en verplaatsing)
- Moedig klanten aan om te bellen of het aanvraagformulier in te vullen
- Antwoord beknopt, technisch correct en oplossingsgericht

Gebruik nooit fictieve informatie. Als je iets niet zeker weet, geef dat aan en verwijs door.

---

🎯 Interne kennis – ontstopping:
1. Diagnose ter plaatse (afvoer, toilet, hoofdleiding)
2. Ontstoppingsveer of hogedruk, afhankelijk van type blokkade
3. Nacontrole op doorstroming en restblokkades
4. Advies voor onderhoud en preventie

→ Richtprijs: €160 incl. btw voor eerste uur, incl. verplaatsing. Extra tijd = €50 per 30 min.

---

🎯 Interne kennis – camera-inspectie:
- Inzetbaar bij terugkerende blokkades of geurproblemen
- Inspectie met digitale rapportage en beeldopname
- Richtprijs: €90 extra bovenop interventie of apart inzetbaar

---

🎯 Interne kennis – ketel/interventie:
- Vervanging of herstel van combiketels (28 kW standaard): vanaf €3.500 all-in
- Spoedherstelling binnen 24u bij uitval
- We regelen keuring indien nodig

---

🎯 Interne kennis – drukverlies/ontluchten:
- Analyse op lekken, defecte radiatoren, drukverlies
- Ontluchten en bijvullen waar nodig
- Transparante uitleg en directe opvolging

---

📱 Contact:
- Telefoon: 0485 03 18 77
- Online aanvraagformulier: via knop “Aanvraag binnen 24u”
- Werkregio: Vlaanderen, met focus op spoed en betrouwbaarheid
`.trim();

  const finalPrompt = [
    { role: 'system', content: systemPrompt },
    ...(pageContext
      ? [{ role: 'system', content: `De gebruiker bevindt zich op: ${pageContext}` }]
      : []),
    { role: 'user', content: message },
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
        messages: finalPrompt,
        temperature: 0.7,
        max_tokens: 900,
      }),
    });

    const data = await res.json();

    if (!data.choices || !data.choices[0]) {
      return NextResponse.json({ error: 'Geen antwoord ontvangen van AI.' }, { status: 502 });
    }

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (err) {
    return NextResponse.json({ error: 'Interne fout bij AI-aanvraag.' }, { status: 500 });
  }
}
