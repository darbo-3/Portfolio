import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import avatar from '../images/avatar.png'
const Home = () => {
    return (
        <motion.section 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, y: 0}}
        id='home' className='w-11/12 md:w-9/11 mx-auto min-h-screen flex md:flex-row flex-col justify-between items-center mt-20 border-b border-slate-800 p-6'>
            <section className='flex flex-col items-start gap-2 w-full flex-2'>
                <p className='text-green-300 py-1 px-2 rounded-full bg-green-400/20 text-[8px] border border-green-500/40 capitalize font-thick'>happy new year</p>
                <h1 className='text-4xl md:text-6xl font-bold text-slate-300'>Full stack <span className=' bg-gradient-to-r from-sky-500 via-purple-500 font-black to-sky-600 bg-clip-text text-transparent'>MERN</span> Developer</h1>
                <p className='text-gray-300/90 ml-1 text-[12px] leading-6 md:w-[800px] line-clamp-6 md:line-clamp-none tracking-wider font-normal '>Hey! I’m Darbaz, a web developer passionate about building beautiful and functional digital experiences. I work with the MERN stack & latest version of NextJs and TailwindCSS to create fast, responsive, and modern websites and web apps. I love turning ideas into reality through clean code and creative design</p>
                <div className='flex items-center gap-4'>
                    <ScrollLink to='services' smooth={true} duration={500} className='bg-gradient-to-br cursor-pointer hover:scale-110 transition duration-300 hover:brightness-105 mt-2 border border-white text-white hover:bg-white hover:text-black py-2.5 px-5 rounded-md font-medium text-xs active:bg-white active:text-slate-900'>See services</ScrollLink>
                    <ScrollLink to='contact' smooth={true} duration={500} className='bg-gradient-to-br cursor-pointer hover:scale-110 transition duration-300 hover:brightness-105 mt-2  from-sky-500 via-purple-500 to-sky-600 py-2.5 px-4 rounded-lg text-xs font-medium'>Get in touch</ScrollLink>
                </div>
            </section>
            <section className='flex-1'>
                <img width={600} className='border border-slate-900 rounded-full  hover:scale-105 transition duration-700' src={avatar} alt="logo"  />
            </section>
        </motion.section>
    )
}

export default Home