import React from "react";
import data from "../data/data.json";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { motion } from 'framer-motion'

const PlusIcon = () => {
  return (
    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rotate-45">
        <motion.div
        initial={{ rotate: -90}}
        whileInView={{ rotate: 45}}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
            <BsFillPlusSquareFill size={18} className="text-neutral-900 " />
        </motion.div>
    </div>
  );
};

const DescriptionBlock = ({ company, description }) => {
  return (
    <div className="bg-neutral-600 rounded-md p-4 max-w-sm">
      <span className="font-bold">{company}</span>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
    </div>
  );
};

const Experience = ({ company, title, from, to, description, index }) => {
  const reverse = index % 2 === 1;
  const variantsLeft = {
    hidden: { 
      opacity: 0, 
      rotate: reverse ? 90 : -90, // Rotate from 90 or -90 degrees depending on the side
      originX: 1.1, // Set the rotation origin to the center icon
      originY: 0.5, // Align vertically with the center
    },
    visible: { 
      opacity: 1, 
      rotate: 0, // Rotate back to 0 (normal position)
    },
  };
  const variantsRight = {
    hidden: { 
      opacity: 0, 
      rotate: reverse ? 90 : -90, // Rotate from 90 or -90 degrees depending on the side
      originX: -0.1, // Set the rotation origin to the center icon
      originY: 0.5, // Align vertically with the center
    },
    visible: { 
      opacity: 1, 
      rotate: 0, // Rotate back to 0 (normal position)
    },
  };


  
  return (
    <div className="relative flex items-center"
    >
      <div className="relative flex w-full items-center">
        {/* Vertical Line */}
        <div className={`absolute ${index==0 ? 'bottom-0' : 'top-0'} left-1/2 transform -translate-x-1/2 ${index==0 || index==data.experiences.length - 1 ? 'h-1/2' : 'h-full'} w-[2px] bg-gray-300 opacity-25`}></div>

        {/* Left/Right Content with Flex */}
        <motion.div
        className={`flex flex-col w-1/2 ${reverse ? "justify-start" : "justify-end"} px-4`}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 1, ease: 'easeOut'}}
        >
            {reverse ? (
                <motion.div 
                className="flex flex-col items-end text-right min-h-full"
                variants={variantsLeft}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                viewport={{ once: true }}
                >
                    <div>{to ? `${from} - ${to}` : from}</div>
                    <div>{title}</div>
                </motion.div>)
                :
                (<motion.div
                variants={variantsLeft}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                viewport={{ once: true }}
                >
                    <DescriptionBlock company={company} description={description} />
                </motion.div>
                )
            }
        </motion.div>

        {/* Center Plus Icon */}
        <div 
        className="relative z-10"
        >
          <PlusIcon />
        </div>

        {/* Right/Left Content with Flex */}
        <motion.div
          className={`flex flex-col w-1/2 ${reverse ? "justify-end" : "justify-start"} px-4`}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 1, ease: 'easeOut'}}
        >
            {!reverse ? (
                <motion.div 
                className="flex flex-col"
                variants={variantsRight}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                >
                    <div>{to ? `${from} - ${to}` : from}</div>
                </motion.div>)
                :
                (<motion.div
                variants={variantsRight}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                >
                    <DescriptionBlock company={company} description={description} />
                </motion.div>
                )
            }
        </motion.div>
      </div>
    </div>
  );
};
const ExperienceFull = ({ company, title, from, to, description, index }) => {
  const reverse = index % 2 === 1;
  const variantsLeft = {
    hidden: { 
      opacity: 0, 
      rotate: reverse ? 90 : -90, // Rotate from 90 or -90 degrees depending on the side
      originX: 1.1, // Set the rotation origin to the center icon
      originY: 0.5, // Align vertically with the center
    },
    visible: { 
      opacity: 1, 
      rotate: 0, // Rotate back to 0 (normal position)
    },
  };
  const variantsRight = {
    hidden: { 
      opacity: 0, 
      rotate: reverse ? 90 : -90, // Rotate from 90 or -90 degrees depending on the side
      originX: -0.1, // Set the rotation origin to the center icon
      originY: 0.5, // Align vertically with the center
    },
    visible: { 
      opacity: 1, 
      rotate: 0, // Rotate back to 0 (normal position)
    },
  };


  
  return (
    <div className="relative flex items-center"
    >
      <div className="relative flex w-full items-center">
        {/* Vertical Line */}
        <div className={`absolute ${index==0 ? 'bottom-0' : 'top-0'} left-1/2 transform -translate-x-1/2 ${index==0 || index==data.experiences.length - 1 ? 'h-1/2' : 'h-full'} w-[2px] bg-gray-300 opacity-25`}></div>

        {/* Left/Right Content with Flex */}
        <motion.div
        className={`flex flex-col w-1/2 ${reverse ? "justify-start" : "justify-end"} px-4`}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 1, ease: 'easeOut'}}
        >
            {reverse ? (
                <motion.div 
                className="flex flex-col items-end text-right min-h-full"
                variants={variantsLeft}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                viewport={{ once: true }}
                >
                    <div>{to ? `${from} - ${to}` : from}</div>
                    <div>{title}</div>
                </motion.div>)
                :
                (<motion.div
                variants={variantsLeft}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                viewport={{ once: true }}
                >
                    <DescriptionBlock company={company} description={description} />
                </motion.div>
                )
            }
        </motion.div>

        {/* Center Plus Icon */}
        <div 
        className="relative z-10"
        >
          <PlusIcon />
        </div>

        {/* Right/Left Content with Flex */}
        <motion.div
          className={`flex flex-col w-1/2 ${reverse ? "justify-end" : "justify-start"} px-4`}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 1, ease: 'easeOut'}}
        >
            {!reverse ? (
                <motion.div 
                className="flex flex-col"
                variants={variantsRight}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                >
                    <div>{to ? `${from} - ${to}` : from}</div>
                </motion.div>)
                :
                (<motion.div
                variants={variantsRight}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                >
                    <DescriptionBlock company={company} description={description} />
                </motion.div>
                )
            }
        </motion.div>
      </div>
    </div>
  );
};

function Timeline() {
  return (
    <div className="relative z-10 w-full h-auto bg-transparent p-4">
      <div className="text-3xl md:text-4xl font-thin flex justify-center mb-16 ">
        Experience
      </div>
      <div className="hidden lg:inline ">
        <div className="">
          {data.experiences.map((experience, index) => (
            <div className="flex flex-col items-center">
            <Experience
              key={index}
              index={index}
              company={experience.company}
              title={experience.title}
              from={experience.from}
              to={experience.to}
              description={experience.description}
            />
            {index < data.experiences.length - 1 && (
                <div className=" h-10 w-[2px] bg-gray-300 opacity-25"/>
            )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
