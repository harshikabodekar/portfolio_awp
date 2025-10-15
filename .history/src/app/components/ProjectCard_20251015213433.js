"use client";
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 h-[380px] hover:border-blue-400/50 transition-all duration-300 group flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1.5 bg-blue-600/30 border border-blue-400/30 rounded-full text-sm text-blue-200 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border-2 border-white/20 rounded-lg hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 text-sm font-semibold"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-sm font-semibold"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
