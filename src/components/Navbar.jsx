import { useState, useEffect } from "react"
import { Link as ScrollLink } from 'react-scroll'
import { X, Menu, MenuIcon } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
  const links = [
    { id: 1, name: "Home", to: 'home' },
    { id: 2, name: "Experience", to: 'experience' },
    { id: 3, name: "Services", to: 'services' },
    { id: 4, name: "Projects", to: 'projects' },
    { id: 5, name: "Contact", to: 'contact' },
  ]

  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => ({
        id: link.to,
        element: document.getElementById(link.to)
      })).filter(section => section.element);

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + 100;
      let currentActive = activeLink;

      for (const section of sections) {
        const { offsetTop, offsetHeight } = section.element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentActive = section.id;
          break;
        }

        if (scrollPosition >= offsetTop && scrollPosition === sections[sections.length - 1]) {
          currentActive = sections[sections.length - 1].id;
        }
      }

      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [links, activeLink]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.50 }}
      className='fixed top-0 left-0 right-0 flex justify-between md:justify-around text-white bg-slate-900/10 py-4 px-8 md:px-8 items-center border-b border-gray-800 backdrop-blur-xl z-50'
    >
      <section className="flex items-center gap">
        <svg className="mt-2" width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="55" rx="15" ry="3" fill="black" opacity="0.2" />
          <path d="M15 35 L30 10 L45 35 Z" fill="#C41E3A" />
          <path d="M15 35 L30 10 L22.5 22.5 Z" fill="#A01020" opacity="0.5" />
          <path d="M30 10 L45 35 L37.5 22.5 Z" fill="#E63946" opacity="0.4" />
          <ellipse cx="30" cy="35" rx="17" ry="4" fill="white" />
          <ellipse cx="30" cy="35" rx="17" ry="4" fill="#F0F0F0" opacity="0.6" />
          <ellipse cx="20" cy="35" rx="3" ry="2.5" fill="white" opacity="0.8" />
          <ellipse cx="26" cy="35.5" rx="2.5" ry="2" fill="white" opacity="0.7" />
          <ellipse cx="34" cy="35.5" rx="2.5" ry="2" fill="white" opacity="0.7" />
          <ellipse cx="40" cy="35" rx="3" ry="2.5" fill="white" opacity="0.8" />
          <circle cx="30" cy="8" r="5" fill="white" />
          <circle cx="30" cy="8" r="5" fill="#F0F0F0" opacity="0.7" />
          <circle cx="28" cy="7" r="1.5" fill="white" opacity="0.9" />
          <circle cx="32" cy="7.5" r="1.2" fill="white" opacity="0.8" />
          <circle cx="30" cy="9.5" r="1.3" fill="#E0E0E0" opacity="0.6" />
          <path d="M28 18 Q30 20 32 18" stroke="#8B1020" stroke-width="0.5" opacity="0.4" fill="none" />
          <path d="M26 24 Q30 27 34 24" stroke="#8B1020" stroke-width="0.5" opacity="0.3" fill="none" />
        </svg>
        <ScrollLink
          to='home'
          className="text-xl font-black md:text-2xl bg-gradient-to-r from-sky-500 via-purple-500 to-sky-600 bg-clip-text text-transparent"
          smooth={true}
          duration={500}
          onClick={() => setActiveLink('home')}
        >
          DevDarbo
        </ScrollLink>
      </section>

      <section className='hidden md:flex gap-5 items-center'>
        {links.map((link) => (
          <ScrollLink
            key={link.id}
            to={link.to}
            smooth={true}
            duration={600}
            spy={true}
            activeClass="active"
            onClick={() => {
              setActiveLink(link.to)
              setOpen(false)
            }}
            className={`cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${activeLink === link.to
                ? 'text-purple-500 bg-slate-900/30'
                : 'text-white hover:text-purple-400'
              }`}
          >
            {link.name}
          </ScrollLink>
        ))}
      </section>

      <section >
        <motion.button
          onClick={() => setOpen(!open)}
          className="flex md:hidden bg-slate-900/30 hover:bg-slate-900 border cursor-pointer border-slate-800 transition duration-300 py-2 px-2 rounded-lg"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </section>

      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute md:hidden overflow-hidden backdrop-blur-xl flex flex-col gap-4 p-5 top-full left-0 right-0 bg-slate-950 border-b border-slate-800/50 z-50"
          >
            {links.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.to}
                smooth={true}
                duration={600}
                onClick={() => {
                  setActiveLink(link.to)
                  setOpen(false)
                }}
                className={`cursor-pointer text-sm w-full py-3 px-4 rounded-lg transition-colors duration-300 ${activeLink === link.to
                    ? 'text-purple-500'
                    : 'text-white hover:bg-slate-800/10'
                  }`}
              >
                {link.name}
              </ScrollLink>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar