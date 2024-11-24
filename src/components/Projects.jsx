import { motion } from "framer-motion";
import { AiOutlineGithub } from 'react-icons/ai';
import data from "../data/data.json";
import laptop from "../assets/laptop.jpg";

const ProjectCard = ({ img, title, alt, description, github_url, index }) => {
  const reverse = index % 2 === 1
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8`}>
      {/* Image Section */}
      <motion.div 
      className="w-full md:w-1/2"
      whileHover={{ scale: 1.05, transition: { duration: 0.1 }}}
      >
        <img
          src={laptop}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center">
        <h3 className="text-2xl text-purple-300">{title}</h3>
        <h3 className="text-gray-300 font-extralight italic mb-4">{alt}</h3>
        <p className="text-gray-300 font-light mb-4">{description}</p>
        <div className="flex space-x-4">
          {github_url && (
            <motion.div
            className="flex"
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <a
                href={github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border text-gray-100 rounded-lg hover:bg-purple-300 transition duration-50"
              >
                <AiOutlineGithub size={20} />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="md:max-w-[1000px] mx-auto md:my-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col text-3xl md:text-4xl text-gray-200 mb-16 items-center"
        >
          Projects
          <p className="text-sm opacity-50">(Hosting gets expensive...)</p>
        </motion.h2>

        {/* Project List */}
        <div className="poppins flex flex-col space-y-12">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={index % 2 === 1 ? { x: "2%" } : { x: "-2%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className=""
            >
              <ProjectCard
                img={project.img_url}
                title={project.title}
                alt={project.alt}
                description={project.description}
                github_url={project.github_url}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
