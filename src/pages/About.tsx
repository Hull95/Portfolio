"use client";
import {RocketLaunchIcon} from "@heroicons/react/24/outline";

export default function About() {

    const handlePreviewCV = () => {
        window.open("/StefanVranjesCV.pdf", "_blank");
    };
    return (
        <section id="about" className="py-10 section-about">
            <div className="flex gap-6 items-center">
                <h1 className={"text-blue-color-light"}>{`Hello, I'm`}<span> Stefan</span></h1>
            </div>
            <div className={"flex gap-2 items-center"}>
                <p className={"text-blue-color-light rocket-svg"}>A passionate Frontend Developer <RocketLaunchIcon
                    className="text-main-green"/> having an</p>
            </div>
            <p className={"text-blue-color-light"}>experience of building Web Applications with JavaScript / TypeScript
                / React.js and some other cool technologies.</p>
            <div className={"flex gap-2 items-center pt-4"}>
                <button type="button" className="rounded-lg border border-transparent bcg-main-blue text-main-green button-resume" onClick={handlePreviewCV}>
                    See my Resume
                </button>
            </div>
        </section>
    )
}