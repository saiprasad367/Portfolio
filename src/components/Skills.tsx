import { useState } from "react";
import { Code, Database, Shield, Brain, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Material UI", level: 82 }
      ]
    },
    backend: {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Flask", level: 78 },
        { name: "Django", level: 75 },
        { name: "SQL", level: 80 },
        { name: "API Design", level: 88 }
      ]
    },
    programming: {
      icon: Brain,
      title: "Programming & AI/ML",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 88 },
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 83 },
        { name: "OOP", level: 90 },
        { name: "Machine Learning", level: 78 }
      ]
    },
    tools: {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "n8n", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Chrome DevTools", level: 88 }
      ]
    },
    cybersecurity: {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "Security Analysis", level: 75 },
        { name: "Vulnerability Assessment", level: 72 },
        { name: "Network Security", level: 70 },
        { name: "Ethical Hacking", level: 68 },
        { name: "Risk Assessment", level: 75 },
        { name: "Security Protocols", level: 73 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, secure, and intelligent applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === key
                    ? "glass-card glow-blue text-primary"
                    : "glass-card hover:glow-purple text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="space-y-2"
                  style={{ 
                    animation: `fade-in 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `skill-bar 1s ease-out ${index * 0.1}s both`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-6 text-foreground">Other Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs", "JSON", "AJAX", "Responsive Design", "PWAs", 
              "Version Control", "Agile", "Problem Solving", "Team Collaboration",
              "Code Review", "Testing", "Debugging"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 glass-card text-sm hover:glow-blue transition-all duration-300 hover-scale"
                style={{ 
                  animation: `fade-in 0.3s ease-out ${index * 0.05}s both`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skill-bar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
      `}</style>
    </section>
  );
};

export default Skills;