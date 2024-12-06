import Home from "./pages/Home";
import Nav from "./components/Nav";
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useRef, useState, useEffect } from "react";

function App() {
  const ROUTE_ENDPOINT = "/"
  const [navIsTop, setNavIsTop] = useState(false);
  const [ballPosition, setBallPosition] = useState(0);
  const appRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!appRef.current) return;
      const appRect = appRef.current.getBoundingClientRect();
      console.log(ballPosition)

      if (!navIsTop) {
        setBallPosition(appRect.top + window.scrollY);
      } 
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [navIsTop])

  return (
      <>
      <SpeedInsights/>
      {/* Background */}
      <div
      ref={appRef}
      className={`glow ${navIsTop ? "absolute" : "fixed"} overflow-visible `}
      style={{
        top: navIsTop ? `${ballPosition}px` : "0", // Dynamically set the `top` value
        left: "50%",
        transform: "translateX(-50%)",
        overflow: 'visible',
        height: '-100vh',
      }}
      />
    <Router>
      <div className="bg"/>

      <div>
        <Routes>
          <Route path={ROUTE_ENDPOINT} element={<Home navIsTop={navIsTop} setNavIsTop={setNavIsTop}/>} />
          <Route path={ROUTE_ENDPOINT + "art"} element={<></>} />
          <Route path={ROUTE_ENDPOINT + "photography"} element={<></>} />
        </Routes>
      </div>
    </Router>
      </>
  );
}

export default App;
