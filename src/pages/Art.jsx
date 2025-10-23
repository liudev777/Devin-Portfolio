import data from "../data/data.json"
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"


function Art() {
  return (
    <div>
      <div className="flex flex-col gap-32 items-center pt-32">
        <div className="w-64 h-64 bg-white rounded-full flex justify-center items-center text-black">
          image goes here
        </div>
        <div className="poppins text-6xl mb-16">
          Illustration
        </div>

      </div>
      <div className='grid xl:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 ' >
        {data.arts.map((art, index) => {
          return (
          <motion.div
          key={index}
          className="relative aspect-square border-solid border-black"
          style={{
            boxShadow: "0 0 0 0.5px black"
          }}
          whileHover={{ scale: 1.1, zIndex: 10, border: "0px" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          {/* Image */}
          <motion.img
            src={art.thumbnail_image_url}
            alt={`Art ${index + 1}`}
            style={art.crop && { objectPosition: art.crop}}
            className="w-full h-full object-cover border-black border-solid"
          />

          {/* Pink Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[rgba(141,65,112,0.72)] flex justify-start items-end py-6 px-10 lg:text-3xl md:text-xl poppins font-semibold"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <span>{art.title}</span>
          </motion.div>
        </motion.div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Art
