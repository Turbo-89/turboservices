"use client";

import Image from "next/image";

type Variant =
  | "default"
  | "ontstopping"
  | "camera"
  | "herstelling"
  | "prijzen"
  | "overmij";

interface Props {
  variant?: Variant;
  service?: string;
  region?: string;
}

/**
 * Dit component ondersteunt:
 * 1) bestaande service-logo's (variant)
 * 2) nieuwe hero-afbeeldingen per service + regio
 * 3) automatische fallback wanneer hero niet bestaat
 */
export default function HeroLogo({ variant = "default", service, region }: Props) {
  // 1. ORIGINELE LOGO MAP (blijft bestaan)
  const logos: Record<Variant, string> = {
    default: "/assets/logo/logo-default.png",
    ontstopping: "/assets/logo/logo-ontstopping.png",
    camera: "/assets/logo/logo-camera.png",
    herstelling: "/assets/logo/logo-herstelling.png",
    prijzen: "/assets/logo/logo-prijzen.png",
    overmij: "/assets/logo/logo-overmij.png",
  };

  const alts: Record<Variant, string> = {
    default: "Turbo Services mascotte – RioolExpert",
    ontstopping: "Turbo Services mascotte – ontstoppingen",
    camera: "Turbo Services mascotte – camera-inspecties",
    herstelling: "Turbo Services mascotte – noodherstellingen",
    prijzen: "Turbo Services mascotte – prijzen en tarieven",
    overmij: "Turbo Services mascotte – Wim Verloo Turbo Services",
  };

  // 2. NIEUW: HERO-IMAGE PAD
  // alleen actief op regio-pagina’s
  const heroPath =
    service && region
      ? `/assets/hero/hero-${service}-${region}.png`
      : null;

  // 3. FALLBACK NAAR BESTAANDE VARIANT
  const fallback = logos[variant];

  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src={heroPath ?? fallback}
        alt={alts[variant]}
        width={420}
        height={420}
        className="h-auto max-h-[360px] w-auto object-contain md:max-h-[420px]"
        priority
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallback;
        }}
      />
    </div>
  );
}
