import React from 'react'
import { motion } from 'framer-motion'
import data from '../data/data.json'
import css from '../assets/logo_svg/css.svg'

const TechCard = ({ name, img_path }) => {
    console.log(img_path)
    return (
        <div className='flex flex-col py-10 px-6 items-center justify-end bg-card-black rounded-xl card-shadow gap-y-2 text-[#5c5c5c] hover:bg-pink-300 transition-all delay-100'>
            <div className='flex flex-col align-center justify-center h-full'>
                <img src={img_path} width={70}/>
            </div>
            <div className='poppins text-xl font-light'>
                {name}
            </div>
        </div>
    )
}

function Technologies() {
  return (
    <motion.div 
    className='flex flex-col text-3xl md:text-4xl mb-16 items-center bg-[rgba(242,242,242,.04)] bg-gradient-blue p-12 gap-8 rounded-md shadow-3xl card-shadow'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    viewport={{ once: true }}
    >
        <div className="flex flex-col items-center">
            <div className='title-gradient '>
                Skills
            </div>
            <p className="text-sm opacity-50">(Tools and Tech)</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 2xl:grid-cols-8 gap-6'> 
            {data.tools.map((tool, key) => (
                <TechCard name={tool.name} img_path={tool.img_path} key={key}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Technologies
