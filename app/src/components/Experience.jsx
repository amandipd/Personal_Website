import React from "react";
import "../styles/Experience.css";
import surebetLogo from "../company-logos/surebet.png";
import cvsLogo from "../company-logos/cvs.png";

const experiences = [
  {
    company: "CVS Health",
    companyUrl: "http://cvshealth.com/",
    position: "Software Engineer Intern",
    duration: "May 2025 - August 2025",
    location: "Scottsdale, AZ",
    logoUrl: cvsLogo,
  },

  {
    company: "Surebet Jobs | Part-Time",
    companyUrl: "https://surebetjobs.com/",
    position: "Backend Software Engineer Intern",
    duration: "Jan 2025 - Present",
    location: "Berkeley, CA",
    logoUrl: surebetLogo,
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
