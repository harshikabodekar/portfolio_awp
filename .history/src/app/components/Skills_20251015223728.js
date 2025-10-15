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
      skills: [ "Python", "C++", "Java"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "Supabase", "MySQL"]
    },
    {
      icon: Layout,
      title: "Tools & Frameworks",
      skills: ["Git", "GitHub", "VS Code", "Figma"]
    },
   
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["UI Design", "Wireframing", "Prototyping", "User Research"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-8 md:mb-12"></div>

          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed px-2">
            A comprehensive set of technical skills and tools I use to build modern, scalable applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="border-2 border-white/20 rounded-xl p-4 sm:p-5 md:p-6 min-h-[260px] sm:min-h-[280px] hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm bg-white/5 group flex flex-col"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-blue-600/30 rounded-lg group-hover:bg-blue-600/50 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 flex-1 content-start">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs sm:text-sm text-gray-200 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300"
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
