"use client";
import About from "@/pages/About"
import Projects from "@/pages/Projects"
import Contact from "@/pages/Contact"
import Skills from "@/pages/Skills";
import ExperienceSection from "@/components/ExperienceSection";
import Education from "@/pages/Education";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
    return (
        <div className="w-full">
            <div className="w-full section-background">
                <About />
            </div>
            <TechnologySection />
            <Skills />
            <ExperienceSection />
            <Education/>
            <Projects />
            <Contact />
        </div>
    )
}