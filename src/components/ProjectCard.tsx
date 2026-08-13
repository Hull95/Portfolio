"use client";
import Image from "next/image";
import { ProjectType } from "@/app/types/projectType";

type ProjectCardProps = {
    item: ProjectType;
};

export default function ProjectCard({ item }: ProjectCardProps) {
    const preview = item.images?.[0];

    return (
        <article className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex-1 flex flex-col">
                {preview && (
                    <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={preview}
                            alt={`Screenshot of ${item.title}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                )}
                <h3 className="font-bold text-xl text-blue-color-light mb-4 text-center">{item.title}</h3>
                <p className="text-gray-700 text-base flex-1 mb-4 text-center leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto justify-center">
                    {item.tags?.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            #{tag.toLowerCase()}
                        </span>
                    ))}
                </div>
                {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-sm font-semibold text-blue-color-light hover:underline focus:outline-none text-center"
                    >
                        {item.link.replace(/^https?:\/\//, "")}
                    </a>
                )}
            </div>
        </article>
    );
} 