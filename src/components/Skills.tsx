
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  category: string;
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
            progressBars.forEach((bar) => {
              const targetWidth = (bar as HTMLElement).getAttribute('data-width');
              if (targetWidth) {
                (bar as HTMLElement).style.width = targetWidth;
              }
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
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto" ref={skillsRef}>
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
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
