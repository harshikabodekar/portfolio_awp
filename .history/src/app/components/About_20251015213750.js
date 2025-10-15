import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-12"></div>

          <div className="text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-8">
              I am Harshika Bodekar, a Computer Science student at Pimpri Chinchwad University.
              With developing expertise in computer science, I craft robust backend solutions.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-8">
              My journey is driven by a passion for building scalable, efficient systems that power modern applications. 
              I enjoy tackling complex challenges and exploring cutting-edge tech.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
