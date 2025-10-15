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
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-['Space_Grotesk']">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12"></div>

         
        </div>
      </div>
    </section>
  );
};

export default Projects;
