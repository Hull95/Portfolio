"use client";

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
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex-1 flex flex-col">
                <div className="font-bold text-xl text-blue-color-light mb-4 text-center">{item.title}</div>
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
            </div>
        </div>
    );
} 