import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with React and deployed on Netlify.',
    link: 'https://yourportfolio.example.com'
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A simple weather forAppecasting app using OpenWeather API.',
    link: 'https://github.com/yourusername/weather-app'
  },
  {
    id: 3,
    title: 'To-Do List',
    description: 'A task manager app with React hooks and localStorage.',
    link: 'https://github.com/yourusername/todo-app'
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
