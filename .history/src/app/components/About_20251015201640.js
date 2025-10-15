import React from 'react';

const About = () => {
  return (
     <section id="about" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
          <p className="text-lg text-gray-200 mb-4">
            I am Harshika Bodekar, a Computer Science student at Pimpri Chinchwad University.
            With developing expertise in computer science. 
            I craft robust backend solutions.
          </p>
          <p className="text-lg text-gray-200 mb-6">
            My journey is driven by a passion for building scalable, 
            efficient systems that power modern applications. 
            I enjoy tackling complex challenges and exploring cutting-edge tech.
          </p>
        </div>
        <div className="mt-12 text-center">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless digital experiences. With expertise in modern web technologies, I bring 
              ideas to life through clean, efficient code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
      </div>
    </section>
  );
};

export default About;
