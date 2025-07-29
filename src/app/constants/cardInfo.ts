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
        description: 'loreimpus',
        tags: ['#react', "#mapbox", '#bootstrap',  '#redux']
    },
    {
        title: 'EMS LiDAR',
        images: defaultImages,
        description: 'loreimpus',
        tags: ['#potree', '#mapbox', '#react', '#typescript', '#tanstack-query']
    },
    {
        title: 'Smart Waste Management (IoT)',
        images: defaultImages,
        description: 'loreimpus',
        tags: ['#IoT', '#react', '#leaflet', '#i18next']
    },
    {
        title: 'RAK – Regulatorna Agencija za Komunikacije',
        images: defaultImages,
        description: 'loreimpus',
        tags: ['#mapbox', '#react', '#redux', '#antd']
    },
    {
        title: 'Fluxer (Dynamic Street Light Web Application with IoT)',
        images: defaultImages,
        description: 'loreimpus',
        tags: ['#react', '#reactnative', '#antd', "#react-hook-form"]
    },
    {
        title: 'SaaSer & GaaS',
        images: defaultImages,
        description: 'loreimpus',
        tags: ['#antd', '#react', '#typescript', '#figma']
    },
    {
        title: 'Via Planet (Web GIS, Multiple Projects)',
        images: defaultImages,
        description: 'loreimpus',
        tags: ['#open-layers', '#jquery', '#django', "#python"]
    }
]