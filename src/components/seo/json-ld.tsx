interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Escaping "<" prevents JSON-LD values from terminating the script element.
 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
