import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";
import Nav from "../components/Nav";
import { useRef } from "react";
import DevVid from "../assets/DevVid.mp4"

const Landing = ({ landingRef }) => {
  
  return (
    <div>
      <video autoPlay loop muted playsinline className="scale-x-[-1] absolute h-full w-full object-cover z-[-1]">
        <source src={DevVid}/>
      </video>
      <div ref={landingRef} className="flex flex-grow flex-col justify-center h-[100vh] px-24">
        <div className="eva-font1 flex flex-col justify-start">
          <div className="text-8xl">
            DEVIN <br/>
            LIU
          </div>
          <div className="text-9xl">
            DEVELOPER
          </div>
        </div>
        <div className="eva-font2 text-4xl my-8">
          FINALE:
        </div>
        <div className="flex flex-row-reverse eva-font3 text-4xl">
          I'm more than a code monkey
        </div>
      </div>

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
      {/* <Hero /> */}
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
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
