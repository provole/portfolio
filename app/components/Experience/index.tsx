import { CgArrowTopRight } from "react-icons/cg";
import Link from "next/link";

export default function Experience() {
    return (
        <section id="experience" className="pt-8 md:pt-16 pb-16 !mt-0">
            <p className="block md:hidden text-gray-100 mb-2 tracking-wider font-bold">EXPERIENCE</p>
            <Link
                href="https://pragmaticdigital.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="flex flex-col sm:flex-row items-start gap-6 rounded-lg md:hover:bg-green-500/5 py-6 px-0 md:px-4 transition-all duration-300 ease-in-out group cursor-pointer hover:shadow-lg">
                    <div className="w-full sm:w-1/4">
                        <p className="text-xs pt-1 tracking-widest">2021 — PRESENT</p>
                    </div>
                    <div className="w-full sm:w-3/4">
                        <div className="rounded-lg">
                            <div className="flex items-center gap-2">
                                <p className="text-green-200 dark:text-white group-hover:text-green-200/90 dark:group-hover:text-green transition-colors duration-300 ease-in-out">
                                    Web Developer · Pragmatic Digital
                                </p>
                                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out">
                                    <CgArrowTopRight />
                                </div>
                            </div>
                            <p className="text-sm mb-5 mt-4">
                                Built and maintained several React websites for clients, focusing on clean code, performance, and user-friendly interfaces.
                            </p>
                            <ul className="flex flex-wrap gap-x-2 gap-y-3">
                                <li className="bg-green-200 dark:bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">React</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">NextJS</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">PHP</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Laravel</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">WordPress</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>

            <Link
                href="https://force24.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="flex flex-col sm:flex-row items-start gap-6 rounded-lg md:hover:bg-green-500/5  py-6 px-0 md:px-4 transition-all duration-300 ease-in-out group cursor-pointer hover:shadow-lg">
                    <div className="w-full sm:w-1/4">
                        <p className="text-xs pt-1 tracking-widest">2016 — 2021</p>
                    </div>
                    <div className="w-full sm:w-3/4">
                        <div className="rounded-lg">
                            <div className="flex items-center gap-2">
                                <p className="text-green-200 dark:text-white group-hover:text-green-200/90 dark:group-hover:text-green transition-colors duration-300 ease-in-out">
                                    Web Developer · Force24
                                </p>
                                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out">
                                    <CgArrowTopRight />
                                </div>
                            </div>
                            <p className="text-sm mb-5 mt-4">
                                Created high-converting landing pages, responsive email templates, and handled third-party integrations to support marketing campaigns and business automation.
                            </p>
                            <ul className="flex flex-wrap gap-x-2 gap-y-3">
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">JavaScript</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">PHP</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">jQuery</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">CMS</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Emails</li>
                                <li className="bg-green-200 dark:bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Integrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>


            <div className="mt-8 pl-0 md:pl-3">

                <div className="flex items-center gap-2 group">
                <Link
                    href="/Volen_Angelov_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-green-200 dark:text-white group-hover:text-green-200/90 dark:group-hover:text-green-500 transition-colors duration-300 ease-in-out tracking-wide"
                    >
                    View Full Résumé
                </Link>

                    <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out">
                        <CgArrowTopRight className="group-hover:text-green-200 dark:group-hover:text-green-500" />
                    </div>
                </div>

            </div>

        </section>
    )
}