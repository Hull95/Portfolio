"use client";
import React, {useRef}  from "react";
import Image from "next/image";
import {technologies} from "@/app/constants/technologies";
import {useTypewriter} from "@/hooks/useTypewriter";
import { useInView } from "@/hooks/useInView";

const title = "Technologies I Use";

export default function TechnologySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { threshold: 0.3 });
    const displayed = useTypewriter(title, 60, { enabled: inView });

    return (
        <section
            ref={sectionRef}
            id="technology"
            className="w-full py-10 px-4 sm:px-8 md:px-[10%] flex flex-col items-center scroll-mt-60 sm:scroll-mt-0"
        >
            <h2 className="text-2xl pt-4 mb-3 text-main-green">
                {displayed}
                <span className="animate-pulse">|</span>
            </h2>
            <p className="mb-6 text-gray-400 text-center max-w-2xl">
                These are the technologies I use or have used over the years. You can find more details in my CV.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full max-w-6xl">
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
                                width={40}
                                height={40}
                                className="object-contain tech-image-size w-8 h-8 sm:w-10 sm:h-10"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
} 