import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Turbo Services – Rioolexpert & Spoed',
  description:
    'Ontstoppingen (€160), camera-inspectie (+€90), ketels & loodgieterij (spoed). Binnen 24u ter plaatse.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="text-slate-800">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
          <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"    // <-- zet je logo in /public/logo.png
                alt="Turbo Services"
                width={150}
                height={48}
                priority
              />
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/diensten" className="hover:text-slate-900">Diensten</Link>
              <Link href="/prijzen" className="hover:text-slate-900">Prijzen</Link>
              <Link href="/blog" className="hover:text-slate-900">Weetjes</Link>
              <Link href="/boeken" className="rounded-lg bg-[var(--turbo-red,#E34D35)] px-4 py-2 text-white hover:opacity-90">
                Aanvraag 24u
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t bg-white">
          <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 text-sm text-slate-600 md:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-800">Turbo Services</p>
              <p>Rioolexpert & spoed-interventies</p>
            </div>
            <div>
              <p><a className="underline" href="tel:+32470000000">+32 470 00 00 00</a></p>
              <p><a className="underline" href="mailto:info@turboservices.be">info@turboservices.be</a></p>
            </div>
            <div>
              <p>Ontstoppingen · Camera · Gerichte herstellingen</p>
              <p>Ketels & loodgieterij (spoed)</p>
            </div>
          </div>
          <div className="border-t py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Turbo Services – Wim Verloo & Allan De Buijzer
          </div>
        </footer>
      </body>
    </html>
  );
}
