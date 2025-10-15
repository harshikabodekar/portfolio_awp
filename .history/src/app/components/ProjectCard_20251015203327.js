"use client";
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project = {} }) {
  const { title, description, tech = [], github, demo } = project;
  
  return (
    <article className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 group">
      <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-blue-400 transition-colors">
        {title || "Untitled Project"}
      </h3>
      
      <p className="text-gray-300 text-base mb-4 leading-relaxed">
        {description || "An event management site that manages the event."}
      </p>
      
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((technology, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex gap-4 mt-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
        )}
        
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </article>
  );
}
