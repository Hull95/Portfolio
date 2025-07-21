"use client";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import profileImage from "../../public/images/heroArea.png";

export default function About() {
    const handlePreviewCV = () => {
        window.open("/StefanVranjesCV.pdf", "_blank");
    };
    return (
        <section
            id="about"
            className="min-h-[500px] py-6 section-about w-full mx-0 px-4 md:px-7 scroll-mt-20 md:scroll-mt-32 flex items-center">
            <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0 items-center justify-between">
                <div className="w-full md:w-[58%] flex flex-col justify-center pl-0 md:pl-[70px]">
                    <div className="flex gap-4 items-center">
                        <h1 className="text-lg md:text-2xl lg:text-3xl text-white-color-light">
                            {`Hello, I'm`}<span> Stefan</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-white-color-light text-[30px]">
                        A passionate Frontend Developer
                      </span>
                        <RocketLaunchIcon className="text-main-green w-[30px] h-[30px] shrink-0" />
                        <span className="text-white-color-light text-[30px]">
                        having an
                      </span>
                    </div>
                    <p className="text-white-color-light text-[30px] mt-2">
                        experience of building Web Applications with JavaScript / TypeScript / React.js and some other cool technologies.
                    </p>
                    <div className="flex gap-2 items-center pt-4">
                        <button
                            type="button"
                            className="rounded-lg border border-transparent bcg-main-green text-white-color-light button-resume px-4 py-2"
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
                        className="w-full max-w-[90%] sm:max-w-[60%] md:max-w-[95%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[70%] h-auto object-contain"                    />
                </div>
            </div>
        </section>
    );
}