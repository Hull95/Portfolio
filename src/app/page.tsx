import About from "@/sections/About"
import Projects from "@/sections/Projects"
import ContactPage from "@/sections/ContactPage"
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
            <ContactPage />
        </div>
    )
}