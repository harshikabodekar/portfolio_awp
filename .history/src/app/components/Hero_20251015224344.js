"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
              <Image 
                src="/profile.jpeg.jpeg" 
                alt="Harshika Bodekar" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Text Content - Centered like About page */}
          <div className="text-center px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Harshika Bodekar
            </h1>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-8 md:mb-12"></div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2">
              Computer Science Student | Frontend Developer
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-10 md:mb-12 leading-relaxed px-2 max-w-4xl mx-auto">
              Crafting elegant digital experiences with modern technologies. 
              Passionate about clean code, intuitive design, and building products that make a difference.
            </p>

            <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
              <a 
                href="https://github.com/harshikabodekar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border-2 border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/harshikabodekar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border-2 border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:harshikabodekar02@gmail.com"
                className="p-4 rounded-full border-2 border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
