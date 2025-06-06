
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Terminal, Code, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-background to-muted/30 relative">
      {/* Anime-style decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNTAgNTBsMzAgNTJIMjB6IiBzdHJva2U9IndoaXRlIiBmaWxsPSJub25lIi8+PC9zdmc+')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 float glowing-border relative">
              {/* Anime-style avatar frame */}
              <div className="absolute inset-0 border-[6px] border-transparent rounded-full animate-pulse z-10 pointer-events-none"></div>
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
            <p className="text-gray-300 mb-6 relative">
              <span className="relative z-10">Computer Science student from CMR Technical Campus with a passion for software development, 
              machine learning, and web technologies. Experienced in full-stack development and AI applications.</span>
              <Heart size={16} className="absolute -right-2 -top-2 text-primary animate-pulse" />
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
                href="https://www.linkedin.com/in/betala-shasi-kiran-4aa943252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-600/20 group"
              >
                <span className="inline-flex items-center">
                  <Star size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> 
                  LinkedIn
                </span>
              </a>
              <a 
                href="https://github.com/bshasikiran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-md hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gray-900/20 group"
              >
                <span className="inline-flex items-center">
                  <Star size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> 
                  GitHub
                </span>
              </a>
              <a 
                href="https://portfolio-max-6kqq.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-primary/80 to-primary text-white rounded-md hover:from-primary/70 hover:to-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/20 group"
              >
                <span className="inline-flex items-center">
                  <Star size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> 
                  Portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
