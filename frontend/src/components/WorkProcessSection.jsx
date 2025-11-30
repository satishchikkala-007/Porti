import React, { useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { workProcess } from '../data/mockData';

const WorkProcessSection = () => {
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
    <section id="process" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work Process</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My systematic approach to creating exceptional user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((process, index) => {
            const Icon = LucideIcons[process.icon];
            return (
              <div
                key={index}
                className="relative bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
              >
                <div className="absolute -top-6 left-8 bg-green-500 text-black font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                  {process.step}
                </div>
                <div className="mt-6">
                  <div className="bg-green-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
