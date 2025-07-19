import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Experience",
      links: [
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Certifications", href: "#certifications" },
        { name: "Resume", href: "#resume" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/saiprasad367", external: true },
        { name: "LinkedIn", href: "https://linkedin.com/in/saiprasad2523", external: true },
        { name: "Email", href: "mailto:saiprasad2523@gmail.com", external: true }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/saiprasad367",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/saiprasad2523",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:saiprasad2523@gmail.com",
      label: "Email"
    }
  ];

  const handleLinkClick = (href: string, external: boolean = false) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-background border-t border-border/30">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-card hover:glow-blue group"
        size="icon"
      >
        <ArrowUp size={20} className="group-hover:scale-110 transition-transform" />
      </Button>

      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">SaiPrasad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer & AI/ML enthusiast passionate about creating innovative solutions 
                that bridge technology and real-world impact.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card hover:glow-blue transition-all duration-300 hover-scale group"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link.href, link.external)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-muted-foreground">
              <span>© {currentYear} Chindam SaiPrasad. All rights reserved.</span>
            </div>

          

            {/* Additional Info */}
            <div className="text-sm text-muted-foreground">
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-primary/30 rounded-full float opacity-40" />
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-secondary/30 rounded-full float opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary/20 rounded-full float opacity-50" style={{ animationDelay: '2s' }} />
      </div>
    </footer>
  );
};

export default Footer;