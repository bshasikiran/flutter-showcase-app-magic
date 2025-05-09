
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Code, Terminal } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about', icon: <Code size={16} /> },
    { name: 'Skills', href: '#skills', icon: <Terminal size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Code size={16} /> },
    { name: 'Experience', href: '#experience', icon: <Terminal size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Code size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-lg shadow-primary/10" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mono">
            <span className="text-primary">&lt;</span>
            Betala Shasi Kiran
            <span className="text-primary">/&gt;</span>
          </span>
        </a>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-gray-300 font-medium hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <nav 
        className={cn(
          "fixed inset-y-0 right-0 transform bg-background/95 backdrop-blur-lg w-64 p-10 pl-10 text-gray-200 shadow-lg shadow-primary/20 transition duration-300 ease-in-out z-50 border-l border-muted",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button className="absolute top-5 right-5 text-primary" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-6 mt-12">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
