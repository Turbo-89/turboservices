import Link from 'next/link';
export default function CTA({ label='Aanvraag binnen 24u' }) {
  return <Link href="/boeken" className="inline-flex items-center gap-2 bg-turbo-red hover:opacity-90 text-white px-5 py-3 rounded-lg text-lg">{label} →</Link>;
}
