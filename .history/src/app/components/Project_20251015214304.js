import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const projects = [
    {
      title: "Anandam - simplified living for seniors",
      description: "A Platform dedicated to the senior citizens of india with trusted , geniune and verified data is provided.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],

    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team workspaces, and advanced filtering capabilities.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with forecasts, interactive maps, and location-based recommendations.",
      tech: ["Vue.js", "Python", "FastAPI", "OpenWeather API"],
      
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing, context awareness, and custom training capabilities.",
      tech: ["React", "Python", "TensorFlow", "WebSockets"],
     
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
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
