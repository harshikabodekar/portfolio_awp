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
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
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
