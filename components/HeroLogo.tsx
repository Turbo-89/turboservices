// components/HeroLogo.tsx
import Image from "next/image";

type Variant =
  | "default"
  | "ontstopping"
  | "camera"
  | "herstelling"
  | "prijzen"
  | "overmij";

export default function HeroLogo({ variant = "default" }: { variant?: Variant }) {
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

  return (
    <Image
      src={logos[variant]}
      alt={alts[variant]}
      width={420}
      height={420}
      className="h-auto max-h-[360px] w-auto object-contain md:max-h-[420px]"
      priority
    />
  );
}
