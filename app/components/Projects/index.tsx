import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";
import wordle from "@/public/wordle.png";
import globalhub from "@/public/globalhub.png";
import pd from "@/public/pd.png";
import ejaarent from "@/public/ejaarent.png";

export default function Projects() {
    return (
        <section id="projects" className="pt-16 md:pt-26 pb-32 !mt-0">
            <p className="block md:hidden text-gray-100 mb-2 tracking-wider font-bold">PROJECTS</p>
            <Link
                href="https://wordle-three-livid.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="flex flex-col sm:flex-row items-start gap-6 rounded-lg md:hover:bg-green-500/5  py-6 px-0 md:px-4 transition-all duration-300 ease-in-out group cursor-pointer hover:shadow-lg">
                    <div className="w-full sm:w-1/4">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={wordle}
                            alt=""
                            width="600"
                            height="600"
                        />
                    </div>
                    <div className="w-full sm:w-3/4">
                        <div className="rounded-lg">
                            <div className="flex items-center gap-2">
                                <p className="text-white group-hover:text-green transition-colors duration-300 ease-in-out">
                                    Wordle
                                </p>
                                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green transition-transform duration-300 ease-in-out">
                                    <CgArrowTopRight />
                                </div>
                            </div>
                            <p className="text-sm mb-5 mt-2">
                                Built a fully functional version of the viral word game with interactive UI, keyboard input handling, and win/loss detection.
                            </p>
                            <ul className="flex flex-wrap gap-x-2 gap-y-3">
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">React</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">TypeScript</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">TailwindCSS</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">API</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>

            <Link
                href="https://globalhub.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="flex flex-col sm:flex-row items-start gap-6 rounded-lg md:hover:bg-green-500/5  py-6 px-0 md:px-4 transition-all duration-300 ease-in-out group cursor-pointer hover:shadow-lg">
                    <div className="w-full sm:w-1/4">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={globalhub}
                            alt=""
                            width="600"
                            height="600"
                        />
                    </div>
                    <div className="w-full sm:w-3/4">
                        <div className="rounded-lg">
                            <div className="flex items-center gap-2">
                                <p className="text-white group-hover:text-green transition-colors duration-300 ease-in-out">
                                    GlobalHub
                                </p>
                                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green transition-transform duration-300 ease-in-out">
                                    <CgArrowTopRight />
                                </div>
                            </div>
                            <p className="text-sm mb-5 mt-2">
                                Built a dynamic marketplace platform with features like user dashboards, real-time business messaging, friend requests, and item trading. Designed to support seamless B2B interactions and empower users to connect, trade, and manage listings in one place.
                            </p>
                            <ul className="flex flex-wrap gap-x-2 gap-y-3">
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">NextJS</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Laravel</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Pusher</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">TailwindCSS</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">JWT Auth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>

            <Link
                href="https://pragmaticdigital.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="flex flex-col sm:flex-row items-start gap-6 rounded-lg md:hover:bg-green-500/5  py-6 px-0 md:px-4 transition-all duration-300 ease-in-out group cursor-pointer hover:shadow-lg">
                    <div className="w-full sm:w-1/4">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={pd}
                            alt=""
                            width="600"
                            height="600"
                        />
                    </div>
                    <div className="w-full sm:w-3/4">
                        <div className="rounded-lg">
                            <div className="flex items-center gap-2">
                                <p className="text-white group-hover:text-green transition-colors duration-300 ease-in-out">
                                    Pragmatic Digital
                                </p>
                                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green transition-transform duration-300 ease-in-out">
                                    <CgArrowTopRight />
                                </div>
                            </div>
                            <p className="text-sm mb-5 mt-2">
                                Developed a modern marketing website for Pragmatic Digital, a web development agency.
                                Built with React and Next.js, using Headless WordPress as a content management system, the site delivers a clean design, optimized performance, and a flexible content structure for seamless updates. Focused on showcasing the agency&apos;s services, projects, and team, the site provides a polished and professional web presence.
                            </p>
                            <ul className="flex flex-wrap gap-x-2 gap-y-3">
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">WordPress</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Sage</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">REST</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">TailwindCSS</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">SCSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>

            <Link
                href="https://ejaarent.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="flex flex-col sm:flex-row items-start gap-6 rounded-lg md:hover:bg-green-500/5  py-6 px-0 md:px-4 transition-all duration-300 ease-in-out group cursor-pointer hover:shadow-lg">
                    <div className="w-full sm:w-1/4">
                        <Image
                            className="w-full h-full object-cover rounded-lg"
                            src={ejaarent}
                            alt=""
                            width="600"
                            height="600"
                        />
                    </div>
                    <div className="w-full sm:w-3/4">
                        <div className="rounded-lg">
                            <div className="flex items-center gap-2">
                                <p className="text-white group-hover:text-green transition-colors duration-300 ease-in-out">
                                    Ejaarent
                                </p>
                                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green transition-transform duration-300 ease-in-out">
                                    <CgArrowTopRight />
                                </div>
                            </div>
                            <p className="text-sm mb-5 mt-2">
                                EjaaRent is a modern rental platform for students and professionals in the UK, focused on the Leeds market.
                                Users can browse properties, check availability, reserve online, and manage rental documents through an intuitive dashboard—streamlining the entire rental process for both local and international tenants.
                            </p>
                            <ul className="flex flex-wrap gap-x-2 gap-y-3">
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">React</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Redux</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">Laravel</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">SCSS</li>
                                <li className="bg-green-500/10 text-green px-4 py-1.5 text-xs rounded-full">TailwindCSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>




        </section>
    )
}