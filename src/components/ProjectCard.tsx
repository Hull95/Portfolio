"use client";
import Image from "next/image";
import { Carousel } from "antd";

interface Item {
    images?: string[];
    title: string;
    description: string;
    tags?: string[];
}

type ProjectCardProps = {
    item: Item;
};

export default function ProjectCard({ item }: ProjectCardProps) {
    return (
        <div className="w-full max-w-sm mx-auto bg-gray-100 rounded-lg shadow p-6 flex flex-col hover:shadow-lg transition-shadow duration-200">
            {item.images && item.images.length > 0 && (
                <Carousel arrows infinite={false} className="w-full mb-4">
                    {item.images.map((image, index) => (
                        <div key={index} className="relative w-full h-48 sm:h-56 md:h-64">
                            <Image
                                src={image}
                                alt={`Project image ${index + 1}`}
                                fill
                                className="object-cover rounded"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                            />
                        </div>
                    ))}
                </Carousel>
            )}
            <div className="flex-1 flex flex-col">
                <div className="font-bold text-xl text-blue-color-light mb-1">{item.title}</div>
                <p className="text-gray-700 text-base flex-1 mb-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags?.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="inline-block bg-main-green text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
} 