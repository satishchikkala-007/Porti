import React, { useEffect, useRef } from 'react';
import { aboutInfo } from '../data/mockData';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl"></div>
              <img
                src={aboutInfo.image}
                alt="Profile"
                className="relative rounded-2xl w-full max-w-md shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {aboutInfo.description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {aboutInfo.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-colors"
                >
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
