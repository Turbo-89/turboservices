// app/page.tsx
import SmartCTA from "@/components/SmartCTA";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import CallButton from "@/components/CallButton";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              RioolExpert voor ontstoppingen, camera-inspecties
              <span className="block mt-1">
                en <span className="text-[var(--turbo-red,#E34D35)]">noodherstellingen</span>.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Gespecialiseerd in riool- en afvoerproblemen, ook{" "}
              <strong>’s avonds en in het weekend</strong>, aan hetzelfde tarief.
              Interventie <strong>€160</strong>, camera-inspectie{" "}
              <strong>€90</strong>, totaalpakket <strong>€250</strong>.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Ontstopping wc en afvoer",
                "Camera-inspectie riolering",
                "Noodherstelling bij lekken",
                "Regio Antwerpen – Waasland – Rupelstreek",
                "Avond & weekend zonder toeslag",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full bg-white/80 px-3 py-1 text-sm text-slate-700 ring-1 ring-black/5"
                >
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90"
              >
                Vraag interventie aan →
              </Link>

              <CallButton
                source="home_hero"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Bel 24/7: 0485 03 18 77
              </CallButton>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              We plannen intern en bevestigen je tijdsvenster via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="default" />
          </div>
        </div>
      </section>

      {/* OVER RIOOLEXPERT / INTRO */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Gespecialiseerd in riool- en afvoerproblemen
          </h2>
          <p className="mb-6 text-lg text-slate-700 md:text-xl">
            Ik ben <strong>Wim Verloo</strong>, oprichter van{" "}
            <strong>Turbo</strong>. <strong>Services</strong> leveren was altijd
            de kern: technische precisie en betrouwbare interventies in
            riolerings- en afvoerwerken. Met <strong>Turbo Services</strong> leg
            ik de focus volledig op ontstoppingen, camera-inspecties en
            noodherstellingen.
          </p>
          <p className="mb-8 text-md text-slate-600">
            Geen callcenter, geen tussenpersonen. Rechtstreeks contact,
            duidelijke afspraken en transparante tarieven – ook als je liever{" "}
            ’s avonds of in het weekend geholpen wordt.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/boeken"
              className="bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white rounded-lg hover:opacity-90"
            >
              Vraag interventie aan →
            </Link>

            <CallButton
              source="home_intro"
              className="border border-slate-300 px-6 py-3 text-sm rounded-lg hover:bg-slate-100"
            >
              Bel 24/7: 0485 03 18 77
            </CallButton>
          </div>
        </div>
      </section>

      {/* USP-STRIP */}
      <section className="border-y bg-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 text-sm text-slate-700 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">🕒</span>
            <span>
              <strong>Avond & weekend</strong> aan hetzelfde tarief
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">💶</span>
            <span>
              <strong>Duidelijke prijzen:</strong> €160 interventie, €90 camera,
              €250 pakket
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">📹</span>
            <span>
              <strong>Camera-verslag</strong> mogelijk voor verzekering of
              aannemer
            </span>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
            <p className="text-slate-700">
              “Snelle diagnose met camera, verstopping direct opgelost en
              duidelijke uitleg gekregen. Geen verrassingen op de factuur.”
            </p>
            <p className="mt-2 text-sm text-slate-500">— Klant uit Antwerpen</p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90"
            >
              Vraag interventie aan →
            </Link>

            <CallButton
              source="home_testimonial"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
            >
              Bel 24/7: 0485 03 18 77
            </CallButton>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            We plannen intern en bevestigen je tijdsvenster via sms of WhatsApp.
          </p>
        </div>
      </section>

      <SmartCTA />
    </>
  );
}
