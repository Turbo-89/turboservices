// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import ClientChat from "./ClientChat";
import Script from "next/script";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";

export const metadata: Metadata = {
  title: "Turbo Services – Rioolexpert & Spoed",
  description:
    "Ontstoppingen (€160), camera-inspectie (+€90), ketels & loodgieterij (spoed). Binnen 24u ter plaatse.",
};

const SOCIALS = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61580852646726" },
  { name: "Instagram", url: "https://www.instagram.com/turboservicesbv" },
  { name: "YouTube", url: "https://youtube.com/@turboservices-l9w" },
  { name: "TikTok", url: "https://tiktok.com/@turbo.services" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/wim-verloo-98b3743b4/" },
  { name: "X", url: "https://x.com/TurboServicesBv" },
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head />
      <body className="text-slate-800">
        {/* Google tag (gtag.js) – Ads / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-955338302"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-955338302');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1345525083681097');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1345525083681097&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Sitewide structured data */}
        <LocalBusinessJsonLd
          sameAs={SOCIALS.map((s) => s.url)}
        />

        <SiteHeader />

        <main>{children}</main>

        <ClientChat />

        {/* Footer */}
        <footer className="mt-16 border-t bg-white">
          <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 text-sm text-slate-600 md:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-800">Turbo Services BV</p>
              <p>Rioolexpert &amp; spoed-interventies</p>
              <p className="mt-1">
                BTW <span className="whitespace-nowrap">BE 0809.316.233</span>
              </p>
            </div>

            <div>
              <p>
                Tel:{" "}
                <a className="underline" href="tel:+32485031877">
                  +32 485 03 18 77
                </a>
              </p>
              <p>
                E-mail:{" "}
                <a className="underline" href="mailto:info@turboservices.be">
                  info@turboservices.be
                </a>
              </p>
              <p>
                WhatsApp:{" "}
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
              <p>Ketels &amp; loodgieterij (spoed)</p>

              <div className="mt-3">
                <p className="font-semibold text-slate-800">Volg Turbo Services</p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  {SOCIALS.map((s) => (
                    <li key={s.name}>
                      <a
                        className="underline hover:text-slate-900"
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-3">
                <a
                  href="/kennisbank"
                  className="underline text-slate-700 hover:text-slate-900"
                >
                  Weetjes &amp; kennisbank
                </a>
              </p>
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