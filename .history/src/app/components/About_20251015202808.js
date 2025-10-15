import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-12"></div>

          <div className="mb-16 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8">
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless digital experiences. With expertise in modern web technologies, I bring 
              ideas to life through clean, efficient code.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed">
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
