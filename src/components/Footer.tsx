
import React from 'react';
import { Star, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-8 relative overflow-hidden">
      {/* Anime-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Star size={18} className="text-primary animate-pulse" /> 
              Betala Shasi Kiran
            </h3>
            <p className="text-gray-400 mono">B.Tech Computer Science Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/betala-shasi-kiran-4aa943252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors relative group"
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                LinkedIn
              </span>
            </a>
            <a 
              href="https://github.com/bshasikiran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors relative group"
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                GitHub
              </span>
            </a>
            <a 
              href="mailto:bshasikiran@gmail.com" 
              className="text-gray-400 hover:text-primary transition-colors relative group"
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                Email
              </span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Heart size={14} className="text-red-500 animate-pulse" /> 
            © {currentYear} Betala Shasi Kiran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
