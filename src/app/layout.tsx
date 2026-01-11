import type {Metadata} from 'next'
import '../styles/global.css'
import '../styles/index.css'
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stefanwebdev.com';
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
        images: [
            {
                url: `${siteUrl}/images/stefan_vranjes_profile.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Stefan Vranjes - Frontend Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteName,
        description: description,
        images: [`${siteUrl}/images/stefan_vranjes_profile.jpeg`],
        creator: '@stefanvranjes', // Update with your actual Twitter handle if you have one
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
        icon: '/favicon.ico',
        apple: '/favicon.ico',
    },
    alternates: {
        canonical: siteUrl,
    },
    verification: {
        // Add your Google Search Console verification code here when you get it
        // google: 'your-google-verification-code',
    },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="canonical" href={siteUrl} />
            <StructuredData />
        </head>
        <body>
            <Navbar/>
            <main className="mx-auto">{children}</main>
        </body>
        </html>
    )
}