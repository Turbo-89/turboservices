import RiveLogo from '@/components/RiveLogo';
export default function Diensten(){
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Onze diensten</h1>
        <RiveLogo variant="services" className="w-12 h-12" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Ontstoppingen</h2><p className="mt-2">Snelle interventies voor wc, gootsteen, douche, afvoer. Richtprijs €160. Camera-inspectie mogelijk (+€90).</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Camera-inspectie & rapport</h2><p className="mt-2">Exacte lokalisatie en diagnosticering met beelden en duidelijk advies.</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Gerichte rioolherstellingen</h2><p className="mt-2">We herstellen het essentiële zodat u jaren verder kunt. Geen volledige relining als dat niet hoeft.</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Septische putten</h2><p className="mt-2">Vervanging van ingezakte/damaged putten. Meestal klaar op 1 dag (soms 2).</p></div>
        <div className="border rounded-lg p-6"><h2 className="text-xl font-semibold">Verwarmingsketels & loodgieterij (spoed)</h2><p className="mt-2">Standaard ketelvervanging richtprijs €3.500 all-in; optie spoedplaatsing (48u).</p></div>
      </div>
    </section>
  );
}
