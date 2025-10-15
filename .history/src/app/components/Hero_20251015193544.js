""
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white flex items-center justify-center text-2xl font-bold text-gray-800">HB</div>
          </div>
          
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-primary rounded-full">
            <p className="text-sm font-medium text-foreground">Welcome to my portfolio</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Space_Grotesk'] bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Harshika Bodekar
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Computer Science Student | Frontend Developer | 
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant digital experiences with modern technologies. 
            Passionate about clean code, intuitive design, and building products that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button onClick={() => {}} className="px-6 py-3 bg-white text-slate-900 rounded-full font-medium">View My Work</button>
            <button onClick={() => {}} className="px-6 py-3 border border-white rounded-full">Get In Touch</button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
            <a href="mailto:your.email@example.com" className="text-white">Email</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
