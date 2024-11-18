import data from "../data/data.json"
import bgImage from "../assets/me.png"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {

  return (
    <div className="grid md:grid-cols- place-items-start">  
      <div className="flex flex-col md:flex-row items-center justify-between pt-12 max-w-[1200px] md:mx-32 mx-20 relative space-y-8">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-8"
        >
          <motion.p
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl mb-4"
          >
            Hey, I am <br />
            <span className="text-6xl mb-3 block">Devin Liu </span> <br />
            I am a: <br />
          </motion.p>
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Digital Artist",
              1000,
              "Back-end Dev",
              1000,
              "Photographer",
              1000,
              "Website Dev",
              1000
            ]}
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          />

          <motion.p
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl"
          >
            {data.about}
          </motion.p>
        </motion.div>
        
        <motion.img
          src={bgImage}
          className="w-[300px] md:w-[450px] md:ml-24"
          initial={{ opacity: 0, scale: 0.8}}
          whileInView={{ opacity: 1, scale: 1}}
          viewport={{ once: true}}
          transition={{ duration: 1}}
        />
      </div>
    </div>
  )
};
  
export default Hero;