import About from "@/pages/About"
import Projects from "@/pages/Projects"
import Contact from "@/pages/Contact"
import Skills from "@/pages/Skills";

export default function Home() {
    return (
        <div className="w-full">
            <div className="w-full section-background">
                <About />
            </div>
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}