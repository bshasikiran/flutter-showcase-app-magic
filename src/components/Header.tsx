
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm border-b">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Betala Shasi Kiran</a>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-gray-600 font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <nav 
        className={cn(
          "fixed inset-y-0 right-0 transform bg-white w-64 p-10 pl-10 text-gray-600 shadow-lg transition duration-300 ease-in-out z-50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-6 mt-12">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
