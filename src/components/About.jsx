import React from 'react'
import { motion } from 'framer-motion'
import me from '../assets/me.png'
import data from '../data/data.json'

function About({ aboutRef }) {
  return (
    <div id="about" ref={aboutRef} className='flex flex-col items-center'>
      <motion.h2
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col text-3xl md:text-4xl text-gray-200 mb-16 items-center"
        >
          About Me
          <p className="text-sm opacity-50">(Who am I?)</p>
        </motion.h2>
        <motion.div className='flex flex-row items-center gap-x-16 max-w-[1000px]'>        
            <motion.img
            src={me}
            alt="Profile"
            className="w-64"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="poppins md:text-lg"
            >
              <div className='font-extralight'>{data.about}</div>
            </motion.p>
        </motion.div>
    </div>
  )
}

export default About
