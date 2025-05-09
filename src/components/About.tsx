
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Terminal, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 float glowing-border">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/d8d1500c-4646-493c-9436-2010c3f5fcdc.png" 
                  alt="Betala Shasi Kiran" 
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl">BSK</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="code-block mb-6">
              <span className="code-comment">// Introduction.js</span>
              <h1 className="text-4xl font-bold mb-3 mono">
                <span className="code-keyword">const</span> <span className="code-function">developer</span> = <span className="code-string">"Betala Shasi Kiran"</span>;
              </h1>
              <p className="text-xl text-secondary mb-4 mono typing">
                <span className="code-keyword">export default</span> <span className="code-string">"B.Tech Computer Science Student"</span>;
              </p>
            </div>
            <p className="text-gray-300 mb-6">
              Computer Science student from CMR Technical Campus with a passion for software development, 
              machine learning, and web technologies. Experienced in full-stack development and AI applications.
            </p>
            
            <div className="bg-muted/40 p-6 rounded-lg border border-muted mb-6 backdrop-blur-sm hover:bg-muted/60 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Terminal size={20} className="text-primary" />
                Education
              </h3>
              <div className="mb-2">
                <p className="font-medium">CMR Technical Campus</p>
                <p className="text-gray-300">B.Tech Computer Science (AI-ML), GPA: 8.20</p>
                <p className="text-gray-400 text-sm">Nov 2022 - March 2026</p>
              </div>
              <p className="text-gray-400 text-sm mono">
                <span className="text-primary">&gt;</span> Courses: Operating Systems, Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Networks, Databases
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/in/betala-shasi-kiran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-600/20"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/bshasikiran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-md hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gray-900/20"
              >
                GitHub
              </a>
              <a 
                href="https://joi-eight-alpha.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-primary/80 to-primary text-white rounded-md hover:from-primary/70 hover:to-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/20"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
