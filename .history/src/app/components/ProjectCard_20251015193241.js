import React from 'react';

export default function ProjectCard({ project = {} }) {
  return (
    <article className="bg-white text-black rounded-lg p-4 shadow-md">
      <h3 className="font-semibold text-lg mb-2">Anandam project|| "Untitled Project"</h3>
      <p className="text-sm mb-4">{project.description || "An event managent site that manages teh ene."</p>
      {project.link && (
        <a
          className="text-blue-600 underline"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View
        </a>
      )}
    </article>
  );
}
