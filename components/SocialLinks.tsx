import Link from "next/link";

type Props = {
  className?: string;
  iconClassName?: string;
};

export default function SocialLinks({ className, iconClassName }: Props) {
  const base = iconClassName ?? "h-5 w-5";
  const aClass =
    "inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-2 hover:bg-slate-50";

  return (
    <div className={className ?? "flex items-center gap-2"}>
      <Link className={aClass} href="https://www.facebook.com/profile.php?id=61580852646726" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <span className={base}>FB</span>
      </Link>
      <Link className={aClass} href="https://www.instagram.com/turboservicesbv" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <span className={base}>IG</span>
      </Link>
      <Link className={aClass} href="https://www.youtube.com/@turboservices-l9w" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <span className={base}>YT</span>
      </Link>
      <Link className={aClass} href="https://www.tiktok.com/@turbo.services" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <span className={base}>TT</span>
      </Link>
      <Link className={aClass} href="https://x.com/TurboServicesBv" target="_blank" rel="noopener noreferrer" aria-label="X">
        <span className={base}>X</span>
      </Link>
      <Link className={aClass} href="https://www.linkedin.com/in/wim-verloo-98b3743b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <span className={base}>in</span>
      </Link>
    </div>
  );
}