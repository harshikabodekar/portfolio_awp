"use client";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
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
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-sm font-semibold mb-2">{info.label}</h3>
                <a href={info.href} className="text-blue-600 underline">{info.value}</a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="text-blue-600">{s.label}</a>
              ))}
            </div>

            <div className="text-center">
              <a href="mailto:your.email@example.com" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">Send Me an Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;