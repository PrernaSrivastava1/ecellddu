import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'Get Involved', href: '#get-involved' },
  ];

  const resources = [
    { name: 'Partnership', href: '#partnership' },
    { name: 'Mentorship', href: '#mentorship' },
    { name: 'Startup Resources', href: '#resources' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/public/WhatsApp Image 2025-07-28 at 00.05.00_8918d151.jpg" 
                alt="E-Cell DDU Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">E-Cell DDU</h3>
                <p className="text-yellow-400">Entrepreneurship Cell</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Igniting the entrepreneurial spirit at DDU Gorakhpur. We're building a community of innovators, 
              leaders, and change-makers who will shape the future of business and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-yellow-400" />
              <span className="text-gray-300">abhijeet.gupta@theelitess.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-yellow-400" />
              <span className="text-gray-300">+91 8887838118</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-yellow-400" />
              <span className="text-gray-300">DDU Gorakhpur University</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 E-Cell DDU. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by E-Cell DDU Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;