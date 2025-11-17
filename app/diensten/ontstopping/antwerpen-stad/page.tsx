
import React from "react";

export const metadata = {
  title: "Ontstoppingen in Antwerpen Stad | Turbo Services",
  description: "Professionele ontstoppingen in Antwerpen Stad door Turbo Services. Binnen het uur ter plaatse. Transparante prijzen. 24/7 beschikbaar."
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Ontstoppingen in Antwerpen Stad</h1>

      <div className="mb-6">
        <p>In de regio Antwerpen Stad staat Turbo Services klaar voor alle vormen van ontstoppingen.</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Onze troeven</h2>
        <ul className="list-disc ml-6">
          <li>Binnen 24 uur ter plaatse</li><li>Vaste prijzen, zonder verrassingen</li><li>WhatsApp planning mogelijk</li><li>Professioneel riool- en ontstoppingsmateriaal</li><li>24/7 beschikbaar, ook weekend</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Dienstverlening</h2>
        <p>Wij bieden hoogwaardige ontstoppingen met modern materiaal en ervaren techniekers. Onze aanpak is gericht op snelheid, nauwkeurigheid en een volledig transparante prijs.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">In Antwerpen Stad</h2>
        <p>In Antwerpen Stad zien we veel terugkerende rioolproblemen zoals verstoppingen en infiltraties. Onze technici kennen de lokale situatie en kunnen snel ingrijpen met camera-inspecties, herstellingen en spoedinterventies.</p>
      </section>

      <section>
        <a href="tel:+32 485 03 18 77" className="btn-primary">
          Bel ons nu
        </a>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Meer regio’s</h2>
        <ul>
          <li><a href='/diensten/ontstopping/antwerpen-noordrand'>Antwerpen Noordrand</a></li><li><a href='/diensten/ontstopping/pajottenland'>Pajottenland</a></li><li><a href='/diensten/ontstopping/denderstreek'>Denderstreek</a></li>
        </ul>
      </section>
    </div>
  );
}
