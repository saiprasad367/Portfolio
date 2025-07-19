import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const scriptURL = "https://script.google.com/macros/s/AKfycbztyLJBwRo1tA8xpbwrW0rD1OEqivtvv7RZsx-VWUkIWD8r0mZbnnsLXFO9Cy7cqak/exec";
const form = new FormData();
form.append("name", formData.name);
form.append("email", formData.email);
form.append("subject", formData.subject);
form.append("message", formData.message);


  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      throw new Error("Google Apps Script returned error");
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saiprasad2523@gmail.com",
      href: "mailto:saiprasad2523@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9391573505",
      href: "tel:+919391573505"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/saiprasad367",
      color: "hover:glow-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/saiprasad2523",
      color: "hover:glow-blue"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:saiprasad2523@gmail.com",
      color: "hover:glow-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 hover:glow-blue transition-all duration-500">
              <h3 className="text-2xl font-semibold gradient-text mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on innovative projects, 
                or simply having a conversation about technology and its possibilities. Whether you're 
                looking for a dedicated developer, have a project idea, or want to connect professionally, 
                feel free to reach out!
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a 
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 glass-card hover:glow-purple transition-all duration-300 hover-scale group"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                        <Icon size={20} className="text-background" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 hover:glow-purple transition-all duration-500">
              <h4 className="text-lg font-semibold mb-6 text-foreground">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass-card ${social.color} transition-all duration-300 hover-scale group`}
                    >
                      <Icon size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 hover:glow-blue transition-all duration-500">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <MessageCircle size={20} className="text-background" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-card border-border/30 focus:border-primary focus:glow-blue transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card border-border/30 focus:border-primary focus:glow-blue transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass-card border-border/30 focus:border-primary focus:glow-blue transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-card border-border/30 focus:border-primary focus:glow-blue transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full glass-card hover:glow-purple group px-8 py-6 text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-background border-t-transparent mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;