"use client";
import { CardsInfo } from "@/app/constants/cardInfo";
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

export default function Projects() {
    return (
        <section id="projects" className="py-10 text-center">
            <h2 className="text-2xl mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4 max-w-7xl mx-auto">
                {CardsInfo.map((item, index) => (
                    <ProjectCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ item }: ProjectCardProps) {
    return (
        <div className="w-full max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col">
            {item.images && item.images.length > 0 && (
                <Carousel arrows infinite={false} className="w-full">
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
            <div className="px-4 py-4 flex-1 flex flex-col">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base flex-1">{item.description}</p>
            </div>
            <div className="px-4 pt-2 pb-4 flex flex-wrap justify-center">
                {item.tags?.map((tag, tagIndex) => (
                    <span
                        key={tagIndex}
                        className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 border border-main-green"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}