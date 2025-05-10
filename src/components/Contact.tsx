
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Simulate network delay
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: `Thanks for reaching out to bshasikiran@gmail.com. I'll get back to you soon.`,
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="section bg-background/60 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-12 relative z-10 text-3xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contact Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 opacity-75 blur-sm filter group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-lg shadow-primary/5">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out for collaborations, opportunities, or just to say hi! All messages will be sent directly to my inbox.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <a href="mailto:bshasikiran@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                    bshasikiran@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="text-primary" size={24} />
                  </div>
                  <a 
                    href="https://github.com/bshasikiran" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    github.com/bshasikiran
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/betala-shasi-kiran-4aa943252" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/betala-shasi-kiran-4aa943252
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 opacity-75 blur-sm filter group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-lg shadow-primary/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-primary mb-4">Message will be sent to bshasikiran@gmail.com</p>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background/60 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background/60 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-background/60 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-300"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:opacity-90 transition-all relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:400%] animate-gradient group-hover:animate-gradient-fast"></span>
                  <span className="relative">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
