'use client';

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { usePathname } from 'next/navigation';

type ChatMessage = {
  id: number;
  from: 'user' | 'assistant';
  text: string;
};

export default function ClientChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const idRef = useRef(0);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Scroll automatisch naar beneden bij nieuwe berichten
  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: ++idRef.current,
      from: 'user',
      text,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          pageContext: pathname || '/',
        }),
      });

      let json: any = null;
      try {
        json = await res.json();
      } catch {
        throw new Error('Ongeldig antwoord van de server.');
      }

      if (!res.ok || !json?.reply) {
        throw new Error(json?.error || 'Geen antwoord ontvangen.');
      }

      const assistantMessage: ChatMessage = {
        id: ++idRef.current,
        from: 'assistant',
        text: String(json.reply),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      const assistantMessage: ChatMessage = {
        id: ++idRef.current,
        from: 'assistant',
        text:
          err?.message ||
          'Er ging iets mis bij het ophalen van een antwoord. Probeer opnieuw of bel rechtstreeks.',
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating knop rechts-onder */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--turbo-red,#E34D35)] px-4 py-2 text-sm font-medium text-white shadow-lg hover:opacity-90"
      >
        💬 Vraag het aan de RioolExpert
      </button>

      {/* Chatpanel */}
      {open && (
        <div className="fixed bottom-16 right-4 z-40 w-[min(100vw-2rem,360px)] rounded-2xl border border-slate-200 bg-white shadow-xl">
          <header className="flex items-center justify-between border-b px-4 py-2">
            <div>
              <p className="text-sm font-semibold text-slate-900">Turbo Services – Assistent</p>
              <p className="text-[11px] text-slate-500">
                Stel je vraag over ontstoppingen, camera-inspecties en noodherstellingen.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs text-slate-600"
            >
              ×
            </button>
          </header>

          <div className="flex max-h-[420px] flex-col px-4 py-3">
            <div className="flex-1 space-y-2 overflow-y-auto pr-1 text-sm">
              {messages.length === 0 && (
                <p className="text-xs text-slate-500">
                  Voorbeeld: “Mijn wc loopt traag leeg en borrelt, wat kan ik zelf proberen en wanneer moet jij langskomen?”
                </p>
              )}

              {messages.map(m => (
                <div
                  key={m.id}
                  className={m.from === 'user' ? 'text-right' : 'text-left'}
                >
                  <div
                    className={
                      'inline-block max-w-[80%] rounded-2xl px-3 py-2 text-left ' +
                      (m.from === 'user'
                        ? 'bg-[var(--turbo-red,#E34D35)] text-white'
                        : 'bg-slate-100 text-slate-900')
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <p className="text-xs text-slate-400">Assistent is aan het nadenken…</p>
              )}

              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2 border-t pt-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 rounded-lg border px-2 py-1 text-xs"
                placeholder="Stel hier je vraag…"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-lg bg-[var(--turbo-red,#E34D35)] px-3 py-1 text-xs font-medium text-white disabled:opacity-50"
              >
                Verstuur
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
