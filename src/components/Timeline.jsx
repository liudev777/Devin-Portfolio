import React from 'react'
import data from '../data/data.json'
import { FaPlus } from 'react-icons/fa'

const PlusIcon = () => {
    return (
        <div className='flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full border-neutral-900 border-8'>
            <FaPlus className=' text-neutral-900'/>
        </div>
    )
}

const Experience = ({ company, title, year, description, index }) => {
    const reverse = index % 2 === 1;
    return (
        <div className='relative flex items-center'>
            <div className={`flex justify-center w-full items-center gap-8`}>
                <div className='absolute top-0 h-[150px] z-[-1] w-0.5 bg-gray-300'/>
                <div className='absolute'>
                    <PlusIcon />
                </div>
                <div className={`relative ${ reverse ? 'mr-32' : 'ml-32'}`}>
                    <span >hello world</span>
                </div>
            </div>
        </div>
    )
}

function Timeline() {
  return (
    <div className='flex flex-col space-y-32'>
      {data.experiences.map((experience, index) => (
        <Experience index={index}/>
      ) )}
    </div>
  )
}

export default Timeline
