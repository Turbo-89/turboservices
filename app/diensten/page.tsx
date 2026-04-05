import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import HeroLogo from "@/components/HeroLogo";
import { SERVICES } from "@/content/services";
import { getFeaturedCommercialTargetsByService } from "@/lib/commercial-targets";

export const metadata: Metadata = {
  title: "Diensten riolering & afvoer | Turbo Services",
  description:
    "Ontstoppingen, camera-inspectie, gerichte rioolherstellingen, geurdetectie, noodherstellingen en vervangen van deksels. Turbo Services is actief in heel Vlaanderen.",
};

export default function DienstenPage() {
  const activeServices = SERVICES.filter((service) => service.isPrimary !== false);

  return (
    <>
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Diensten van{" "}
              <span className="text-[var(--turbo-red,#E34D35)]">
                Turbo Services
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Gespecialiseerd in riool- en afvoerproblemen, met een duidelijke
              aanpak voor zowel dringende als terugkerende situaties in heel
              Vlaanderen.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Rechtstreeks contact</strong> met de uitvoerder
              </li>
              <li>
                <strong>Actief in:</strong> heel Vlaanderen
              </li>
            </ul>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Bel 24/7: 0485 03 18 77
              </a>

              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Vraag interventie aan →
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Afspraak en tijdsvenster worden bevestigd via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="default" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">
          Onze kernactiviteiten
        </h2>

        <p className="mt-3 max-w-3xl text-slate-700">
          Turbo Services werkt met een transparante basisstructuur:
          <strong> €160 standaard interventiekost</strong>, met
          <strong> camera-inspectie als supplement van €90</strong> wanneer een
          visuele diagnose nodig is. Voor specifieke herstellingen of
          vervangingen gebeurt de prijsbepaling steeds op basis van diagnose en
          situatie ter plaatse.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => {
            const featuredCommercialTargets = getFeaturedCommercialTargetsByService(
              service.key,
              3
            );

            return (
              <div
                key={service.key}
                className="rounded-2xl border p-5 transition hover:bg-slate-50"
              >
                <Link href={`/diensten/${service.key}`}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.name}
                  </h3>
                </Link>

                <p className="mt-2 text-slate-600">{service.intro}</p>

                <div className="mt-4">
                  <Link
                    href={`/diensten/${service.key}`}
                    className="inline-block text-sm text-slate-700 underline"
                  >
                    Meer over {service.name} →
                  </Link>
                </div>

                {featuredCommercialTargets.length > 0 && (
                  <div className="mt-5 border-t pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Veel gezochte ingangen
                    </p>
                    <ul className="mt-2 space-y-1">
                      {featuredCommercialTargets.map((target) => (
                        <li key={`${target.service}-${target.keyword}-${target.city}`}>
                          <Link
                            href={`/commercial/${target.service}/${target.keyword}/${target.citySlug}`}
                            className="text-sm text-slate-700 underline"
                          >
                            {target.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <CTA />
        </div>
      </main>
    </>
  );
}