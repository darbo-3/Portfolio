import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useEffect } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('')
                setErrorMessage('')
            }, 2000) 

            return () => clearTimeout(timer)
        }
    }, [successMessage, errorMessage])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrorMessage('')
        setSuccessMessage('')

        try {

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'darborzgar7@gmail.com'
            }

            // Send email using EmailJS

                const result = await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                ) 
            

            setSuccessMessage('Sent')
            
        } catch (error) {
            console.log(error)
            setErrorMessage('Failed to send message. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            id='contact'
            className='w-full h-screen flex justify-center items-center text-white border-b border-slate-800'
        >
            <div className='w-full flex justify-center items-center flex-col'>
                <h1 className="text-4xl m-5 bg-gradient-to-r from-sky-500 via-purple-500 to-sky-600 bg-clip-text text-transparent font-bold">
                    Contact Me
                </h1>

                <form onSubmit={handleSubmit} className='w-5/6 md:w-1/2 lg:w-1/3 flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-500 text-xs ml-1'>Your name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='name'
                            required
                            className='py-2 px-4 rounded-md border border-slate-900 shadow focus:outline-none focus:ring-2 ring-purple-500 bg-gray-900 text-white'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-500 text-xs ml-1'>Your email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='email'
                            required
                            className='py-2 px-4 rounded-md border border-slate-900 shadow focus:outline-none focus:ring-2 ring-purple-500 bg-gray-900 text-white'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-500 text-xs ml-1'>Say something</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='your message'
                            required
                            rows="4"
                            className='py-2 px-4 rounded-md border border-slate-900 shadow focus:outline-none focus:ring-2 ring-purple-500 bg-gray-900 text-white'
                        />
                    </div>

                    {/* Success/Error Messages */}
                    {successMessage && (
                        <div className='p-3  text-green-400 text-sm'>
                            {successMessage}
                        </div>
                    )}

                    {errorMessage && (
                        <div className='p-3  text-red-400 text-sm'>
                            {errorMessage}
                        </div>
                    )}

                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`bg-gradient-to-br cursor-pointer hover:scale-110 transition duration-300 hover:brightness-105 mt-2 from-sky-500 via-purple-500 to-sky-600 py-2 px-6 rounded-lg text-sm ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Sending...' : 'Send message'}
                        </button>
                    </div>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact