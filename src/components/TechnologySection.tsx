"use client";
import React from "react";
import Image from "next/image";

const technologies = [
    {
        name: "React",
        url: "https://react.dev/",
        img: "/images/react.png",
        color: "#61DAFB",
    },
    {
        name: "Django",
        url: "https://www.djangoproject.com/",
        img: "/images/django.png",
        color: "#092E20",
    },
    {
        name: "Bootstrap 5",
        url: "https://getbootstrap.com/",
        img: "/images/bootstrap.png",
        color: "#7952B3",
    },
]

export default function TechnologySection() {
  return (
      <section
          id="technology"
          className="w-full py-10 px-4 sm:px-8 md:px-[10%] flex flex-col items-center"
      >
          <h2 className="text-2xl pt-4 mb-3 text-main-green">Technologies I Use</h2>
          <p className="mb-6 text-gray-400 text-center max-w-2xl">
              These are the technologies I use or have used over the years. You can find more details in my CV.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full max-w-6xl">
              {technologies.map((tech) => (
                  <a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center p-4 rounded-xl  hover:bg-gray-200 transition-all duration-200 shadow-sm"
                  >
                      <div
                          className="flex items-center justify-center rounded-full "
                      >
                          <Image
                              src={tech.img}
                              alt={tech.name}
                              width={40}
                              height={40}
                              className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                          />
                      </div>
                  </a>
              ))}
          </div>
      </section>
  );
} 