import Home from "./pages/Home";
import Nav from "./components/Nav";
import Resume from "./pages/Resume";
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Background */}
      <div className="bg"/>

      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/art" element={<></>} />
          <Route path="/photography" element={<></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
