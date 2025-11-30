import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/mockData';
import { Badge } from './ui/badge';

const PortfolioSection = () => {
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
    <section id="portfolio" className="py-20 bg-gray-950" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Works</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Showcasing my latest design projects and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-opacity-50 transition-all transform hover:scale-105 hover:shadow-2xl"
              style={{
                borderColor: project.color,
                boxShadow: `0 0 20px ${project.color}20`
              }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="text-xs"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}`
                    }}
                  >
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-4 text-white hover:text-green-500 transition-colors flex items-center gap-2"
                  style={{ color: project.color }}
                >
                  <span className="font-semibold">View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
