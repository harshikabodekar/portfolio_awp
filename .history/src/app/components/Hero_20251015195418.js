"use client";
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white pt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-800">HB</div>
          </div>
          
    
          
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent px-4">
            Harshika Bodekar
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-light px-4">
            Computer Science Student | Frontend Developer
          </p>
          
          <p className="text-sm sm:text-base md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Crafting elegant digital experiences with modern technologies. 
            Passionate about clean code, intuitive design, and building products that make a difference.
          </p>

          {/* <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button onClick={() => {}} className="px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto">View My Work</button>
            <button onClick={() => {}} className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-colors w-full sm:w-auto">Get In Touch</button>
          </div> */}

          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-sm sm:text-base px-4">
            <a href="https://github.com/harshikabodekar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/harshikabodekar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="mailto:harshikabodekar02@gmail.com" className="text-white hover:text-blue-400 transition-colors">Email</a>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
