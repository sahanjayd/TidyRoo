const BASE_URL = 'https://tidyroo.com.au'

export default function sitemap() {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/carpet-steam-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/dry-carpet-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/upholstery-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/rug-mattress-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/tile-grout-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/stain-odour-removal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/end-of-lease-carpet-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/legal`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog/how-often`, lastModified: new Date('2025-01-15'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/blog/pet-safe`, lastModified: new Date('2025-01-15'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/blog/stain-removal`, lastModified: new Date('2025-01-15'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/blog/steam-vs-dry`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
