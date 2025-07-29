"use client";
import { CardsInfo } from "@/app/constants/cardInfo";
import Image from "next/image";
import { Carousel } from "antd";
import ProjectCard from "@/components/ProjectCard";

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