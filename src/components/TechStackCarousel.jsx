import { FaPython, FaJava, FaReact, FaAws, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

const icons = [
    <FaPython size={60} />,
    <FaJava size={60} />,
    <IoLogoJavascript size={60} />,
    <FaReact size={60} />,
    <RiTailwindCssFill size={60} />,
    <BiLogoCPlusPlus size={60} />,
    <SiMysql size={60} />,
    <FaAws size={60} />,
    <FaHtml5 size={60} />,
  ];

const duplicatedIcons = [...icons, ...icons];

function TechStackCarousel() {

    const [speed, setSpeed] = useState(10);

    return (
        
        <div className="relative w-1/2 overflow-hidden">
        {/* Gradient Overlay for Fade Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-neutral-900 to-transparent"></div>
                <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-neutral-900 to-transparent"></div>
            </div>

        

            {/* Sliding Animation */}
            <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 5, delay: 1.5 }}
            >  
                <motion.div
                    className="flex space-x-8"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                    ease: "linear",
                    duration: speed,
                    repeat: Infinity,
                    }}
                >
                    {duplicatedIcons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center opacity-75"
                        style={{ width: `${100 / icons.length}%` }}
                        whileHover={{ scale: 1.2, transition: { duration: 0.25 }}}
                    >
                        {icon}
                    </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default TechStackCarousel;
