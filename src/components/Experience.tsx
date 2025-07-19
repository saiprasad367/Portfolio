import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "AI Intern",
      company: "Edunet Foundation + Microsoft",
      duration: "2025",
      location: "Remote",
      type: "Internship",
      status: "Current",
      description: "Working on cutting-edge AI projects in collaboration with Microsoft Azure services. Developing machine learning models and implementing AI solutions for real-world applications.",
      responsibilities: [
        "Developing AI/ML models using Microsoft Azure AI services",
        "Implementing neural networks for image and text processing",
        "Collaborating with cross-functional teams on AI projects",
        "Optimizing model performance and deployment strategies"
      ],
      technologies: ["Python", "Azure AI", "TensorFlow", "Machine Learning", "Neural Networks"],
      companyUrl: "https://edunetfoundation.org/"
    },
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "CodTech IT Solutions",
      duration: "2024",
      location: "Hyderabad, India",
      type: "Internship",
      status: "Completed",
      description: "Developed and maintained full-stack web applications using modern technologies. Collaborated with development teams to create responsive, user-friendly interfaces and robust backend systems.",
      responsibilities: [
        "Built responsive web applications using React and Node.js",
        "Designed and implemented RESTful APIs",
        "Integrated databases with backend services",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML/CSS"],
      companyUrl: "https://codtech.com/"
    },
    {
      id: 3,
      role: "Cybersecurity Intern",
      company: "Prodigy InfoTech",
      duration: "2024",
      location: "Remote",
      type: "Internship", 
      status: "Completed",
      description: "Gained hands-on experience in cybersecurity practices, vulnerability assessment, and security protocol implementation. Worked on identifying and mitigating security risks in web applications.",
      responsibilities: [
        "Conducted vulnerability assessments on web applications",
        "Analyzed security threats and implemented countermeasures",
        "Developed security documentation and best practices",
        "Assisted in penetration testing and security audits"
      ],
      technologies: ["Security Tools", "Vulnerability Assessment", "Penetration Testing", "Risk Analysis"],
      companyUrl: "https://prodigyinfotech.dev/"
    },
    {
      id: 4,
      role: "Web Development Intern",
      company: "CodSoft",
      duration: "2024",
      location: "Remote",
      type: "Internship",
      status: "Completed",
      description: "Focused on frontend web development, creating visually appealing and interactive user interfaces. Worked on multiple client projects and learned industry best practices.",
      responsibilities: [
        "Developed responsive websites using HTML, CSS, and JavaScript",
        "Created interactive user interfaces with modern design principles",
        "Collaborated with designers to implement pixel-perfect designs",
        "Optimized websites for performance and accessibility"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      companyUrl: "https://codsoft.in/"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on internships and real-world project experience
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ 
                  animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-6 h-6 rounded-full transform md:-translate-x-1/2 z-10 flex items-center justify-center ${
                  exp.status === 'Current' ? 'bg-primary glow-blue' : 'bg-secondary glow-purple'
                }`}>
                  <Briefcase size={14} className="text-background" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-card p-6 hover:glow-blue transition-all duration-500 hover-scale">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-1">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          exp.status === 'Current' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-secondary/20 text-secondary'
                        }`}>
                          {exp.status}
                        </span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={14} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="hover:glow-purple transition-all duration-300"
                        onClick={() => window.open(exp.companyUrl, '_blank')}
                      >
                        <ExternalLink size={14} />
                      </Button>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-primary font-medium mb-2">
                      {exp.company}
                    </h4>

                    {/* Location */}
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <MapPin size={14} className="mr-1" />
                      {exp.location} • {exp.type}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h5 className="font-medium text-foreground mb-2">Key Responsibilities:</h5>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center glass-card p-6 hover:glow-blue transition-all duration-500">
            <div className="text-3xl font-bold gradient-text mb-2">4+</div>
            <div className="text-muted-foreground">Internships</div>
          </div>
          <div className="text-center glass-card p-6 hover:glow-purple transition-all duration-500">
            <div className="text-3xl font-bold gradient-text mb-2">2024-25</div>
            <div className="text-muted-foreground">Active Years</div>
          </div>
          <div className="text-center glass-card p-6 hover:glow-blue transition-all duration-500">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-muted-foreground">Tech Domains</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;