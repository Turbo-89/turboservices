import dynamic from 'next/dynamic';
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test AI-Chat</h1>
      <ChatWidget />
    </div>
  );
}
