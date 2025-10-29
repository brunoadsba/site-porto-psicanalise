export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Psicanálise e Saúde Mental",
    description: "Atendimento psicanalítico profissional focando em saúde mental, bem-estar e autoconhecimento",
    url: "https://exemplo.com",
    telephone: "+5511999999999",
    email: "contato@exemplo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Exemplo, 123",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01234-567",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: "Psicanálise e Psicoterapia",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
