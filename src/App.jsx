import Home from "./pages/Home";
import Nav from "./components/Nav";
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const ROUTE_ENDPOINT = import.meta.env.VITE_ROUTE_ENDPOINT || "/Devin-Portfolio/"
  return (
    <Router>
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