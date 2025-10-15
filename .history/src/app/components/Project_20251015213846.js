import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team workspaces, and advanced filtering capabilities.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with forecasts, interactive maps, and location-based recommendations.",
      tech: ["Vue.js", "Python", "FastAPI", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing, context awareness, and custom training capabilities.",
      tech: ["React", "Python", "TensorFlow", "WebSockets"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-12"></div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
