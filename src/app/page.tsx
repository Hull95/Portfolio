import About from "@/pages/About"
import Projects from "@/pages/Projects"
import Contact from "@/pages/Contact"
import Skills from "@/pages/Skills";

export default function Home() {
    return (
        <div className="w-full">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}