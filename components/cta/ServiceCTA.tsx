import Link from "next/link";

type ServiceCTAProps = {
  title: string;
  body: string;
  city: string;
  primaryHref: string;
  phoneNumber: string;
  whatsAppNumber: string;
  imageSrc: string;
  imageAlt: string;
};

function normalizePhoneForWhatsApp(phoneNumber: string) {
  return phoneNumber.replace(/[^0-9]/g, "");
}

function formatPhoneForDisplay(phoneNumber: string) {
  if (phoneNumber === "+32485031877") {
    return "0485 03 18 77";
  }
  return phoneNumber;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getKeywordPartFromTitle(title: string, city: string) {
  const suffix = ` in ${city}`;
  if (title.endsWith(suffix)) {
    return title.slice(0, -suffix.length);
  }
  return title;
}

function renderHighlightedText(
  text: string,
  keywordPart: string,
  city: string
) {
  const pattern = new RegExp(
    `(${escapeRegExp(keywordPart)}|${escapeRegExp(city)})`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (part.toLowerCase() === keywordPart.toLowerCase()) {
      return (
        <span key={index} className="font-semibold text-[#111827]">
          {part}
        </span>
      );
    }

    if (part.toLowerCase() === city.toLowerCase()) {
      return (
        <span
          key={index}
          className="font-semibold text-[var(--turbo-red,#E34D35)]"
        >
          {part}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function ServiceCTA({
  title,
  body,
  city,
  primaryHref,
  phoneNumber,
  whatsAppNumber,
  imageSrc,
  imageAlt,
}: ServiceCTAProps) {
  const whatsAppDigits = normalizePhoneForWhatsApp(whatsAppNumber);
  const whatsAppHref = `https://wa.me/${whatsAppDigits}`;
  const displayPhone = formatPhoneForDisplay(phoneNumber);
  const keywordPart = getKeywordPartFromTitle(title, city);

  return (
    <section className="mb-12 overflow-visible">
      <div className="grid items-center gap-10 rounded-3xl bg-[#f5f7fa] px-6 py-8 md:grid-cols-[minmax(0,1.15fr)_380px] md:px-8 md:py-10">
        <div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            <span className="text-[#111827]">{keywordPart}</span>
            <span className="text-[#111827]"> in </span>
            <span className="text-[var(--turbo-red,#E34D35)]">{city}</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            {renderHighlightedText(body, keywordPart, city)}
          </p>

          <div className="mt-7 space-y-3 text-base leading-7 text-neutral-800">
            <p>
              <span className="font-semibold text-[#111827]">
                Avond, weekend en feestdagen:
              </span>{" "}
              hetzelfde tarief
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Na 22u:</span> +50%
              supplement
            </p>
            <p>
              <span className="font-semibold text-[#111827]">
                Rechtstreeks contact:
              </span>{" "}
              zonder callcenter
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Actief in:</span>{" "}
              heel Vlaanderen
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center rounded-full bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Bel 24/7: {displayPhone}
            </a>

            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400"
            >
              Vraag interventie aan →
            </Link>

            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Afspraak en tijdsvenster worden bevestigd via sms of WhatsApp.
          </p>
        </div>

        <div className="relative flex items-end justify-center overflow-visible">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto max-h-[520px] w-full max-w-[380px] translate-y-6 object-contain md:translate-y-10"
          />
        </div>
      </div>
    </section>
  );
}