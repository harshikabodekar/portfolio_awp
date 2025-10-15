"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-12">
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
          
          {/* Text Content - Centered like About page */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Harshika Bodekar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-12"></div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed">
              Computer Science Student | Frontend Developer
            </p>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed">
              Crafting elegant digital experiences with modern technologies. 
              Passionate about clean code, intuitive design, and building products that make a difference.
            </p>

            <div className="flex gap-6 justify-center">
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
