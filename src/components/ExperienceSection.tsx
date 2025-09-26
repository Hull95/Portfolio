"use client";
import React, { useEffect, useRef, useState } from "react";
import {experiencesInfo} from "@/app/constants/experienceInfo";
import {useTypewriter} from "@/hooks/useTypewriter";

const title = "Experience";

export default function ExperienceSection() {
    const displayed = useTypewriter(title, 60);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(experiencesInfo.length).fill(false));
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            if (!ref) return null;
            
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                    }
                },
                { threshold: 0.2 }
            );
            
            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    return (
        <section id="experience"
                 className="w-full py-16 px-4 md:px-8 flex flex-col items-center bg-white scroll-mt-10 sm:scroll-mt-0">
            <h2 className="text-2xl pt-4 mb-16 text-main-green font-bold">{displayed}</h2>
            
            <div className="relative w-full max-w-7xl">
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-main-blue"></div>
                

                {experiencesInfo.map((exp, idx) => (
                    <div
                        key={idx}
                        ref={el => itemRefs.current[idx] = el}
                        className={`relative flex mb-16 ${
                            idx % 2 === 0 ? 'flex-col md:flex-row md:items-center' : 'flex-col md:flex-row-reverse md:items-center'
                        }`}
                    >
                        {/* Timeline Dot for each card */}
                        <div className="absolute left-6 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bcg-main-green rounded-full z-10"></div>
                        
                        {/* Content Card */}
                        <div className={`w-full md:w-6/12 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                            <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 ${
                                visibleItems[idx] 
                                    ? 'opacity-100 translate-y-0' 
                                    : `opacity-0 ${idx % 2 === 0 ? 'translate-x-8' : '-translate-x-8'} translate-y-4`
                            }`}>
                                {/* Date Badge */}
                                <div className="inline-block bcg-main-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                    {exp.period}
                                </div>
                                
                                {/* Job Title */}
                                <h3 className="text-xl font-bold text-blue-color-light mb-2">{exp.jobTitle}</h3>
                                
                                {/* Company & Location */}
                                <div className="text-gray-600 font-semibold mb-3">
                                    {exp.company} <span className="text-gray-400 font-normal">| {exp.location}</span>
                                </div>
                                
                                {/* Description */}
                                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                                
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                                        >
                                            #{tech.toLowerCase()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 