'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [msg, setMsg] = useState('');
  const [reply, setReply] = useState('');

  async function handleSend() {
    const res = await fetch('/api/chat-agent', {
      method: 'POST',
      body: JSON.stringify({ message: msg }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <div className="fixed bottom-5 right-5 w-80 rounded-xl border bg-white p-4 shadow-xl z-50">
      <p className="mb-2 font-bold">AI Assistent</p>
      <textarea
        className="w-full border rounded p-2 text-sm"
        rows={3}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Stel je vraag..."
      />
      <button
        className="mt-2 w-full bg-[var(--turbo-red,#E34D35)] text-white py-1 rounded"
        onClick={handleSend}
      >
        Verstuur
      </button>
      {reply && <p className="mt-3 text-sm text-slate-700 whitespace-pre-wrap">{reply}</p>}
    </div>
  );
}
