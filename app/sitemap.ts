import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/proof-lab', '/privacy'].map((route) => ({ url: `https://fameboat.com${route}` }))
}
