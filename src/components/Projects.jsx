import React from 'react'
import { motion } from 'framer-motion'
import puvoProject from '../images/puvo.png'
import asiaProject from '../images/institutemanagement.png'

const Projects = () => {
    const projects = [
        { name: "Ecommerce Web application", techStack: ['Mongodb', 'ExpressJs', 'React', 'NodeJs', 'Tailwindcss'], image: puvoProject },
        {name: "Institute Management System", techStack: ['Mongodb', 'ExpressJs', 'React', 'NodeJs', 'Tailwindcss', 'Shadcn/ui'], image: asiaProject},
    ]

    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="projects"
            className="w-11/12 mx-auto py-20 text-white border-b border-slate-800 flex justify-center items-center min-h-screen"
        >
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl m-5 bg-gradient-to-r from-sky-500 via-purple-500 to-sky-600 bg-clip-text text-transparent font-bold">
                    My Projects
                </h1>

                <div className={`w-full p-6 grid grid-cols-1 md:grid-cols-2 ${projects.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-3 "} gap-5 place-items-center`}>
                    {projects.map((project) => (
                        <motion.div
                            key={project.name}
                            whileHover={{ y: -5 }}
                            className="rounded-lg border border-slate-900 bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300 p-4 group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-md mb-4">
                                <img
                                    className="w-full h-48  rounded-md group-hover:scale-105 transition-transform duration-300"
                                    src={project.image}
                                    alt={`${project.name} screenshot`}
                                    loading="lazy"
                                />
                            </div>

                            <h2 className="font-semibold text-xl mb-2">
                                {project.name}
                            </h2>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <h1 className='text-zinc-300/90 text-sm'>Tech stack used:</h1>
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 border border-slate-900/80 font-medium rounded-full text-xs text-zinc-400/80"
                                    >
                                         {tech}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Projects