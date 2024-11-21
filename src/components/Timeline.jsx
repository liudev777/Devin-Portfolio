import React from 'react'
import data from '../data/data.json'
import { FaPlus } from 'react-icons/fa'

const PlusIcon = () => {
    return (
        <div className='flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full'>
            <FaPlus className=' text-neutral-900'/>
        </div>
    )
}

const DescriptionBlock = () => {
  return (
    <div className='bg-neutral-600 rounded-md p-2 min-w-40'>
      hihii <br />
      hhhhh
    </div>
  )
}

const Experience = ({ company, title, year, description, index }) => {
    const reverse = index % 2 === 1;
    return (
        <div className='relative flex items-center'>
            <div className={`flex justify-center w-full items-center gap-8`}>
                <div className='absolute top-0 h-[200px] z-[-1] w-[3px] bg-gray-300 opacity-50'/>
                <div className='absolute'>
                    <PlusIcon />
                </div>
                <div className={`absolute ${ reverse ? 'mr-48' : 'ml-48'}`}>
                    <span >{title}</span>
                </div>
                <div className={`absolute top-0 ${ reverse ? 'ml-48' : 'mr-48'}`}>
                    <DescriptionBlock />
                </div>
            </div>
        </div>
    )
}

function Timeline() {
  return (
    <>
      <div className='text-3xl md:text-4xl font-thin flex justify-start'>Experience</div>
      <div className='mt-24 flex flex-col space-y-48'>
        {data.experiences.map((experience, index) => (
          <Experience 
          index={index}
          company={experience.company}
          title={experience.title}
          year={experience.year}
          description={experience.description}
          />
        ) )}
      </div>
    </>
  )
}

export default Timeline
