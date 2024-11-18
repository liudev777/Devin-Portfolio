import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // animation variants for sliding menu

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15
      }
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15
      }
    }
  }


  return (
    <nav className="flex items-center justify-between w-full py-8 px-16">
      <div className="z-50">
        <a href="/" className="text-2xl">DL</a>
      </div>

      <ul className="hidden md:flex gap-12 mr-4 z-50">
        <li><a href="/" className="link-hover">Home</a></li>
        <li><a href="/resume" className="link-hover">Resume</a></li>
        <li><a href="/art" className="link-hover">Art</a></li>
        <li><a href="/photography" className="link-hover">Photography</a></li>
      </ul>

      <div onClick={toggleMenu} className="md:hidden z-50 cursor-pointer">
        {isOpen ? <AiOutlineClose size={30} className="stroke" /> : <AiOutlineMenu size={30}/>}
      </div>

      <motion.div 
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
      className="fixed left-0 top-0 w-full min-h-screen bg-neutral-900 z-40"
      >         
        <ul className="font-thin text-xl space-y-8 mt-24 text-center">
          <li><a href="/" className="link-hover">Home</a></li>
          <li><a href="/resume" className="link-hover">Resume</a></li>
          <li><a href="/art" className="link-hover">Art</a></li>
          <li><a href="/photography" className="link-hover">Photography</a></li>
        </ul>
      </motion.div>
      
    </nav>
  );
};

export default Nav;