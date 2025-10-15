import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const projects = [
    {
      title: "Anandam - simplified living for seniors (company project)",
      description: "A Platform dedicated to the senior citizens of india with trusted , geniune and verified data is provided about the senior care .",
      tech: ["React"," Next.js","Figma"],

    },
    {
      title: "EventEase",
      description: "Collaborative event manager with real-time updates, team workspaces, and advanced filtering capabilities, and registration portal",
      tech: ["Next.js", "Supabase"],
      
    },
    {
      title: "Daycare Site( company project)",
      description: "A user-friendly daycare website with various features.",
      tech: ["Vue.js", "Python", "FastAPI", "OpenWeather API"],
      
    },
    {
      title: "Investax.pro (company project)",
      description: "A comprehensive investment platform offering real-time market data, portfolio management, and advanced analytics tools for investors.",
      tech: ["React", "Python", ],
     
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
