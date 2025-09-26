"use client";
import { CardsInfo } from "@/app/constants/cardInfo";
import ProjectCard from "@/components/ProjectCard";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import {useState} from "react";
import {useTypewriter} from "@/hooks/useTypewriter";

const title = "Projects";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? CardsInfo : CardsInfo.slice(0, 3);
    const displayed = useTypewriter(title, 60);

    return (
        <section id="projects" className="scroll-mt-10 w-full px-4 md:px-8 py-16 flex flex-col items-center sm:scroll-mt-0">
            <div className="w-full max-w-7xl text-center">
                <h2 className="text-2xl pt-4 mb-16 text-main-green font-bold">{displayed}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProjects.map((item, index) => (
                    <ProjectCard key={index} item={item} />
                ))}
                </div>
                <button
                    className="rounded-lg border border-transparent project-button-preview text-white-color-light px-4 py-2 font-semibold mt-8 hover:bg-transparent focus:outline-none"
                    onClick={() => setShowAll((prev) => !prev)}
                >
                    {showAll ? (
                        <ChevronDoubleUpIcon className="text-main-green w-[30px] h-[30px] shrink-0 pointer-events-none" />
                    ) : (
                        <ChevronDoubleDownIcon className="text-main-green w-[30px] h-[30px] shrink-0 pointer-events-none" />
                    )}
                </button>
            </div>
        </section>
    );
}