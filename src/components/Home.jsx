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
                <h1 className='text-4xl md:text-6xl font-bold text-slate-300'>Full stack <span className=' text-sky-500 font-black'>MERN</span> Developer</h1>
                <p className='text-gray-300/90 ml-1 text-[12px] leading-6 md:w-[800px] line-clamp-6 md:line-clamp-none tracking-wider font-normal '>
                    I’m Darbaz — a full-stack MERN developer who lives in the terminal and thinks in code. I build fast, modern web apps with Next.js and Tailwind CSS, turning raw ideas into clean, scalable systems. Minimal UI. Efficient logic. No unnecessary lines. Just code that solve problems.
                </p>
                <div className='flex items-center gap-4'>
                    <ScrollLink to='services' smooth={true} duration={500} className='bg-gradient-to-br cursor-pointer hover:scale-110 transition duration-300 hover:brightness-105 mt-2 border border-white text-white hover:bg-white hover:text-black py-2.5 px-5 rounded-md font-medium text-xs active:bg-white active:text-slate-900'>See services</ScrollLink>
                    <ScrollLink to='contact' smooth={true} duration={500} className='bg-gradient-to-br cursor-pointer hover:scale-110 transition duration-300 hover:brightness-105 mt-2 bg-sky-500  py-2.5 px-4 rounded-lg text-xs font-medium'>Get in touch</ScrollLink>
                </div>
            </section>
            <section className='flex-1'>
                <img width={600} className='border border-slate-800 rounded-full  hover:scale-105 transition duration-700' src={avatar} alt="logo"  />
            </section>
        </motion.section>
    )
}

export default Home