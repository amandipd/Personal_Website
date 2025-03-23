import React from "react";
import "../styles/Education.css";
import collegiateLogo from "../company-logos/collegiate.jpeg";
import berkeleyLogo from "../company-logos/berkeley.jpeg";

const Education = () => {
  const experiences = [
    {
      title: "College Admissions Counselor",
      company: "Collegiate Consulting",
      companyUrl: "https://www.collegiate-consulting.com/",
      duration: "Oct 2023 - Present",
      location: "Berkeley, CA",
      logoUrl: collegiateLogo,
      description: "Providing guidance to high school students on college applications, course selection, and academic planning, helping students get admitted to schools such as UCLA, Duke, Vanderbilt, and Princeton."
    },
    {
      title: "Course Mentor",
      company: "Computer Science Mentors",
      companyUrl: "https://csmentors.studentorg.berkeley.edu/#/",
      duration: "Aug 2024 - Dec 2024",
      location: "Berkeley, CA",
      logoUrl: berkeleyLogo,
      description: "Tutor for UC Berkeley's CS 61B: Data Structures & Algorithms course (~950 students)"
    }
  ];

  const courses = [
    {
      category: "Computer Science",
      items: [
        { name: "Structure and Interpretation of Computer Programs", code: "CS 61A" },
        { name: "Data Structures and Algorithms", code: "CS 61B" },
        { name: "Discrete Mathematics and Probability Theory", code: "CS 70" },
        { name: "Full-Stack Development", code: "CS 198" }
      ]
    },
    {
      category: "Statistics & Data Science",
      items: [
        { name: "Foundations of Data Science", code: "DATA 8" },
        { name: "Special Topics in Data Science", code: "DATA 94" },
        { name: "Concepts of Probability", code: "STAT 134" }
      ]
    },
    {
      category: "Mathematics",
      items: [
        { name: "Multivariable Calculus", code: "MATH 53" },
        { name: "Linear Algebra & Differential Equations", code: "MATH 54" },
        { name: "Discrete Mathematics", code: "MATH 55" }
      ]
    }
  ];

  return (
    <div className="education-container">
      <h1>Education</h1>
      
      {/* Educational Experience Section */}
      <section className="education-experience">
        <h2>Educational Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="company-logo">
                <img src={exp.logoUrl} alt={`${exp.company} logo`} />
              </div>
              <div className="card-header">
                <div className="company-info">
                  <h3>{exp.title}</h3>
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
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2>Relevant Coursework</h2>
        <div className="courses-grid">
          {courses.map((category, index) => (
            <div key={index} className="course-category">
              <h3>{category.category}</h3>
              <div className="course-list">
                {category.items.map((course, courseIndex) => (
                  <div key={courseIndex} className="course-item">
                    <div className="course-info">
                      <span className="course-code">{course.code}</span>
                      <span className="course-name">{course.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education; 