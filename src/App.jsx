import Home from "./pages/Home";
import Nav from "./components/Nav";
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const ROUTE_ENDPOINT = "/"
  return (
    <Router>
      <SpeedInsights/>
      {/* Background */}
      <div className="glow"/>
      <div className="bg"/>

      <div>
        <Nav />
        <Routes>
          <Route path={ROUTE_ENDPOINT} element={<Home />} />
          <Route path={ROUTE_ENDPOINT + "art"} element={<></>} />
          <Route path={ROUTE_ENDPOINT + "photography"} element={<></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
