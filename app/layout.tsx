import './globals.css';
import Link from 'next/link';
import ClientChat from './ClientChat';

export const metadata = {
  title: 'Turbo Services – Rioolexpert & Spoed',
  description: 'Ontstoppingen, camera-inspectie, gerichte herstellingen en spoed ketels. Transparant en snel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <header className="border-b">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="font-semibold text-xl text-turbo-dark">Turbo Services</Link>
            <nav className="flex gap-6">
              <Link href="/diensten">Diensten</Link>
              <Link href="/prijzen">Prijzen</Link>
              <Link href="/boeken">Aanvraag 24u</Link>
              <Link href="/over-ons">Over ons</Link>
              <Link href="/blog">Weetjes</Link>
              <a href="tel:+32470000000" className="bg-turbo-red text-white px-3 py-1 rounded">Bel nu</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <ClientChat />
        <footer className="border-t mt-16">
          <div className="container py-10 text-sm text-slate-500">© {new Date().getFullYear()} Turbo Services · Transparant · Snel · Betrouwbaar</div>
        </footer>
      </body>
    </html>
  );
}
