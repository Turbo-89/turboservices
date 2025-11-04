// app/api/cta-agent/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { pageContext } = await req.json();

  const systemPrompt = `
Je bent de marketing-assistent van Turbo Services / ReolExpert (Wim Verloo).
Je schrijft korte, zakelijke call-to-actions in helder Belgisch Nederlands.
Geen schreeuwerige marketingtaal, geen emojis.

Doel: de bezoeker overtuigen om
- te bellen voor dringende interventies, of
- het aanvraagformulier "Aanvraag binnen 24u" in te vullen.

Je output MOET een JSON-object zijn met exact deze velden:
{
  "title": "korte titel",
  "body": "1 tot 3 zinnen uitleg",
  "buttonLabel": "tekst op de knop"
}

Hou rekening met de pagina:
- op een diensten- of ontstoppingspagina: focus op snelle interventie.
- op de prijzenpagina: focus op transparante tarieven en vrijblijvende aanvraag.
- op de "over mij" pagina: focus op vertrouwen en rechtstreekse communicatie met Wim.
- op weetjes/blog: focus op advies + vrijblijvende check of interventie.
`;

  const userPrompt = `Genereer een CTA voor de pagina met pad: "${pageContext}".`;

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt.trim() },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.6,
        max_tokens: 300,
      }),
    });

    const data = await res.json();

    if (!data.choices || !data.choices[0]) {
      return NextResponse.json(
        { error: 'Geen CTA ontvangen van AI.' },
        { status: 502 },
      );
    }

    const raw = String(data.choices[0].message.content ?? '').trim();

    // Proberen JSON te parsen, anders fallback
    let parsed: { title: string; body: string; buttonLabel: string };
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {
        title: 'Vraag je interventie aan',
        body:
          'Beschrijf kort je probleem en we bekijken binnen 24 uur hoe we dit het snelst kunnen oplossen.',
        buttonLabel: 'Aanvraag binnen 24u',
      };
    }

    return NextResponse.json(parsed);
  } catch (err) {
    return NextResponse.json(
      { error: 'Interne fout bij CTA-aanvraag.' },
      { status: 500 },
    );
  }
}
