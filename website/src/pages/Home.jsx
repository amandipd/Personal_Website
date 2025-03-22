import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import profilePic from "../images/profilepic.jpg";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Amandip Dutta!</h1>
          <div className="bio">
            <p>
              I'm an undergraduate student at the University of California,
              Berkeley studying Computer Science and Statistics. My career interests lie in{' '}
              <span className="highlight">backend development</span>,{' '}
              <span className="highlight">ML/AI</span>, and{' '}
              <span className="highlight">probabilistic risk assessment</span>, and I'm excited to explore these interests through upcoming coursework, projects, and work experiences.
            </p>
            <p>
              Outside of academics, I enjoy weight-lifting, gardening, and going out for hikes in the bay area. Feel free to explore my website to learn more about my professional experiences and projects!
            </p>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Amandip" className="profile-pic" />
        </div>
      </section>

      <Experience />
    </div>
  );
};

export default Home;
