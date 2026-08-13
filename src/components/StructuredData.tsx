import { socialProfiles } from "@/app/constants/socials";

export default function StructuredData() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stefanwebdev.com';

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Stefan Vranjes",
        "jobTitle": "Senior Frontend Developer & Team Leader",
        "url": siteUrl,
        ...(socialProfiles.length > 0 && { "sameAs": socialProfiles }),
        "image": `${siteUrl}/images/stefan_vranjes_profile.jpeg`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Banja Luka",
            "addressCountry": "BA"
        },
        "knowsAbout": [
            "React",
            "TypeScript",
            "JavaScript",
            "Next.js",
            "React Native",
            "Web Development",
            "Frontend Development",
            "UI/UX Development"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "PlanetSoft"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "name": "Stefan Vranjes - Frontend Developer Portfolio",
        "url": siteUrl,
        "inLanguage": "en",
        "author": { "@id": `${siteUrl}/#person` },
        "about": { "@id": `${siteUrl}/#person` }
    };

    const profilePageSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        "url": siteUrl,
        "name": "Stefan Vranjes - Frontend Developer Portfolio",
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "mainEntity": { "@id": `${siteUrl}/#person` }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
            />
        </>
    );
}