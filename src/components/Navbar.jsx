import { useState, useEffect } from "react"
import { Link as ScrollLink } from 'react-scroll'
import { X, Menu } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
  const links = [
    { id: 1, name: "Home", to: 'home' },
    { id: 3, name: "Experience", to: 'experience' },
    { id: 4, name: "Projects", to: 'projects' },
    { id: 4, name: "Contact", to: 'contact' },
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
      className='fixed top-0 left-0 right-0 flex justify-between md:justify-around text-white bg-gray-900/30 py-4 px-8 md:px-8 items-center border-b border-gray-800 backdrop-blur-xl z-50'
    >
      <section>
        <ScrollLink
          to='home'
          className="text-2xl md:text-2xl bg-gradient-to-r from-sky-500 via-purple-500 to-sky-600 bg-clip-text text-transparent font-bold"
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
        {/* <ScrollLink
          className="py-2 px-4 rounded-2xl bg-slate-100 text-black font-medium text-sm cursor-pointer hover:bg-white transition-colors duration-300"
          to='contact'
          smooth={true}
          duration={600}
          onClick={() => setActiveLink('contact')}
        >
          Get in touch
        </ScrollLink> */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="flex md:hidden bg-slate-900/40 hover:bg-slate-900 border cursor-pointer border-slate-800 transition duration-300 py-2 px-2 rounded-lg"
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
            className="absolute md:hidden overflow-hidden backdrop-blur-xl flex flex-col gap-4 p-5 top-full left-0 right-0 bg-slate-900 border-b border-slate-800/50 z-50"
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