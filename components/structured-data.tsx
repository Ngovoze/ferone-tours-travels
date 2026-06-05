export function StructuredData(){
  const jsonLd = { '@context': 'https://schema.org', '@type': 'TravelAgency', name: 'Ferone Tours & Travels', slogan: 'Explore Beyond Borders', areaServed: ['Kenya','Tanzania','Uganda','Rwanda','Zanzibar','Dubai','South Africa','Europe','USA'], url: process.env.NEXT_PUBLIC_SITE_URL || 'https://feronetours.com' };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
