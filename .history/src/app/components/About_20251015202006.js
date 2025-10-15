import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12"></div>

          <div className="mb-16 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless digital experiences. With expertise in modern web technologies, I bring 
              ideas to life through clean, efficient code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless digital experiences. With expertise in modern web technologies, I bring 
              ideas to life through clean, efficient code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="bg-card border-border p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-4 inline-flex p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
          </div>
      </div>
    </section>
  );
};

export default About;
