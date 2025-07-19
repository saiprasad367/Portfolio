import dictionaryImage from "@/assets/project-dictionary.jpg";
import movieSearchImage from "@/assets/project-movie-search.jpg";
import translatorImage from "@/assets/project-translator.jpg";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Eye, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Web Dictionary",
      description: "A comprehensive online dictionary application with instant search, detailed definitions, pronunciations, and examples. Features a clean, responsive interface built with modern web technologies.",
      image: dictionaryImage,
      technologies: ["HTML5", "CSS3", "JavaScript", "Dictionary API", "Responsive Design"],
      liveUrl: "https://saiprasad367.github.io/Dictionary-/",
      githubUrl: "https://github.com/saiprasad367/Dictionary-",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Movie Search Website", 
      description: "An interactive movie discovery platform that allows users to search, filter, and explore movies with detailed information, ratings, and reviews. Integrated with external movie APIs for real-time data.",
      image: movieSearchImage,
      technologies: ["React", "JavaScript", "Movie API", "CSS3", "Responsive Design"],
      liveUrl: "https://movie-search-ivory.vercel.app/",
      githubUrl: "https://github.com/saiprasad367/movie-search",
      category: "React Application"
    },
    {
      id: 3,
      title: "NLP Language Translator",
      description: "A sophisticated natural language processing application that translates text between multiple languages using Google Translate API. Built with Flask backend for efficient processing and API integration.",
      image: translatorImage,
      technologies: ["Python", "Flask", "Google Translate API", "NLP", "REST API"],
      liveUrl: "#",
      githubUrl: "https://github.com/saiprasad367/nlp-translator",
      category: "AI/ML Project"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card p-6 hover:glow-blue transition-all duration-500 hover-scale group relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      disabled={project.liveUrl === "#"}
                    >
                      <Eye size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:glow-blue transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    disabled={project.liveUrl === "#"}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {project.liveUrl === "#" ? "Coming Soon" : "Live Demo"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:glow-purple transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Code size={16} />
                  </Button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-primary/50 rounded-xl transition-opacity duration-300 pointer-events-none ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="glass-card hover:glow-purple px-8 py-3"
            onClick={() => window.open("https://github.com/saiprasad367", '_blank')}
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;