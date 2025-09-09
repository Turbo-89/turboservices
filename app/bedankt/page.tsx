export default function Bedankt() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Bedankt!</h1>
      <p className="mt-2 text-slate-700">
        Als je betaling gelukt is, krijg je zo meteen een bevestiging per e-mail.
        Wij nemen daarna contact op voor de verdere opvolging.
      </p>
      <p className="mt-6">
        Vragen? Stuur ons via{' '}
        <a className="underline" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`} target="_blank">
          WhatsApp
        </a>.
      </p>
    </main>
  );
}
