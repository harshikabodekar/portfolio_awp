"use client";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshikabodekar02@gmail.com",
      href: "mailto:harshikabodekar02@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9130343030",
      href: "tel:+919130343030"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/harshikabodekar"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harshikabodekar"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/harshikabodekar"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-400 mx-auto mb-12"></div>

          <p className="text-center text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="border-2 border-white/20 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm bg-white/5 text-center group"
              >
                <div className="inline-flex p-4 bg-blue-600/30 rounded-lg mb-6 group-hover:bg-blue-600/50 transition-all duration-300">
                  <info.icon className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-3">{info.label}</h3>
                <a 
                  href={info.href}
                  className="text-xl md:text-2xl text-white hover:text-blue-400 transition-colors duration-300 break-words"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          <div className="border-2 border-white/20 rounded-xl p-10 backdrop-blur-sm bg-white/5">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            
            <div className="flex justify-center gap-6 mb-10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border-2 border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="mailto:harshikabodekar02@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <Mail className="w-6 h-6" />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;