import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            id='about' className='w-full h-screen flex justify-center items-center text-white border-b border-slate-800'>
            About
        </motion.section>
    )
}

export default About