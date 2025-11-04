import ClientChat from './ClientChat';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';

export const metadata = {
  title: 'Turbo Services – Rioolexpert & Spoed',
  description:
    'Ontstoppingen (€160), camera-inspectie (+€90), ketels & loodgieterij (spoed). Binnen 24u ter plaatse.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-955338302"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-955338302');
            `,
          }}
        />
      </head>
      <body className="text-slate-800">
        <SiteHeader />

        <main>{children}</main>
        <ClientChat />
        {/* Footer (bijgewerkt) */}
        <footer className="mt-16 border-t bg-white">
          <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 text-sm text-slate-600 md:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-800">Turbo Services BV</p>
              <p>Rioolexpert & spoed-interventies</p>
              <p className="mt-1">
                BTW <span className="whitespace-nowrap">BE 0803.431.994</span>
              </p>
            </div>

            <div>
              <p>
                Tel:{' '}
                <a className="underline" href="tel:+32485031877">
                  +32 485 03 18 77
                </a>
              </p>
              <p>
                E-mail:{' '}
                <a className="underline" href="mailto:info@turboservices.be">
                  info@turboservices.be
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  className="underline"
                  href="https://wa.me/32485031877"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0485 03 18 77
                </a>
              </p>
            </div>

            <div>
              <p>Ontstoppingen · Camera · Gerichte herstellingen</p>
              <p>Ketels & loodgieterij (spoed)</p>
            </div>
          </div>

          <div className="border-t py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Turbo Services – Spoedhersteldienst riolen en loodgieterij
          </div>
        </footer>
      </body>
    </html>
  );
}
