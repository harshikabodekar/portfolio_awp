"use client";
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 group">
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-3 mb-6">
        {project.tech.map((tech, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-blue-600/30 border border-blue-400/30 rounded-full text-base text-blue-200 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border-2 border-white/20 rounded-lg hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 text-lg font-semibold"
        >
          <Github className="w-5 h-5" />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-lg font-semibold"
        >
          <ExternalLink className="w-5 h-5" />
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
