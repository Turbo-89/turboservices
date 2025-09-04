import RiveLogo from '@/components/RiveLogo';
export default function Prijzen(){
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Prijzen & transparantie</h1>
        <RiveLogo variant="pricing" className="w-12 h-12" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Ontstopping</h2><p className="mt-2"><strong>€160</strong> basisinterventie.</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Camera-inspectie</h2><p className="mt-2">+<strong>€90</strong> (aanrader bij terugkerende problemen).</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Spoed</h2><p className="mt-2">Zelfde dag +€60 · Volgende ochtend +€30.</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Gerichte herstellingen</h2><p className="mt-2">Prijs na diagnose/offerte. We doen enkel wat echt nodig is.</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Ketelvervanging</h2><p className="mt-2">Standaard vervanging <strong>€3.500 all-in</strong> (montage & opstart). Spoedplaatsing mogelijk.</p></div>
      </div>
      <p className="mt-6 text-sm text-slate-500">We hanteren dezelfde tarieven als Turbo Ontstoppingen. In onze opstartfase bieden we ook basis-ontstoppingen aan; als drukte oploopt, beperken we die om topkwaliteit te blijven garanderen.</p>
    </section>
  );
}
