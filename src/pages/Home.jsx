import { useRef } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";

const Home = ({ projectRef, experienceRef, aboutRef }) => {



  return (
    <div className="flex flex-col items-center md:mx-32 gap-y-16">  
      <Hero />
      <Technologies />
      <Timeline experienceRef={experienceRef}/>
      <Projects projectRef={projectRef}/>
      <About aboutRef={aboutRef}/>
    </div>
  )
};
  
export default Home;