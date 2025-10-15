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
      href: "https://linkedin.com"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-['Space_Grotesk']">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-card border-border p-6 hover:shadow-card transition-all duration-300 text-center group"
              >
                <div className="inline-flex p-4 bg-gradient-primary rounded-lg mb-4 group-hover:shadow-glow transition-all duration-300">
                  <info.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{info.label}</h3>
                <a 
                  href={info.href}
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  {info.value}
                </a>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Connect With Me</h3>
            
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;