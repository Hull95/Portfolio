// interface Project {
//     name: string
//     description: string
//     image: string
// }

// const projects: Project[] = [
//     {
//         name: "GIS Platform",
//         description: "Modular GIS system for spatial data management.",
//         image: "/images/gis.png",
//     },
//     {
//         name: "Workflow App",
//         description: "Workflow automation tool for internal teams.",
//         image: "/images/workflow.png",
//     },
// ]

export default function Projects() {
    return (
        <section id="projects" className="py-10">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {/*{projects.map((project, idx) => (*/}
                {/*    <div key={idx} className="bg-white rounded-lg shadow p-4">*/}
                {/*        <img src={project.image} alt={project.name} className="rounded mb-4 h-40 w-full object-cover" />*/}
                {/*        <h3 className="text-xl font-semibold">{project.name}</h3>*/}
                {/*        <p>{project.description}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </section>
    )
}
