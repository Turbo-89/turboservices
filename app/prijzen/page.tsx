export default function Prijzen() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Prijzen</h1>
      <p className="mb-8 text-slate-700">
        Transparant en duidelijk. Alle prijzen zijn exclusief btw. Afhankelijk van het type werk kan 6% of 21% btw van toepassing zijn conform de Belgische wetgeving. 
        Voor avond- en weekendinterventies gelden verhoogde tarieven.
      </p>

      <div className="space-y-8">
        {/* Spoeddiensten */}
        <div>
          <h2 className="text-xl font-semibold">Spoeddiensten</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Interventie sanitair of verwarming: <strong>€160</strong> (incl. eerste uur)</li>
            <li>Extra tijd: <strong>€50</strong> per bijkomend half uur</li>
          </ul>
        </div>

        {/* Verwarmingsketels */}
        <div>
          <h2 className="text-xl font-semibold">Ketelvervanging (spoed)</h2>
          <div className="mt-2 rounded-xl border bg-slate-50 p-4">
            <p className="text-slate-700">
              Voor de vervanging van een standaard combi-gasketel van ca. <strong>28&nbsp;kW</strong> hanteren we een <strong>richtprijs van €3.500 all-in</strong> (toestel + installatie + materialen).
            </p>
            <p className="mt-2 text-slate-700">
              Dit is een marktconforme <em>gewenningsprijs</em>, bedoeld om je snel duidelijkheid te geven zonder eindeloze offertes. Afhankelijk van merk, vermogen of bijkomende werken kan dit iets afwijken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
