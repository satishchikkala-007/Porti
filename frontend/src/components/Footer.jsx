import React from 'react';
import { Heart } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { socialLinks, personalInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              BS<span className="text-green-500">V</span>
            </h3>
            <p className="text-gray-400 text-sm">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = LucideIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-3 rounded-lg text-gray-400 hover:text-green-500 hover:bg-gray-800 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" fill="currentColor" /> by {personalInfo.name}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
