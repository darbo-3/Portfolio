import React from 'react'
import { motion } from 'framer-motion'
import { FaCss3, FaHtml5, FaJs, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiGit, SiGithub, SiMongodb, SiPostman, SiReact, SiTailwindcss, SiTsnode, SiVercel, SiVscodium } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri"
import { RiVercelFill } from 'react-icons/ri';
const Experience = () => {
    const icons = [
        { name: 'HTML', icon: <FaHtml5 className='text-orange-400' size={'33'}  />, link: 'https://html.spec.whatwg.org/' },
        { name: 'CSS', icon: <FaCss3 className='text-blue-400' size={'33'}  />, link: 'https://www.w3schools.com/css/' },
        { name: 'JavaScript', icon: <FaJs className='text-yellow-400' size={'33'}  />, link: 'https://www.javascript.com/' },
        { name: 'TailwindCSS', icon: <SiTailwindcss className='text-sky-400' size={'33'}  />, link: 'https://tailwindcss.com/' },
        { name: 'React', icon: <SiReact className='text-blue-600' size={'33'}  />, link: 'https://react.dev/' },
        { name: 'ExpressJs', icon: <SiExpress className='text-gray-400' size={'33'}  />, link: 'https://expressjs.com/' },
        { name: 'MongoDB', icon: <SiMongodb className='text-green-500' size={'33'}  />, link: 'https://www.mongodb.com/' },
        { name: 'NodeJs', icon: <FaNodeJs className='text-green-600' size={'33'}  />, link: 'https://nodejs.org/en'},
        { name: 'TypeScript', icon: <SiTypescript className='text-blue-500' size={'33'}  />,link: 'https://www.typescriptlang.org/' },
        { name: 'NextJs', icon: <RiNextjsFill className='text-white' size={'33'}  />, link: 'https://nextjs.org/' },
        { name: 'VS Code', icon: <VscVscode className='text-blue-400' size={'33'}  />, link: 'https://code.visualstudio.com/' },
        { name: 'Postman', icon: <SiPostman className='text-orange-500' size={'33'}  />, link: 'https://www.postman.com/' },
        { name: 'Git', icon: <SiGit className='text-orange-400' size={'33'}  />, link: 'https://git-scm.com/' },
        { name: 'Github', icon: <SiGithub className='text-white' size={'33'}  />, link: 'https://github.com/'},
        { name: 'Vercel', icon: <RiVercelFill className='text-white' size={'33'}  />, link: 'https://github.com/'},
    ]
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            id='experience' className='w-11/12 mx-auto min-h-screen flex justify-center items-center text-white border-b border-slate-800'>
            <div className='flex justify-center items-center flex-col gap-3'>
                <h1 className='text-4xl m-5 bg-gradient-to-r from-sky-500 via-purple-500 font-bold to-sky-600 bg-clip-text text-transparent'>My Experience</h1> 
                <div className='grid grid-cols-3 md:grid-cols-6 gap-10 py-3 px-5 rounded-md shadow border border-slate-900'>
                    {icons.map((icon) => (
                        <div className='flex flex-col items-center gap-5 p-2'>
                            <a href={icon.link} className='text-sm flex flex-col items-center gap-5' target='_blank'>
                            <p>
                                {icon.icon}
                            </p>
                                {icon.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Experience