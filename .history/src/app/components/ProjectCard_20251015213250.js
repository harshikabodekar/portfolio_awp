"use client";
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-10 min-h-[420px] hover:border-blue-400/50 transition-all duration-300 group flex flex-col">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {project.tech.map((tech, index) => (
          <span 
            key={index}
            className="px-5 py-2.5 bg-blue-600/30 border border-blue-400/30 rounded-full text-base md:text-lg text-blue-200 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 flex-wrap">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 border-2 border-white/20 rounded-lg hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 text-lg md:text-xl font-semibold"
        >
          <Github className="w-6 h-6" />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-lg md:text-xl font-semibold"
        >
          <ExternalLink className="w-6 h-6" />
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
