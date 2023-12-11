import React from 'react';
import './ProjectList.css';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectList() {
  const projects = [
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" },
    { title: "Url Shortner", TechStack: ["Java", "Spring", "HTML", "CSS", "JS", "MongoDB"], Link: "localhost:8080", about: "about project" }]
  return (
    <div>
      <div class="project-title"><h2>My Projects</h2></div>
      <div class="project-grid">
        {projects.map((project, index) => (
          <div key={index}>
              <ProjectCard project={project}></ProjectCard>
          </div>
        ))}
      </div>
    </div>
  )
}
