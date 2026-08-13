import type {Metadata} from 'next'
import '../styles/global.css'
import '../styles/index.css'
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stefanwebdev.com';
// Set once you have verified the site in Google Search Console.
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
// Set only if you actually have an X/Twitter account.
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE;
const siteName = 'Stefan Vranjes - Frontend Developer Portfolio';
const description = 'Portfolio of Stefan Vranjes, Senior Frontend Developer & Team Leader specializing in React, TypeScript, Next.js, and modern web development. Explore projects, experience, and technical expertise.';
const keywords = [
    'Stefan Vranjes',
    'Frontend Developer',
    'React Developer',
    'TypeScript Developer',
    'Next.js Developer',
    'Web Developer',
    'Portfolio',
    'JavaScript Developer',
    'React Native Developer',
    'Software Engineer',
    'Banja Luka',
    'Bosnia and Herzegovina',
    'Web Development',
    'UI/UX Developer'
].join(', ');

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteName,
        template: `%s | ${siteName}`
    },
    description: description,
    keywords: keywords,
    authors: [{ name: 'Stefan Vranjes' }],
    creator: 'Stefan Vranjes',
    publisher: 'Stefan Vranjes',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: siteName,
        title: siteName,
        description: description,
        // The share image comes from app/opengraph-image.tsx, which guarantees
        // the correct 1200x630 aspect ratio for LinkedIn / Facebook / X cards.
    },
    twitter: {
        card: 'summary_large_image',
        title: siteName,
        description: description,
        ...(twitterHandle && { creator: twitterHandle }),
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
            { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
        ],
        apple: '/apple-touch-icon.png',
    },
    alternates: {
        canonical: '/',
    },
    ...(googleVerification && { verification: { google: googleVerification } }),
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* canonical is emitted by metadata.alternates above */}
            <StructuredData />
        </head>
        <body>
            <Navbar/>
            <main className="mx-auto">{children}</main>
        </body>
        </html>
    )
}