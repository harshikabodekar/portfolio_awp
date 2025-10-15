"use client";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 h-[320px] hover:border-blue-400/50 transition-all duration-300 group flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1.5 bg-blue-600/30 border border-blue-400/30 rounded-full text-sm text-blue-200 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
