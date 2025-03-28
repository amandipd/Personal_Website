import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["Frontend", "Backend", "AI/ML", "Other", "Course Project"];

  const projects = [
    {
      title: "Interactive AI Research Paper Analysis Chatbot",
      description: 
        "An AI-powered chatbot analyzes uploaded research paper PDFs by " +
        "converting them into searchable vector embeddings and generating " +
        "contextual answers from the Mistral AI API.",
      tags: ["AI/ML"],
      githubUrl: "https://github.com/amandipd/Interactive-AI-Research-Paper-Analysis-Chatbot",
      liveUrl: "https://amandipd-interactive-ai-research-paper-analysis-app-7b8koq.streamlit.app/",
      languages: ["Python"],
      timeframe: "Dec 2024 - Jan 2025"
    },
    {
      title: "Real-Time Typing Assistant with Autocorrect",
      description: 
        "An interactive typing application that improves typing speed and accuracy " +
        "with real-time autocorrect. It uses Levenshtein " +
        "distance and recursion to suggest corrections and offers multiplayer typing races for " +
        "multiple users.",
      tags: ["Course Project"],
      languages: ["Python"],
      timeframe: "Oct 2023 - Nov 2023"
    },

    {
      title: "2048",
      description: "A strategic puzzle game where players combine numbered tiles on a grid to reach the elusive 2048 tile. The implementation focuses on core mechanics like tile movement, merging, and board tilting in all four directions, using modular design and efficient algorithms.",
      tags: ["Course Project"],
      languages: ["Java"],
      timeframe: "Jan 2024 - Feb 2024"
    },

    {
      title: "UK House Prices and Salary Data Visualization",
      description: "This project visualizes UK median salaries and average house prices between 2000 and 2020 through interactive charts. It includes an area chart for house price trends and a comparison of male and female salaries.",
      tags: ["Frontend"],
      githubUrl: "https://github.com/amandipd/UK-House-Prices-and-Salary-Data-Visualization",
      liveUrl: "https://amandipd.github.io/UK-House-Prices-and-Salary-Data-Visualization/",
      languages: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      timeframe: "Nov 2024 - Dec 2024"
    },

    {
      title: "Flight Route Navigator",
      description: "A flight route planning program in Java that leverages Dijkstra's Algorithm to minimize travel distances between airports. It efficiently handles datasets of 19,000+ airports and 40,000+ flight connections using graph traversal techniques.",
      tags: ["Other"],
      githubUrl: "https://github.com/amandipd/Flight-Route-Navigator",
      languages: ["Java"],
      timeframe: "Apr 2024 - May 2024"
    },

    {
      title: "Distributed Log Aggregator",
      description: "This distributed log aggregation service offers a Flask-based microservice for centralized log management across multiple services. It provides RESTful POST and GET endpoints for logging service events, allowing developers to add log entries and retrieve logs within a specified time window. The system maintains a sliding time window of logs, automatically archiving entries that exceed the one-hour retention period.",
      tags: ["Backend"],
      githubUrl: "https://github.com/amandipd/Distributed-Log-Aggregate",
      languages: ["Python", "Flask"],
      timeframe: "March 2025 - Present"
    },
    
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredProjects = projects
    .sort((a, b) => {
      // First sort by present status
      const aIsPresent = a.timeframe.includes("Present");
      const bIsPresent = b.timeframe.includes("Present");
      if (aIsPresent !== bIsPresent) {
        return bIsPresent - aIsPresent;
      }

      // Then sort by date
      const aTimeframe = a.timeframe.trim();
      const bTimeframe = b.timeframe.trim();
      
      // Handle both single month and date range formats
      const aEndDate = aTimeframe.includes("-") 
        ? new Date(aTimeframe.split("-")[1].trim())
        : new Date(aTimeframe);
      const bEndDate = bTimeframe.includes("-")
        ? new Date(bTimeframe.split("-")[1].trim())
        : new Date(bTimeframe);
      
      // Sort in descending order (most recent first)
      return bEndDate - aEndDate;
    })
    .filter(project =>
      selectedTags.length === 0 || 
      project.tags.some(tag => selectedTags.includes(tag))
    );

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      
      {/* Filter Tags */}
      <div className="filter-tags">
        {tags.map(tag => (
          <button
            key={tag}
            className={`filter-tag filter-${tag.toLowerCase().replace(/[\/\s]/g, '-')} ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <p className="course-project-note">
        Course projects do not include GitHub repositories or public demos, as university policy prohibits their public display. If you'd like to view the code for any of these projects, feel free to reach out, and I'd be happy to share it with you!
      </p>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="timeframe">{project.timeframe}</span>
              </div>
              <p>{project.description}</p>
              <div className="languages">
                <h4>Tech Stack</h4>
                <div className="language-tags">
                  {project.languages.map(lang => (
                    <span key={lang} className="language-tag">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <svg height="20" width="20" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className={`project-tag tag-${tag.toLowerCase().replace(/[\/\s]/g, '-')}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;