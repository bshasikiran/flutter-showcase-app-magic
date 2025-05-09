
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Terminal, Code, Star, Rocket } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: {
    name: string;
    level: number;
  }[];
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skillsData: Skill[] = [
    {
      category: "Languages",
      icon: <Code size={24} className="text-primary" />,
      items: [
        { name: "Python", level: 95 },
        { name: "PHP", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Bash", level: 75 },
        { name: "JAVA", level: 80 }
      ]
    },
    {
      category: "Frameworks",
      icon: <Star size={24} className="text-secondary" />,
      items: [
        { name: "Scikit-Learn", level: 90 },
        { name: "NLP", level: 85 },
        { name: "SpaCy", level: 80 },
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 85 },
        { name: "Django", level: 90 },
        { name: "Flask", level: 80 },
        { name: "NodeJS", level: 85 },
        { name: "LAMP/MERN", level: 85 }
      ]
    },
    {
      category: "Tools",
      icon: <Terminal size={24} className="text-accent" />,
      items: [
        { name: "Kubernetes", level: 75 },
        { name: "Docker", level: 80 },
        { name: "GIT", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "SQLite", level: 85 }
      ]
    },
    {
      category: "Platforms",
      icon: <Rocket size={24} className="text-primary" />,
      items: [
        { name: "Linux", level: 90 },
        { name: "Web", level: 95 },
        { name: "Windows", level: 85 },
        { name: "Arduino", level: 70 },
        { name: "AWS", level: 80 },
        { name: "GCP", level: 75 },
        { name: "IBM Cloud", level: 70 }
      ]
    },
    {
      category: "Soft Skills",
      icon: <Star size={24} className="text-secondary" />,
      items: [
        { name: "Leadership", level: 90 },
        { name: "Event Management", level: 85 },
        { name: "Writing", level: 80 },
        { name: "Public Speaking", level: 85 },
        { name: "Time Management", level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                const targetWidth = (bar as HTMLElement).getAttribute('data-width');
                if (targetWidth) {
                  (bar as HTMLElement).style.width = targetWidth;
                }
              }, index * 100); // Stagger animation
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto" ref={skillsRef}>
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory, idx) => (
            <div 
              key={idx} 
              className="bg-card/70 p-6 rounded-lg border border-muted backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.2}s`, animation: 'float 6s ease-in-out infinite' }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 mono">
                {skillCategory.icon}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {skillCategory.category}
                </span>
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium mono text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={`${skill.level}%`} 
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
