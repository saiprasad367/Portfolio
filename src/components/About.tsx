import { Brain, Code, Database, Globe, Shield, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Java & Python Pro",
      description: "Expert in object-oriented programming and algorithm design"
    },
    {
      icon: Shield,
      title: "Cybersecurity Explorer", 
      description: "Passionate about digital security and ethical hacking"
    },
    {
      icon: Brain,
      title: "AI/ML Projects",
      description: "Building intelligent solutions with machine learning"
    },
    {
      icon: Database,
      title: "Full Stack Development",
      description: "Creating end-to-end web applications"
    },
    {
      icon: Globe,
      title: "API Architecture",
      description: "Designing scalable and robust backend systems"
    },
    {
      icon: Zap,
      title: "Real-world Impact",
      description: "Focused on solving problems that matter"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist on a mission to bridge the gap between innovation and impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="glass-card p-8 hover:glow-blue transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Full Stack Developer and AI/ML enthusiast currently pursuing B.Tech in Artificial Intelligence & Machine Learning at CMR College of Engineering & Technology, Hyderabad. With a strong academic foundation (8.2 GPA) and hands-on experience through multiple internships, I'm passionate about creating innovative solutions that make a real difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across web development, machine learning, and cybersecurity. I enjoy tackling complex problems and transforming ideas into functional, user-friendly applications. Whether it's building responsive web interfaces or implementing AI algorithms, I'm always eager to learn and apply cutting-edge technologies.
              </p>
            </div>

            <div className="glass-card p-8 hover:glow-purple transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should serve humanity. My goal is to contribute to projects that solve real-world problems, whether it's through secure web applications, intelligent systems, or innovative digital solutions. I'm constantly exploring new technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 hover:glow-blue transition-all duration-500 hover-scale group"
                  style={{ 
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-background" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "4+", label: "Internships" },
            { number: "6+", label: "Projects" },
            { number: "10+", label: "Certifications" },
            { number: "8.2", label: "CGPA" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center glass-card p-6 hover:glow-purple transition-all duration-500"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;