import { portfolioData } from '@/lib/portfolio-data';
import { Check } from 'lucide-react';

export const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl">
        {/* Section Header */}
        <div className="section-heading fade-in-up">
          <span className="section-number">01.</span>
          <h2 className="text-heading-md">About Me</h2>
          <div className="section-line" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* About Text */}
          <div className="lg:col-span-2 space-y-6">
            {about.description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-body fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Technologies */}
          <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-heading-sm mb-6">Technologies I work with:</h3>
            <div className="grid grid-cols-2 gap-3">
              {about.technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="flex items-center space-x-3 group"
                  style={{ animationDelay: `${0.1 * (index + 6)}s` }}
                >
                  <Check 
                    size={16} 
                    className="text-primary group-hover:text-primary-glow transition-colors duration-300" 
                  />
                  <span className="text-body-sm font-medium group-hover:text-primary transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};