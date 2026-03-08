export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const cleanItems = items.filter(
    (it) =>
      it &&
      typeof it.question === "string" &&
      it.question.trim().length > 0 &&
      typeof it.answer === "string" &&
      it.answer.trim().length > 0
  );

  if (!cleanItems.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cleanItems.map((it) => ({
      "@type": "Question",
      name: it.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer.trim(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}