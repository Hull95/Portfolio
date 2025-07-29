import {ProjectType} from "@/app/types/projectType";

const defaultImages = [
    "/images/BGEL_image1.png",
    '/images/BGEL_image2.png',
    '/images/BGEL_image3.png'
];

export const CardsInfo: ProjectType[] = [
    {
        title: 'Beogradske Elektrane and Srbija Šume (Web GIS Solution)',
        images: defaultImages,
        description: 'Developed a robust Web GIS platform for utility and forestry management, enabling real-time data visualization, advanced mapping, and operational efficiency for large-scale infrastructure.',
        tags: ['#react', "#mapbox", '#bootstrap',  '#redux', '#react-hook-form', "#axios"]
    },
    {
        title: 'EMS LiDAR',
        images: defaultImages,
        description: 'Implemented a LiDAR data processing and visualization system, empowering engineering teams with 3D geospatial analysis and interactive mapping for environmental and infrastructure projects.',
        tags: ['#potree', '#mapbox', "#husky", "#gitlab",'#typescript', '#tanstack',]
    },
    {
        title: 'Smart Waste Management (IoT)',
        images: defaultImages,
        description: 'Built an IoT-driven smart waste management solution, integrating real-time sensor data, interactive maps, and multilingual support to optimize collection routes and resource allocation.',
        tags: ['#IoT', '#react', '#leaflet', '#i18next', "#axios", "#gitlab"]
    },
    {
        title: 'RAK – Regulatorna Agencija za Komunikacije',
        images: defaultImages,
        description: 'Delivered a regulatory agency portal with advanced mapping, data management, and reporting tools, streamlining communication oversight and regulatory compliance.',
        tags: ['#mapbox', '#react', '#redux', '#antd']
    },
    {
        title: 'Fluxer (Dynamic Street Light Web Application with IoT)',
        images: defaultImages,
        description: 'Engineered a dynamic street lighting management app, leveraging IoT and mobile technologies to enable real-time control, monitoring, and analytics for smart city infrastructure.',
        tags: ['#react-native', "#react-hook-form", '#antd']
    },
    {
        title: 'SaaSer & GaaS',
        images: defaultImages,
        description: 'Contributed to SaaS and GIS-as-a-Service platforms, focusing on scalable architecture, modern UI/UX, and seamless integration with design and prototyping tools.',
        tags: ['#antd', '#react', '#typescript', '#figma', "#redux", "#docker"]
    },
    {
        title: 'Via Planet (Web GIS, Multiple Projects)',
        images: defaultImages,
        description: 'Participated in multiple Web GIS projects, utilizing open-source and enterprise technologies to deliver custom geospatial solutions for diverse client needs.',
        tags: ['#open-layers', '#jquery', '#django', "#python", "#docker"]
    }
]