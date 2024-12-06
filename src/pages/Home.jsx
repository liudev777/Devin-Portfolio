import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";
import Nav from "../components/Nav";
import { useRef } from "react";

const Landing = ({ landingRef }) => {
  
  return (
    <div ref={landingRef} className="flex flex-grow items-center justify-center h-[100vh] text-8xl">
    Hello World
    </div>
  )
}

const Home = () => {
  const landingRef = useRef(null);

  return (
    <>
    <Landing landingRef={landingRef}/>
    <Nav landingRef={landingRef} isHomePage={true}/>
    <div className="flex flex-col items-center md:mx-32 gap-y-16">  
      <Hero />
      <Technologies />
      <Timeline />
      <Projects />
      <About />
    </div>
    </>
  )
};
  
export default Home;

// todo:
// parallax the glow
