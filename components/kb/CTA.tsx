import Link from "next/link";

export default function CTA({
  title = "Hulp nodig?",
  subtitle = "Neem direct contact op met Turbo Services.",
  primaryHref = "/boeken",
  primaryLabel = "Direct interventie aanvragen",
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <div className="mt-12 rounded-2xl bg-red-600 p-8 text-white shadow-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-4">
        {/* Bel-knop (klikbaar telefoonnummer) */}
        <a
          href="tel:+32485031877"
          className="rounded-xl bg-white px-5 py-3 font-semibold text-red-600 shadow hover:bg-slate-100"
        >
          Bel ons 24/7
        </a>

        {/* WhatsApp (optioneel, als je WhatsApp Business actief hebt) */}
        <a
          href="https://wa.me/32485031877"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow hover:bg-green-600"
        >
          WhatsApp
        </a>

        {/* Boekingsknop → /boeken */}
        <Link
          href={primaryHref}
          className="rounded-xl bg-black px-5 py-3 font-semibold text-white shadow hover:bg-slate-800"
        >
          {primaryLabel}
        </Link>
      </div>
    </div>
  );
}
