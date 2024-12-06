import data from "../data/data.json"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TechStackCarousel from "./TechStackCarousel";
import SlidingBlocks from "./SlidingBlocks";

const Hero = () => {

  return (
    <>
      <div className="w-full flex flex-col h-[100vh] items-center justify-center relative pb-48 z-[-1]">
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
              <div className="inline-block bg-gradient-to-t from-pink-300 to-purple-500 bg-clip-text text-transparent font-bold ">
              <div>
                <span className="text-6xl md:text-9xl">
                  <span className="inline bg-gradient-to-t from-pink-300 to-purple-500 bg-clip-text text-transparent font-bold  ">DEVIN&nbsp;</span>
                </span>
                <span className="block md:inline text-6xl md:text-9xl " >LIU</span> 
              </div>
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
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text md:text-6xl text-3xl tracking-tight text-transparent"
            />

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
    </>
  )
};
  
export default Hero;