import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
             className='w-full min-h-20 flex justify-center items-center text-white border-b border-slate-800 py-2 px-10'>
                <div className='flex  flex-col md:flex-row justify-center md:justify-around items-center w-full'>
                <div className='flex md:flex-row items-center flex-col gap-2 md:gap-10'>
                    <section>
                        <span className='font-medium text-sm'>© Darbaz Rzgar.</span> {new Date().getFullYear()} <span>All rights reserved</span>
                    </section>
                        <p>0773 380 3031</p>
                </div>
                <div className='flex md:flex-row items-center flex-col gap-2 md:gap-10'>
                    <section className='flex items-center gap-3'>
                        <a href="https://www.github.com/darbo-dev" target='_blank'>
                           <FaGithub size={25}/>
                        </a>
                        <a href="https://www.instagram.com/journeywithmern" target='_blank'>
                       <FaInstagram size={25}/>
                        </a>
                        <a href="https://www.facebook.com/darbazctrlc" target='_blank'>
                        <FaFacebook size={25}/>
                        </a>

                    </section>
                    <ScrollLink to='home' smooth={true} duration={500} className='text-sky-400'>Return to home</ScrollLink>
                </div>
                </div>
        </motion.section>
    )
}

export default Footer