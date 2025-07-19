import { GraduationCap, Calendar, Award, TrendingUp } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "CMR COLLEGE OF ENGINEERING & TECHNOLOGY",
      degree: "Bachelor of Technology - AI & Machine Learning",
      duration: "2023 - 2027",
      gpa: "8.2 CGPA",
      description: "Specializing in Artificial Intelligence and Machine Learning with focus on practical applications and real-world problem solving.",
      highlights: [
        "Data Structures & Algorithms",
        "Machine Learning Fundamentals", 
        "Software Engineering",
        "Database Management Systems",
        "Web Technologies"
      ],
      status: "Pursuing"
    },
    {
      institution: "SHIVANI JUNIOR COLLEGE",
      degree: "Intermediate - MPC (Mathematics, Physics, Chemistry)",
      duration: "2021 - 2023",
      gpa: "9.77 CGPA",
      description: "Completed intermediate education with excellent academic performance in Mathematics, Physics, and Chemistry.",
      highlights: [
        "Advanced Mathematics",
        "Physics & Applied Sciences",
        "Chemistry & Lab Work",
        "Problem Solving",
        "Scientific Research"
      ],
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation through academic excellence and continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ 
                  animation: `fade-in 0.6s ease-out ${index * 0.3}s both`
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 glow-blue z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-card p-6 hover:glow-blue transition-all duration-500 hover-scale">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        edu.status === 'Pursuing' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        {edu.status}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={16} className="mr-1" />
                        {edu.duration}
                      </div>
                    </div>

                    {/* Institution */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {edu.institution}
                    </h3>

                    {/* Degree */}
                    <h4 className="text-primary font-medium mb-3">
                      {edu.degree}
                    </h4>

                    {/* GPA */}
                    <div className="flex items-center mb-4">
                      <Award className="text-secondary mr-2" size={18} />
                      <span className="font-semibold text-secondary">{edu.gpa}</span>
                      <TrendingUp className="text-green-400 ml-2" size={16} />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Key Subjects:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <span 
                            key={highlightIndex}
                            className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/30"
                          >
                            {highlight}
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

        {/* Academic Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Academic Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 hover:glow-blue transition-all duration-500">
              <div className="text-3xl font-bold gradient-text mb-2">9.77</div>
              <div className="text-muted-foreground">Intermediate CGPA</div>
            </div>
            <div className="glass-card p-6 hover:glow-purple transition-all duration-500">
              <div className="text-3xl font-bold gradient-text mb-2">8.2</div>
              <div className="text-muted-foreground">Current B.Tech CGPA</div>
            </div>
            <div className="glass-card p-6 hover:glow-blue transition-all duration-500">
              <div className="text-3xl font-bold gradient-text mb-2">AI/ML</div>
              <div className="text-muted-foreground">Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;