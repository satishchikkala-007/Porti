import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from './ui/button';
import { personalInfo, socialLinks } from '../data/mockData';
import * as LucideIcons from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 font-light">
              {personalInfo.role}
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="portfolio" smooth={true} duration={500} offset={-80}>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg transition-all transform hover:scale-105"
              >
                View My Work
              </Button>
            </Link>
            <a href={personalInfo.resumeUrl} download>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg transition-all"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            {socialLinks.map((social) => {
              const Icon = LucideIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <Link to="about" smooth={true} duration={500} offset={-80}>
            <div className="pt-16 cursor-pointer animate-bounce">
              <ArrowDown className="mx-auto text-gray-400" size={32} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
