import React from 'react';
import './ProjectList.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import myData from '../../data/project-info.json';

export default function ProjectList() {
  return (
    <div>
      <div class="project-title"><h2>My Projects</h2></div>
      <div class="project-grid">
        {myData.projects.map((project, index) => (
          <div key={index}>
              <ProjectCard project={project}></ProjectCard>
          </div>
        ))}
      </div>
    </div>
  )
}
