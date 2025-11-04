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
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = {
      id: ++idRef.current,
      from: 'user',
      text,
    };
    setMessages((prev) => [...prev, userMessage]);
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

      const json = await res.json();

      if (!res.ok || !json.reply) {
        throw new Error(json?.error || 'Geen antwoord ontvangen.');
      }

      const assistantMessage: ChatMessage = {
        id: ++idRef.current,
        from: 'assistant',
        text: json.reply as string,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      const assistantMessage: ChatMessage = {
        id: ++idRef.current,
        from: 'assistant',
        text:
          err?.message ||
          'Er ging iets mis bij het ophalen van een antwoord. Probeer het opnieuw of bel rechtstreeks.',
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating knop rechts-onder */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--turbo-red,#E34D35)] px-4 py-2 text-sm font-medium text-white shadow-lg hover:opacity-90"
      >
        💬 Vraag het aan de RioolExpert
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-16 right-4 z-40 w-[min(100vw-2rem,360px)] rounded-2xl border bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b px-3 py-2 text-sm font-semibold text-slate-800">
            <span>Turbo Services – Assistent</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full px-2 text-slate-500 hover:bg-slate-100"
            >
              ×
            </button>
          </div>

          <div
            ref={scrollRef}
            className="max-h-80 overflow-y-auto px-3 py-2 text-sm"
          >
            {messages.length === 0 && (
              <div className="mb-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
                Je kunt hier vragen stellen over ontstoppingen, camera-inspecties, prijzen
                of een concrete situatie. De assistent weet op welke pagina je zit
                ({pathname || '/'}).
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`mb-2 flex ${
                  m.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-line rounded-xl px-3 py-2 text-xs ${
                    m.from === 'user'
                      ? 'bg-[var(--turbo-red,#E34D35)] text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="mb-2 flex justify-start">
                <div className="max-w-[80%] rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600">
                  Even aan het nadenken…
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t px-3 py-2">
            <textarea
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full resize-none rounded-lg border px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[var(--turbo-red,#E34D35)]"
              placeholder="Stel hier je vraag…"
            />
            <div className="mt-1 flex justify-end">
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-lg bg-[var(--turbo-red,#E34D35)] px-3 py-1 text-xs font-medium text-white disabled:opacity-50"
              >
                Verstuur
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
