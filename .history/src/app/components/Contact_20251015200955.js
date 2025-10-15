"use client";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'harshikabodekar02@gmail.com', href: 'mailto:your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+91 1234567891', href: 'tel:+911234567891' },
    { icon: MapPin, label: 'Location', value: 'Pune,India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/harshikabodekar' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-gray-700">{info.label}</h3>
                  <a href={info.href} className="text-blue-600 hover:text-blue-800 transition-colors">{info.value}</a>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, i) => {
                const SocialIcon = social.icon;
                return (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-white rounded-full shadow hover:shadow-lg transition-all hover:bg-blue-600 hover:text-white group"
                    aria-label={social.label}
                  >
                    <SocialIcon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            <div className="text-center">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5" />
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