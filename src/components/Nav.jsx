import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { 
  FaInstagram,
  FaLinkedin,
  FaGithub
 } from 'react-icons/fa';
 import { MdDownload } from "react-icons/md";

import resume from "../assets/Devin_Liu_Resume_2025.pdf"
import data from "../data/data.json"

const ROUTE_ENDPOINT = import.meta.env.VITE_ROUTE_ENDPOINT || "/Devin_Portfolio/"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${
      isScrolled
        ? "backdrop-blur-lg"
        : "bg-transparent"
    }`}>

      <div className="max-w-[1650px] mx-auto flex items-center justify-between py-6 px-16">
        <ul className="hidden md:flex gap-6 z-50">
          <li><FaInstagram size={30} className="cursor-pointer hover:text-purple-300  transition-all duration-300" onClick={() => window.open(data.urls.instagram, "_blank")}/></li>
          <li><FaLinkedin size={30} className="cursor-pointer hover:text-purple-300  transition-all duration-300" onClick={() => window.open(data.urls.linkedin, "_blank")}/></li>
          <li><FaGithub size={30} className="cursor-pointer hover:text-purple-300  transition-all duration-300" onClick={() => window.open(data.urls.github, "_blank")}/></li>
          <li>
          <a
            className="flex items-center space-x-2 px-3 py-1 rounded-lg border cursor-pointer hover:bg-purple-300 duration-300"
            href={resume}

            target="_blank"
            download
          >
            <MdDownload size={20} />
            <span className="text-sm">CV</span>
          </a>
        </li>
        </ul>
        <ul className="hidden md:flex gap-12 z-50">
          <li><a href={ROUTE_ENDPOINT} className="link-hover">Home</a></li>
          <li><a href={ROUTE_ENDPOINT + "art"} className="link-hover">Art</a></li>
          <li><a href={ROUTE_ENDPOINT + "photography"} className="link-hover">Photography</a></li>
        </ul>


        <div onClick={toggleMenu} className="md:hidden z-50 cursor-pointer">
          {isOpen ? <AiOutlineClose size={30} className="stroke" /> : <AiOutlineMenu size={30}/>}
        </div>
        {/* <div>
          <ul className="flex md:hidden gap-6 z-50">
            <li><FaInstagram size={30} className="cursor-pointer hover:text-purple-300  transition-all duration-300"/></li>
            <li><FaLinkedin size={30} className="cursor-pointer hover:text-purple-300  transition-all duration-300"/></li>
            <li><FaGithub size={30} className="cursor-pointer hover:text-purple-300  transition-all duration-300"/></li>
          </ul>
        </div> */}

        <motion.div 
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full min-h-screen backdrop-blur-lg z-40 md:invisible"
        >         
          <ul className="font-thin text-xl space-y-8 mt-24 text-center">
            <li><a href={ROUTE_ENDPOINT} className="link-hover">Home</a></li>
            <li><a href={ROUTE_ENDPOINT +"/art"} className="link-hover">Art</a></li>
            <li><a href={ROUTE_ENDPOINT +"/photography"} className="link-hover">Photography</a></li>
          </ul>
          <div className="flex flex-col items-center mt-12 space-y-8">
            <div className="flex space-x-6">
              <FaInstagram size={30} className="cursor-pointer hover:text-purple-300 transition-all duration-300" onClick={() => window.open(data.urls.instagram, "_blank")}/>
              <FaLinkedin size={30} className="cursor-pointer hover:text-purple-300 transition-all duration-300" onClick={() => window.open(data.urls.linkedin, "_blank")}/>
              <FaGithub size={30} className="cursor-pointer hover:text-purple-300 transition-all duration-300" onClick={() => window.open(data.urls.github, "_blank")}/>
            </div>

            {/* CV Download Button */}
            <a
              className="flex items-center space-x-2 px-3 py-1 rounded-lg border cursor-pointer hover:text-purple-300 hover:border-purple-300 duration-300"
              href={resume}
              target="_blank"
              download
            >
              <MdDownload size={20} />
              <span className="text-sm">CV</span>
            </a>
          </div>
        </motion.div>
      </div>
      
    </nav>
  );
};

export default Nav;