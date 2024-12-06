import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";
import Nav from "../components/Nav";

const Home = ({ navIsTop, setNavIsTop }) => {

  return (
    <>
    <div className="flex flex-grow h-[100vh]">
      
    </div>
    <Nav navIsTop={navIsTop} setNavIsTop={setNavIsTop} />
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