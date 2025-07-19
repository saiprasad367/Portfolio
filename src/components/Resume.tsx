import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Eye, FileText } from "lucide-react";

const Resume = () => {
  const resumeUrl = "https://drive.google.com/file/d/1QzkRFG8FVtJPj6vEpjtBIaYRioBIPq3A/view?usp=drive_link"; // Replace with actual resume URL when available

  const resumeHighlights = [
    {
      section: "Professional Summary",
      description: "Full Stack Developer & AI/ML enthusiast with expertise in modern web technologies"
    },
    {
      section: "Technical Skills",
      description: "Proficient in Java, Python, React, Node.js, and machine learning frameworks"
    },
    {
      section: "Education",
      description: "B.Tech in AI/ML from CMR College with 8.2 CGPA"
    },
    {
      section: "Experience",
      description: "4+ internships across Full Stack, AI/ML, and Cybersecurity domains"
    },
    {
      section: "Projects",
      description: "Multiple web applications and AI projects with live deployments"
    },
    {
      section: "Certifications",
      description: "15+ industry certifications from platforms like HackerRank, Coursera, and Deloitte"
    }
  ];

  const handleDownload = () => {
    // This would trigger the resume download
    // For now, we'll show an alert since we don't have the actual file
     const downloadUrl = "https://drive.google.com/uc?export=download&id=1QzkRFG8FVtJPj6vEpjtBIaYRioBIPq3A";
  window.open(downloadUrl, '_blank');
    alert("Resume downloaded ");
  };

  const handlePreview = () => {
    // This would open the resume in a new tab
    const previewUrl = "https://drive.google.com/file/d/1QzkRFG8FVtJPj6vEpjtBIaYRioBIPq3A/preview";
  window.open(previewUrl, '_blank');
    //alert("Resume preview will be available soon!");
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my comprehensive resume to learn more about my professional journey
          </p>
        </div>

        {/* Resume Preview Section */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-8 hover:glow-blue transition-all duration-500">
            {/* Resume Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                <FileText size={32} className="text-background" />
              </div>
              <h3 className="text-2xl font-semibold gradient-text mb-2">
                Chindam SaiPrasad
              </h3>
              <p className="text-muted-foreground">
                Full Stack Developer | AI/ML Enthusiast | Cybersecurity Explorer
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="glass-card hover:glow-blue group px-8 py-6 text-lg"
                onClick={handleDownload}
              >
                <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Download Resume
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card hover:glow-purple group px-8 py-6 text-lg border-secondary hover:border-secondary"
                onClick={handlePreview}
              >
                <Eye className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Preview Resume
              </Button>
            </div>

            {/* Resume Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 hover:glow-purple transition-all duration-500 hover-scale"
                  style={{ 
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <h4 className="font-semibold text-primary mb-2">{highlight.section}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="glass-card p-6 text-center">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:saiprasad2523@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <span>📧 saiprasad2523@gmail.com</span>
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a 
                href="tel:+919391573505"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <span>📞 +91-9391573505</span>
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <span className="text-muted-foreground">📍 Hyderabad, India</span>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="glass-card hover:glow-blue transition-all duration-300"
              onClick={() => window.open("https://github.com/saiprasad367", '_blank')}
            >
              <ExternalLink size={16} className="mr-2" />
              GitHub Profile
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="glass-card hover:glow-purple transition-all duration-300"
              onClick={() => window.open("https://linkedin.com/in/saiprasad2523", '_blank')}
            >
              <ExternalLink size={16} className="mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>

        {/* Resume Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center glass-card p-4 hover:glow-blue transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">2</div>
            <div className="text-sm text-muted-foreground">Pages</div>
          </div>
          <div className="text-center glass-card p-4 hover:glow-purple transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center glass-card p-4 hover:glow-blue transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Skills Listed</div>
          </div>
          <div className="text-center glass-card p-4 hover:glow-purple transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">6+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;