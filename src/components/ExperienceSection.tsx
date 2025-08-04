"use client";
import React from "react";
import {experiencesInfo} from "@/app/constants/experienceInfo";
import {useTypewriter} from "@/hooks/useTypewriter";

const title = "Experience";

export default function ExperienceSection() {

    const displayed = useTypewriter(title, 60);
    return (
        <section id="experience"
                 className="w-full py-10 px-4 md:px-8 flex flex-col items-center bg-white scroll-mt-60 sm:scroll-mt-0">
            <h2 className="text-2xl pt-4 mb-8 text-main-green">{displayed}</h2>
            <div className="w-full max-w-4xl flex flex-col gap-8">
                {experiencesInfo.map((exp, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row md:items-center bg-gray-100 rounded-lg shadow p-6 gap-4 md:gap-8 hover:shadow-lg transition-shadow duration-200"
                    >
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-blue-color-light mb-1">{exp.jobTitle}</h3>
                            <div className="text-gray-700 font-semibold mb-1">{exp.company} <span
                                className="text-gray-400 font-normal">| {exp.location}</span></div>
                            <div className="text-gray-500 text-sm mb-2">{exp.period}</div>
                            <p className="text-gray-700 mb-2">{exp.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-block bg-main-green text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 