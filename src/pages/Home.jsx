import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";
import Nav from "../components/Nav";
import { useRef } from "react";
import DevVid from "../assets/DevVid.mp4"
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

const randomHiragana = () => {
  const chars = "あいうえおかきくけこさしすせそたちつてとなにぬねの"
  // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return chars[Math.floor(Math.random() * chars.length)];
}

const TextReveal = ({ text, speed=100, revealSpeed=200, className="" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [randomChars, setRandomChars] = useState("");

  useEffect(() => {
    let currentLength = 0;

    const randomInterval = setInterval(() => {
      setRandomChars(
        text
        .split("")
        .map((_, index) => (index < currentLength ? text[index] : randomHiragana()))
        .join("")
      );
    }, speed)

    const revealInterval = setInterval(() => {
      if (currentLength < text.length) {
        currentLength += 1;
        setDisplayedText(text.slice(0, currentLength));
      } else {
        clearInterval(revealInterval);
        clearInterval(randomInterval);
      }
    }, revealSpeed);

    return () => {
      clearInterval(randomInterval);
      clearInterval(revealInterval);

      setRandomChars(text);
      setDisplayedText(text);
    };
  }, [text, speed, revealSpeed])

  return (
    <div className="m-0 text-reveal">
      <div className={className}>
        {randomChars || displayedText}
      </div>
    </div>
  )
}

const Landing = ({ landingRef }) => {

  const [opacity, setOpacity] = useState(1); // Start fully visible
  const [canMove, setCanMove] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the current scroll position
      const maxScroll = 300; // Adjust based on when you want the video to fully fade out
      const newOpacity = Math.max(1 - (scrollTop / maxScroll), 0); // Calculate opacity
      if (scrollTop < 100) {
        setOpacity(1)
        setCanMove(false)
      } else {
        setOpacity(newOpacity)
        setCanMove(true)
      }
      // setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div>
      <video 
      autoPlay 
      loop 
      muted 
      playsinline 
      style={{opacity}}
      className={`scale-x-[-1] ${canMove ? "absolute top-[100px]" : 'fixed'} h-full w-full object-cover z-[-1]`}>
        <source src={DevVid}/>
      </video>
      <div ref={landingRef} className="flex flex-grow flex-col justify-center h-[100vh] px-24 overflow-hidden">
        <div className="m-0 eva-font1 flex flex-col justify-start">
          <motion.div className="text-8xl">
            <TextReveal className={"m-0 text-8xl eva-font1"} text={"DEVIN"} speed={30} revealSpeed={200}/>
            <TextReveal className={"text-8xl eva-font1"} text={"LIU"} speed={30} revealSpeed={400}/>
            <TextReveal className={"text-[10rem] eva-font1 text-nowrap overflow-clip"} text={"PORTFOLIO"} speed={30} revealSpeed={100}/>
            
          </motion.div>
        </div>
        <TextReveal className={"text-5xl my-10 eva-font2"} text={"SOFTWARE DEVELOPER"} speed={30} revealSpeed={60}/>
        <div className="eva-font3 text-4xl">
        <TextReveal className={"my-10 text-nowrap overflow-clip"} text={"Much more than just a code monkey"} speed={30} revealSpeed={30}/>
          
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
