import About from "@/pages/About"
import Projects from "@/pages/Projects"
import Contact from "@/pages/Contact"
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Education from "@/pages/Education";

export default function Home() {
    return (
        <div className="w-full">
            <div className="w-full section-background">
                <About />
            </div>
            <Skills />
            <Experience />
            <Education/>
            <Projects />
            <Contact />
        </div>
    )
}