
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300">
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
            <h1 className="text-4xl font-bold mb-3">Betala Shasi Kiran</h1>
            <p className="text-xl text-gray-600 mb-4">B.Tech Computer Science Student</p>
            <p className="text-gray-600 mb-6">
              Computer Science student from CMR Technical Campus with a passion for software development, 
              machine learning, and web technologies. Experienced in full-stack development and AI applications.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border mb-6">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <div className="mb-2">
                <p className="font-medium">CMR Technical Campus</p>
                <p className="text-gray-600">B.Tech Computer Science (AI-ML), GPA: 8.20</p>
                <p className="text-gray-500 text-sm">Nov 2022 - March 2026</p>
              </div>
              <p className="text-gray-600 text-sm">
                Courses: Operating Systems, Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Networks, Databases
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/in/betala-shasi-kiran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/bshasikiran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://joi-eight-alpha.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
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
