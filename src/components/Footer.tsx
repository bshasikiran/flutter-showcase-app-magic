
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Betala Shasi Kiran</h3>
            <p className="text-gray-400">B.Tech Computer Science Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/betala-shasi-kiran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/bshasikiran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:bshasikiran@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">© {currentYear} Betala Shasi Kiran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
