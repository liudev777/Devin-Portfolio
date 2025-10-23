import Home from "./pages/Home";
import Art from "./pages/Art"
import Nav from "./components/Nav"
import { useRef } from "react";
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Resume from "./components/Resume";

function App() {
  const ROUTE_ENDPOINT = "/"
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  
  return (
    <Router>
      <SpeedInsights/>
      {/* Background */}
      <div className="glow"/>
      <div className="bg"/>

      <div>
        <Nav projectRef={projectRef} experienceRef={experienceRef} aboutRef={aboutRef}/>
        <Routes>
          <Route path={ROUTE_ENDPOINT} element={<Home projectRef={projectRef} experienceRef={experienceRef} aboutRef={aboutRef}/>} />
          <Route path={ROUTE_ENDPOINT + "art"} element={<Art />} />
          <Route path={ROUTE_ENDPOINT + "resume"} element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
