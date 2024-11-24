import data from "../data/data.json"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TechStackCarousel from "./TechStackCarousel";
import SlidingBlocks from "./SlidingBlocks";

const Hero = () => {

  return (
    <>
      <div className="grid">  
        <div className="flex flex-row h-[100vh] items-center justify-start relative pb-48 ">
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          >
            <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-6xl md:mb-4 font-extralight"
            >
              Hey! I'm<br />
              <div className="inline-block">
              <span className="whitespace-nowrap text-6xl md:text-9xl">
                <motion.div
                className="inline-block md:py-5"
                initial={{ scale: 2}}
                viewport={{ once: true }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.9 }}
                >
                <motion.div
                className="inline-block"
                whileInView={{ scale: 1, transition: { duration: 0.1 } }}
                viewport={{ once: true}}
                whileHover={{ scale: 1.1, transition: { duration: 0.1 }}}
                >
                  <span className="bg-gradient-to-t from-pink-300 to-purple-500 bg-clip-text text-transparent font-bold ">DEV</span>
                </motion.div>
                </motion.div>
                <span className="inline bg-gradient-to-t from-teal-400 to-blue-500 bg-clip-text text-transparent font-bold ">IN&nbsp;</span>
              </span>
              <span className="block md:inline text-6xl md:text-9xl bg-gradient-to-t from-teal-400 to-blue-500 bg-clip-text text-transparent font-bold" >LIU</span> 
              </div>
              <br />
              I am a: <br />
            </motion.p>
            
            <TypeAnimation
              sequence={[
                "Fullstack Dev",
                1000,
                "Digital Artist",
                1000,
                // "Back-end Dev",
                // 1000,
                "Photographer",
                1000,
                // "Website Dev",
                // 1000
              ]}
              speed={1}
              deletionSpeed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent"
            />

            {/* <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="poppins md:text-xl font-extralight"
            >
              {data.about}
            </motion.p> */}
          </motion.div>
          
          {/* <motion.img
            src={bgImage}
            className="w-[300px] md:w-[400px] md:mx-16 "
            initial={{ opacity: 0, scale: 0.8}}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ once: true}}
            transition={{ duration: 1}}
          /> */}
          {/* <div className="relative flex justify-center md:justify-start w-full md:w-auto ">
            <SlidingBlocks/>
          </div> */}
        </div>
      </div>
      {/* <TechStackCarousel/> */}
    </>
  )
};
  
export default Hero;