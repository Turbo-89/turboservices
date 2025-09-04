import CTA from '@/components/CTA';
import RiveLogo from '@/components/RiveLogo';

export default function Home() {
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Turbo Services – snel ter plaatse, degelijk opgelost.</h1>
          <p className="mt-4 text-lg">Ontstopping <strong>€160</strong> · Camera-inspectie <strong>+€90</strong>. Spoedinterventies mogelijk. Transparant en betrouwbaar.</p>
          <div className="mt-6 flex items-center gap-4">
            <CTA />
            <RiveLogo variant="cta" className="w-16 h-16" />
          </div>
          <ul className="mt-6 grid gap-1 text-sm list-disc pl-5">
            <li>Focus op <strong>kleine/korte werken</strong> (ook spoed)</li>
            <li>We doen <strong>wat echt nodig is</strong>, geen onnodige totaalrenovaties</li>
            <li>Septische putten: vaak klaar op 1 dag</li>
            <li>Ketelvervanging: richtprijs <strong>€3.500 all-in</strong></li>
          </ul>
        </div>
        <div className="flex justify-center">
          <RiveLogo variant="hero" className="w-60 h-60" />
        </div>
      </div>
    </section>
  );
}
