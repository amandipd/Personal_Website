import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        MyWebsite
      </div>
      <div className="navbar-links">
        <span onClick={() => navigate("/about")}>About Me</span>
        <span onClick={() => navigate("/experience")}>Experience</span>
        <span onClick={() => navigate("/projects")}>Projects</span>
        <span onClick={() => navigate("/contact")}>Contact Me</span>
      </div>
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Navbar;
