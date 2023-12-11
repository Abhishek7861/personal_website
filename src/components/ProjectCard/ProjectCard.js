import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({project}) {
  return (
    <div className='project-card'>
            <h3>Title: {project.title}</h3>
            <p><strong>Tech Stack:</strong> {project.TechStack.join(', ')}</p>
            <p><strong>Link:</strong> {project.Link}</p>
            <p><strong>About:</strong> {project.about}</p>
            <button className='project-button'>More Info</button>
    </div>
  )
}
