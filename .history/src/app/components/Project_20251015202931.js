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

export default Projects;
