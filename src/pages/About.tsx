"use client";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import profileImage from "../../public/images/heroArea.png";
import { useEffect, useRef, useState } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    
    const handlePreviewCV = () => {
        window.open("/StefanVranjesCV.pdf", "_blank");
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Reset and trigger animation
                    setIsVisible(false);
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 50);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Listen for hash changes (navbar clicks)
        const handleHashChange = () => {
            if (window.location.hash === '#about') {
                // Reset and trigger animation when navigating via navbar
                setIsVisible(false);
                setTimeout(() => {
                    setIsVisible(true);
                }, 100);
            }
        };

        // Listen for scroll events to navbar links
        const handleNavClick = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.textContent === 'About' || target.getAttribute('href') === '#about') {
                // Reset animation when about link is clicked
                setIsVisible(false);
                setTimeout(() => {
                    setIsVisible(true);
                }, 300); // Delay to allow scroll animation
            }
        };

        // Add event listeners
        window.addEventListener('hashchange', handleHashChange);
        document.addEventListener('click', handleNavClick);

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            window.removeEventListener('hashchange', handleHashChange);
            document.removeEventListener('click', handleNavClick);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="min-h-[500px] py-6 section-about w-full mx-0 px-4 md:px-10 md:scroll-mt-32 flex items-center pb-0 scroll-mt-60 sm:scroll-mt-0">
            <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0 items-center justify-between">
                <div className="w-full md:w-[58%] flex flex-col justify-center pl-0 md:pl-[70px] pb-2">
                    <div className="flex gap-4 items-center">
                        <h1 className={`text-lg md:text-2xl lg:text-3xl text-white-color-light ${isVisible ? 'title-animate' : 'opacity-0'}`}>
                            Hello, I&apos;m<span className="text-main-green"> Stefan</span>
                        </h1>
                    </div>
                    <div className={`flex flex-wrap items-center gap-2 mt-2 ${isVisible ? 'subtitle-animate' : 'opacity-0'}`}>
                      <span className="text-white-color-light text-[30px]">
                        A passionate Frontend Developer
                      </span>
                        <RocketLaunchIcon className="text-main-green w-[30px] h-[30px] shrink-0" />
                        <span className="text-white-color-light text-[30px]">
                        having an
                      </span>
                    </div>
                    <p className={`text-white-color-light text-[30px] mt-2 ${isVisible ? 'description-animate' : 'opacity-0'}`}>
                        experience of building Web Applications with JavaScript / TypeScript / React.js and some other cool technologies.
                    </p>
                    <div className={`flex gap-2 items-center pt-4 ${isVisible ? 'button-animate' : 'opacity-0'}`}>
                        <button
                            type="button"
                            className="rounded-lg border border-transparent bcg-main-green text-white-color-light button-interactive px-4 py-2 cursor-pointer"
                            onClick={handlePreviewCV}
                        >
                            See my Resume
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-[40%] flex justify-center items-center mt-6 md:mt-0">
                    <Image
                        src={profileImage}
                        alt="Profile"
                        width={300}
                        height={300}
                        className="w-full max-w-[90%] sm:max-w-[60%] md:max-w-[95%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[70%] h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}