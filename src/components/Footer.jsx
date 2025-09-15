import React from 'react';
import { Github, Linkedin, Twitter, Mail, Bot } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    technology: [
      'Machine Learning',
      'React.js',
      'Real-time Analytics',
      'Cloud Computing'
    ],
    socialLinks: [
      { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
      { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
      { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
      { icon: <Mail className="h-5 w-5" />, href: '#', label: 'Email' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                AI Allocation Engine
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-primary-400 font-semibold">Smart Innovation Hackathon 2024</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Revolutionizing resource allocation with artificial intelligence and cutting-edge technology.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technology Stack */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Technology</h4>
            <ul className="space-y-3">
              {footerLinks.technology.map((tech, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-3">
              {footerLinks.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Built with</p>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">❤️</span>
                <span className="text-gray-400 text-sm">for SIH 2024</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} AI Allocation Engine - SIH Team. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Powered by React, Tailwind CSS & AI Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;