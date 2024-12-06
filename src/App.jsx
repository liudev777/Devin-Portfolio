import Home from "./pages/Home";
import Art from "./pages/Art";
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useRef, useState, useEffect } from "react";

function App() {
  const ROUTE_ENDPOINT = "/"

  return (
      <>
      <SpeedInsights/>
      {/* Background */}
      <div
      className={`glow`}

      />
    <Router>
      <div className="bg"/>

      <div>
        <Routes>
          <Route path={ROUTE_ENDPOINT} element={<Home />} />
          <Route path={ROUTE_ENDPOINT + "art"} element={<Art />} />
          <Route path={ROUTE_ENDPOINT + "photography"} element={<></>} />
        </Routes>
      </div>
    </Router>
      </>
  );
}

export default App;
