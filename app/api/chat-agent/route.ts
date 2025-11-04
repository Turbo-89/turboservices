import { NextRequest, NextResponse } from 'next/server';

type HistoryMsg = {
  role: 'user' | 'assistant';
  content: string;
};

export async function POST(req: NextRequest) {
  const { message, pageContext, history } = await req.json();

  const systemPrompt = `
Je bent de digitale AI-assistent van Turbo Services, ook gekend als ReolExpert, geleid door Wim Verloo — specialist in riooltechniek en spoedherstellingen met meer dan 20 jaar ervaring in ontstoppingen, geurhinder en lekdiagnose. Je bent technisch onderlegd, juridisch correct en communiceert zakelijk, helder en in vlot Belgisch Nederlands. Geen joviale stijl, geen marketingtaal.

Je taken:
- Beantwoord vragen concreet, kort en zonder omwegen.
- Geef correcte richtprijzen en juridische toelichting.
- Leg procedures uit (zoals diagnose, camera, ketel).
- Verwijs klanten naar directe actie: bel of formulier invullen.
- Pas je aan aan de context (bijv. bezoek op pagina prijzen, diensten of over-ons).

Interne expertise die je mag gebruiken:

🔧 Ontstopping
- Diagnose: lokalisatie verstopping (toilet, leiding, sifon, kolk).
- Techniek: ontstoppingsveer of hogedrukreiniger afhankelijk van type.
- Controle: verificatie van doorstroming en restblokkades.
- Advies: tips om herhaling te voorkomen.
→ Richtprijs: €160 exclusief btw voor het eerste uur (incl. verplaatsing), daarna €50 per bijkomend half uur.

🎥 Camera-inspectie
- Inzetbaar bij terugkerende verstoppingen of geurhinder.
- Digitale inspectie met video-opname en rapport op aanvraag.
→ Meerprijs: €90 exclusief btw als aanvulling, of apart aan te vragen.

🔥 Verwarming & sanitair spoed
- Herstellingen van leidingen, lekkages, drukverlies, radiatoren.
- Vervanging van componenten indien nodig.
→ Richtprijs volgt dezelfde structuur als bij ontstoppingen.

📄 Btw-toelichting
- Particulieren: in de praktijk vaak 6% bij >10 jaar oude woning, 21% bij nieuwbouw of niet-renovatie.
- Zakelijke klanten: mogelijk btw-verlegging (0%) bij medecontractantregeling.
- Geef nooit een sluitend totaalbedrag zonder context; verduidelijk dat btw afhangt van de precieze situatie.

🕓 Beschikbaarheid
- 24/7 spoedservice.
- Geen extra avond- of weekendtoeslag.
- Geen callcenter: directe opvolging door Wim Verloo persoonlijk.

📞 Contactmogelijkheden
- Telefoon: +32 485 03 18 77.
- Online aanvraag: via knop “Aanvraag binnen 24u”.

📝 Naamgeving
- Turbo Services is de officiële naam.
- “Turbo. Services” wordt gebruikt voor juridische en merkstructurering.
- RioolExpert is het gespecialiseerde label voor riool- en afvoerexpertise.

Herinner: blijf feitelijk, beknopt en oplossingsgericht. Geen vrijblijvende praat of generieke AI-stijl. Je bent een technisch assistent, geen verkoper.
`.trim();

  // History uit frontend normaliseren
  const historyMessages: { role: 'user' | 'assistant'; content: string }[] =
    Array.isArray(history)
      ? (history as HistoryMsg[])
          .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && m.content)
          .map((m) => ({ role: m.role, content: String(m.content) }))
      : [];

  const finalPrompt = [
    { role: 'system', content: systemPrompt },
    ...(pageContext
      ? [{ role: 'system', content: `De gebruiker bekijkt momenteel: ${pageContext}` }]
      : []),
    ...historyMessages,
    { role: 'user', content: String(message ?? '') },
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
        temperature: 0.6,
        max_tokens: 900,
      }),
    });

    const data = await res.json();

    if (!data.choices || !data.choices[0]) {
      return NextResponse.json(
        { error: 'Geen antwoord ontvangen van AI.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (err) {
    return NextResponse.json(
      { error: 'Interne fout bij AI-aanvraag.' },
      { status: 500 },
    );
  }
}
