"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
              <Image 
                src="/profile.jpeg.jpeg" 
                alt="Harshika Bodekar" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Harshika Bodekar
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
              Computer Science Student | Frontend Developer
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Crafting elegant digital experiences with modern technologies. 
              Passionate about clean code, intuitive design, and building products that make a difference.
            </p>

            <div className="flex gap-6 justify-center md:justify-start">
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
