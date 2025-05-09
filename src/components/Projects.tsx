
import React from 'react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  date: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Hand Gesture Detection ML System",
      description: "Research oriented, open source, Gesture detection neural model using multipipe & Hidden Markov Process.",
      technologies: ["Python", "NodeJS", "PyTorch", "TensorFlow", "Matplotlib", "NLP", "Numpy", "Keras"],
      status: "Work in progress",
      date: "Current"
    },
    {
      title: "Student Database Management System",
      description: "Developed a system to manage student records, including registration, attendance, grade book, assessment tracking, and more.",
      technologies: ["MySQL", "PHP", "HTML", "CSS", "JavaScript"],
      status: "Completed",
      date: "June '23"
    },
    {
      title: "Online Auction Website",
      description: "Developed a dynamic online auction platform where users can create, bid on, and manage auctions in real-time. Implemented user authentication, listing systems, and item listings.",
      technologies: ["Django", "MySQL", "HTML", "CSS", "JavaScript"],
      status: "Completed",
      date: "April '23"
    },
    {
      title: "AI Chatbot for Customer Support",
      description: "Developed an AI-driven chatbot to automate customer support interactions, providing instant responses to common queries and directing complex issues to human agents.",
      technologies: ["Python", "Django", "NLP", "JavaScript", "MySQL"],
      status: "Completed",
      date: "July '23"
    },
    {
      title: "Smart Contract for StackNet Ecosystem",
      description: "Developed smart contracts for managing decentralized applications (dApps) on the StackNet blockchain. Streamlined processes such as token transfers, user authentication, and contract upgrades.",
      technologies: ["Solidity", "JavaScript", "MySQL", "Web3"],
      status: "Completed",
      date: "Sep '24"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium">Status:</span>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      project.status === "Work in progress" 
                        ? "bg-yellow-100 text-yellow-800" 
                        : "bg-green-100 text-green-800"
                    )}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Date:</span>
                    <span className="text-xs text-gray-600">{project.date}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
