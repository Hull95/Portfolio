import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stefanwebdev.com';
    
    return {
        name: 'Stefan Vranjes - Frontend Developer Portfolio',
        short_name: 'Stefan Vranjes',
        description: 'Portfolio of Stefan Vranjes, Senior Frontend Developer & Team Leader',
        start_url: '/',
        display: 'standalone',
        background_color: '#1a1a2e',
        theme_color: '#00d4ff',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}

