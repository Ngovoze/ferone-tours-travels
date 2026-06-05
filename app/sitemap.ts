import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://feronetours.com';
  return ['', '/about', '/tours-safaris', '/destinations', '/visa-services', '/flight-booking', '/gallery', '/blog', '/contact'].map((path)=>({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'weekly', priority: path === '' ? 1 : 0.8 }));
}
