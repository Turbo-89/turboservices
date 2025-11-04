import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message, pageContext } = await req.json();

  // Vaste systeeminstructie – wordt altijd meegegeven
  const systemPrompt = `
Je bent een professionele AI-assistent voor Turbo Services, een Belgisch bedrijf gespecialiseerd in:
- spoedinterventies voor sanitair en verwarming
- ontstoppingen
- camera-inspecties
- cv-ketelproblemen
- lekkages, geurhinder en drukverlies

Gebruik klare taal, geef eerlijke richtprijzen (vb. €160 incl. eerste uur), en verwijs indien nodig door naar telefonisch contact of het aanvraagformulier. Gebruik vlot maar zakelijk Belgisch Nederlands. 

Als iets niet duidelijk is, geef een nuttige vervolgvraag of stel voor om de aanvraag in te dienen.
`;

  const finalPrompt = [
    { role: 'system', content: systemPrompt.trim() },
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
        max_tokens: 800,
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
