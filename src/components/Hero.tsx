import { useState, useEffect } from "react";
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Full Stack Developer",
    "AI/ML Enthusiast", 
    "Cyber Explorer",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full float opacity-60" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-primary rounded-full float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-60 right-10 w-3 h-3 bg-secondary rounded-full float opacity-70" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Greeting */}
        <div className="mb-6 opacity-100 animate-fade-in">
          <span className="text-lg text-primary/80 font-medium">Hi there! 👋 I'm</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-100 animate-fade-in bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
          Chindam SaiPrasad
        </h1>

        {/* Static Role */}
        <div className="mb-8 opacity-100 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-2">
            Full Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-medium">
            AI/ML Enthusiast | Cybersecurity Explorer
          </p>
        </div>

        {/* Typing Title */}
        <div className="mb-8 opacity-100 animate-fade-in">
          <span className="text-lg md:text-xl font-medium text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed opacity-100 animate-fade-in">
          Passionate about creating innovative solutions with cutting-edge technology. 
          Building the future, one line of code at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
          <Button 
            size="lg" 
            className="glass-card hover:glow-blue group px-8 py-6 text-lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
            <ExternalLink className="ml-2 group-hover:scale-110 transition-transform" size={20} />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-card hover:glow-purple group px-8 py-6 text-lg border-secondary hover:border-secondary"
            onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
          >
            Download Resume
            <Download className="ml-2 group-hover:scale-110 transition-transform" size={20} />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
          <a 
            href="https://github.com/saiprasad367" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:glow-blue transition-all duration-300 hover-scale group"
          >
            <Github size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://linkedin.com/in/saiprasad2523" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:glow-blue transition-all duration-300 hover-scale group"
          >
            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:saiprasad2523@gmail.com"
            className="p-3 glass-card hover:glow-purple transition-all duration-300 hover-scale group"
          >
            <Mail size={24} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;