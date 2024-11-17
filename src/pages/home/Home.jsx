import Projects from "../../components/projects/Projects";
import TitleDescription from "../../components/titleDescription/TitleDescription";
import data from "../../data/data.json"
import bgImage from "../../assets/me.png"

const Home = () => {
  
  const greeting = () => {
    return (
      <div>
        <div className="my-8 space-y-5">
          <div className="text-xl font-extralight">Hi there! My name is</div>
          <div className="text-6xl font-thin">{data.name}</div>
          <div className="text-xl my-3 font-extralight">I am a:</div>
        </div>

        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between px-[] pt-24">
      <div className="max-w-2x1">
        {greeting()}
        <TitleDescription className="my-8 font-extralight" title="About me" description={data.about}/>
        {/* <Projects/> */}
      </div>

      <div className="flex-shrink-0">
          <img className="object-cover w-96 ml-32" src={bgImage} alt="" />
      </div>
    </div>
  );
};
  
export default Home;