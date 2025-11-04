'use client';

import { useState } from 'react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: text },
    ];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: newMessages,
          pageContext:
            typeof window !== 'undefined' ? window.location.pathname : undefined,
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages([
          ...newMessages,
          { role: 'assistant', content: String(data.reply) },
        ]);
      } else if (data.error) {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content:
              'Er ging iets mis bij het ophalen van het antwoord. Probeer later opnieuw of neem telefonisch contact op.',
          },
        ]);
      }
    } catch (e) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            'Er trad een technische fout op. Probeer later opnieuw of neem telefonisch contact op.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Floating knop (altijd zichtbaar) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--turbo-red,#E34D35)] text-white shadow-lg md:h-14 md:w-14"
        aria-label={open ? 'Sluit chat' : 'Open chat'}
      >
        {/* simpele chat-icoon */}
        <span className="text-xl md:text-2xl">💬</span>
      </button>

      {/* Chatvenster – alleen als open */}
      {open && (
        <div className="fixed bottom-20 right-3 z-50 w-[92vw] max-w-xs md:max-w-sm md:w-80 max-h-[70vh] rounded-xl border bg-white shadow-xl flex flex-col text-sm">
          <div className="flex items-center justify-between border-b px-3 py-2">
            <span className="font-semibold">AI-assistent Turbo Services</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              Sluiten
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
            {messages.length === 0 && (
              <p className="text-slate-500">
                Stel hier je vraag over ontstoppingen, camera-inspectie of
                spoedherstellingen.
              </p>
            )}
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === 'user'
                    ? 'ml-auto max-w-[80%] rounded-lg bg-[var(--turbo-red,#E34D35)] px-3 py-2 text-white'
                    : 'mr-auto max-w-[80%] rounded-lg bg-slate-100 px-3 py-2 text-slate-800'
                }
              >
                {m.content}
              </div>
            ))}
          </div>

          <div className="border-t px-3 py-2">
            <textarea
              className="w-full resize-none rounded border px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--turbo-red,#E34D35)]"
              rows={2}
              placeholder="Typ je vraag en druk op Enter..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="mt-2 w-full rounded bg-[var(--turbo-red,#E34D35)] py-1.5 text-center text-sm font-medium text-white disabled:opacity-60"
            >
              {loading ? 'Even wachten…' : 'Verstuur'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
