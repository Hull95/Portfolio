"use client";
import React  from "react";
import Image from "next/image";
import {technologies} from "@/app/constants/technologies";
import {useTypewriter} from "@/hooks/useTypewriter";

const title = "Tech Stack";

export default function TechnologySection() {
    const displayed = useTypewriter(title, 60);
    return (
        <section
            id="technology"
            className="scroll-mt-10 w-full py-16 px-4 md:px-8 flex flex-col items-center sm:scroll-mt-0"
        >
            <div className="w-full max-w-7xl">
                <h2 className="text-2xl pt-4 mb-8 text-main-green text-center">
                    {displayed}
                </h2>
                <p className="mb-12 text-gray-400 text-center max-w-2xl mx-auto">
                    I&apos;ve been working with a range of technologies in the web development world.
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full">
                {technologies.map((tech) => (
                    <a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center p-4 rounded-xl  hover:shadow-lg transition-shadow duration-200"
                    >
                        <div
                            className="flex items-center justify-center rounded-full "
                        >
                            <Image
                                src={tech.img}
                                alt={tech.name}
                                width={80}
                                height={80}
                                className="object-contain tech-image-size w-8 h-8 sm:w-10 sm:h-10 filter grayscale group-hover:filter-none transition-all duration-200"
                            />
                        </div>
                    </a>
                ))}
                </div>
            </div>
        </section>
    );
} 