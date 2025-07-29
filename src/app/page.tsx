"use client";
import About from "@/pages/About"
import Projects from "@/pages/Projects"
import Contact from "@/pages/Contact"
import ExperienceSection from "@/components/ExperienceSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
    return (
        <div className="w-full">
            <div className="w-full section-background">
                <About />
            </div>
            <TechnologySection />
            <ExperienceSection />
            <Projects />
            <Contact />
        </div>
    )
}