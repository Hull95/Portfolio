import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stefanwebdev.com';

    // The portfolio is a single page. Fragment URLs (/#projects) are not
    // separate documents to a crawler, so listing them here adds nothing.
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}