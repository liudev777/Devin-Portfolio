import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Resume from "./pages/resume/Resume";
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Background */}
      <div className="bg">
      </div>

      {/* Main Container with Margin */}
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
