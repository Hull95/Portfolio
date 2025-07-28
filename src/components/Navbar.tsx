'use client'

import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('About')

    const handleClick = (name: string, href: string) => {
        setActiveSection(name)
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 navbar">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <Bars3Icon className="block h-6 w-6 group-data-open:hidden" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6 group-data-open:block" aria-hidden="true" />
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleClick(item.name, item.href)}
                                        className={classNames(
                                            activeSection === item.name
                                                ? 'text-main-green bcg-main-blue'
                                                : 'text-gray-300  hover:text-white',
                                            'rounded-md px-3 py-2 font-medium text-bas capitalize button-hover-navbar'
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

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="button"
                            onClick={() => handleClick(item.name, item.href)}
                            className={classNames(
                                activeSection === item.name
                                    ? 'text-main-green'
                                    : 'text-gray-300  hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
