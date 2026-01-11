export default function StructuredData() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stefanwebdev.com';
    
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Stefan Vranjes",
        "jobTitle": "Senior Frontend Developer & Team Leader",
        "url": siteUrl,
        "sameAs": [
            // Add your social media profiles here when available
            // "https://github.com/stefanvranjes",
            // "https://linkedin.com/in/stefanvranjes",
            // "https://twitter.com/stefanvranjes"
        ],
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

    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Stefan Vranjes Portfolio",
        "description": "Portfolio showcasing web development projects and technical expertise",
        "author": {
            "@type": "Person",
            "name": "Stefan Vranjes"
        },
        "url": siteUrl
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteUrl,
        "url": siteUrl,
        "author": {
            "@type": "Person",
            "name": "Stefan Vranjes"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}

