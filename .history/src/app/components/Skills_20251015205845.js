"use client";
import React from 'react';
import { Code, Database, Layout, Server, Globe, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "REST APIs", "Java"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
    },
    {
      icon: Layout,
      title: "Tools & Frameworks",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Postman", "Figma"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["Responsive Design", "Progressive Web Apps", "SEO", "Web Performance"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["UI Design", "Wireframing", "Prototyping", "User Research"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-12"></div>

          <p className="text-center text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            A comprehensive set of technical skills and tools I use to build modern, scalable applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="border-2 border-white/20 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm bg-white/5 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-600/30 rounded-lg group-hover:bg-blue-600/50 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm md:text-base text-gray-200 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        
          </div>
        </div>
      
    </section>
  );
};

export default Skills;
