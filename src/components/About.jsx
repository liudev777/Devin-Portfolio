import React from 'react'
import { motion } from 'framer-motion'
import me from '../assets/me_head.png'
import data from '../data/data.json'

function About() {
  return (
    <div className=''>
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
