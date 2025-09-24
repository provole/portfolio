'use client'

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ThemeToggle from "../ThemeToggle";

interface Section {
    id: string
    label: string
}

interface SidebarProps {
    sections: Section[]
    activeSection: string
    onSectionClick: (sectionId: string) => void
}

export default function Sidebar({ sections, activeSection, onSectionClick }: SidebarProps) {
    return (
        <aside className="dark:shadow-lg sticky top-0 md:h-screen py-8 md:py-24 flex flex-col justify-between">
            <div>
                <div className="mb-8">
                    <h1 className="text-heading font-bold text-4xl md:text-4xl">Volen Angelov</h1>
                    <p className="text-heading text-lg md:text-lg font-semibold mt-3">Web Developer</p>
                    <p className="mt-4 md:mt-5 w-full md:w-3/5 text-foreground-light">I build accessible, pixel-perfect digital experiences for the web.</p>
                </div>

                <nav className="space-y-4 hidden md:block">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => onSectionClick(section.id)}
                            className={`group flex items-center w-full text-left py-2 transition-colors uppercase tracking-wider text-sm ${activeSection === section.id
                                ? 'text-accent dark:text-accent font-semibold'
                                : 'text-foreground-light hover:text-heading'
                                }`}
                        >
                            <div
                                className={`mr-4 h-px bg-border transition-all duration-300 ease-in-out ${activeSection === section.id
                                    ? 'w-12 bg-accent'
                                    : 'w-6 group-hover:w-12'
                                    }`}
                            />
                            {section.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="flex gap-4 items-center">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/volenangelov/"><FaLinkedin size="22" className="text-foreground-light transition-all duration-200 ease-in-out hover:text-accent" /></Link>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/provole"><FaGithub size="22" className="text-foreground-light transition-all duration-200 ease-in-out hover:text-accent" /></Link>
                <ThemeToggle />
            </div>
        </aside>
    )
}