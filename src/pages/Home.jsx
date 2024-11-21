import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";

const Home = () => {

  return (
    <div className="flex flex-col items-center md:mx-32 mx-20 space-y-32">  
      <Hero />
      <Timeline />
      <Projects />
    </div>
  )
};
  
export default Home;