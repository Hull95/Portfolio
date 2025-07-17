import {RocketLaunchIcon} from "@heroicons/react/24/outline";

export default function About() {
    return (
        <section id="about" className="py-10 section-about">
            <div className="flex gap-6 items-center">
                <h1 className={"text-blue-color-light"}>{`Hello, I'm`}<span> Stefan</span></h1>
            </div>
            <div className={"flex gap-2 items-center "}>
                <p className={"text-blue-color-light"}>A passionate Frontend Developer</p><RocketLaunchIcon
                className="h-6 w-6 text-main-green"/> <p className={"text-blue-color-light"}>having an</p>
            </div>
            <p className={"text-blue-color-light"}>experience of building Web Applications with JavaScript / TypeScript
                / React.js and some other cool technologies.</p>
            <div className={"flex gap-2 items-center pt-4"}>
                <button type="button" className="rounded-lg border border-transparent bcg-main-blue text-main-green button-resume">
                    Preview my Resume
                </button>
            </div>
        </section>
    )
}