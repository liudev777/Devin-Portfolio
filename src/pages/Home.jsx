import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";
import BGVideo from "../assets/DevVid.mp4"

const VideoBG = () => {
  return (
    <video 
    loop
    playsInline
    autoPlay
    muted
    className="w-full h-full object-cover absolute top-0 scale-x-[-1]"
    >
      <source src={BGVideo}/>
    </video>
  )
}

const Home = () => {
  return (
    <>
    {/* <VideoBG /> */}
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