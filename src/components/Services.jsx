import { DatabaseZap, Laptop, Layers } from 'lucide-react'
import { SiInternetcomputer } from "react-icons/si";
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Frontend Web Development",
            icon: <Laptop />,
            description: "I design and build responsive, user-friendly interfaces using modern web technologies to deliver engaging and accessible user experiences."
        },
        {
            id: 2,
            name: "Backend Web Development",
            icon: <DatabaseZap />,
            description: "I develop secure, scalable server-side applications, APIs, and databases that ensure reliable performance and efficient data management."
        },
        {
            id: 3,
            name: "Full Stack Development",
            icon: <SiInternetcomputer size={22}/>,
            description: "I deliver complete web solutions by integrating intuitive frontends with robust backends, ensuring seamless functionality from concept to deployment."
        }
    ];
  return (
    <motion.div 
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
    id='services' className='min-h-screen my-5 w-11/12 mx-auto border-b border-sky-900 flex justify-center items-center text-white flex-col'>
          <h1 className='text-4xl m-5 font-bold text-sky-500'>My Services</h1>  
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="py-5 px-4 border-2 border-sky-900/40 bg-sky-950/20 rounded-md
             hover:border-sky-500/50 hover:bg-sky-900/30
             transition duration-300 min-h-[180px]"
                    >
                        <div className="flex items-center justify-between gap-3 mb-2">
                            <h1 className="font-medium text-lg">{service.name}</h1>
                            <div className="py-2 px-4 rounded border border-sky-500/80 bg-sky-950/30 text-sky-400 text-2xl">
                                {service.icon}
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-300/70 text-sm leading-relaxed tracking-wide">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    </motion.div>
  )
}

export default Services