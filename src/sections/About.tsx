"use client";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import profileImage from "../../public/images/heroArea.png";
import { useEffect, useRef, useState } from "react";

export default function About() {
    // Bumping this remounts the text block, which replays the CSS entrance
    // animations. The markup itself is never hidden behind JavaScript, so the
    // heading and copy are present in the server-rendered HTML.
    const [animationKey, setAnimationKey] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const handlePreviewCV = () => {
        window.open("/StefanVranjesCV.pdf", "_blank");
    };

    useEffect(() => {
        const replay = () => setAnimationKey((prev) => prev + 1);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    replay();
                }
            },
            { threshold: 0.3 } // Trigger when 30% of section is visible
        );

        const section = sectionRef.current;
        if (section) {
            observer.observe(section);
        }

        // Listen for hash changes (navbar clicks)
        const handleHashChange = () => {
            if (window.location.hash === '#about') {
                replay();
            }
        };

        // Listen for scroll events to navbar links
        const handleNavClick = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.textContent === 'About' || target.getAttribute('href') === '#about') {
                // Delay to allow scroll animation
                setTimeout(replay, 300);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        document.addEventListener('click', handleNavClick);

        return () => {
            if (section) {
                observer.unobserve(section);
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
                <div key={animationKey} className="w-full md:w-[58%] flex flex-col justify-center pl-0 md:pl-[70px] pb-2">
                    <div className="flex gap-4 items-center">
                        <h1 className="text-lg md:text-2xl lg:text-3xl text-white-color-light title-animate">
                            Hello, I&apos;m<span className="text-main-green"> Stefan Vranjes</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-2 subtitle-animate">
                      <span className="text-white-color-light text-[30px]">
                        A passionate Senior Frontend Developer
                      </span>
                        <RocketLaunchIcon className="text-main-green w-[30px] h-[30px] shrink-0" />
                        <span className="text-white-color-light text-[30px]">
                        having an
                      </span>
                    </div>
                    <p className="text-white-color-light text-[30px] mt-2 description-animate">
                        experience of building Web Applications with JavaScript / TypeScript / React.js and some other cool technologies.
                    </p>
                    <div className="flex gap-2 items-center pt-4 button-animate">
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
                        alt="Stefan Vranjes - Senior Frontend Developer and Team Leader"
                        width={300}
                        height={300}
                        priority
                        className="w-full max-w-[90%] sm:max-w-[60%] md:max-w-[95%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[70%] h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}