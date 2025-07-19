import { Button } from "@/components/ui/button";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

const Certifications = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: "CodeQuest DSA",
      issuer: "CodeQuest Platform",
      date: "2024",
      description: "Advanced Data Structures and Algorithms certification demonstrating proficiency in problem-solving and algorithmic thinking.",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Time Complexity"],
      credentialUrl: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/b0596df8-03b9-427f-a96f-36c33e72667f.jpg",
      category: "Programming"
    },
    {
      id: 2,
      title: "Scaler OTT Platforms",
      issuer: "Scaler Academy",
      date: "2024",
      description: "Comprehensive understanding of OTT platform architecture, streaming technologies, and scalable system design.",
      skills: ["System Design", "Streaming", "Backend Architecture", "Scalability"],
      credentialUrl: "https://moonshot.scaler.com/s/sl/JCEWIuWiS8",
      category: "System Design"
    },
    {
      id: 3,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2024",
      description: "Fundamental SQL skills including queries, joins, aggregations, and database management.",
      skills: ["SQL", "Database Management", "Queries", "Data Analysis"],
      credentialUrl: "https://www.hackerrank.com/certificates/f8ed83a049c7",
      category: "Database"
    },
    {
      id: 4,
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Deloitte via Forage",
      date: "2024",
      description: "Hands-on cybersecurity experience including threat analysis, vulnerability assessment, and security protocols.",
      skills: ["Threat Analysis", "Vulnerability Assessment", "Security Protocols", "Risk Management"],
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_u5Z8eWcuMNhCj5NT7_1742746874205_completion_certificate.pdf",
      category: "Cybersecurity"
    },
    {
      id: 5,
      title: "Technology Job Simulation",
      issuer: "Deloitte via Forage",
      date: "2024",
      description: "Real-world technology consulting experience including project management and technical solutions.",
      skills: ["Project Management", "Technology Consulting", "Problem Solving", "Client Communication"],
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_u5Z8eWcuMNhCj5NT7_1742124868619_completion_certificate.pdf",
      category: "Consulting"
    },
    {
      id: 6,
      title: "ChatGPT Mastery",
      issuer: "Coursera",
      date: "2024",
      description: "Advanced techniques for leveraging AI tools for productivity and development workflows.",
      skills: ["AI Tools", "Prompt Engineering", "Productivity", "Automation"],
      credentialUrl: "#",
      category: "AI/ML"
    }
  ];

  const categories = ["All", "Programming", "System Design", "Database", "Cybersecurity", "Consulting", "AI/ML"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and professional development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "glass-card glow-blue text-primary"
                  : "glass-card hover:glow-purple text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="glass-card p-6 hover:glow-blue transition-all duration-500 hover-scale group relative"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{ 
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Award size={20} className="text-background" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar size={14} className="mr-1" />
                  {cert.date}
                </div>
              </div>

              {/* Title and Issuer */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-green-400 text-sm">
                  <CheckCircle size={16} className="mr-1" />
                  Verified
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:glow-purple transition-all duration-300"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                  disabled={cert.credentialUrl === "#"}
                >
                  <ExternalLink size={14} className="mr-1" />
                  {cert.credentialUrl === "#" ? "Coming Soon" : "View"}
                </Button>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 border-2 border-primary/50 rounded-xl transition-opacity duration-300 pointer-events-none ${
                hoveredCert === cert.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center glass-card p-4 hover:glow-blue transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Total Certificates</div>
          </div>
          <div className="text-center glass-card p-4 hover:glow-purple transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">6</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center glass-card p-4 hover:glow-blue transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">2024</div>
            <div className="text-sm text-muted-foreground">Latest Year</div>
          </div>
          <div className="text-center glass-card p-4 hover:glow-purple transition-all duration-500">
            <div className="text-2xl font-bold gradient-text mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;