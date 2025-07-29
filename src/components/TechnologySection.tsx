"use client";
import React from "react";

const technologies = [
  {
    name: "React",
    url: "https://react.dev/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <ellipse cx="20" cy="20" rx="18" ry="7.5" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="20" cy="20" rx="7.5" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(60 20 20)" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(-60 20 20)" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="3.5" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "#61DAFB"
  },
  {
    name: "Redux",
    url: "https://redux.js.org/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M20 32c-6.627 0-12-5.373-12-12" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M20 8c6.627 0 12 5.373 12 12" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="3.5" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "#764ABC"
  },
  {
    name: "TanStack Query",
    url: "https://tanstack.com/query",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="14" y="14" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    color: "#FF4154"
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="currentColor" />
        <text x="20" y="28" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">JS</text>
      </svg>
    ),
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="currentColor" />
        <text x="20" y="28" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">TS</text>
      </svg>
    ),
    color: "#3178C6"
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25c2-5 6-7 10-7s8 2 10 7" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 15c2-5 6-7 10-7s8 2 10 7" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    color: "#38BDF8"
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="currentColor" />
        <text x="20" y="28" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">B</text>
      </svg>
    ),
    color: "#7952B3"
  },
  {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#e34c26" />
        <text x="20" y="28" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">HTML</text>
      </svg>
    ),
    color: "#e34c26"
  },
  {
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#264de4" />
        <text x="20" y="28" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">CSS</text>
      </svg>
    ),
    color: "#264de4"
  },
  {
    name: "Sass",
    url: "https://sass-lang.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#cc6699" />
        <text x="20" y="28" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">Sass</text>
      </svg>
    ),
    color: "#cc6699"
  },
  {
    name: "Ant Design",
    url: "https://ant.design/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#1677ff" />
        <text x="20" y="28" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">Antd</text>
      </svg>
    ),
    color: "#1677ff"
  },
  {
    name: "Mapbox",
    url: "https://www.mapbox.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#4264fb" />
        <text x="20" y="28" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Mapbox</text>
      </svg>
    ),
    color: "#4264fb"
  },
  {
    name: "Leaflet",
    url: "https://leafletjs.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#199900" />
        <text x="20" y="28" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Leaflet</text>
      </svg>
    ),
    color: "#199900"
  },
  {
    name: "i18next",
    url: "https://www.i18next.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#26a69a" />
        <text x="20" y="28" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">i18next</text>
      </svg>
    ),
    color: "#26a69a"
  },
  {
    name: "Potree",
    url: "https://potree.org/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#fbbf24" />
        <text x="20" y="28" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Potree</text>
      </svg>
    ),
    color: "#fbbf24"
  },
  {
    name: "Figma",
    url: "https://www.figma.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#a259ff" />
        <text x="20" y="28" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Figma</text>
      </svg>
    ),
    color: "#a259ff"
  },
  {
    name: "Python",
    url: "https://www.python.org/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#3776ab" />
        <text x="20" y="28" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Py</text>
      </svg>
    ),
    color: "#3776ab"
  },
  {
    name: "Django",
    url: "https://www.djangoproject.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#092e20" />
        <text x="20" y="28" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Dj</text>
      </svg>
    ),
    color: "#092e20"
  },
  {
    name: "jQuery",
    url: "https://jquery.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#0769ad" />
        <text x="20" y="28" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">jQ</text>
      </svg>
    ),
    color: "#0769ad"
  },
  {
    name: "OpenLayers",
    url: "https://openlayers.org/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#1f6f8b" />
        <text x="20" y="28" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">OL</text>
      </svg>
    ),
    color: "#1f6f8b"
  },
  {
    name: "React Native",
    url: "https://reactnative.dev/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <ellipse cx="20" cy="20" rx="18" ry="7.5" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="20" cy="20" rx="7.5" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(60 20 20)" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(-60 20 20)" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="3.5" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "#61DAFB"
  },
  {
    name: "React Hook Form",
    url: "https://react-hook-form.com/",
    svg: (
      <svg viewBox="0 0 40 40" width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" fill="#ec5990" />
        <text x="20" y="28" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">RHF</text>
      </svg>
    ),
    color: "#ec5990"
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="w-full py-10 flex flex-col items-center">
      <h2 className="text-2xl pt-4 mb-3 text-main-green">Technologies I Use</h2>
      <p className="mb-6 text-gray-400 text-center max-w-2xl">These are the technologies I use or have used over the years. You can find more details in my CV.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {technologies.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-4 py-2 rounded-lg transition-colors duration-200 bg-gray-200 text-gray-500 hover:bg-white hover:text-inherit shadow cursor-pointer min-w-[140px]"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="mr-2"
              style={{ color: 'gray', display: 'flex', alignItems: 'center' }}
            >
              <span className="transition-colors duration-200 group-hover:text-[inherit]" style={{ color: 'gray' }}>
                {React.cloneElement(tech.svg, {
                  style: {
                    color: 'gray',
                    transition: 'color 0.2s',
                  },
                  className: 'group-hover:!text-[inherit]',
                })}
              </span>
            </span>
            <span
              className="font-semibold text-base transition-colors duration-200"
              style={{ color: 'gray', whiteSpace: 'nowrap' }}
            >
              {tech.name}
            </span>
            <style jsx>{`
              a.group:hover span.mr-2 span {
                color: ${tech.color} !important;
              }
              a.group:hover span.font-semibold {
                color: ${tech.color} !important;
              }
            `}</style>
          </a>
        ))}
      </div>
    </section>
  );
} 