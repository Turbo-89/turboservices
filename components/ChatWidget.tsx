'use client';
import { useState } from 'react';

type Sender = 'user' | 'bot';
type Msg = { from: Sender; text: string };

export default function ChatWidget() {
  // 1) Expliciet typen + literals vastzetten zodat 'from' niet naar string verbreedt
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(
    [{ from: 'bot', text: 'Hoi! Is het dringend (binnen 24u)?' }] as const
  );
  const [input, setInput] = useState('');

  async function send() {
    if (!input.trim()) return;

    // 2) 'nextMsgs' expliciet als Msg[] en het nieuw item als Msg casten (of satisfies Msg)
    const nextMsgs: Msg[] = [...msgs, { from: 'user', text: input } as Msg];
    setMsgs(nextMsgs);
    setInput('');

    const res = await fetch('/api/triage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history: nextMsgs }),
    });
    const data = await res.json();

    setMsgs([
      ...nextMsgs,
      { from: 'bot', text: String(data?.reply ?? '') } as Msg,
    ]);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-turbo-red text-white px-4 py-2 rounded-lg shadow"
        >
          Chat met ons
        </button>
      )}
      {open && (
        <div className="w-80 h-96 bg-white border rounded-xl shadow flex flex-col">
          <div className="px-3 py-2 border-b flex items-center justify-between">
            <strong>Turbo Chat</strong>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="flex-1 overflow-auto p-3 space-y-2">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`text-sm ${
                  m.from === 'bot'
                    ? 'text-slate-700'
                    : 'text-slate-900 text-right'
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    m.from === 'bot' ? 'bg-slate-100' : 'bg-turbo-red text-white'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              className="border flex-1 px-2 py-1 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Typ je bericht…"
            />
            <button
              onClick={send}
              className="bg-turbo-red text-white px-3 py-1 rounded"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
