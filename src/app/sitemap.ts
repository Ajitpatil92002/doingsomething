import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: process.env.domain || "https://doingsomething.online",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}