"use client";

import { useEffect, useState } from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "About", href: "#about" },
    { name: "Technology", href: "#technology" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("About");
    const [isOpen, setIsOpen] = useState(false);

    // Disable scroll on mobile menu open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const handleClick = (name: string, href: string) => {
        setActiveSection(name);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <Disclosure
            as="nav"
            className="sticky top-0 z-50 navbar"
        >
            {({ open }) => {
                // Sync Disclosure open state
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useEffect(() => {
                    setIsOpen(open);
                }, [open]);

                return (
                    <>
                        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                {/* Mobile menu button */}
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <Bars3Icon
                                            className="block h-6 w-6 group-data-open:hidden"
                                            aria-hidden="true"
                                        />
                                        <XMarkIcon
                                            className="hidden h-6 w-6 group-data-open:block"
                                            aria-hidden="true"
                                        />
                                    </DisclosureButton>
                                </div>

                                {/* Desktop nav */}
                                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-center">
                                    <div className="hidden md:ml-6 md:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <button
                                                    key={item.name}
                                                    onClick={() => handleClick(item.name, item.href)}
                                                    className={classNames(
                                                        activeSection === item.name
                                                            ? "text-main-green bcg-main-blue"
                                                            : "text-gray-300 hover:text-white",
                                                        "rounded-md px-3 py-2 font-medium text-base capitalize button-hover-navbar"
                                                    )}
                                                >
                                                    {item.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile nav full screen */}
                        <DisclosurePanel className="fixed inset-0 z-40 bcg-main-blue md:hidden flex flex-col items-center justify-center space-y-6 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="button"
                                    onClick={() => handleClick(item.name, item.href)}
                                    className={classNames(
                                        activeSection === item.name
                                            ? "text-main-green"
                                            : "text-gray-300 hover:text-white",
                                        "text-2xl font-semibold"
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </DisclosurePanel>
                    </>
                );
            }}
        </Disclosure>
    );
}
