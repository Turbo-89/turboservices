export default function Prijzen() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Prijzen</h1>
      <p className="mb-8 text-slate-700">
        Transparant en duidelijk. Alle prijzen zijn exclusief btw. Afhankelijk van
        het type werk kan 6% of 21% btw van toepassing zijn conform de Belgische wetgeving.
      </p>

      <div className="space-y-8">
        {/* Basisdiensten */}
        <div>
          <h2 className="text-xl font-semibold">Basisdiensten</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Ontstopping: <strong>€160</strong> (incl. eerste uur)</li>
            <li>Extra tijd: <strong>€50</strong> per bijkomend half uur</li>
          </ul>
        </div>

        {/* Diagnose & opsporing */}
        <div>
          <h2 className="text-xl font-semibold">Diagnose &amp; opsporing</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Camera-inspectie: <strong>€90</strong></li>
            <li>Rookmachine / zender: <strong>€90</strong></li>
            <li>Officieel verslag (bv. voor verzekering): <strong>€50</strong></li>
          </ul>
        </div>

        {/* Speciale werken */}
        <div>
          <h2 className="text-xl font-semibold">Speciale werken</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Kleine rioolherstellingen: prijs op aanvraag</li>
            <li>Septische put vervangen: meestal 1–2 dagen werk, prijs op aanvraag</li>
          </ul>

          <div className="mt-4 rounded-xl border bg-slate-50 p-4">
            <h3 className="text-lg font-semibold">Ketelvervanging (spoed)</h3>
            <p className="mt-2 text-slate-700">
              Voor de vervanging van een standaard combi-gasketel van ca. <strong>28&nbsp;kW</strong> hanteren we een 
              <strong> richtprijs van €3.500 all-in</strong> (toestel + installatie + materialen).
              Dit is een marktconforme <em>gewenningsprijs</em>, bedoeld om je snel duidelijkheid te geven zonder eindeloze offertes.
            </p>
            <p className="mt-2 text-slate-700">
              Afhankelijk van het type ketel (lichter of zwaarder vermogen, merkvoorkeur of bijkomende werken)
              kan de uiteindelijke prijs lager of hoger liggen. Bij spoedinterventies geeft dit richtbedrag je alvast een realistisch idee,
              zodat je meteen weet waar je aan toe bent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
