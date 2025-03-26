import React from "react";
import "../styles/Experience.css";
import surebetLogo from "../company-logos/surebet.png";
import collegiateLogo from "../company-logos/collegiate.jpeg";
import rentoraLogo from "../company-logos/rentora.jpeg";

const experiences = [
  {
    company: "Surebet Jobs",
    companyUrl: "https://surebetjobs.com/",
    position: "Backend Software Engineer Intern",
    duration: "Jan 2025 - Present",
    location: "Berkeley, CA",
    logoUrl: surebetLogo,
  },
  {
    company: "Collegiate Consulting",
    companyUrl: "https://www.collegiate-consulting.com/",
    position: "Data Engineer",
    duration: "Jun 2024 - Dec 2024",
    location: "San Francisco, CA",
    logoUrl: collegiateLogo,
  },
  {
    company: "Rentora",
    position: "Full-Stack Software Engineer Intern",
    duration: "May 2024 - Aug 2024",
    location: "Santa Cruz, CA",
    logoUrl: rentoraLogo,
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="card-header">
                <div className="company-logo">
                  <img src={exp.logoUrl} alt={`${exp.company} logo`} />
                </div>
                <div className="company-info">
                  <h3>{exp.position}</h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    {exp.company}
                  </a>
                </div>
              </div>
              <div className="card-meta">
                <span className="duration">{exp.duration}</span>
                <span className="location">{exp.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
